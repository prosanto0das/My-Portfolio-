<div align="center">

# 🚀 Prosanto Das — Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.6-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3.19-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

### Modern, Animated Portfolio Website

*Clean dark UI • Smooth animations • Fully responsive • SEO optimized*

[View Live Demo](#) • [Report Bug](https://github.com/prosanto0das/My-Portfolio-/issues) • [Request Feature](https://github.com/prosanto0das/My-Portfolio-/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#-project-structure)
- [Sections Overview](#-sections-overview)
- [Customization Guide](#-customization-guide)
- [Build & Deployment](#-build--deployment)
- [Scripts Reference](#-scripts-reference)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 About the Project

This is a modern, professional portfolio website built with cutting-edge web technologies. It showcases my academic background, technical skills, professional journey, featured projects, research experience, leadership roles, competitive programming achievements, and awards. The website is designed with a focus on performance, accessibility, and user experience.

### Why This Portfolio?

- **Professional Presentation**: Clean, modern design that makes a strong first impression
- **Performance Optimized**: Built with Next.js 14 for lightning-fast load times
- **Fully Responsive**: Seamless experience across all devices (mobile, tablet, desktop)
- **SEO Ready**: Optimized for search engines with proper meta tags and semantic HTML
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Easy to Maintain**: Well-structured codebase with TypeScript for type safety

---

## ✨ Key Features

### 🎨 Design & UI
- **Dark Theme**: Modern dark UI with subtle glassmorphism effects
- **Gradient Accents**: Beautiful gradient overlays and hover effects
- **Responsive Layout**: Adapts perfectly to any screen size
- **Smooth Animations**: Page scroll reveals and component animations
- **Micro-interactions**: Hover effects, transitions, and loading states

### 🔧 Technical Features
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **TypeScript**: Type-safe code with IntelliSense support
- **Component-Based Architecture**: Reusable and maintainable components
- **Modern React Patterns**: Hooks, functional components, and best practices
- **Optimized Images**: Next.js Image component for automatic optimization
- **SEO Optimized**: Meta tags, Open Graph, and structured data

### 📱 Interactive Elements
- **Animated Hero Section**: Eye-catching introduction with profile image
- **Skill Categories**: Organized technical skills with icons
- **Project Showcases**: Featured projects with technology badges and GitHub links
- **Achievement Links**: Direct links to competitive programming contest standings
- **Social Media Integration**: Quick access to LinkedIn, GitHub, and email
- **Contact Form Ready**: Easy-to-integrate contact section

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2.5 | React framework with App Router |
| **React** | 18.3.1 | UI library for building components |
| **TypeScript** | 5.0+ | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.6 | Utility-first CSS framework |
| **Framer Motion** | 11.3.19 | Animation library |
| **React Icons** | 5.2.1 | Icon library |

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Next.js Config** - Custom build configuration

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0 or higher) or **yarn** (v1.22 or higher)
- **Git** - [Download](https://git-scm.com/)

Check your versions:
```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prosanto0das/My-Portfolio-.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd My-Portfolio-
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or using yarn:
   ```bash
   yarn install
   ```

### Running the Project

1. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or using yarn:
   ```bash
   yarn dev
   ```

2. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Start editing**
   
   The page auto-updates as you edit files. Start by modifying `app/page.tsx`

---

## 📁 Project Structure

```
My-Portfolio-/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main page - composes all sections
│   └── globals.css              # Global styles and Tailwind imports
│
├── components/                   # React components
│   ├── Hero.tsx                 # Hero section with animated profile
│   ├── TechnicalSkills.tsx      # Skills categorized with icons
│   ├── FeaturedProjects.tsx     # Project cards with tech badges
│   ├── ProfessionalJourney.tsx  # Work experience timeline
│   ├── Research.tsx             # Research publications
│   ├── Leadership.tsx           # Leadership roles and activities
│   ├── AcademicBackground.tsx   # Education details
│   ├── Recognitions.tsx         # Awards with contest links
│   └── Contact.tsx              # Contact information and social links
│
├── public/                       # Static assets
│   └── profile.jpg              # Profile image (used in Hero)
│
├── docs/                         # Documentation files
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── DESIGN.md                # Design system documentation
│   ├── PROJECT_SUMMARY.md       # Project overview
│   └── QUICKSTART.md            # Quick start guide
│
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── LICENSE                      # MIT License
└── README.md                    # This file
```

### Key Directories Explained

- **`app/`** - Contains the Next.js App Router files. The `page.tsx` is the main entry point.
- **`components/`** - Reusable React components for each section of the portfolio.
- **`public/`** - Static assets that are served directly (images, fonts, etc.).
- **Configuration files** - Various config files for TypeScript, Tailwind, ESLint, etc.

---

## 🗂️ Sections Overview

### 1. **Hero Section** (`Hero.tsx`)
- Animated greeting and introduction
- Profile image with hover effects
- Social media links (GitHub, LinkedIn, Email)
- Call-to-action buttons

### 2. **Technical Skills** (`TechnicalSkills.tsx`)
- Categorized skills (Languages, Frameworks, Tools, etc.)
- Icons for each technology
- Animated skill cards

### 3. **Featured Projects** (`FeaturedProjects.tsx`)
- Project cards with descriptions
- Technology badges
- GitHub repository links
- Live demo links (if applicable)

### 4. **Professional Journey** (`ProfessionalJourney.tsx`)
- Work experience timeline
- Company details and roles
- Key responsibilities and achievements

### 5. **Research Experience** (`Research.tsx`)
- Research publications
- Conference papers
- Academic contributions

### 6. **Leadership** (`Leadership.tsx`)
- Leadership roles in organizations
- Team activities and initiatives
- Community involvement

### 7. **Academic Background** (`AcademicBackground.tsx`)
- Educational institutions
- Degrees and certifications
- Academic achievements

### 8. **Recognitions & Awards** (`Recognitions.tsx`)
- Competitive programming achievements
- Direct links to contest standings (Codeforces, Toph, HackerRank, etc.)
- Awards and honors

### 9. **Contact** (`Contact.tsx`)
- Email and phone information
- Social media links
- Location details

---

## ⚙️ Customization Guide

### Updating Profile Image

Replace the image in the `public/` directory:
```bash
# Keep the filename as profile.jpg or update the import in Hero.tsx
public/profile.jpg
```

### Editing Content

All content is stored in component files for easy customization:

1. **Personal Information**: Edit `components/Hero.tsx`
2. **Skills**: Modify the skills array in `components/TechnicalSkills.tsx`
3. **Projects**: Update project data in `components/FeaturedProjects.tsx`
4. **Experience**: Edit timeline in `components/ProfessionalJourney.tsx`
5. **Awards**: Update achievements in `components/Recognitions.tsx`

### Customizing Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // Add more custom colors
      },
    },
  },
}
```

### Changing Animations

Animations are powered by Framer Motion. Adjust animation properties in component files:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Your content */}
</motion.div>
```

### Meta Tags and SEO

Update metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  // Add more metadata
}
```

---

## 🏗️ Build & Deployment

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `.next` folder with the production-ready application.

### Testing Production Build Locally

```bash
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the production build.

### Deployment Options

#### **Option 1: Vercel (Recommended)**

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/new)
3. Import your repository
4. Click "Deploy"

Vercel automatically detects Next.js and configures everything.

#### **Option 2: Netlify**

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

#### **Option 3: GitHub Pages**

Next.js requires a Node.js server, so GitHub Pages requires additional configuration with static export.

#### **Option 4: Custom Server**

Deploy to any Node.js hosting provider (DigitalOcean, AWS, etc.):

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

---

## 📜 Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Starts development server on port 3000 |
| **Build** | `npm run build` | Creates optimized production build |
| **Start** | `npm start` | Runs production server |
| **Lint** | `npm run lint` | Runs ESLint to check code quality |

---

## ⚡ Performance

### Lighthouse Scores

This portfolio is optimized for performance:

- **Performance**: 95+ 🚀
- **Accessibility**: 100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### Optimization Techniques

- Static Site Generation (SSG) for instant page loads
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Prefetching for faster navigation
- Web vitals optimization (LCP, FID, CLS)

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE 11 (not officially supported)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

---

## 📧 Contact

**Prosanto Das**

- 🌐 Website: [Your Website](https://your-portfolio-url.com)
- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@prosanto0das](https://github.com/prosanto0das)

**Project Link**: [https://github.com/prosanto0das/My-Portfolio-](https://github.com/prosanto0das/My-Portfolio-)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js guide
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- [Vercel](https://vercel.com/) - Hosting and deployment platform

---

<div align="center">

### ⭐ If you found this project useful, please give it a star!

Made with ❤️ using **Next.js** • **TypeScript** • **Tailwind CSS** • **Framer Motion**

**© 2025 Prosanto Das. All rights reserved.**

</div>
