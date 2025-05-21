'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg font-medium">About Me</span>
        {isExpanded ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate developer and creator with expertise in embedded systems,
                3D modeling, and hardware development. My journey in technology has been
                driven by a constant desire to innovate and create meaningful solutions.
                I combine technical expertise with creative thinking to bring ideas to life.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '💻', label: 'Coding' },
                  { icon: '🔧', label: 'Hardware' },
                  { icon: '🎨', label: '3D Design' },
                  { icon: '🚀', label: 'Innovation' },
                ].map((skill) => (
                  <motion.div
                    key={skill.label}
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-2xl mb-2">{skill.icon}</span>
                    <span className="text-sm text-gray-300">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 