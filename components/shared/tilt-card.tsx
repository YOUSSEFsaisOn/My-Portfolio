'use client'

import { useRef, useCallback } from "react"
import { motion, useMotionValue, animate } from "framer-motion"

export default function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      rotateY.set(((x - centerX) / centerX) * 6)
      rotateX.set(((centerY - y) / centerY) * 6)
    },
    [rotateX, rotateY],
  )

  const handleMouseLeave = useCallback(() => {
    animate(rotateX, 0, { duration: 0.4 })
    animate(rotateY, 0, { duration: 0.4 })
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
