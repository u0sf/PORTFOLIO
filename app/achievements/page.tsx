'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

// Sample achievements data - In a real app, this would come from a CMS or API
const achievements = [
  {
    id: 1,
    title: 'Best Project Award',
    organization: 'Tech Innovation Summit',
    date: '2023',
    description: 'Received recognition for developing an innovative IoT solution for smart homes.',
  },
  {
    id: 2,
    title: '3D Design Excellence',
    organization: 'Digital Arts Festival',
    date: '2022',
    description: 'Awarded for outstanding contribution in 3D modeling and design.',
  },
  // Add more achievements here
]

export default function Achievements() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Achievements
          </h1>
          
          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== achievements.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-900 dark:bg-blue-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white dark:bg-blue-900" />
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 