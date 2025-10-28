'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'

const education = [
  {
    degree: 'BSc. in Computer Science and Engineering',
    institution: 'Shahjalal University of Science and Technology, Sylhet, Bangladesh',
    period: '2022 - Present',
    cgpa: 'CGPA: 3.70/4.00',
    icon: FaGraduationCap
  },
  {
    degree: 'Higher Secondary School Certificate (Science)',
    institution: 'Rukeya Khatun Lyceum School',
    period: '2018 - 2020',
    cgpa: '5.00/5.00',
    icon: FaSchool
  }
]

export default function AcademicBackground() {
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
          Academic Background
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          My formal education and qualifications.
        </p>
        <div className="section-divider mb-12" />

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6 flex items-start gap-4"
              >
                <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-4 rounded-lg">
                  <Icon className="text-3xl text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-gray-400 bg-dark-bg px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="text-accent-blue font-semibold">{edu.cgpa}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
