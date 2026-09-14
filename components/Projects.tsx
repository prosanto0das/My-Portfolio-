'use client'

import Reveal from './Reveal'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Medora – Medical AI Assistant',
    tagline: 'RAG-powered medical chatbot grounded in a 637-page medical encyclopedia',
    highlights: [
      'RAG medical chatbot in Python using LangChain and Flask, grounded in a 637-page medical encyclopedia.',
      'Engineered the ingestion pipeline: PDF parsing, recursive chunking (500 tokens, 50 overlap), and all-MiniLM-L6-v2 384-dim embeddings.',
      'Implemented Pinecone cosine-similarity retrieval (top-k) with streaming responses from an OpenAI-compatible model.',
      'Added SQLite-backed session memory (last 12 messages) and a responsive chat UI with markdown rendering.',
    ],
    technologies: ['Python', 'LangChain', 'Flask', 'Pinecone', 'RAG'],
    github: 'https://github.com/prosanto0das/Medora',
    demo: null,
  },
  {
    name: 'FixMyRide – Car Service Booking',
    tagline: 'Production-ready car service booking platform',
    highlights: [
      'Engineered a responsive car service booking platform with service discovery, pricing management, and customer engagement features.',
      'Implemented a mobile-optimized UI with responsive breakpoints (480px, 768px, 1024px) for a seamless cross-device experience.',
      'Developed service detail pages with dynamic pricing packages, availability information, and multi-channel contact integration.',
      'Built with React + TypeScript, Vite, React Router, and advanced CSS media queries for production-ready responsive design.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS'],
    github: 'https://github.com/prosanto0das/FixMyRide',
    demo: 'https://fix-my-ride-pro.vercel.app/',
  },
  {
    name: 'Lodgify – Lodging Booking Platform',
    tagline: 'Full-stack lodging discovery and verified booking',
    highlights: [
      'Developed a full-stack web app for discovering and booking verified lodging.',
      'Implemented smart search filters, secure authentication, and full CRUD operations.',
      'Built the frontend with React and SCSS; the backend with Node.js, Express, and MongoDB.',
    ],
    technologies: ['React', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/prosanto0das/Lodgify',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section bg-[#FFFFFF]">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Projects</p>
        <h2 className="section-heading">
          Built to <span className="highlight">solve real problems</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          From RAG-powered AI assistants to full-stack booking platforms — software designed and shipped end to end.
        </p>
      </Reveal>

      <div className="mt-12 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[5px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-16">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="relative pl-6">
              <span className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full bg-accent border-4 border-[#FFFFFF] shadow-soft" />

              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-lg font-bold text-navy">{p.name}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} GitHub`}
                    className="inline-flex items-center gap-1.5 font-semibold text-interactive hover:text-interactive-hover transition-colors"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} demo`}
                      className="inline-flex items-center gap-1.5 font-semibold text-accent hover:opacity-80 transition-opacity"
                    >
                      <FaExternalLinkAlt className="text-sm" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-500 text-sm mt-1">{p.tagline}</p>

              <ul className="mt-3 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.technologies.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  )
}
