# 🌿 Minimalist Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A premium, highly-responsive, and modern portfolio template designed for developers and creatives. Built with a focus on speed, accessibility, and a clean "emerald" aesthetic.

## ✨ Key Features

- **🚀 Performance First**: Built on Next.js 15 for lightning-fast page loads and SEO optimization.
- **🎨 Modern Aesthetic**: Clean, professional design using a curated Emerald-themed color palette.
- **📱 Fully Responsive**: Optimized for all screen sizes, from mobile phones to large desktop monitors.
- **🛠️ Interactive Project Showcase**:
  - Grid-based project overview.
  - Interactive Modal for deep dives into project details.
  - **Keyboard Friendly**: Integrated arrow-key navigation for the project dashboard and image carousels.
- **📄 Resume Integration**: Easy download/view button for professional resumes.
- **📍 Smooth Navigation**: One-page layout with smooth scrolling and a blurred-backdrop sticky header.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Optimization**: [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for performance-oriented typography.

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd dan_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Customization Guide

This template is designed to be easily customized without digging deep into the codebase. All primary configuration happens in `app/page.tsx`.

### 1. Personal Information
Locate the `ABOUT_ME` constant at the top of `app/page.tsx`:
- Change your name, title, and "About Me" description.
- To update your profile picture:
  - Add your image to the `public/` directory.
  - Update `PROFILE_IMAGE_PATH` (e.g., `const PROFILE_IMAGE_PATH = '/your-photo.jpg';`).

### 2. Project Portfolio
Update the `PROJECTS` array to showcase your work:
- Add IDs, titles, descriptions, and detailed descriptions.
- List technologies used for each project.
- List image paths (the first image is used as the grid thumbnail).

### 3. Contact Details
Update the `CONTACTS` object:
- Enter your email, phone number, and LinkedIn URL.

### 4. Resume
- Place your resume PDF in the `public/` folder.
- Update the `RESUME_URL` constant inside the `Home` component.

## 📦 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new):

1. Push your code to a GitHub repository.
2. Connect your repo to Vercel.
3. It will automatically detect Next.js and deploy your site.

---

Built with ❤️ by **Heng Sheng Yao Dan** using the Antigravity assistant.
