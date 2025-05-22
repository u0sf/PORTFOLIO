'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import CodeBackground from '@/components/CodeBackground'
import AnimatedSubtitle from '@/components/AnimatedSubtitle'
import ProjectSlider from '@/components/ProjectSlider'
import { projects } from '@/data/projects'
import Image from "next/image"

const skills = [
  { name: 'Hardware', icon: '/icons/arduino.png' },
  { name: 'Blender', icon: '/icons/blender.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'UI/UX', icon: '/icons/uiux.png' },
]

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)

  const handleAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Navigation />
      <CodeBackground />
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Youssef
        </motion.h1>
        <AnimatedSubtitle
          titles={[
            'Developer',
            'Hardware Developer',
            '3D Modeler',
            'Designer',
          ]}
        />
        <button
          onClick={handleAboutScroll}
          className="mt-8 px-8 py-3 text-lg border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors shadow-none bg-transparent"
          style={{ background: 'none' }}
        >
          About Me
        </button>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center mt-2"
        >
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>
      {/* About Me Section */}
      <section ref={aboutRef} className="py-24 px-4 bg-white dark:bg-gray-900 relative z-10">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl mx-auto text-center mb-10 text-lg text-gray-700 dark:text-gray-300"
          >
            Passionate about technology, hardware, and creative design. I love building things that blend code, electronics, and art. Always learning, always making.
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.08 }}
                className="card flex flex-col items-center py-6 px-2 shadow-md hover:shadow-xl transition"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <span className="text-base font-semibold text-gray-900 dark:text-white text-center flex items-center gap-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <motion.a
                key={project.id}
                href={`/projects#${project.id}`}
                whileHover={{ y: -8, scale: 1.03 }}
                className="card flex flex-col cursor-pointer transition-shadow hover:shadow-2xl"
                style={{ textDecoration: 'none' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-xl mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 