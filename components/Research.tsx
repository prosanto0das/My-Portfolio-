'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBrain, FaDna } from 'react-icons/fa'

const research = [
  {
    title: 'Problem Tag Detection (NLP, ML)',
    description:
      'Built an 8K-problem dataset from Codeforces and fine-tuned distilbert-base-uncased, achieving 66% accuracy in automatic problem categorization.',
    icon: FaBrain,
    tags: ['NLP', 'Transformers', 'BERT', 'Fine-tuning'],
  },
  {
    title: 'Genome Sequence Reconstruction (Algorithms)',
    description:
      'Developed a scalable overlap detection system using k-mer indexing and graph-based methods to improve efficiency in large sequencing datasets.',
    icon: FaDna,
    tags: ['Algorithms', 'Graphs', 'K-mer Indexing'],
  },
]

export default function Research() {
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
          Research Experience
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Selected research initiatives with measurable outcomes in NLP and algorithms.
        </p>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {r.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{r.description}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map((t, idx) => (
                    <span key={idx} className="tech-badge text-xs">{t}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
