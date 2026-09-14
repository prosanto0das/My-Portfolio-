'use client'

import Reveal from './Reveal'
import { FaCode, FaChartBar, FaGraduationCap } from 'react-icons/fa'

const badges = [
  {
    icon: <FaCode />,
    label: 'Codeforces Expert',
    sub: 'Max 1640 · @go_mu',
    href: 'https://codeforces.com/profile/go_mu',
  },
  {
    icon: <FaChartBar />,
    label: 'CodeChef 5★',
    sub: 'Max 2007 · @gom_u',
    href: 'https://www.codechef.com/users/gom_u',
  },
  {
    icon: <FaGraduationCap />,
    label: 'BSc CSE · SUST',
    sub: 'CGPA 3.70 / 4.00',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">About</p>
        <h2 className="section-heading">
          Building reliable systems for <span className="highlight">AI</span> and the engineers who ship it
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal delay={80}>
          <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              I&apos;m an AI/ML software engineer focused on the backend and infrastructure
              side of machine learning — model-serving pipelines, data-heavy services, and
              the distributed systems that keep them scalable and fast.
            </p>
            <p>
              I&apos;ve built full-stack AI products (voice agents, LLM-powered coaching
              platforms), optimized services with caching and type-safe backends, and done
              research in NLP and genome sequence reconstruction. Every project I work on is
              an exercise in the same discipline: make it correct first, then make it fast.
            </p>
            <p>
              Before engineering, I was (and still am) a competitive programmer — an
              obsessive solver of 2800+ problems across Codeforces, CodeChef, and other
              platforms. That background shapes how I approach production code: constraints
              first, complexity analysis always.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {badges.map((b) => {
              const inner = (
                <div className="card p-6 h-full">
                  <div className="w-11 h-11 rounded-full bg-[#F4F5F8] text-interactive flex items-center justify-center text-lg mb-4">
                    {b.icon}
                  </div>
                  <p className="font-bold text-navy leading-snug">{b.label}</p>
                  <p className="text-sm text-slate-500 mt-1">{b.sub}</p>
                </div>
              )

              return b.href ? (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div key={b.label} className="block h-full">
                  {inner}
                </div>
              )
            })}

            <div className="card p-6 h-full bg-[#FFF7F0] border-accent/20">
              <p className="font-bold text-navy">2800+</p>
              <p className="text-sm text-slate-500 mt-1">
                Problems solved across competitive programming platforms.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
