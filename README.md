<div align="center">

# Prosanto Das — Portfolio

**AI/ML Software Engineer · Cloud & Automation · Competitive Programmer**

A modern, responsive personal portfolio built with **Next.js 14**, **React 18**, and **Tailwind CSS 3**, featuring a clean timeline design that showcases my experience, projects, research, achievements, and certifications.

🔗 **Live:** [https://prosantodas.vercel.app/](https://prosantodas.vercel.app/)

</div>

---

## ✨ Features

- **Hero** — Animated network-canvas background, circular profile photo, and a focused personal tagline.
- **Skills** — A categorized toolkit grouped by languages, frameworks, AI/LLM systems, databases & cloud, and tools & platforms.
- **Experience** — Career history presented in a clean timeline layout.
- **Projects** — Selected work spanning RAG-powered AI assistants and full-stack platforms, with GitHub links and live demos.
- **Research** — Published and exploratory work at the intersection of NLP and algorithms.
- **Achievements** — Competitive programming highlights (ICPC, Codeforces, CodeChef, Math Olympiad) with a "show more" toggle.
- **Certifications** — AWS credentials with verifiable Credly badge links.
- **Contact** — Direct links to email, GitHub, and LinkedIn.
- **Responsive** — Fully mobile-optimized with a collapsible navigation menu.
- **Scroll animations** — Reveal-on-scroll transitions powered by an IntersectionObserver.

## 🛠️ Tech Stack

| Layer      | Technologies                                                        |
| ---------- | ------------------------------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router) + React 18           |
| Language   | TypeScript                                                           |
| Styling    | Tailwind CSS 3, custom design tokens, responsive layouts            |
| Animation  | Framer Motion, custom `IntersectionObserver` reveal component       |
| Icons      | react-icons (Font Awesome)                                          |
| Deployment | Vercel                                                              |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17+ (or 20+ recommended)
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/prosanto0das/My-Portfolio-.git
cd My-Portfolio-

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The dev server supports hot reloading, so changes are reflected instantly.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build
npm run start    # Serve the production build locally
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
.
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout, metadata & SEO
│   └── page.tsx           # Home page assembling all sections
├── components/
│   ├── Navbar.tsx         # Sticky navigation with active-section tracking
│   ├── Hero.tsx           # Intro, tagline, animated canvas, profile photo
│   ├── Skills.tsx         # Categorized skill toolkit (timeline)
│   ├── Experience.tsx     # Work history timeline
│   ├── Projects.tsx       # Featured projects
│   ├── Research.tsx       # Research highlights
│   ├── Recognitions.tsx   # Achievements with show-more toggle
│   ├── Certifications.tsx # AWS certifications
│   ├── Contact.tsx        # Contact links & footer
│   └── Reveal.tsx         # Reusable scroll-reveal animation
├── public/
│   └── profile.jpg        # Profile photo
├── tailwind.config.js     # Tailwind theme & design tokens
├── package.json
└── next.config.js
```

## 🎨 Design System

The site uses a consistent design language across all sections:

- **Palette** — Deep navy `#07183D`, warm accent orange `#FF6B00`, indigo interactive `#3420B8`, and soft neutral grays.
- **Typography** — Inter/Poppins with a strong, high-contrast heading hierarchy.
- **Layout** — A unified "timeline" visual (continuous vertical line + accent dot markers) used across Experience, Skills, Achievements, Certifications, and Contact.
- **Motion** — Subtle scroll-reveal animations and micro-interactions that keep the experience clean and professional.

## 🚢 Deployment

This project is deployed on **Vercel** and updates automatically whenever changes are pushed to the `main` branch of this repository.

### Deploy on Vercel (from scratch)

```bash
# 1. Install the Vercel CLI
npm install -g vercel

# 2. Link and deploy from the project root
vercel --prod
```

Alternatively, import this repository at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected and the build runs with zero configuration.

## 📄 License

This project is for personal use. Feel free to use it as a reference or starting point for your own portfolio; please give credit where appropriate.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/prosanto0das">Prosanto Das</a></sub>
</div>
