'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { parseColor, getAnimationRandom } from '@/lib/trail-utils'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
}

interface MouseTrailProps {
  variant?: 'line' | 'dots' | 'particles' | 'pixel'
  fillType?: 'solid' | 'gradient'
  trailColor?: string
  trailColorEnd?: string
  trailLength?: number
  lineWidth?: number
  fadeOut?: boolean
  smoothing?: number
  dotSize?: number
  dotSpacing?: number
  particleCount?: number
  particleSize?: number
  spreadAngle?: number
  drift?: number
  pixelSize?: number
  snapToGrid?: boolean
  blendMode?: GlobalCompositeOperation
  autoFade?: boolean
  fadeDuration?: number
  style?: React.CSSProperties
}

export default function MouseTrail(props: MouseTrailProps) {
  const {
    variant = 'line',
    fillType = 'solid',
    trailColor = '#0099FF',
    trailColorEnd = '#FF00FF',
    trailLength = 20,
    lineWidth = 3,
    fadeOut = true,
    smoothing = 0.3,
    dotSize = 6,
    dotSpacing = 10,
    particleCount = 6,
    particleSize = 3,
    spreadAngle = 30,
    drift = 0.4,
    pixelSize = 6,
    snapToGrid = true,
    blendMode = 'source-over',
    autoFade = true,
    fadeDuration = 2,
    style
  } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const trailPointsRef = useRef<Array<{ x: number, y: number, life: number }>>([])
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)

  const isInView = useInView(containerRef, { amount: 0.1 })
  const shouldAnimate = isInView

  // --- Resize ---
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  // --- Pointer events ---
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const handlePointerMove = (e: PointerEvent) => {
      const containerRect = container.getBoundingClientRect()
      if (e.clientX < containerRect.left || e.clientX > containerRect.right ||
          e.clientY < containerRect.top || e.clientY > containerRect.bottom) {
        return
      }

      const canvasRect = canvas.getBoundingClientRect()
      const x = e.clientX - canvasRect.left
      const y = e.clientY - canvasRect.top

      const points = trailPointsRef.current
      const last = points[points.length - 1]

      if (variant === 'dots' && last) {
        const dx = x - last.x
        const dy = y - last.y
        if (Math.hypot(dx, dy) < dotSpacing) return
      }

      const s = Math.max(0.001, 1 - smoothing)
      const sx = last ? last.x + (x - last.x) * s : x
      const sy = last ? last.y + (y - last.y) * s : y

      points.push({ x: sx, y: sy, life: 1 })

      if (points.length > trailLength) {
        points.splice(0, points.length - trailLength)
      }

      if (variant === 'particles' && last) {
        const dx = sx - last.x
        const dy = sy - last.y
        const speed = Math.hypot(dx, dy)
        if (speed > 2) {
          const angle = Math.atan2(dy, dx)
          const spread = spreadAngle * Math.PI / 180
          for (let i = 0; i < particleCount; i++) {
            const a = angle + (getAnimationRandom() - 0.5) * spread
            const v = speed * 0.1 + getAnimationRandom() * 2
            particlesRef.current.push({
              x: sx,
              y: sy,
              vx: Math.cos(a) * v,
              vy: Math.sin(a) * v,
              life: 0.8 + getAnimationRandom() * 0.4,
              size: particleSize + getAnimationRandom() * 1.5
            })
          }
        }
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [variant, dotSpacing, smoothing, trailLength, spreadAngle, particleCount, particleSize])

  // --- Animation loop ---
  useEffect(() => {
    if (!shouldAnimate) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = undefined
      }
      return
    }

    timeRef.current = performance.now()

    const animate = () => {
      const now = performance.now()
      let dt = (now - timeRef.current) / 1000
      dt = Math.max(0, Math.min(dt, 0.05))
      timeRef.current = now

      const canvas = canvasRef.current
      const ctx = canvas?.getContext('2d')
      if (!canvas || !ctx) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.globalCompositeOperation = blendMode
      ctx.clearRect(0, 0, rect.width, rect.height)

      const rgbStart = parseColor(trailColor)
      const rgbEnd = parseColor(trailColorEnd)
      const points = trailPointsRef.current

      // Update lives
      if (autoFade && points.length) {
        const decay = dt / Math.max(0.001, fadeDuration)
        for (let i = points.length - 1; i >= 0; i--) {
          points[i].life -= decay
          if (points[i].life <= 0) points.splice(i, 1)
        }
      }

      // Draw particles
      const particles = particlesRef.current
      if (particles.length) {
        const damping = Math.pow(0.98, dt * 60)
        const g = drift * 60 * 0.001 * dt * 60
        const decayP = 1.6 * dt
        for (let i = particles.length - 1; i >= 0; i--) {
          const pt = particles[i]
          pt.x += pt.vx * dt * 60
          pt.y += pt.vy * dt * 60
          pt.vx *= damping
          pt.vy = pt.vy * damping + g
          pt.life -= decayP
          if (pt.life <= 0) {
            particles[i] = particles[particles.length - 1]
            particles.pop()
          } else {
            const alpha = Math.max(0, Math.min(1, pt.life))
            ctx.fillStyle = `rgba(${rgbStart.r}, ${rgbStart.g}, ${rgbStart.b}, ${alpha})`
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Draw main trail
      if (points.length >= 1) {
        points.forEach((pt, i) => {
          const n = points.length
          const tVal = n <= 1 ? 1 : i / (n - 1)
          const a = fadeOut ? 1 - (1 - tVal) * (1 - tVal) : 1
          const alpha = a * (autoFade ? pt.life : 1)
          const finalAlpha = Math.max(0, Math.min(1, alpha))

          let colorString = `rgba(${rgbStart.r}, ${rgbStart.g}, ${rgbStart.b}, ${finalAlpha})`
          if (fillType === 'gradient') {
            const r = Math.floor(rgbStart.r + (rgbEnd.r - rgbStart.r) * tVal)
            const g = Math.floor(rgbStart.g + (rgbEnd.g - rgbStart.g) * tVal)
            const b = Math.floor(rgbStart.b + (rgbEnd.b - rgbStart.b) * tVal)
            colorString = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`
          }

          if (variant === 'dots') {
            const r = dotSize * (fadeOut ? 0.3 + 0.7 * finalAlpha : 1)
            ctx.fillStyle = colorString
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2)
            ctx.fill()
          } else if (variant === 'pixel') {
            const x = snapToGrid ? Math.round(pt.x / pixelSize) * pixelSize : pt.x
            const y = snapToGrid ? Math.round(pt.y / pixelSize) * pixelSize : pt.y
            const s = pixelSize * (fadeOut ? 0.6 + 0.4 * finalAlpha : 1)
            ctx.fillStyle = colorString
            ctx.fillRect(x - s / 2, y - s / 2, s, s)
          } else if (i > 0) {
            const p1 = points[i - 1]
            ctx.strokeStyle = colorString
            const widthScale = (variant === 'particles') ? 0.5 * finalAlpha : (fadeOut ? 0.3 + 0.7 * finalAlpha : 1)
            ctx.lineWidth = Math.max(1, lineWidth * widthScale)
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(pt.x, pt.y)
            ctx.stroke()
          } else if (points.length === 1 && variant === 'line') {
            ctx.fillStyle = colorString
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, Math.max(1, lineWidth / 2), 0, Math.PI * 2)
            ctx.fill()
          }
        })
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [shouldAnimate, trailColor, trailColorEnd, variant, fillType, fadeOut, dotSize, pixelSize, snapToGrid, lineWidth, autoFade, fadeDuration, drift, blendMode])

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        width: '100%',
        height: '100%',
        position: 'relative',
        pointerEvents: 'none'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
        aria-label="Interactive mouse trail animation"
        role="img"
      />
    </div>
  )
}
