'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const subtitles = [
  'Embedded Systems Enthusiast',
  '3D Modeling Artist',
  'Hardware Developer',
  'Creative Thinker',
]

export default function AnimatedSubtitle() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % subtitles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          {subtitles[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 