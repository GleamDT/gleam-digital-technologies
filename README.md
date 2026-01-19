Gleam Digital Technologies

# Technical Documentation

## Project Overview

This repository contains the source code for the **Gleam Digital Technologies** website. The project is a production-ready web application built using **Next.js**, **React**, and **Tailwind CSS**, designed to serve as a modern, responsive marketing and informational website for the client.

The website showcases professional technology services including Web Development, Mobile Apps, Data Science, Cybersecurity, and DevOps, presented through smooth animations, responsive layouts, and SEO optimized pages.

The application follows standard Next.js best practices and is structured to allow easy maintenance, scalability, and future feature additions.

---

## Technology Stack

- **Framework:** Next.js
- **Language:** JavaScript / TypeScript (as configured in the project)
- **Styling:** CSS / Tailwind CSS (based on project configuration)
- **Package Manager:** npm
- **Version Control:** GitHub
- **Hosting / Deployment:** Vercel
- **Email Service:** Resend
- **Domain & DNS Management:** GoDaddy

---

## Project Structure

The project uses the **Next.js App Router** and follows a modern, production-ready structure.

```
/
├── app/                     # App Router pages and layouts
├── components/              # Reusable UI components
├── lib/                     # Shared utilities and helper functions
│   └── utils.js
├── public/                  # Static assets and SEO files
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── icon-180.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── components.json          # UI/component configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # Path aliases and JS config
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lock file
├── README.md                # Project documentation
└── .gitignore               # Git ignore rules
```

This structure confirms the use of the **App Router (`app/`)**, Tailwind CSS for styling, and a component-driven architecture.

---

## Setup & Installation

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create an environment file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Available Scripts

- `npm run dev` – Runs the app in development mode
- `npm run build` – Builds the app for production
- `npm run start` – Starts the production server
- `npm run lint` – Runs linting checks (if configured)

---

## Environment Variables

Environment variables are stored in `.env.local` and should **never** be committed to version control.

Example:

```
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
```

**Descriptions:**

- `NEXT_PUBLIC_SITE_URL` – Base URL of the deployed website
- `RESEND_API_KEY` – API key used for sending emails via Resend

---

## Features & Functionality

- Responsive marketing website
- Reusable component-based UI
- SEO-friendly pages
- Contact or inquiry functionality (email-based)
- Optimized for performance and accessibility

---

## Deployment

The website is deployed using **Vercel** and connected to a custom domain managed via **GoDaddy**.

Typical deployment flow:

1. Code is pushed to the `main` branch on GitHub
2. Vercel automatically builds and deploys the project
3. Environment variables are configured in the Vercel dashboard
4. The custom domain is connected and managed through GoDaddy DNS settings

---

## Maintenance & Updates

- Keep dependencies up to date using `npm update`
- Test changes locally before deploying
- Use feature branches for new development
- Regularly review environment variables and API usage limits

---

## Known Notes / Limitations

- Content updates may require code changes unless a CMS is added
- Email functionality depends on external service availability

---

## Ownership & Access

All source code, deployments, domains, and third-party services associated with this project are intended to be fully owned by the client upon handover. Detailed instructions for account setup, ownership transfer, and access revocation are provided in a separate handover document. Separate documentation covers:

- Account setup
- Ownership transfer
- Access revocation

---

## License

**Project:** Gleam Digital Technologies Website
This project is private and owned by Gleam Digital Technologies.
Do not distribute or modify without permission.

## Developer Information

- **Developer:** Paul Nnaemeka
- **Contact:** paulnnaemeka302@gmail.com
- **Date Delivered:** 01/17/2026

Contact

## For inquiries or collaborations:

- **Contact:** paulnnaemeka302@gmail.com
