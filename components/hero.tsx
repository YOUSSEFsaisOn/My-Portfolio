'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
    
    setTimeout(() => {
      setGlowPos({ x, y })
    }, 80)
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden cursor-none"
    >
      {/* Mouse-following glow - slightly behind & below */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{
          left: glowPos.x - 200 + 25,
          top: glowPos.y - 200 + 35,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(59,130,246,0.05) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(12px)',
          opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 0.8,
          transition: 'left 0.4s ease-out, top 0.4s ease-out, opacity 0.3s ease',
        }}
      />

      {/* Secondary subtle glow (more behind) */}
      <div
        className="pointer-events-none absolute z-[0]"
        style={{
          left: glowPos.x - 150 + 45,
          top: glowPos.y - 150 + 55,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 0.6,
          transition: 'left 0.6s ease-out, top 0.6s ease-out',
        }}
      />

      {/* Custom cursor dot */}
      <div
        className="pointer-events-none absolute z-[2] transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
        }}
      >
        <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-70 shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
        <div className="absolute inset-[-6px] border border-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: 80 + (mousePos.y * 0.02),
            left: 40 + (mousePos.x * 0.02),
            transition: 'top 0.8s ease-out, left 0.8s ease-out',
          }}
        />
        <div
          className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: 40 + (mousePos.y * -0.015),
            right: 40 + (mousePos.x * -0.015),
            transition: 'bottom 0.8s ease-out, right 0.8s ease-out',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]">
          Yousef Mohamed
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Frontend Developer | React.js & Next.js Specialist
        </p>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting responsive, interactive, and user-friendly web applications with modern JavaScript frameworks. Passionate about clean code, performance optimization, and creating seamless digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#contact"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 group"
          >
            Get In Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-cyan-400/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400/60 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            View GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a
            href="mailto:1234yusid@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
            1234yusid@gmail.com
          </a>
          <a
            href="tel:+201107361400"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
            +20 110 736 1400
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            Cairo, Egypt
          </div>
        </div>
      </div>

      {/* Scroll Indicator - bara el-content w taht shwai */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}