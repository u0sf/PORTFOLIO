'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

const codeSnippets = [
  // Development
  'const create = () => {',
  'function innovate() {',
  'class Developer {',
  'async function build() {',
  // Design
  'design: {',
  'color: "#3B82F6"',
  'font: "Inter"',
  'layout: "grid"',
  // Hardware
  'void setup() {',
  'pinMode(LED, OUTPUT)',
  'analogWrite(PWM, 255)',
  'Serial.begin(9600)',
  // 3D
  'mesh.vertices = [',
  'rotate(45, "Y")',
  'extrude(10)',
  'subdivision()',
]

export default function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Handle scroll effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = window.innerHeight * 0.5
      const opacity = Math.max(0, 1 - scrollPosition / maxScroll)
      setScrollOpacity(opacity)
    }
    window.addEventListener('scroll', handleScroll)

    // Create particles with different types
    const particles: {
      x: number
      y: number
      text: string
      speed: number
      opacity: number
      type: 'dev' | 'design' | 'hardware' | '3d'
      size: number
    }[] = []

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      const type = ['dev', 'design', 'hardware', '3d'][Math.floor(Math.random() * 4)] as 'dev' | 'design' | 'hardware' | '3d'
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      const size = type === 'hardware' ? 14 : type === '3d' ? 15 : 14

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text,
        speed: 0.22 + Math.random() * 0.55,
        opacity: 0.09 + Math.random() * 0.15,
        type,
        size,
      })
    }

    // Animation loop
    const animate = () => {
      // Set background color based on theme
      const bgColor = theme === 'dark' ? 'rgba(17,24,39,0.7)' : 'rgba(249,250,251,0.7)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.background = bgColor;

      particles.forEach((particle) => {
        // Different colors for different types based on theme
        let color
        if (theme === 'dark') {
          switch (particle.type) {
            case 'dev':
              color = 'rgba(156, 163, 175, ' // Gray
              break
            case 'design':
              color = 'rgba(59, 130, 246, ' // Blue
              break
            case 'hardware':
              color = 'rgba(34, 197, 94, ' // Green
              break
            case '3d':
              color = 'rgba(168, 85, 247, ' // Purple
              break
          }
        } else {
          switch (particle.type) {
            case 'dev':
              color = 'rgba(75, 85, 99, ' // Darker gray
              break
            case 'design':
              color = 'rgba(29, 78, 216, ' // Deeper blue
              break
            case 'hardware':
              color = 'rgba(21, 128, 61, ' // Deeper green
              break
            case '3d':
              color = 'rgba(107, 33, 168, ' // Deeper purple
              break
          }
        }

        ctx.fillStyle = `${color}${Math.min(0.22, particle.opacity * scrollOpacity)})`
        ctx.font = `${particle.size}px monospace`
        ctx.fillText(particle.text, particle.x, particle.y)

        particle.y += particle.speed

        if (particle.y > canvas.height) {
          particle.y = -20
          particle.x = Math.random() * canvas.width
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [theme]) // Add theme as a dependency

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: scrollOpacity }}
    />
  )
} 