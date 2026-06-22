'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Seeded pseudo-random number generator for deterministic animations
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => {
        const left = seededRandom(i * 123.45) * 100;
        const top = seededRandom(i * 678.9) * 100;
        const duration = 3 + seededRandom(i * 45.67) * 4;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
          />
        );
      })}
      {[...Array(20)].map((_, i) => {
        const left = seededRandom(i * 987.6) * 100;
        const top = seededRandom(i * 543.2) * 100;
        const duration = 4 + seededRandom(i * 21.09) * 5;

        return (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: '0 0 10px #60A5FA',
            }}
          />
        );
      })}
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#050812] to-[#080D18] overflow-hidden px-6">
      {mounted && <StarField />}

      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-4">
            <span className="text-black font-black text-2xl">DH</span>
          </div>
          <span className="text-[#60A5FA] uppercase tracking-[0.3em] text-xs font-bold">
            The DevHouse
          </span>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[1.1] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          We Build <br />
          <span className="italic">The Engine</span>
        </h1>

        <p className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We design and build custom software that becomes the operational backbone of your business — replacing fragmented tools with a single, intelligent system built around how you actually work.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300"
        >
          Book a Consultation
        </motion.button>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </div>
    </section>
  )
}
