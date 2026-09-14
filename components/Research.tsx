'use client'

import Reveal from './Reveal'
import { FaExternalLinkAlt } from 'react-icons/fa'

const research = [
  {
    title: 'Problem Tag Detection',
    category: 'NLP & ML',
    badge: 'IEEE QPAIN',
    link: 'https://ieeexplore.ieee.org/document/11545722',
    bullets: [
      'Built an ML system to predict topic tags from 9,500+ Codeforces problems using multi-label classification.',
      'Applied transformer models (RoBERTa, DistilBERT, DeBERTa-v3) alongside TF-IDF + Logistic Regression baselines.',
      'Achieved strong accuracy in automatic problem categorization, helping beginners efficiently select relevant problems and improve learning outcomes.',
    ],
    tags: ['NLP', 'Transformers', 'Multi-label Classification', 'Codeforces'],
  },
  {
    title: 'Genome Sequence Reconstruction',
    category: 'Algorithms',
    bullets: [
      'Addressed longest suffix-prefix overlap detection between DNA reads for real-time genome reconstruction.',
      'Proposed a dynamic framework using a modified Suffix Automaton, enabling online sequence insertion.',
      'Improves scalability and memory efficiency over static structures for large-scale genomic analysis.',
    ],
    tags: ['Algorithms', 'Suffix Automaton', 'DNA Reads', 'Scalability'],
  },
]

export default function Research() {
  return (
    <section id="research" className="section">
      <Reveal>
        <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Research</p>
        <h2 className="section-heading">
          Where ML meets <span className="highlight">algorithms</span>
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-2xl">
          Published work and explorations that pair modern ML models with rigorous algorithmic foundations.
        </p>
      </Reveal>

      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* Continuous timeline line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

        <div className="space-y-14">
          {research.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-accent border-4 border-[#FAFAFA] shadow-soft" />

                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-xl font-bold text-navy">
                      {r.title} <span className="text-slate-400 font-semibold">— {r.category}</span>
                    </h3>
                  </div>
                  {r.badge && (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-interactive rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
                    >
                      {r.badge} <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-slate-600 leading-relaxed text-[15px]">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {r.tags.map((t) => (
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
