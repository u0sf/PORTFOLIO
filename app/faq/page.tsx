'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { faqs } from '@/data/faq'

export default function FAQ() {
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
              Frequently Asked Questions
            </motion.h1>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Disclosure key={faq.id}>
                  {({ open }) => (
                    <div className="card">
                      <Disclosure.Button className="flex w-full justify-between items-center">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                        <ChevronDownIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-500 dark:text-gray-400`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 