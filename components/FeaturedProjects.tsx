'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaStar, FaCode } from 'react-icons/fa'

const projects = [
  {
    name: 'Blogger Bro',
    icon: '📝',
    description: 'Full-stack blogging platform with admin dashboard, REST APIs, and responsive UI.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/prosanto0das/BloggerBro-',
    stars: null
  },
  {
    name: 'Lodgify',
    icon: '🏠',
    description: 'Lodging marketplace with verified hosts, real-time availability, secure booking, and user management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Prisma'],
    github: 'https://github.com/prosanto0das/Lodgify',
    stars: null
  },
  {
    name: 'AGNIM',
    icon: '♟️',
    description: 'Real-time multiplayer strategy game with custom chess-like mechanics, WebSocket matchmaking, JWT authentication, and synchronized game state.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/prosanto0das/AGNIM',
    stars: null
  },
  {
    name: 'Smart Parking System',
    icon: '🚗',
    description: 'IoT-based parking solution with real-time slot detection via sensors and live monitoring dashboard.',
    technologies: ['Arduino', 'IoT', 'Web Dashboard'],
    github: null,
    stars: null
  }
]

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center overflow-hidden">
          {isInView && 'Featured Projects'.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0,
                x: -100,
                rotate: -180
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                rotate: 0
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{
                scale: 1.3,
                rotate: 15,
                color: '#A78BFA',
                transition: { duration: 0.2 }
              }}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'center'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {!isInView && 'Featured Projects'}
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills and interests.
        </p>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(107, 154, 255, 0.2)' }}
              className="card p-6 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.name}
                  </h3>
                </div>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-blue transition-colors"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                )}
              </div>

              {project.stars && (
                <div className="flex items-center gap-2 mb-3">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-300">{project.stars}</span>
                </div>
              )}

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="tech-badge text-xs"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors text-sm font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <FaCode />
                  <span>View on GitHub</span>
                  <motion.span 
                    className="transform"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
