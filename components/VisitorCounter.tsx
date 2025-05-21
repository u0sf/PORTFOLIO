'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor-count')
        const data = await response.json()
        setCount(data.count)
      } catch (error) {
        console.error('Error fetching visitor count:', error)
      } finally {
        setIsLoading(false)
      }
    }

    updateVisitorCount()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
    >
      {isLoading ? (
        <span className="text-sm">Loading...</span>
      ) : (
        <span className="text-sm">
          Visitors: {count?.toLocaleString()}
        </span>
      )}
    </motion.div>
  )
} 