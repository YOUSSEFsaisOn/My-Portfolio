'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Home,
  MessageSquare,
  Briefcase,
  Monitor,
  Mail,
  Users,
  ArrowUpDown
} from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/consultation', label: 'Consultation', icon: MessageSquare },
    { href: '/careers', label: 'Careers', icon: Briefcase },
    { href: '/portfolio', label: 'Portfolio', icon: Monitor },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/about', label: 'About Us', icon: Users },
  ]

  // Helper to close menu
  const closeMenu = () => setIsOpen(false)

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full border transition-all duration-300 ${
        scrolled
          ? 'bg-black/45 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3 px-5'
          : 'bg-black/30 backdrop-blur-md border-white/10 shadow-lg shadow-black/30 py-3.5 px-5'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center">
            <svg
              width="36"
              height="32"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105"
            >
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#FFFFFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-[17px] font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">
            The DevHouse
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative p-3 rounded-full border border-white/10 bg-white/0 hover:bg-white/10 hover:border-white/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Open menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-200" />
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-200" />
            <span className="block h-0.5 w-4/5 bg-white rounded-full transition-all duration-200" />
          </div>
        </button>
      </div>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop – click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-md"
            />

            {/* Panel */}
            <div className="fixed inset-0 z-[100] flex items-start justify-center pt-6 px-4 pointer-events-none">
              <motion.div
                ref={panelRef}
                initial={{ y: -16, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -16, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                // Close when mouse leaves the whole panel
                onMouseLeave={closeMenu}
                className="pointer-events-auto w-full max-w-[600px] rounded-[28px] border border-white/12 bg-[#05060d]/95 shadow-[0_30px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl overflow-hidden"
              >
                {/* Header + close */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/35">
                      Menu
                    </span>
                    <span className="text-sm text-white/70">
                      Explore The DevHouse
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Links */}
                <div className="px-6 py-3">
                  {navLinks.map((link, idx) => {
                    const IconComponent = link.icon
                    const isActive = pathname === link.href

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`flex items-center gap-4 py-3.5 px-2 rounded-2xl transition-all duration-150 group ${
                            isActive
                              ? 'bg-white/10 text-white shadow-sm shadow-black/40'
                              : 'text-white/75 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/12 bg-white/5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:translate-x-[1px] transition-all">
                            <IconComponent size={20} />
                          </span>
                          <span className="text-[16px] font-semibold tracking-tight group-hover:translate-x-[2px] transition-transform">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Footer button */}
                <div className="px-6 pb-5 pt-3 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full rounded-2xl bg-white text-black py-3.5 text-[15px] font-semibold tracking-tight shadow-lg shadow-black/40 hover:bg-white/90 hover:shadow-xl transition-all duration-150"
                  >
                    <span>Get Started</span>
                    <ArrowUpDown size={16} className="rotate-90" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}