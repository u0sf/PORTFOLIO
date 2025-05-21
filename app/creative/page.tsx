'use client'

import { motion } from 'framer-motion'
import { CubeIcon, PaintBrushIcon, EyeIcon } from '@heroicons/react/24/outline'

const creativeWorks = [
  {
    id: 1,
    title: '3D Modeling',
    description: 'Explore my collection of 3D models created using Blender and other 3D software.',
    icon: CubeIcon,
  },
  {
    id: 2,
    title: 'Graphic Design',
    description: 'View my graphic design work including logos, posters, and digital art.',
    icon: PaintBrushIcon,
  },
  {
    id: 3,
    title: 'Lens Design',
    description: 'Discover my work in optical lens design, including modeling and simulation of advanced lens systems.',
    icon: EyeIcon,
  },
]

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Creative Work
        </motion.h1>

        <div className="space-y-16">
          {creativeWorks.map((category) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {category.description}
              </p>
              <div className="text-center py-12">
                <span className="text-gray-400 text-lg italic">No projects available in this category yet.</span>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
} 