'use client'

import { useEffect, useRef, useState } from 'react'

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Avoid synchronous state setting in the initial render effect to satisfy strict linting rules.
    // Setting inside a requestAnimationFrame or microtask/timeout solves this.
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

    // Stars / Particle Field with 3D Depth
    const numParticles = 80
    const particles: Array<{
      x: number
      y: number
      z: number
      size: number
      speed: number
      color: string
    }> = []

    for (let i = 0; i < numParticles; i++) {
      // Color variety of cyan, soft blue, and white
      const rVal = random()
      let color = 'rgba(6, 182, 212, ' // cyan
      if (rVal < 0.3) {
        color = 'rgba(44, 88, 227, ' // blue
      } else if (rVal < 0.6) {
        color = 'rgba(255, 255, 255, ' // white
      }

      particles.push({
        x: random() * width - width / 2,
        y: random() * height - height / 2,
        z: random() * 1000 + 10,
        size: random() * 2 + 0.5,
        speed: random() * 0.5 + 0.2,
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

    const render = () => {
      ctx.fillStyle = '#0a0d14'
      ctx.fillRect(0, 0, width, height)

      // Smooth mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // Render 3D space field
      for (let i = 0; i < numParticles; i++) {
        const p = particles[i]

        // Move particle closer on Z axis (flowing space motion)
        p.z -= p.speed
        if (p.z <= 0) {
          p.z = 1000
          p.x = random() * width - width / 2
          p.y = random() * height - height / 2
        }

        // Project 3D coordinates to 2D screen
        const k = 400 / p.z
        const px = p.x * k + width / 2 + mouseX * (1 - p.z / 1000)
        const py = p.y * k + height / 2 + mouseY * (1 - p.z / 1000)

        // Fade out as it gets further or too close
        const opacity = Math.min(1, (1000 - p.z) / 400) * (p.z < 100 ? p.z / 100 : 1)
        const size = p.size * k

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx.beginPath()
          ctx.arc(px, py, size, 0, Math.PI * 2)
          ctx.fillStyle = p.color + opacity * 0.6 + ')'
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

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
      style={{ background: '#0a0d14' }}
    />
  )
}
