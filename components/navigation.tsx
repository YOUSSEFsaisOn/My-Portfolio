'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

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

        <button
          onClick={() => setIsOpen(true)}
          className="relative p-3 rounded-full bg-white/0 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Open menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300" />
            <span className="block h-0.5 w-4/5 bg-white rounded-full transition-all duration-300" />
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[99] bg-black/75 backdrop-blur-md"
            />

            <div className="fixed inset-0 z-[100] flex items-start justify-center pt-6 px-4 pointer-events-none">
              <motion.div
                initial={{ y: -20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -20, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', damping: 24, stiffness: 280 }}
                className="pointer-events-auto w-full max-w-[600px] rounded-[28px] border border-white/10 bg-[#0b0b12]/95 shadow-[0_30px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl overflow-hidden"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-1 mb-6">
                    <span className="text-xs uppercase tracking-[0.35em] text-white/35">
                      Menu
                    </span>
                    <h3 className="text-white text-lg font-medium">
                      Explore The DevHouse
                    </h3>
                  </div>

                  <div className="flex flex-col">
                    {navLinks.map((link, idx) => {
                      const IconComponent = link.icon
                      const isActive = pathname === link.href

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 py-4 px-2 rounded-2xl transition-all duration-300 group ${
                              isActive
                                ? 'text-white'
                                : 'text-white/75 hover:text-white'
                            }`}
                          >
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white/10 group-hover:border-white/15 transition-all">
                              <IconComponent size={20} />
                            </span>
                            <span className="text-[17px] font-semibold tracking-tight">
                              {link.label}
                            </span>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="mt-5 pt-5 border-t border-white/10">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-3 w-full rounded-2xl bg-white text-black py-4 font-semibold transition-all duration-300 hover:bg-white/90 shadow-lg shadow-white/10"
                    >
                      <span>Get Started</span>
                      <ArrowUpDown size={16} className="rotate-90" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}