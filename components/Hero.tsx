'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaChartBar, FaEnvelope, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 flex flex-col items-center"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }}
          className="mb-12 relative"
          style={{ width: '240px', height: '240px' }}
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 30px rgba(107, 154, 255, 0.4)',
                '0 0 60px rgba(107, 154, 255, 0.7)',
                '0 0 30px rgba(107, 154, 255, 0.4)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="rounded-full overflow-hidden border-4 border-accent-blue/40 w-full h-full"
          >
            <Image
              src="/profile.jpg"
              alt="Prosanto Das"
              width={240}
              height={240}
              className="rounded-full object-cover w-full h-full"
              priority
            />
          </motion.div>
          
          {/* Rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-blue border-r-accent-purple border-b-accent-blue/30"
            style={{ width: '240px', height: '240px' }}
          />
          
          {/* Inner glow */}
          <motion.div
            animate={{ 
              boxShadow: [
                'inset 0 0 20px rgba(107, 154, 255, 0.2)',
                'inset 0 0 40px rgba(107, 154, 255, 0.4)',
                'inset 0 0 20px rgba(107, 154, 255, 0.2)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ width: '240px', height: '240px' }}
          />
        </motion.div>
        <motion.h1
          className="text-6xl md:text-8xl font-bold gradient-text mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Prosanto Das
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineer | Competitive Programmer
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Passionate problem solver with <span className="text-accent-blue font-semibold">Expert</span> rating on Codeforces. 
          Specialized in algorithms, data structures, and building scalable full-stack applications. 
          Solved <span className="text-accent-blue font-semibold">2800+</span> competitive programming problems across multiple platforms.
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center mb-8 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/prosanto0das"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
            whileHover={{ scale: 1.3, rotate: 360, color: '#6b9aff' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prosanto-das-90ba09361/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://codeforces.com/profile/go_mu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
            whileHover={{ scale: 1.3, rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaChartBar />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-dark-card rounded-full border border-accent-blue/20"
            whileHover={{ scale: 1.05, borderColor: '#6b9aff', boxShadow: '0 0 20px rgba(107, 154, 255, 0.3)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaMapMarkerAlt className="text-accent-blue" />
            <span className="text-gray-300">Sylhet, Bangladesh</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 px-4 py-2 bg-dark-card rounded-full border border-accent-blue/20"
            whileHover={{ scale: 1.05, borderColor: '#6b9aff', boxShadow: '0 0 20px rgba(107, 154, 255, 0.3)' }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FaEnvelope className="text-accent-blue" />
            <a
              href="mailto:prosanto0das23@gmail.com"
              className="text-gray-300 hover:text-accent-blue transition-colors"
            >
              prosanto0das23@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
