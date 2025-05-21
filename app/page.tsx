'use client'

import { motion } from 'framer-motion'
import CodeBackground from '@/components/CodeBackground'
import AnimatedSubtitle from '@/components/AnimatedSubtitle'
import AboutMe from '@/components/AboutMe'
import ProjectSlider from '@/components/ProjectSlider'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative">
      <CodeBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Youssef
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
              Bringing Ideas to Life Through Code, Hardware & Creative Design
            </h2>
            <AnimatedSubtitle />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <AboutMe />
          </motion.div>
        </section>

        {/* Projects Preview */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Projects
            </h2>
            <ProjectSlider />
          </motion.div>
        </section>
      </div>
    </main>
  )
} 