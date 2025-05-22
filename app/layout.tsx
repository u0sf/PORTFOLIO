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
        </ThemeProvider>
      </body>
    </html>
  )
} 