'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'

// Order: rating profiles first, then Math Olympiad, then Champion at 4th, then all ranked lowest → highest
const items = [
  {
    title: (
      <>
        Codeforces: <span className="font-bold text-navy">Expert</span>{' '}
        <span className="font-semibold text-accent">(Max 1640)</span>
      </>
    ),
    href: 'https://codeforces.com/profile/go_mu',
  },
  {
    title: (
      <>
        CodeChef: <span className="font-bold text-navy">5★</span>{' '}
        <span className="font-semibold text-accent">(Max 2007)</span>
      </>
    ),
    href: 'https://www.codechef.com/users/gom_u',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">5th</span> — National Undergrad{' '}
        <span className="font-bold text-navy">Math Olympiad</span> 2022
      </>
    ),
    href: '',
  },
  {
    title: (
      <>
        <span className="font-bold text-interactive">17th</span> — ICPC Dhaka Regional 2025
      </>
    ),
    href: 'https://icpc.global/regionals/finder/Dhaka-2026/standings',
    icpc: true,
  },
  {
    title: (
      <>
        <span className="font-bold text-accent">Champion</span> — DRMC Tech Carnival (Selection)
      </>
    ),
    href: 'https://toph.co/c/preliminary-8th-drmc-intl-tech-carnival-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">2nd</span> — Intra SUST 2023 (Selection)
      </>
    ),
    href: 'https://codeforces.com/gym/433546/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">5th</span> — DRMC Tech Carnival 2025
      </>
    ),
    href: 'https://toph.co/contests/training/z9wvv8k/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">9th</span> — Intra SUST 2024
      </>
    ),
    href: 'https://codeforces.com/gym/525750/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">11th</span> — IIUC Programming Contest 2023
      </>
    ),
    href: 'https://toph.co/c/15th-iiuc-inter-university-2023/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-interactive">22nd</span> — ICPC Dhaka Preliminary 2025
      </>
    ),
    href: 'https://bapsoj.org/contests/icpc-dhaka-2025-online-preliminary/standings',
    icpc: true,
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">27th</span> — DUET IUPC 2025
      </>
    ),
    href: 'https://toph.co/c/duet-inter-university-iupc-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">36th</span> — KUET IUPC 2025
      </>
    ),
    href: 'https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">36th</span> — UIU IUPC 2025
      </>
    ),
    href: 'https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">37th</span> — Uttara University IUPC 2025
      </>
    ),
    href: 'https://toph.co/c/uttara-university-inter-university-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">46th</span> — AUST IUPC 2025
      </>
    ),
    href: 'https://toph.co/c/mtb-presents-aust-inter-university-2025/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">49th</span> — SEC Inter University Junior 2022
      </>
    ),
    href: 'https://toph.co/c/sec-inter-university-junior-2022/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">51st</span> — CUET CodeStorm 1.0
      </>
    ),
    href: 'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-interactive">58th</span> — ICPC Dhaka Preliminary 2024
      </>
    ),
    href: 'https://bapsoj.org/contests/icpc-preliminary-dhaka-site-2024/standings',
    icpc: true,
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">62nd</span> — SUST CSE Carnival IUPC 2024
      </>
    ),
    href: 'https://toph.co/c/inter-university-sust-cse-carnival-2024/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">65th</span> — BUET IUPC 2024
      </>
    ),
    href: 'https://toph.co/c/inter-university-buet-cse-fest-2024/standings',
  },
  {
    title: (
      <>
        <span className="font-bold text-navy">66th</span> — SUST IUPC 2023
      </>
    ),
    href: 'https://toph.co/c/sust-iupc-2023',
  },
]

function AchievementRow({ item, index }: { item: (typeof items)[number]; index: number }) {
  const inner = (
    <div className="relative pl-8">
      <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#FFFFFF] shadow-soft" />

      <div className="flex items-start justify-between gap-3 group">
        <span className="flex items-start gap-2.5 text-slate-600 group-hover:text-navy transition-colors leading-snug">
          {item.title}
        </span>
        {item.href && (
          <FaExternalLinkAlt className="text-slate-300 text-xs shrink-0 mt-1 group-hover:text-accent transition-colors" />
        )}
      </div>
    </div>
  )
  return item.href ? (
    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <div key={index}>{inner}</div>
  )
}

export default function Recognitions() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? items : items.slice(0, 5)

  return (
    <section id="recognitions" className="section bg-[#FFFFFF]">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Achievements</p>
        <h2 className="section-heading">
          Placements that <span className="highlight">speak for themselves</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          A record of top finishes — from ICPC Dhaka Regional to national programming contests.
        </p>
      </Reveal>

      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-4">
          {visible.map((item, i) => (
            <AchievementRow key={i} item={item} index={i} />
          ))}
        </div>

        {items.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-navy font-semibold text-sm hover:border-accent hover:text-accent hover:bg-[#FFF8F2] transition-colors"
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp className="text-xs" />
                </>
              ) : (
                <>
                  Show More Achievements <FaChevronDown className="text-xs" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
