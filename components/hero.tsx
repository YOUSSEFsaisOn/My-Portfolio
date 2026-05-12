'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="orb orb-animation w-[500px] h-[500px] bg-blue-600/10 -top-20 -left-20" />
      <div className="orb orb-animation w-[400px] h-[400px] bg-purple-600/10 top-1/2 -right-20 delay-700" />
      <div className="orb orb-animation w-[600px] h-[600px] bg-cyan-600/5 -bottom-40 left-1/2 -translate-x-1/2 delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-4 py-1.5 glass rounded-full text-white/80 text-sm font-medium"
        >
          👋 Welcome to my portfolio
        </motion.div>

        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="block text-white">Yousef Mohamed</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-[gradient-shift_4s_ease_infinite] bg-[length:200%_auto]">
              Frontend Developer
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting high-performance, visually stunning digital experiences with React, Next.js, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
          >
            View GitHub
          </a>
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  )
}
