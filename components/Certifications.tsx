'use client'

import Reveal from './Reveal'
import { FaExternalLinkAlt } from 'react-icons/fa'

const certifications = [
  {
    title: 'AWS Cloud Developing',
    desc: 'Cloud application development on AWS',
    href: 'https://www.credly.com/badges/66ed94fe-c7ea-435f-97e8-c06842dd54d6',
  },
  {
    title: 'AWS Cloud Foundations',
    desc: 'Core cloud computing concepts on AWS',
    href: 'https://www.credly.com/badges/f00bc9f1-47f8-40f5-8f98-f9e0b1f8028e',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-[#F5F6F8]">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Certifications</p>
        <h2 className="section-heading">
          Skills backed by <span className="highlight">industry credentials</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          AWS certifications that validate real, hands-on cloud and development expertise.
        </p>
      </Reveal>

      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-16">
          {certifications.map((cert, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#F5F6F8] shadow-soft" />

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="text-xl font-bold text-navy">{cert.title}</h3>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-interactive text-sm font-semibold hover:text-accent transition-colors"
                  >
                    Credential
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                <p className="text-slate-500 text-sm mt-1.5">{cert.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
