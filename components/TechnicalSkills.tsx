'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiCplusplus, SiPython, SiJavascript, SiMysql, SiPostgresql, SiMongodb,
  SiReact, SiNextdotjs, SiNodedotjs, SiDjango, SiPhp, SiExpress, SiRedux,
  SiTailwindcss, SiTypescript,
  SiFirebase, SiSupabase, SiPrisma, SiSequelize, SiRedis,
  SiAmazon, SiDocker, SiVercel, SiHeroku, SiGooglecloud
} from 'react-icons/si'
import { FaJava, FaMicrosoft } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: SiCplusplus, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'MERN Stack', icon: SiMongodb, color: '#47A248' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiVercel, color: '#F05032' },
      { name: 'GitHub', icon: SiVercel, color: '#181717' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
]

export default function TechnicalSkills() {
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
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A curated set of languages, frameworks, and tools I excel at.
        </p>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="flex flex-col items-center gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-700/30 cursor-pointer group hover:border-accent-blue/50 hover:bg-slate-900/50 transition-all"
                    >
                      <Icon 
                        className="text-4xl transition-all duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-accent-blue transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 card p-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full"></span>
            Problem Solving
          </h3>
          <p className="text-gray-300 text-base md:text-lg">
            Solved over <span className="text-accent-blue font-semibold">2800+</span> competitive programming problems across various platforms including Codeforces, CodeChef, LeetCode, and more.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
