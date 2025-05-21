'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navigation />
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Blog
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg italic">
              No blog posts have been published yet. Check back soon for updates!
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 