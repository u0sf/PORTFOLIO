'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog } from '@headlessui/react'
import Navigation from '@/components/Navigation'
import { XMarkIcon } from '@heroicons/react/24/outline'

// Sample creative work data - In a real app, this would come from a CMS or API
type CreativeWork = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  fullDescription: string;
};
const creativeWorks: CreativeWork[] = [
  {
    id: 1,
    title: 'Modern Chair Design',
    description: 'A minimalist chair design created in Blender',
    image: '/creative-work/chair.jpg',
    category: '3D Modeling',
    fullDescription: 'A modern, minimalist chair design created using Blender. The design focuses on clean lines and ergonomic comfort while maintaining a contemporary aesthetic.',
  },
  // Add more creative works here
]

export default function CreativeWork() {
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Creative Work
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeWorks.map((work: CreativeWork) => (
              <motion.div
                key={work.id}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                    <p className="text-sm opacity-90">{work.description}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-white/20 rounded-md text-sm">
                      {work.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Details Modal */}
      <Dialog
        open={selectedWork !== null}
        onClose={() => setSelectedWork(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl rounded-lg bg-white dark:bg-gray-800 p-6">
            {selectedWork && (
              <>
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title className="text-2xl font-bold">
                    {selectedWork.title}
                  </Dialog.Title>
                  <button
                    onClick={() => setSelectedWork(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedWork.fullDescription}
                </p>
                
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-md">
                  {selectedWork.category}
                </span>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  )
} 