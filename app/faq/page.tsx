'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    id: 1,
    question: 'What kind of projects do you usually work on?',
    answer: 'I work on a variety of projects including programming, hardware development, 3D modeling, and creative design.',
  },
  {
    id: 2,
    question: 'Can you help with custom hardware development or prototyping?',
    answer: 'Yes, I offer assistance in custom hardware design and prototyping based on client needs.',
  },
  {
    id: 3,
    question: 'Do you offer freelance services for programming or design?',
    answer: 'Absolutely, I provide freelance services for programming, hardware projects, 3D modeling, and design work.',
  },
  {
    id: 4,
    question: 'Which programming languages and tools do you specialize in?',
    answer: 'I specialize in Arduino, Python, HTML/CSS, Blender for 3D modeling, and other relevant tools.',
  },
  {
    id: 5,
    question: 'How can I request a custom project or collaboration?',
    answer: 'You can contact me through the contact options on my website or via social media to discuss your project.',
  },
  {
    id: 6,
    question: 'Do you provide tutorials or learning resources?',
    answer: 'Occasionally, I share tutorials and resources related to my expertise. Stay tuned on my blog or social channels.',
  },
  {
    id: 7,
    question: 'Can I see examples of your previous work?',
    answer: 'Yes, my projects and creative works are showcased on the Projects and Creative Work pages.',
  },
  {
    id: 8,
    question: 'What is your typical project turnaround time?',
    answer: 'Turnaround time varies depending on project complexity but is usually discussed and agreed upon before starting.',
  },
  {
    id: 9,
    question: 'Are you open to remote collaboration or local projects only?',
    answer: 'I am open to both remote and local collaborations.',
  },
  {
    id: 10,
    question: 'How do you handle project revisions and feedback?',
    answer: 'I welcome feedback and provide revisions within the agreed scope to ensure client satisfaction.',
  },
  {
    id: 11,
    question: 'What are your rates or pricing models?',
    answer: 'Rates depend on the project type and scope. Please contact me to get a personalized quote.',
  },
  {
    id: 12,
    question: 'Do you provide support after project delivery?',
    answer: 'Yes, I offer support and maintenance services post-delivery based on the project agreement.',
  },
  {
    id: 13,
    question: 'Can you integrate hardware with software for IoT projects?',
    answer: 'Yes, I work on projects that combine hardware and software, including IoT solutions.',
  },
  {
    id: 14,
    question: 'Do you create 3D models for printing or animation?',
    answer: 'I design 3D models suitable for both 3D printing and animation projects.',
  },
  {
    id: 15,
    question: 'How can I contact you for urgent inquiries?',
    answer: 'The fastest way is through the contact options on my website or via my social media profiles.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <Navigation />
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 dark:text-gray-300 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-4"
                  >
                    <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 