# Arshnoor Kirmani - Portfolio

![Arshnoor Kirmani - Full Stack Developer Portfolio](public/opengraph-image.png)

> **Front-End Developer & Jr. Software Engineer specializing in modern, scalable web applications.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-arshnoorkirmani.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://arshnoorkirmani.vercel.app/)
[![Next.js](https://img.shields.io/badge/Built_with-Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/Core-React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A highly optimized, professional portfolio built with Next.js App Router, React 19, and Tailwind CSS. This project leverages MDX for content management and Shadcn UI for accessible, robust components, achieving a **97+ Lighthouse Performance Score**.

## ✨ Features

- **⚡ Blazing Fast**: Next.js App Router with ISR (Incremental Static Regeneration) for instant page loads.
- **📝 MDX Powered**: Experience, Projects, and Education sections are dynamically generated from `.mdx` and `.json` files for type-safe, easy content management.
- **🎨 Modern Design**: Custom Tailwind config utilizing `oklch` color spaces, premium Outfit & Fira Code typography, and smooth Framer Motion animations.
- **🧩 Shadcn UI Integration**: Built on top of reusable, accessible Radix UI primitives.
- **📱 Responsive & Accessible**: 100% mobile responsive (including Hero typing animations) with rigorous adherence to web accessibility standards.
- **📈 SEO Optimized**: Configured with dynamic metadata, custom Open Graph (OG) images, sitemaps, and optimized Next/Image assets.

## 🛠 Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: MDX, `gray-matter`
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/arshnoorkirmani/arshnoor-portfolio.git
   cd arshnoor-portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and global layouts.
- `components/`: Reusable React components.
  - `sections/`: Major page sections (Hero, About, Experience, etc.).
  - `ui/`: Core Shadcn UI building blocks.
- `content/`: `.mdx` files and JSON data storing the portfolio content.
- `config/`: Global site configuration (`site.ts`).
- `lib/`: Utility functions, including MDX parsing logic.

## 📜 Content Management (MDX)

To update the portfolio content without touching React code, simply edit the files in the `content/` directory.

### Adding a new Project

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Name"
role: "Full Stack Developer"
date: "Jan 2026 - Present"
techStack: ["Next.js", "TypeScript", "Tailwind CSS"]
image: "https://your-image-url.com"
order: 1
---

- Built core features...
- Improved performance by X%...
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Crafted with React, Tailwind & Clean Architecture by <b>Arshnoor Kirmani</b>
</p>
