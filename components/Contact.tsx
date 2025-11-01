'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 overflow-hidden">
          {isInView && "Let's Connect".split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0,
                y: 100,
                rotateZ: -90
              }}
              animate={{ 
                opacity: 1,
                y: 0,
                rotateZ: 0
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.68, -0.55, 0.265, 1.55]
              }}
              whileHover={{
                scale: 1.5,
                color: '#10B981',
                textShadow: '0 0 30px rgba(16, 185, 129, 0.9)',
                rotateZ: 360,
                transition: { duration: 0.5 }
              }}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'center'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          {!isInView && "Let's Connect"}
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.a
            href="mailto:prosanto0das23@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 flex items-center gap-4 hover:scale-105 transition-transform group"
          >
            <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                prosanto0das23@gmail.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/prosanto0das"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-6 flex items-center gap-4 hover:scale-105 transition-transform group"
          >
            <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
              <FaGithub className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">GitHub</p>
              <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                @prosanto0das
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/prosanto-das-90ba09361/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card p-6 flex items-center gap-4 hover:scale-105 transition-transform group"
          >
            <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
              <FaLinkedin className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <p className="text-white font-medium group-hover:text-accent-blue transition-colors">
                prosanto-das
              </p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card p-6 flex items-center gap-4"
          >
            <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
              <FaPhone className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white font-medium">
                +880 1701 140907
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="card p-6 flex items-center gap-4 md:col-span-2 lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-accent-blue to-accent-purple p-3 rounded-lg">
              <FaMapMarkerAlt className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-medium">
                Sylhet, Bangladesh
              </p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}
