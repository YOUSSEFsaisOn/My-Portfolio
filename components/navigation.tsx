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

// Apple-style "swift" easing — snappy start, soft settle
const swift = [0.32, 0.72, 0, 1] as const

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

  // Escape to close, lock body scroll while menu is open
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/consultation', label: 'Consultation', icon: MessageSquare },
    { href: '/careers', label: 'Careers', icon: Briefcase },
    { href: '/portfolio', label: 'Portfolio', icon: Monitor },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/about', label: 'About Us', icon: Users },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    // Fragment root — the nav pill and the dropdown menu are siblings.
    // The menu is NOT nested inside <nav>, so it can't inherit or be
    // constrained by the pill's small size/shape.
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: swift }}
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
                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] transition-transform duration-300 ease-out group-hover:scale-105"
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
            <span className="text-[17px] font-medium tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 ease-out">
              ultron
            </span>
          </Link>

          {/* Hamburger / Close toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="group relative p-3 rounded-full bg-white/0 hover:bg-white/[0.08] active:bg-white/[0.14] active:scale-90 transition-[background-color,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative flex flex-col justify-between w-6 h-4">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: swift }}
                className="block h-0.5 w-full bg-white/90 group-hover:bg-white rounded-full origin-center transition-colors duration-200"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.16, ease: swift }}
                className="block h-0.5 w-full bg-white/90 group-hover:bg-white rounded-full transition-colors duration-200"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '80%' }}
                transition={{ duration: 0.28, ease: swift }}
                className="block h-0.5 bg-white/90 group-hover:bg-white rounded-full origin-center transition-colors duration-200"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Dropdown menu — lives outside <nav>, sibling in the tree.
          No dark full-page backdrop: the click-catcher is fully
          transparent so nothing behind the panel gets dimmed or blurred. */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible click-catcher, closes menu on outside click */}
            <div
              onClick={closeMenu}
              className="fixed inset-0 z-[99]"
              aria-hidden="true"
            />

            {/* Panel — centered, fixed width, never stretches full-bleed */}
            <div className="fixed inset-x-0 top-[4.5rem] z-[100] flex justify-center px-4 pointer-events-none">
              <motion.div
                ref={panelRef}
                initial={{ y: -12, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -8, opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.22,
                  ease: swift,
                  exit: { duration: 0.14, ease: [0.4, 0, 1, 1] },
                }}
                onMouseLeave={closeMenu}
                className="pointer-events-auto w-full max-w-[640px] rounded-[28px] border border-white/15 bg-gradient-to-b from-black/70 via-black/50 to-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl overflow-hidden"
              >
                {/* Links */}
                <div className="px-4 py-4">
                  {navLinks.map((link, idx) => {
                    const IconComponent = link.icon
                    const isActive = pathname === link.href

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.025, duration: 0.2, ease: swift }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`flex items-center gap-4 py-4 px-5 rounded-2xl transition-all duration-150 ease-out group ${
                            isActive
                              ? 'bg-white/25 text-white'
                              : 'text-white/90 hover:text-white hover:bg-white/15'
                          }`}
                        >
                          <IconComponent
                            size={22}
                            strokeWidth={1.75}
                            className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="text-[17px] font-semibold tracking-tight">
                            {link.label}
                          </span>
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Footer button */}
                <div className="px-4 pb-4 pt-2 border-t border-white/15">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full rounded-2xl bg-white text-black py-3.5 text-[15px] font-semibold tracking-tight shadow-lg shadow-black/30 hover:bg-white/90 hover:shadow-xl active:scale-[0.98] transition-all duration-150 ease-out"
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
    </>
  )
}