'use client'

import Reveal from './Reveal'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const links = [
  {
    label: 'Email',
    value: 'prosanto0das23@gmail.com',
    href: 'mailto:prosanto0das23@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    label: 'GitHub',
    value: '@prosanto0das',
    href: 'https://github.com/prosanto0das',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    value: 'Prosanto Das',
    href: 'https://www.linkedin.com/in/prosanto-das-90ba09361/',
    icon: <FaLinkedin />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#FAFAFA]">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Contact</p>
        <h2 className="section-heading">
          Let&apos;s build something <span className="highlight">serious</span> together
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          Open to roles in AI/ML engineering, backend infrastructure, and systems work. If
          you&apos;re building the infrastructure that powers AI, let&apos;s talk.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14 max-w-4xl mx-auto relative">
          {/* Continuous timeline line */}
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative pl-8 flex items-center justify-between gap-3 group"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#FAFAFA] shadow-soft" />
                <span className="flex items-start gap-2.5 text-slate-600 group-hover:text-navy transition-colors leading-snug">
                  <span>
                    <span className="font-semibold text-navy">{l.label}: </span>
                    {l.value}
                  </span>
                </span>
                <span className="text-interactive text-sm font-semibold shrink-0 group-hover:text-accent transition-colors">
                  {l.icon}
                </span>
              </a>
            ))}

            <div className="relative pl-8 flex items-center justify-between gap-3">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#FAFAFA] shadow-soft" />
              <span className="flex items-start gap-2.5 text-slate-600 leading-snug">
                <span>
                  <span className="font-semibold text-navy">Location: </span>
                  Dhaka, Bangladesh
                </span>
              </span>
              <span className="text-interactive shrink-0">
                <FaMapMarkerAlt />
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Prosanto Das. Built with care.</p>
        <p className="mono">
          <span className="text-accent">$</span> status: open_to_opportunities
        </p>
      </div>
    </section>
  )
}
