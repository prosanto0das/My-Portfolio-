<div align="center">

# Prosanto Das — Portfolio

Modern, animated portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

— clean dark UI • smooth animations • responsive • SEO-friendly —

</div>

## ✨ Overview

This is my personal portfolio website. It highlights my background, projects, competitive programming achievements, and ways to contact me. The site is statically generated using the Next.js App Router and optimized for performance.

Live (local): http://localhost:3000

## 🚀 Features

- Responsive layout across mobile, tablet, desktop
- Smooth section reveals and micro-interactions (Framer Motion)
- Clean dark theme with subtle glassmorphism and gradient accents
- Clickable achievements linking to exact contest standings (Toph/Codeforces/HackerRank/BAPSOJ)
- Easily configurable content (simple TypeScript arrays)

## 🧩 Sections

- Hero with animated profile picture and social links
- Technical Skills (category cards with icons + names)
- Featured Projects (cards with tech badges and GitHub links)
- Research Experience and Leadership (if applicable)
- Academic Background
- Recognitions & Awards (links to exact standings)
- Contact

## 🛠️ Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: React Icons

## 📦 Getting Started

Clone and install:

```bash
git clone https://github.com/prosanto0das/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open your browser at http://localhost:3000

## 🧱 Project Structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Main page composing all sections
  globals.css       # Global styles
components/
  Hero.tsx          # Animated hero + profile image
  TechnicalSkills.tsx
  FeaturedProjects.tsx
  AcademicBackground.tsx
  Recognitions.tsx  # Awards with exact contest links
  Leadership.tsx
  Research.tsx
  Contact.tsx
public/
  profile.jpg       # Profile image used in the hero
```

## ⚙️ Configuration & Content

- Profile image: replace `public/profile.jpg` (keeps the same filename)
- Skills/Projects/Awards: edit arrays in the corresponding component files
- Colors: customize in `tailwind.config.js`

## 🧪 Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm start` – start production server
- `npm run lint` – run ESLint

## � Deploy

Deploy on Vercel (recommended):

1. Push the repository to GitHub (see steps below)
2. Import the repo in https://vercel.com/new
3. Vercel auto-detects Next.js; click Deploy

## � Publish to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/prosanto0das/Portfolio.git
git push -u origin main
```

## 📄 License

MIT © Prosanto Das

---

Made with ❤️ using Next.js + TypeScript + Tailwind + Framer Motion.
