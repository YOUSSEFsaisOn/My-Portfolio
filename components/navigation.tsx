'use client'

import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  MessageSquare,
  Briefcase,
  Monitor,
  Mail,
  Users,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

const SWIFT = [0.32, 0.72, 0, 1] as const

const NAV_LINKS: { href: string; label: string; icon: LucideIcon; exact?: boolean }[] = [
  { href: '/', label: 'Home', icon: Home, exact: true },
  { href: '/consultation', label: 'Consultation', icon: MessageSquare },
  { href: '/careers', label: 'Careers', icon: Briefcase },
  { href: '/portfolio', label: 'Portfolio', icon: Monitor },
  { href: '/contact', label: 'Contact Us', icon: Mail },
  { href: '/about', label: 'About Us', icon: Users },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const triggerRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + Escape + focus first link
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => firstLinkRef.current?.focus(), 50)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setTimeout(() => triggerRef.current?.focus(), 0)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (triggerRef.current?.contains(t)) return
      setIsOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [isOpen])

  const toggle = useCallback(() => setIsOpen((p) => !p), [])
  const close = useCallback(() => setIsOpen(false), [])

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      {/* Nav Pill */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: SWIFT }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-black/45 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3 px-5'
            : 'bg-black/30 backdrop-blur-md border-white/10 shadow-lg shadow-black/30 py-3.5 px-5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={close}>
            <svg
              width="36"
              height="32"
              viewBox="0 0 100 90"
              fill="none"
              className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M50 10 L85 45 L85 80 L15 80 L15 45 Z" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 43 L42 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M48 55 C48 46, 58 46, 58 55 L48 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M48 55 C48 64, 58 64, 58 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M64 45 L70 62 L76 45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[17px] font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">
              ultron
            </span>
          </Link>

          {/* Hamburger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={toggle}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="group p-3 rounded-full hover:bg-white/[0.08] active:bg-white/[0.14] active:scale-90 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <div className="flex flex-col justify-between w-6 h-4">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: SWIFT }}
                className="block h-0.5 w-full bg-white/90 group-hover:bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.16, ease: SWIFT }}
                className="block h-0.5 w-full bg-white/90 group-hover:bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28, ease: SWIFT }}
                className="block h-0.5 w-[80%] bg-white/90 group-hover:bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-x-0 top-[4.5rem] z-[100] flex justify-center px-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ y: -12, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -8, opacity: 0, scale: 0.98, transition: { duration: 0.14, ease: [0.4, 0, 1, 1] } }}
              transition={{ duration: 0.22, ease: SWIFT }}
              className="pointer-events-auto w-full max-w-[640px] rounded-[28px] border border-white/15 bg-gradient-to-b from-black/70 via-black/50 to-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl overflow-hidden"
            >
              <nav className="px-4 py-4">
                {NAV_LINKS.map((link, i) => {
                  const Icon = link.icon
                  const active = isActive(link.href, link.exact)

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.025, duration: 0.2, ease: SWIFT }}
                    >
                      <Link
                        href={link.href}
                        ref={i === 0 ? firstLinkRef : null}
                        onClick={close}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-center gap-4 py-4 px-5 rounded-2xl outline-none transition-all duration-150 group focus-visible:ring-2 focus-visible:ring-white/40 ${
                          active
                            ? 'bg-white/25 text-white'
                            : 'text-white/90 hover:text-white hover:bg-white/15'
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.75} className="shrink-0 opacity-90 group-hover:opacity-100" />
                        <span className="text-[17px] font-semibold tracking-tight">{link.label}</span>
                        {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="px-4 pb-4 pt-2 border-t border-white/15">
                <Link
                  href="/contact"
                  onClick={close}
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-white text-black py-3.5 text-[15px] font-semibold tracking-tight shadow-lg shadow-black/30 hover:bg-white/90 active:scale-[0.98] transition-all"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}