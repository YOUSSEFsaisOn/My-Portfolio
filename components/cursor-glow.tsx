'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Full-screen mouse-following glow effect.
 * Creates a large radial gradient that smoothly follows the cursor
 * across the entire page, giving an immersive, ambient lighting feel.
 */
export default function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring-based following for a fluid feel
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 1 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 1 })

  // Second, slower glow for depth
  const springX2 = useSpring(mouseX, { stiffness: 25, damping: 40, mass: 2 })
  const springY2 = useSpring(mouseY, { stiffness: 25, damping: 40, mass: 2 })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY + window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary glow — blue/cyan */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(34,211,238,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Secondary glow — violet (slower, larger) */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          x: springX2,
          y: springY2,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(129,140,248,0.04) 0%, rgba(96,165,250,0.02) 40%, transparent 70%)',
        }}
      />
    </div>
  )
}
