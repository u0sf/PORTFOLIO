'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { achievements, Achievement } from '@/data/achievements'
import { Dialog } from '@headlessui/react'

export default function Achievements() {
  const [selected, setSelected] = useState<Achievement | null>(null)

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
              Achievements
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  whileHover={{ y: -5 }}
                  className="card flex flex-col items-center justify-between h-56 cursor-pointer transition-shadow hover:shadow-2xl"
                  onClick={() => setSelected(achievement)}
                >
                  <h3 className="text-gray-900 dark:text-white mb-2 text-center line-clamp-2">{achievement.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center mt-auto">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 text-primary-600 dark:text-primary-400 text-sm font-medium">Click for details</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Modal for details */}
        <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="max-w-lg w-full card">
              {selected && (
                <>
                  <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {selected.title}
                  </Dialog.Title>
                  <div className="text-center text-gray-500 dark:text-gray-400 mb-2">{selected.organization} &middot; {selected.year}</div>
                  <p className="mb-4 text-gray-700 dark:text-gray-300 text-center">{selected.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {selected.tags.map((tag) => (
                      <span key={tag} className="badge-primary">{tag}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelected(null)} className="btn-primary w-full">Close</button>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </main>
  )
} 