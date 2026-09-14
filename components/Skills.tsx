'use client'

import Reveal from './Reveal'

const categories = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C++', 'C', 'JavaScript'],
  },
  {
    title: 'Frameworks & Backend',
    items: ['Spring Boot', 'Node.js', 'Express', 'React'],
  },
  {
    title: 'AI & LLM Systems',
    items: ['Generative & Agentic AI', 'RAG', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Databases & Cloud',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Linux', 'N8N'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-[#FFFFFF]">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Skills</p>
        <h2 className="section-heading">
          A toolkit for shipping <span className="highlight">serious software</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          The languages, frameworks, and platforms I combine to design, build, and scale production systems.
        </p>
      </Reveal>

      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 80}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#FAFAFA] shadow-soft" />

                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="text-xl font-bold text-navy">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cat.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
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
