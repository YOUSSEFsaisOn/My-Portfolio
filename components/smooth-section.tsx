'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SmoothSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  /** Parallax speed: 0 = no parallax, positive = content moves slower */
  parallaxSpeed?: number
}

/**
 * Wraps each section with a smooth scroll-triggered reveal animation
 * and optional parallax effect. Gives the site that premium,
 * buttery-smooth feel between sections.
 */
export default function SmoothSection({
  children,
  className = '',
  id,
  parallaxSpeed = 0,
}: SmoothSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Parallax: content slides up/down relative to scroll
  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed * 60, -parallaxSpeed * 60])

  // Scale: subtle zoom effect
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.97, 1, 1, 0.97])

  // Opacity: fade edges
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4])

  return (
    <div ref={ref} id={id} className={className}>
      <motion.div style={{ y, scale, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}
