'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

// --- Helpers ---
function parseColor(col: string) {
  if (col.startsWith('#')) {
    let hex = col.slice(1)
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('')
    }
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    }
  } else if (col.startsWith('rgb')) {
    const m = col.match(/\d+/g)
    return m ? { r: Number(m[0]), g: Number(m[1]), b: Number(m[2]) } : { r: 0, g: 0, b: 0 }
  }
  return { r: 0, g: 0, b: 0 }
}

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
  const timeRef = useRef(performance.now())
  
  const isInView = useInView(containerRef, { amount: 0.1 })
  const shouldAnimate = isInView

  const propsRef = useRef(props)
  useEffect(() => {
    propsRef.current = props
  }, [props])

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
      if (e.clientX >= containerRect.left && e.clientX <= containerRect.right &&
          e.clientY >= containerRect.top && e.clientY <= containerRect.bottom) {
        
        const canvasRect = canvas.getBoundingClientRect()
        const x = e.clientX - canvasRect.left
        const y = e.clientY - canvasRect.top
        
        const p = propsRef.current
        const points = trailPointsRef.current
        const last = points[points.length - 1]

        if (p.variant === 'dots' && last) {
          const dx = x - last.x
          const dy = y - last.y
          if (Math.hypot(dx, dy) < (p.dotSpacing ?? 10)) return
        }

        const s = Math.max(0.001, 1 - (p.smoothing ?? 0.3))
        const sx = last ? last.x + (x - last.x) * s : x
        const sy = last ? last.y + (y - last.y) * s : y
        
        points.push({ x: sx, y: sy, life: 1 })

        if (points.length > (p.trailLength ?? 20)) {
          points.splice(0, points.length - (p.trailLength ?? 20))
        }

        if (p.variant === 'particles' && last) {
          const dx = sx - last.x
          const dy = sy - last.y
          const speed = Math.hypot(dx, dy)
          if (speed > 2) {
            const angle = Math.atan2(dy, dx)
            const spread = (p.spreadAngle ?? 30) * Math.PI / 180
            for (let i = 0; i < (p.particleCount ?? 6); i++) {
              const a = angle + (Math.random() - 0.5) * spread
              const v = speed * 0.1 + Math.random() * 2
              particlesRef.current.push({
                x: sx,
                y: sy,
                vx: Math.cos(a) * v,
                vy: Math.sin(a) * v,
                life: 0.8 + Math.random() * 0.4,
                size: (p.particleSize ?? 3) + Math.random() * 1.5
              })
            }
          }
        }
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

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
      if (!canvas) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const p = propsRef.current
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      ctx.globalCompositeOperation = p.blendMode ?? 'source-over'
      ctx.clearRect(0, 0, rect.width, rect.height)

      const rgbStart = parseColor(trailColor)
      const rgbEnd = parseColor(trailColorEnd)

      const getRgba = (a: number, t: number) => {
        const alpha = Math.max(0, Math.min(1, a))
        if (p.fillType === 'gradient') {
          const r = (rgbStart.r + (rgbEnd.r - rgbStart.r) * t) | 0
          const g = (rgbStart.g + (rgbEnd.g - rgbStart.g) * t) | 0
          const b = (rgbStart.b + (rgbEnd.b - rgbStart.b) * t) | 0
          return `rgba(${r}, ${g}, ${b}, ${alpha})`
        }
        return `rgba(${rgbStart.r}, ${rgbStart.g}, ${rgbStart.b}, ${alpha})`
      }

      const points = trailPointsRef.current

      if (p.autoFade && points.length) {
        const decay = dt / Math.max(0.001, p.fadeDuration ?? 2)
        for (let i = points.length - 1; i >= 0; i--) {
          points[i].life -= decay
          if (points[i].life <= 0) points.splice(i, 1)
        }
      }

      const getAlpha = (i: number, ptLife: number) => {
        const n = points.length
        let a = p.fadeOut ? 0 : 1
        if (p.fadeOut) {
          const t = n <= 1 ? 1 : i / (n - 1)
          a = 1 - (1 - t) * (1 - t)
        }
        return a * (p.autoFade ? ptLife : 1)
      }

      const particles = particlesRef.current
      if (particles.length) {
        const damping = Math.pow(0.98, dt * 60)
        const g = (p.drift ?? 0.4) * 60 * 0.001 * dt * 60
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
            ctx.fillStyle = getRgba(pt.life, 1 - pt.life)
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, pt.size * pt.life, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      if (points.length >= 1) {
        if (p.variant === 'dots') {
          for (let i = 0; i < points.length; i++) {
            const pt = points[i]
            const a = getAlpha(i, pt.life)
            const r = (p.dotSize ?? 6) * (p.fadeOut ? 0.3 + 0.7 * a : 1)
            ctx.fillStyle = getRgba(a, i / (points.length - 1 || 1))
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2)
            ctx.fill()
          }
        } else if (p.variant === 'pixel') {
          for (let i = 0; i < points.length; i++) {
            const pt = points[i]
            const pSize = p.pixelSize ?? 6
            const x = p.snapToGrid ? Math.round(pt.x / pSize) * pSize : pt.x
            const y = p.snapToGrid ? Math.round(pt.y / pSize) * pSize : pt.y
            const a = getAlpha(i, pt.life)
            const s = pSize * (p.fadeOut ? 0.6 + 0.4 * a : 1)
            ctx.fillStyle = getRgba(a, i / (points.length - 1 || 1))
            ctx.fillRect(x - s / 2, y - s / 2, s, s)
          }
        } else if (p.variant === 'particles') {
          if (points.length > 1) {
            for (let i = 1; i < points.length; i++) {
              const p1 = points[i - 1]
              const p2 = points[i]
              const a = 0.15 * getAlpha(i, p2.life)
              ctx.strokeStyle = getRgba(a, i / (points.length - 1 || 1))
              ctx.lineWidth = Math.max(1, (p.lineWidth ?? 3) * 0.5 * a)
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        } else {
          // line
          if (points.length < 2) {
            const pt = points[0]
            const a = getAlpha(0, pt.life)
            ctx.fillStyle = getRgba(a, 0)
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, Math.max(1, (p.lineWidth ?? 3) / 2), 0, Math.PI * 2)
            ctx.fill()
          } else {
            for (let i = 1; i < points.length; i++) {
              const p1 = points[i - 1]
              const p2 = points[i]
              const a = getAlpha(i, p2.life)
              const widthScale = p.fadeOut ? 0.3 + 0.7 * a : 1
              ctx.strokeStyle = getRgba(a, i / (points.length - 1 || 1))
              ctx.lineWidth = Math.max(1, (p.lineWidth ?? 3) * widthScale)
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        }
      }
      
      rafRef.current = requestAnimationFrame(animate)
    }
    
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [shouldAnimate, trailColor, trailColorEnd])

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
