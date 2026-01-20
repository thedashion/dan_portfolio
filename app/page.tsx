'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// CONFIGURATION SECTION - UPDATE YOUR INFO HERE
// ============================================

// TODO: Update your profile picture by placing it in the 'public' folder 
// and updating the filename below (e.g., '/my-photo.png')
const PROFILE_IMAGE_PATH = '/dp.png';

// About Me Section - Update your information here
const ABOUT_ME = {
  name: 'Heng Sheng Yao Dan',
  title: '',
  description: 'Computer Science undergraduate exploring software development to solve real-world problems. Willing to learn and adaptable to new technologies',
};

// Programming Languages - Add or remove languages as needed


// School Projects - Update with your actual projects
// Projects Catalogue
const PROJECTS = [
  {
    id: 1,
    title: 'Flight Map Routing Web App',
    description: 'Web app that helps user plan their flight routes and rank them based on distance, connections, and cost.',
    detailedDescription: 'Flight route planning web application that models airports as linked-list graph nodes and computes optimal routes using Dijkstra’s algorithm. Routes are ranked and compared based on total distance, number of layovers, and overall cost to help users select the most efficient option.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
    /* 
      HOW TO ADD IMAGES:
      1. Place your project images in the 'public' folder of this project.
      2. Update the array below with the filename (e.g., '/my-project.png').
      3. The first image in the array will be used as the card's thumbnail.
    */
    images: ['/p1/project1-thumb.jpg', '/p1/project1-detail1.jpg', '/p1/project1-detail2.jpg'],
  },
  {
    id: 2,
    title: 'Smart Waste Management System',
    description: 'A smart waste management system to improve waste collection efficiency and enhance urban hygiene practices.',
    detailedDescription: 'Raspberry Pi–based smart waste management system using various sensors for contactless bin opening, liquid detection, and temperature/humidity monitoring, with LED overflow alerts and MQTT communication to stream real-time bin data to a dashboard.',
    technologies: ['TypeScript', 'Express', 'MySQL', 'Socket.io'],
    images: ['/p2/project2-thumb.jpg', '/p2/project2-detail1.jpg', '/p2/project2-detail2.jpg'], // TODO: Add your image paths here
  },
  {
    id: 3,
    title: 'Community Animal Reporting Web App',
    description: 'Community platform for reporting animal-related incidents and sharing updates through dedicated discussion forums for each neighborhood animal.',
    detailedDescription: 'Community Animal Care & Reporting web application that enables users to quickly report animal-related incidents and share updates about neighborhood animals through dedicated discussion forums. Implemented the system using a containerized microservices architecture to improve scalability and maintainability.',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML5/CSS3'],
    images: ['/p3/project3-thumb.jpg', '/p3/project3-detail1.jpg', '/p3/project3-detail2.jpg', '/p3/project3-detail3.jpg'], // TODO: Add your image paths here
  },
  {
    id: 4,
    title: 'Game Market Insight platform',
    description: 'A web application that provides insights into the game market.',
    detailedDescription: 'Centralized video game analytics platform with a dashboard for comparing sales trends across platforms and regions. Designed the system to handle both structured and unstructured data to support analytics.',
    technologies: ['React', 'Python', 'PostgreSQL', 'Django'],
    images: ['/p4/project4-thumb.jpg', '/p4/project4-detail1.jpg', '/p4/project4-detail2.jpg', '/p4/project4-detail3.jpg', '/p4/project4-detail4.jpg', '/p4/project4-detail5.jpg', '/p4/project4-detail6.jpg'], // TODO: Add your image paths here
  },
];


// Contact Information - Update with your actual contact details
const CONTACTS = {
  email: 'hengsydan@gmail.com', // TODO: Update your email
  phone: '93376481', // TODO: Update your phone number
  linkedin: 'https://www.linkedin.com/in/heng-sheng-yao-dan', // TODO: Update your LinkedIn URL
};

// ============================================
// END OF CONFIGURATION SECTION
// ============================================

export default function Home() {
  // State for managing the current project in the dashboard
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Resume URL - Place your resume.pdf in the public folder to use this link
  const RESUME_URL = '/resume.pdf';

  // Handle arrow key navigation for projects
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) {
        if (e.key === 'ArrowLeft') {
          setCurrentProjectIndex((prev) =>
            prev === 0 ? PROJECTS.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentProjectIndex((prev) =>
            prev === PROJECTS.length - 1 ? 0 : prev + 1
          );
        }
      } else {
        // Modal navigation
        const images = PROJECTS[currentProjectIndex].images || [];
        if (images.length === 0) return;

        if (e.key === 'ArrowLeft') {
          setCurrentImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          );
        } else if (e.key === 'ArrowRight') {
          setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          );
        } else if (e.key === 'Escape') {
          setIsModalOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, currentProjectIndex]);

  const currentProject = PROJECTS[currentProjectIndex];

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  // Smooth scroll function for navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Refined Navigation Bar */}
      <header className="sticky top-0 z-50 bg-emerald-900/95 backdrop-blur-md border-b border-emerald-800/50 shadow-lg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:h-16 gap-3 sm:gap-0">
            <h1
              className="text-lg sm:text-xl font-medium text-white tracking-tight cursor-pointer hover:text-emerald-200 transition-colors whitespace-nowrap"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {ABOUT_ME.name}
            </h1>

            <nav className="flex items-center justify-between w-full sm:w-auto px-4 sm:px-0 gap-4 sm:gap-6 md:gap-10">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm sm:text-base font-bold text-emerald-50 hover:text-white hover:bg-white/10 px-2 sm:px-4 py-2 rounded-lg transition-all"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-sm sm:text-base font-bold text-emerald-50 hover:text-white hover:bg-white/10 px-2 sm:px-4 py-2 rounded-lg transition-all"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm sm:text-base font-bold text-emerald-50 hover:text-white hover:bg-white/10 px-2 sm:px-4 py-2 rounded-lg transition-all"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-6xl">
        {/* Hero Section: Info and Profile Image side-by-side */}
        <section id="home" className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 animate-fade-in pt-4 sm:pt-8">
          {/* Left: Name and About (2/3 width on desktop) */}
          <div className="w-full md:w-2/3 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-6 tracking-tight leading-tight">
              Welcome to my portfolio
            </h2>

            <div id="about" className="scroll-mt-24">
              <p className="text-gray-700 leading-relaxed text-lg sm:text-xl font-normal max-w-2xl mb-8 mx-auto md:mx-0">
                {ABOUT_ME.description}
              </p>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 text-white hover:bg-emerald-800 font-bold transition-all px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>View Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Profile Image (1/3 width on desktop) */}
          <div className="md:w-1/3 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-emerald-50 flex items-center justify-center ring-4 ring-emerald-100 hover:scale-105 transition-transform duration-300">
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Profile"
                width={288}
                height={288}
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </section>



        {/* Projects Grid Section */}
        <section id="projects" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center gap-3 tracking-tight">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                onClick={() => {
                  setCurrentProjectIndex(index);
                  setIsModalOpen(true);
                }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all cursor-pointer flex flex-col gap-3 group border-l-4 border-l-transparent hover:border-l-emerald-500"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-md border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400 self-center">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project Details Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in" onClick={closeModal}>
              <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col relative animate-scale-in" onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-emerald-900 hover:bg-white hover:text-emerald-600 transition-all shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Modal Content - Vertical Layout for better Image viewing */}
                <div className="flex flex-col">

                  {/* Top: Details Section */}
                  <div className="w-full p-6 sm:p-10 md:p-12 bg-white border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                      {/* Title & Description */}
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                          <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 leading-tight">
                            {currentProject.title}
                          </h3>
                        </div>

                        <div className="mt-8">
                          <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Project Overview</h4>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {currentProject.detailedDescription || currentProject.description}
                          </p>
                        </div>
                      </div>

                      {/* Stack Info */}
                      <div className="md:w-1/3 pt-2">
                        <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Stack</h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {currentProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-bold border border-emerald-100/50 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Large Image Section */}
                  <div className="w-full bg-gray-50 flex items-center justify-center relative min-h-[300px] sm:min-h-[450px] md:min-h-[600px] px-2 sm:px-16 py-2 sm:p-4">
                    {currentProject.images && currentProject.images.length > 0 ? (
                      <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px]">
                        <Image
                          src={currentProject.images[currentImageIndex]}
                          alt={`${currentProject.title} image ${currentImageIndex + 1}`}
                          fill
                          className="object-contain"
                          priority
                        />

                        {/* Desktop Image Navigation Arrows - Hidden on Mobile */}
                        {currentProject.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? currentProject.images!.length - 1 : prev - 1); }}
                              className="hidden sm:flex absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 z-10"
                            >
                              <span className="text-2xl">←</span>
                            </button>
                            <button
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === currentProject.images!.length - 1 ? 0 : prev + 1); }}
                              className="hidden sm:flex absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 z-10"
                            >
                              <span className="text-2xl">→</span>
                            </button>

                            {/* Image Counter & Mobile Controls Overlay */}
                            <div className="absolute -bottom-16 sm:-bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between sm:justify-center w-full sm:w-auto px-6 sm:px-0 gap-4">

                              {/* Left Arrow (Mobile only) */}
                              <button
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === 0 ? currentProject.images!.length - 1 : prev - 1); }}
                                className="sm:hidden w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                              >
                                <span className="text-lg">←</span>
                              </button>

                              <div className="flex flex-col items-center gap-2">
                                <div className="flex gap-2">
                                  {currentProject.images.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setCurrentImageIndex(idx)}
                                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-emerald-500 w-8' : 'bg-gray-200 w-4 hover:bg-gray-400'}`}
                                    />
                                  ))}
                                </div>
                                <p className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm border border-emerald-100 whitespace-nowrap">
                                  Image {currentImageIndex + 1} of {currentProject.images.length}
                                </p>
                              </div>

                              {/* Right Arrow (Mobile only) */}
                              <button
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => prev === currentProject.images!.length - 1 ? 0 : prev + 1); }}
                                className="sm:hidden w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform"
                              >
                                <span className="text-lg">→</span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-400 flex flex-col items-center p-20">
                        <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-medium">Coming soon</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TODO: To update projects, modify PROJECTS array at the top */}
        </section>

        {/* Contacts Section */}
        <section id="contact" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 flex items-center gap-3 tracking-tight">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            Contact Me
          </h2>
          <div className="flex flex-col gap-2 max-w-xl">
            {/* Email */}
            {/* TODO: To update email, modify CONTACTS.email at the top */}
            <div className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-600 font-bold block text-sm uppercase tracking-wider mb-0.5">Email</span>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="text-gray-800 hover:text-emerald-700 font-medium transition-colors text-lg underline underline-offset-4 decoration-emerald-500/60 hover:decoration-emerald-600"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {/* TODO: To update phone number, modify CONTACTS.phone at the top */}
            <div className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-600 font-bold block text-sm uppercase tracking-wider mb-0.5">Phone</span>
                <a
                  href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
                  className="text-gray-800 hover:text-emerald-700 font-medium transition-colors text-lg underline underline-offset-4 decoration-emerald-500/60 hover:decoration-emerald-600"
                >
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            {/* TODO: To update LinkedIn, modify CONTACTS.linkedin at the top */}
            <div className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-600 font-bold block text-sm uppercase tracking-wider mb-0.5">LinkedIn</span>
                <a
                  href={CONTACTS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-emerald-700 font-medium transition-colors text-lg break-all underline underline-offset-4 decoration-emerald-500/60 hover:decoration-emerald-600"
                >
                  {CONTACTS.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
