# Portfolio Website

A simple and clean portfolio website built with Next.js and Tailwind CSS.

## Features

- **About Me** section with personal introduction
- **Programming Languages** showcase
- **Software Tools** experience (MongoDB, MySQL, etc.)
- **Circle Profile Image**
- **Projects Dashboard** with arrow key navigation
- **Contact Information** (Email, Phone, LinkedIn)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

All customization is done in `app/page.tsx`. Look for the **CONFIGURATION SECTION** at the top of the file to update:

1. **Profile Image**: 
   - Place your image in the `public` folder
   - Update `PROFILE_IMAGE_PATH` variable (e.g., `/profile.jpg`)

2. **About Me**: Update `ABOUT_ME` object with your name, title, and description

3. **Programming Languages**: Modify the `PROGRAMMING_LANGUAGES` array

4. **Software Tools**: Modify the `SOFTWARE_TOOLS` array

5. **Projects**: Update the `SCHOOL_PROJECTS` array with your projects

6. **Contacts**: Update the `CONTACTS` object with your email, phone, and LinkedIn URL

All important sections are clearly commented in the code for easy updates.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
