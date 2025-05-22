'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedSubtitleProps {
  titles?: string[]
}

const defaultTitles = [
  'Hardware Developer',
  'Creative Coder',
  '3D Artist',
  'Tech Enthusiast',
]

export default function AnimatedSubtitle({ titles = defaultTitles }: AnimatedSubtitleProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [titles])

  return (
    <div className="h-8 md:h-10 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="block text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400 text-center"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
} 