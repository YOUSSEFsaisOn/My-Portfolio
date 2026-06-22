'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50"
    >
      <div className={`
        flex items-center justify-between px-8 py-4 rounded-[25px] transition-all duration-500
        bg-gray-900/40 backdrop-blur-xl border shadow-2xl
        ${scrolled ? 'border-white/20 bg-black/60' : 'border-white/10'}
      `}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.6)]">
             <span className="text-black font-black text-sm">DH</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            The DevHouse
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <button className="text-white hover:text-blue-400 transition-colors p-1">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
