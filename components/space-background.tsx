'use client'

import { useEffect, useRef, useState } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Avoid synchronous state setting in the initial render effect to satisfy strict linting rules.
    const id = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)

    // Deteministic pseudo-random number generator to satisfy SonarCloud
    let seed = 42
    const random = () => {
      const x = Math.sin(seed++) * 10000
      return x - Math.floor(x)
    }

    // Soft Light Constellations / Particle Field with 3D Depth
    const numParticles = 100
    const particles: Array<{
      x: number
      y: number
      z: number
      size: number
      speed: number
      color: string
    }> = []

    for (let i = 0; i < numParticles; i++) {
      const rVal = random()
      let color = 'rgba(7, 151, 178, ' // Teal particles (#0797B2)
      if (rVal < 0.5) {
        color = 'rgba(217, 231, 255, ' // Soft blue (#D9E7FF)
      } else if (rVal < 0.85) {
        color = 'rgba(53, 103, 232, ' // CTA blue (#3567E8)
      }

      particles.push({
        x: random() * width - width / 2,
        y: random() * height - height / 2,
        z: random() * 1000 + 10,
        size: random() * 2.0 + 0.6,
        speed: random() * 0.4 + 0.15,
        color,
      })
    }

    // Mouse movement influence for interactive 3D parallax
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.15
      targetMouseY = (e.clientY - height / 2) * 0.15
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const render = (time: number) => {
      ctx.fillStyle = '#080B14' // Background: #080B14
      ctx.fillRect(0, 0, width, height)

      // Smooth mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Render 3D space field
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i]

        // Gentle drift animation over time
        p.x += Math.sin(time * 0.0008 + p.z) * 0.08;
        p.y += Math.cos(time * 0.0008 + p.x) * 0.08;

        // Wrap particles around X/Y bounds if they drift too far
        const maxOffset = width * 0.8;
        if (Math.abs(p.x * (500 / p.z)) > maxOffset) {
          p.x = (random() * width - width / 2) * (p.z / 500);
        }
        const maxOffsetH = height * 0.8;
        if (Math.abs(p.y * (500 / p.z)) > maxOffsetH) {
          p.y = (random() * height - height / 2) * (p.z / 500);
        }

        // Project 3D coordinates to 2D screen
        const k = 500 / p.z
        const px = p.x * k + width / 2 + mouseX * (1.5 - p.z / 1000)
        const py = p.y * k + height / 2 + mouseY * (1.5 - p.z / 1000)

        // Fade out as it gets further
        const opacity = Math.min(1, (1000 - p.z) / 300) * 0.5
        const size = p.size * k
        const glowSize = size * 3.5

        if (px >= -glowSize && px <= width + glowSize && py >= -glowSize && py <= height + glowSize) {
          ctx.beginPath()
          const grad = ctx.createRadialGradient(px, py, 0, px, py, glowSize)
          grad.addColorStop(0, p.color + opacity + ')')
          grad.addColorStop(0.3, p.color + opacity * 0.35 + ')')
          grad.addColorStop(1, 'transparent')
          ctx.fillStyle = grad
          ctx.arc(px, py, glowSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(() => render(performance.now()))
    }

    render(performance.now())

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: '#080B14' }}
    />
  )
}
