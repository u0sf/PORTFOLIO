'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative z-10">
        <Navigation />
        <section className="pt-32 pb-16">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              Blog
            </motion.h1>
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xl text-gray-600 dark:text-gray-300 text-center"
              >
                No posts published yet. Coming soon!
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 