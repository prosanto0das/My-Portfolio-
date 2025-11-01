'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skillCategories.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center overflow-hidden">
          {isInView && 'Technical Skills'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateX: -90,
                scale: 0
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.2,
                color: '#60A5FA',
                textShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
                transition: { duration: 0.2 }
              }}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'center bottom'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {!isInView && 'Technical Skills'}
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A curated set of languages, frameworks, and tools I excel at.
        </p>
        <div className="section-divider mb-12" />

        {/* Slideshow Container */}
        <div className="relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -90 }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="w-full max-w-4xl"
            >
              <div className="card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-10 bg-gradient-to-b from-accent-blue to-accent-purple rounded-full"></span>
                  {skillCategories[currentSlide].title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {skillCategories[currentSlide].skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -10,
                          rotate: [0, -5, 5, 0],
                          transition: {
                            rotate: {
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }
                          }
                        }}
                        className="flex flex-col items-center gap-4 p-6 bg-slate-900/30 rounded-lg border border-slate-700/30 cursor-pointer group hover:border-accent-blue/50 hover:bg-slate-900/50 transition-all"
                      >
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <Icon 
                            className="text-5xl transition-all duration-300 group-hover:scale-110" 
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <span className="text-base font-medium text-gray-300 group-hover:text-accent-blue transition-colors text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-12 h-4 bg-gradient-to-r from-accent-blue to-accent-purple'
                  : 'w-4 h-4 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 card p-6"
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
