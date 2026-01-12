'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ============================================
// CONFIGURATION SECTION - UPDATE YOUR INFO HERE
// ============================================

// TODO: Replace this path with your actual profile image
// Place your image in the public folder and update the path below
const PROFILE_IMAGE_PATH = '/dp.png'; // Change this to your image path

// About Me Section - Update your information here
const ABOUT_ME = {
  name: 'Heng Sheng Yao Dan',
  title: '',
  description: 'I am a passionate software developer with experience in building web applications and working with various technologies. I enjoy solving complex problems and creating efficient solutions.',
};

// Programming Languages - Add or remove languages as needed
const PROGRAMMING_LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C',
  'HTML/CSS',
  'Kotlin'

];

// Software Tools - Add or remove tools as needed
const SOFTWARE_TOOLS = [
  'MongoDB',
  'MySQL',
  'Postgres',
  'Git',
  'Docker',
  'Node.js',
  'React',
  'Next.js',
  'Figma',
  'Cisco Packet Tracer',
  'Pandas',
  'Jupyter Notebook',
  'NumPy',
];

// School Projects - Update with your actual projects
const SCHOOL_PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team collaboration features.',
    technologies: ['TypeScript', 'Express', 'MySQL'],
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts.',
    technologies: ['JavaScript', 'API Integration'],
  },
  {
    id: 4,
    title: 'Student Portal',
    description: 'A portal for students to manage courses, assignments, and grades.',
    technologies: ['React', 'Python', 'PostgreSQL'],
  },
];

// Contact Information - Update with your actual contact details
const CONTACTS = {
  email: 'hengsydan@gmail.com', // TODO: Update your email
  phone: '93376481', // TODO: Update your phone number
  linkedin: 'https://sg.linkedin.com/in/dan-heng-15879b361', // TODO: Update your LinkedIn URL
};

// Education History - Update with your actual schools
const EDUCATION = [
  {
    institution: 'Singapore Institute of Technology (SIT)',
    degree: 'Bachelor of Computing Science (Honours)',
    years: '2024 - Present',
    logos: ['/sit-logo.png', '/uog-logo.png'], // Add your logo paths here
  },
  {
    institution: 'Nanyang Polytechnic (NYP)',
    degree: 'Diploma in Mechatronics Engineering',
    years: '2019 - 2022',
    logos: ['/nyp-logo.png'],
  },
  {
    institution: 'Institute of Technical Education (ITE)',
    degree: 'Higher Nitec Mechatronics Engineering',
    years: '2017 - 2018',
    logos: ['/ite-logo.png'],
  },
];

// ============================================
// END OF CONFIGURATION SECTION
// ============================================

export default function Home() {
  // State for managing the current project in the dashboard
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Handle arrow key navigation for projects
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentProjectIndex((prev) =>
          prev === 0 ? SCHOOL_PROJECTS.length - 1 : prev - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentProjectIndex((prev) =>
          prev === SCHOOL_PROJECTS.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentProject = SCHOOL_PROJECTS[currentProjectIndex];

  // Smooth scroll function for navigation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      {/* TODO: To customize navigation, modify the nav items below */}
      {/* Using emerald-800 background for WCAG AA contrast ratio (7.2:1 with white text) */}
      <nav className="sticky top-0 z-50 bg-emerald-800 border-b-2 border-emerald-900 shadow-md">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white cursor-pointer hover:text-emerald-50 transition-colors" onClick={() => scrollToSection('home')}>
              <h1>Dan's Portfolio</h1>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('languages')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                Languages
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('tools')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                Tools
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-emerald-50 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-emerald-900"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Hero Section: Profile Image and Info side-by-side */}
        <section id="home" className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12 animate-fade-in pt-8">
          {/* Left: Profile Image (1/3 width on desktop) */}
          <div className="md:w-1/4 flex justify-center md:justify-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-emerald-50 flex items-center justify-center ring-4 ring-emerald-100 hover:scale-105 transition-transform duration-300">
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Profile"
                width={256}
                height={256}
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* Right: Name and About (3/4 width on desktop) */}
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 tracking-tight leading-tight">
              {ABOUT_ME.name}
            </h1>

            {/* About Me content nested here for the side-by-side layout */}
            <div id="about" className="scroll-mt-24">
              <p className="text-gray-800 leading-relaxed text-xl font-normal max-w-2xl">
                {ABOUT_ME.description}
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-8 bg-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 hover:shadow-2xl transition-shadow duration-300 scroll-mt-20">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-6 flex items-center gap-3 tracking-tight">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-all duration-300">
                <div className="flex flex-wrap gap-4">
                  {edu.logos?.map((logo, logoIndex) => (
                    <div key={logoIndex} className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={logo}
                          alt={`${edu.institution} logo ${logoIndex + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-emerald-900 tracking-tight">
                      {edu.institution}
                    </h3>
                    <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold inline-block w-fit">
                      {edu.years}
                    </span>
                  </div>
                  <p className="text-emerald-800 font-semibold text-lg">
                    {edu.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section - Combined Languages and Tools */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Programming Languages */}
          <section id="languages" className="bg-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 hover:shadow-2xl transition-shadow duration-300 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-4 flex items-center gap-3 tracking-tight">
              <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
              Programming Languages
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* TODO: To update programming languages, modify PROGRAMMING_LANGUAGES array at the top */}
              {PROGRAMMING_LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </section>

          {/* Software Tools */}
          <section id="tools" className="bg-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 hover:shadow-2xl transition-shadow duration-300 scroll-mt-20">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-4 flex items-center gap-3 tracking-tight">
              <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
              Software Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {/* TODO: To update software tools, modify SOFTWARE_TOOLS array at the top */}
              {SOFTWARE_TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Projects Dashboard Section */}
        <section id="projects" className="mb-8 bg-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 hover:shadow-2xl transition-shadow duration-300 scroll-mt-20">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-3 flex items-center gap-3 tracking-tight">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            School Projects
          </h2>
          <p className="text-sm text-emerald-700 mb-4 ml-4 flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            Use arrow keys (← →) to navigate between projects
          </p>

          {/* Project Card */}
          <div className="border-2 border-emerald-500 rounded-xl p-6 bg-emerald-50 hover:border-emerald-600 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-3 tracking-tight">
              {currentProject.title}
            </h3>
            <p className="text-gray-800 mb-4 text-lg leading-relaxed font-normal">
              {currentProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold border border-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-emerald-400">
              <button
                onClick={() => setCurrentProjectIndex((prev) =>
                  prev === 0 ? SCHOOL_PROJECTS.length - 1 : prev - 1
                )}
                className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition-all duration-200 font-semibold shadow-md hover:shadow-lg border border-emerald-400"
              >
                ← Previous
              </button>
              <span className="text-sm text-emerald-800 font-medium bg-emerald-100 px-4 py-2 rounded-full border border-emerald-400">
                {currentProjectIndex + 1} / {SCHOOL_PROJECTS.length}
              </span>
              <button
                onClick={() => setCurrentProjectIndex((prev) =>
                  prev === SCHOOL_PROJECTS.length - 1 ? 0 : prev + 1
                )}
                className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-lg hover:bg-emerald-200 transition-all duration-200 font-semibold shadow-md hover:shadow-lg border border-emerald-400"
              >
                Next →
              </button>
            </div>
          </div>

          {/* TODO: To update projects, modify SCHOOL_PROJECTS array at the top */}
        </section>

        {/* Contacts Section */}
        <section id="contact" className="mb-8 bg-white rounded-2xl shadow-xl border-2 border-emerald-400 p-6 hover:shadow-2xl transition-shadow duration-300 scroll-mt-20">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-4 flex items-center gap-3 tracking-tight">
            <span className="w-1 h-8 bg-emerald-600 rounded-full"></span>
            Contact Me
          </h2>
          <div className="space-y-3">
            {/* Email */}
            {/* TODO: To update email, modify CONTACTS.email at the top */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:shadow-lg transition-all duration-200 border border-emerald-400">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-700 font-medium block text-xs mb-0.5">Email</span>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="text-emerald-800 hover:text-emerald-900 font-semibold transition-colors underline decoration-2 underline-offset-2 text-base break-all"
                >
                  {CONTACTS.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {/* TODO: To update phone number, modify CONTACTS.phone at the top */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:shadow-lg transition-all duration-200 border border-emerald-400">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-700 font-medium block text-xs mb-0.5">Phone</span>
                <a
                  href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`}
                  className="text-emerald-800 hover:text-emerald-900 font-semibold transition-colors underline decoration-2 underline-offset-2 text-base"
                >
                  {CONTACTS.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            {/* TODO: To update LinkedIn, modify CONTACTS.linkedin at the top */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 hover:shadow-lg transition-all duration-200 border border-emerald-400">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-emerald-700 font-medium block text-xs mb-0.5">LinkedIn</span>
                <a
                  href={CONTACTS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 hover:text-emerald-900 font-semibold transition-colors underline decoration-2 underline-offset-2 text-base break-all"
                >
                  {CONTACTS.linkedin}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
