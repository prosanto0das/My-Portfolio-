'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 're:tune',
    period: 'Jan 2025 – Present',
    technologies: ['React', 'TypeScript', 'Claude', 'Gemini', 'GPT-4', 'Elevenlabs TTS', 'Deepgram STT', 'Vapi', 'Turso DB', 'JWT', 'Stripe'],
    achievements: [
      'Developed a full-stack AI coaching platform using React/TypeScript, integrating AI models (Claude, Gemini, GPT-4), Elevenlabs TTS, Deepgram STT, and dynamic routing for context-aware responses',
      'Engineered real-time voice interaction system with Vapi, reducing latency for natural conversations',
      'Built scalable backend using Turso DB, JWT auth, Stripe payments, and token optimization',
      'Automated daily messaging with timezone-based scheduling and KB-augmented responses for engagement'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'OrderE',
    period: 'Sep 2024 – Oct 2024',
    technologies: ['React', 'Next.js', 'MUI', 'SSG', 'ISR'],
    achievements: [
      'Delivered V2 of e-commerce platform serving 500+ businesses, generating £61M in 10 months',
      'Improved performance using Next.js SSG/ISR; significantly reduced load times',
      'Built modern, responsive UIs with MUI and precise design translations'
    ]
  },
  {
    title: 'Backend Developer',
    company: 'Bangladesh Competitive Programming Society',
    period: 'Jun 2022 – Jun 2024',
    technologies: ['Python', 'Discord.py', 'FastAPI', 'Firebase', 'SQLite', 'In-memory Caching'],
    achievements: [
      'Increased community engagement 5× via personalized features and contest alerts',
      'Reduced API response times 3–4× using in-memory caching',
      'Implemented gamified features: virtual currency, rewards, seasonal leagues, and live leaderboards'
    ]
  }
]

export default function ProfessionalJourney() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
          Professional Journey
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          My career path, key roles, and contributions in the tech industry.
        </p>
        <div className="section-divider mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -ml-2 w-4 h-4 rounded-full bg-accent-blue border-4 border-dark-bg z-10" />

              {/* Content card */}
              <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-accent-blue font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-dark-bg px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-blue mr-2 mt-1">◆</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
