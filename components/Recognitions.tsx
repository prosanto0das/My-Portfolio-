'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'
import type { IconType } from 'react-icons'

type Recognition = {
  title: string
  icon: IconType
  color: string
  score: number // higher score => higher priority in the list
  link?: string // contest link
}

// Only achievements present in the CV, ordered via a computed score
const recognitions: Recognition[] = [
  {
    title: 'Champion, 8th DRMC International Tech Carnival 2025 (Selection Round)',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 1000,
    link: 'https://toph.co/c/preliminary-8th-drmc-intl-tech-carnival-2025/standings',
  },
  {
    title: '1st runner up, Brain Craft Intra SUST Programming Contest 2023 (Selection Round)',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 900,
    link: 'https://codeforces.com/gym/433546/standings',
  },
  {
    title: 'Finalist, SRBD Code Contest 2025',
    icon: FaMedal,
    color: 'from-blue-400 to-blue-600',
    score: 850,
    link: 'https://www.hackerrank.com/contests/srbd-code-contest-2025-round-1/leaderboard',
  },
  {
    title: '5th place, National Undergraduate Mathematics Olympiad Bangladesh 2022, Sylhet',
    icon: FaMedal,
    color: 'from-blue-400 to-blue-600',
    score: 800,
  },
  {
    title: '5th in DRMC International Tech Carnival Programming Contest 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 750,
    link: 'https://toph.co/contests/training/z9wvv8k/standings',
  },
  {
    title: '11th in IIUC Programming Contest 2023',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 700,
    link: 'https://toph.co/c/15th-iiuc-inter-university-2023/standings',
  },
  {
    title: '9th in ShellBeeHaken Intra SUST Programming Contest 2024',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 690,
    link: 'https://codeforces.com/gym/525750/standings',
  },
  {
    title: '27th in DUET IUPC 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 580,
    link: 'https://toph.co/c/duet-inter-university-iupc-2025/standings',
  },
  {
    title: '36th in KUET IUPC 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 570,
    link: 'https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings',
  },
  {
    title: '36th in UIU IUPC 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 570,
    link: 'https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings',
  },
  {
    title: '37th in Uttara University IUPC 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 560,
    link: 'https://toph.co/c/uttara-university-inter-university-2025/standings',
  },
  {
    title: '46th in AUST IUPC 2025',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 540,
    link: 'https://toph.co/c/mtb-presents-aust-inter-university-2025/standings',
  },
  {
    title: '51st in CUET CodeStorm 1.0',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 530,
    link: 'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings',
  },
  {
    title: '58th in ICPC Preliminary (Dhaka site) 2024',
    icon: FaMedal,
    color: 'from-blue-400 to-blue-600',
    score: 520,
    link: 'https://bapsoj.org/contests/icpc-preliminary-dhaka-site-2024/standings',
  },
  {
    title: '62nd in SUST CSE Carnival IUPC 2024',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 510,
    link: 'https://toph.co/c/inter-university-sust-cse-carnival-2024/standings',
  },
  {
    title: '65th in BUET IUPC 2024',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 500,
    link: 'https://toph.co/c/inter-university-buet-cse-fest-2024/standings',
  },
  {
    title: '66th in SUST IUPC 2023',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500',
    score: 490,
    link: 'https://toph.co/c/sust-iupc-2023',
  },
]

export default function Recognitions() {
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
          Recognitions & Awards
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Highlights of my competitive programming and academic milestones.
        </p>
        <div className="section-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...recognitions]
            .sort((a, b) => b.score - a.score)
            .map((recognition, index) => {
            const Icon = recognition.icon
            
            const cardContent = (
              <>
                <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${recognition.color} mb-4`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <p className="text-white font-medium leading-relaxed group-hover:text-accent-blue transition-colors">
                  {recognition.title}
                </p>
              </>
            )
            
            if (recognition.link) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card p-6 text-center group cursor-pointer"
                  onClick={() => window.open(recognition.link, '_blank')}
                >
                  {cardContent}
                </motion.div>
              )
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center group"
              >
                {cardContent}
              </motion.div>
            )
          })}
        </div>

        {/* Additional CP Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">Expert</div>
            <p className="text-gray-300">Codeforces (Max: 1640)</p>
            <a
              href="https://codeforces.com/profile/go_mu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-purple text-sm mt-2 inline-block"
            >
              @go_mu
            </a>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5★</div>
            <p className="text-gray-300">CodeChef (Max: 2107)</p>
            <a
              href="https://www.codechef.com/users/gom_u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-purple text-sm mt-2 inline-block"
            >
              @gom_u
            </a>
          </div>
          <div className="card p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">2800+</div>
            <p className="text-gray-300">Problems Solved</p>
            <p className="text-sm text-gray-400 mt-2">
              Across multiple platforms
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
