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
      'Develop scalable, production-ready backend services using Java, Spring Boot, and REST APIs.',
      'Own AI/ML backend infrastructure — integrating AI services and exposing them through reliable, well-documented APIs.',
      'Contribute to AI gateway architecture: API design, routing, auth, usage tracking, budget management, and reliability.',
      'Apply system design, microservices, and distributed-systems principles to production AI workloads.',
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
      'Built a strong enterprise engineering foundation working within the .NET ecosystem and professional software delivery workflows.',
    technologies: ['C#', '.NET', 'OOP', 'Version Control', 'SDLC'],
    achievements: [
      'Gained hands-on experience with C# and the .NET ecosystem for enterprise software development.',
      'Strengthened object-oriented programming, debugging, and code-quality practices.',
      'Collaborated across cross-functional teams within a professional SDLC.',
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
