'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
          👋 Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          Yousef Mohamed
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Frontend Developer | React.js & Next.js Specialist
        </p>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting responsive, interactive, and user-friendly web applications with modern JavaScript frameworks. Passionate about clean code, performance optimization, and creating seamless digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 group"
          >
            Get In Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-cyan-400/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
