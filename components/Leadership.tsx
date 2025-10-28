'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChalkboardTeacher, FaUsersCog, FaPeopleCarry, FaTableTennis } from 'react-icons/fa'

const items = [
  {
    title: 'Mentor & Coordinator, SUST Competitive Programming Training Camp',
    description:
      'Delivered lectures, coached participants, and managed camp operations to strengthen the SUST CP community.',
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Mentor & Problem Setter, NHSPC 2025',
    description:
      'Designed and validated problems, coordinated contest workflows, and contributed to a smooth nationwide event.',
    icon: FaUsersCog,
  },
  {
    title: 'General Member, BUBT-BAPS National Programming Camp 2025',
    description:
      'Contributed as an active participant, collaborating with peers nationwide to share knowledge and strengthen problem-solving.',
    icon: FaPeopleCarry,
  },
]

const ttAchievements = [
  'Champion, SUST CSE Intra TT (Singles & Doubles)',
  'Champion, SUST Open TT (Singles)',
  'Selected for SUST University Team (2025)',
]

export default function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto section-alternate">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
          Leadership, Mentorship & Extracurriculars
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Initiatives and contributions beyond coursework that built community, leadership, and teamwork.
        </p>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12" />
        <h3 className="text-2xl font-bold text-accent-blue mb-6 text-center">Table Tennis Achievements</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {ttAchievements.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                <FaTableTennis className="text-3xl text-accent-blue" />
              </div>
              <p className="text-white font-medium">{t}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
