'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#recognitions', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const ids = links.map((l) => l.href.slice(1))
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive ? 'text-interactive' : 'text-navy hover:text-interactive'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-interactive transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#contact"
          className="md:hidden rounded-full bg-interactive text-white text-sm font-semibold px-4 py-2"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
