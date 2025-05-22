import * as React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import CustomCursor from '@/components/CustomCursor'
import SplashScreen from '@/components/SplashScreen'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Youssef - Developer & 3D Artist',
  description: 'Personal portfolio showcasing programming, hardware projects, and 3D modeling work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <BackToTop />
          <footer className="w-full py-6 flex justify-center items-center bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              LinkedIn
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
} 