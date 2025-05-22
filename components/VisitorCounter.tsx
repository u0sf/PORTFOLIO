'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { initializeApp, FirebaseApp } from 'firebase/app'
import { getDatabase, ref, onValue, runTransaction, Database } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
}

let app: FirebaseApp | undefined
try {
  app = initializeApp(firebaseConfig)
} catch (error) {}

let db: Database | null = null
try {
  if (app) {
    db = getDatabase(app)
  }
} catch (error) {
  db = null
}

function useRollingNumber(target: number, duration = 800) {
  const [display, setDisplay] = useState(target)
  const raf = useRef<number>()
  useEffect(() => {
    let start: number | null = null
    let from = display
    let to = target
    function animate(ts: number) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setDisplay(Math.floor(from + (to - from) * progress))
      if (progress < 1) raf.current = requestAnimationFrame(animate)
      else setDisplay(to)
    }
    if (from !== to) raf.current = requestAnimationFrame(animate)
    return () => raf.current && cancelAnimationFrame(raf.current)
  }, [target])
  return display
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const rollingCount = useRollingNumber(count)

  useEffect(() => {
    if (!db) {
      setError('Database connection failed')
      setIsLoading(false)
      return
    }
    const visitorRef = ref(db, 'visitors/count')
    // Increment and get total count atomically
    runTransaction(visitorRef, (current) => (current || 0) + 1)
    // Listen for changes
    const unsubscribe = onValue(visitorRef, (snapshot) => {
      const data = snapshot.val()
      if (data !== null) setCount(data)
      setIsLoading(false)
    }, () => {
      setError('Failed to load visitor count')
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (error) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 flex flex-col items-center"
    >
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Visitors</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={rollingCount}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 tracking-widest"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {rollingCount.toLocaleString()}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
} 