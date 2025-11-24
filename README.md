Gleam Digital Technologies

Gleam Digital Technologies is a modern, high performance web platform built with Next.js 14, React, and Tailwind CSS.
The website showcases professional technology services including Web Development, Mobile Apps, Data Science, Cybersecurity, and DevOps, presented through smooth animations, responsive layouts, and SEO optimized pages.

This repository contains the full source code for the official Gleam Digital Technologies website.

Features
Modern Frontend Stack

Next.js 14 (App Router)

React 18

Tailwind CSS

Lucide React Icons

Keen Slider for hero and testimonials

Fully responsive on all devices

Fully Designed Pages

Home

Services

About

Blog (with individual blog pages)

Contact (with Formspree integration)

Performance and Architecture

Optimized Next/Image usage

Clean separation of server and client components

Autoplay sliders with smooth transitions

Utility first design system using Tailwind

SEO and Social Sharing

Per page metadata

Open Graph metadata

Twitter Card metadata

Automatic title templating (Page Title | Gleam Digital Technologies)

Favicon and manifest support

Tech Stack
Technology Purpose
Next.js 14 Framework, routing, rendering
React 18 UI components
Tailwind CSS Styling and layout
Keen Slider Carousels
Lucide React Icons
Formspree Contact form
Next/Image Optimized images
JavaScript ES6 Application logic
Project Structure
/
├── app/
│ ├── layout.js
│ ├── page.js
│ ├── about/
│ ├── blog/
│ │ ├── page.js
│ │ └── [slug]/page.js
│ ├── contact/
│ └── services/
│
├── components/
│ └── ui/
│ ├── Header.js
│ ├── Footer.js
│ ├── Hero.js
│ ├── Testimonials.js
│ └── other UI components
│
├── content/
│ └── posts.js
│
├── public/
│ ├── logo.svg
│ ├── favicon.ico
│ ├── site.webmanifest
│ └── og-image.png
│
├── styles/
│ └── globals.css
│
└── next.config.js

Installation and Setup

1. Clone the repository
   git clone https://github.com/yourusername/gleam-digital-technologies.git
   cd gleam-digital-technologies

2. Install dependencies
   npm install

3. Run development server
   npm run dev

Access the site at:

http://localhost:3000

4. Build for production
   npm run build
   npm start

Environment Variables

Create a .env file in the project root:

FORMSPREE_ID=your_form_id

Then update the Contact page fetch request to use it:

fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, ...)

SEO and Metadata

This project includes:

Global metadata in app/layout.js

Per page metadata in each route file

Open Graph and Twitter metadata

Automatic title templates

Default fallback OG image

This ensures every page is optimized for search engines and social share previews.

Responsive UI

The entire interface is built with a mobile first approach and adapts smoothly across:

Mobile phones

Tablets

Laptops and desktops

Ultra wide screens

Sliders automatically adjust items per view based on screen width.

Media Optimization

Local assets use the Next/Image component

Remote images (slider, testimonials) use img tags because they come from external sources

SVG logo ensures pixel perfect rendering at any size

Roadmap

Possible future enhancements:

CMS powered blog (Sanity or Contentful)

Light and dark themes

Analytics integration

Backend for contact form

Admin panel for managing content

If needed, these can be scaffolded easily.

License

This project is private and owned by Gleam Digital Technologies.
Do not distribute or modify without permission.

Contact

For inquiries or collaborations:

Email: hello@digitaltechnologies.dev

Website: https://your-domain.com
