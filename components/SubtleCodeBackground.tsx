'use client'

import { useEffect, useRef } from 'react'

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

export default function SubtleCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Initialize particles with reduced count and opacity
    for (let i = 0; i < 30; i++) {
      const type = ['dev', 'design', 'hardware', '3d'][Math.floor(Math.random() * 4)] as 'dev' | 'design' | 'hardware' | '3d'
      const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      const size = type === 'hardware' ? 11 : type === '3d' ? 12 : 11

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text,
        speed: 0.2 + Math.random() * 0.4, // Slower speed
        opacity: 0.02 + Math.random() * 0.05, // Much more subtle opacity
        type,
        size,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.02)' // More transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Different colors for different types with reduced opacity
        let color
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

        ctx.fillStyle = `${color}${particle.opacity})`
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
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  )
} 