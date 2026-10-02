'use client'

import Reveal from './Reveal'
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    company: 'Vivasoft Limited',
    role: 'Software Engineer L-I · Machine Learning & AI Backend',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2026 – Present',
    color: 'bg-interactive',
    dot: 'bg-interactive',
    summary:
      'Building production-grade AI infrastructure and scalable backend systems at the intersection of backend engineering and machine learning.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Microservices',
      'AI Gateways',
      'LLMs',
      'Transformers',
      'Distributed Systems',
    ],
    achievements: [
      'Design and own production AI gateway APIs — routing, auth, usage tracking, and budget caps — consumed by multiple LLM-backed features.',
      'Build Java/Spring Boot backend services and REST APIs that power production AI workloads end to end.',
      'Ship a single, well-documented gateway contract that lets multiple internal teams integrate AI services without duplicating plumbing.',
      'Apply system design and distributed-systems patterns (caching, rate limiting, queues) to keep AI infrastructure reliable at scale.',
    ],
  },
  {
    company: 'Enosis Solutions',
    role: 'Software Engineer L-1',
    location: 'Dhaka, Bangladesh',
    period: 'May 2026 – Jul 2026',
    color: 'bg-accent',
    dot: 'bg-accent',
    summary:
      'A focused May–Jul 2026 stint in the .NET ecosystem, taken as a deliberate step before moving into a role more aligned with AI/ML backend infrastructure.',
    technologies: ['C#', '.NET', 'OOP', 'Version Control', 'SDLC'],
    achievements: [
      'Shipped enterprise modules in C#/.NET within a structured SDLC, with code review and version-controlled delivery.',
      'Practiced test-first debugging and code-quality standards that kept assigned features review-ready.',
      'Delivered alongside cross-functional teams, translating business requirements into tested, shippable code.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Experience</p>
        <h2 className="section-heading">
          Turning ideas into <span className="highlight">production systems</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          Engineering roles spanning AI/ML backend infrastructure, AI gateways, and enterprise software.
        </p>
      </Reveal>

      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-16">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 80}>
            <div className="relative pl-8">
              <span className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full ${exp.dot} border-4 border-[#FAFAFA] shadow-soft`} />

              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-xl font-bold text-navy">{exp.company}</h3>
                  <p className="text-slate-500 text-sm mt-0.5">{exp.role}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="font-semibold flex items-center gap-1.5">
                    <FaBriefcase className="text-accent" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-accent" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-600 leading-relaxed mt-3">{exp.summary}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                    <span className={`mt-[9px] w-1.5 h-1.5 rounded-full ${exp.dot} shrink-0`} />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        </div>
      </div>
    </section>
  )
}
