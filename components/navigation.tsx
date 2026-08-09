'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05070c]/85 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <Link href="#" className="flex items-center gap-3 group">
          {/* Neon Logo design matching image's home shape with 'dev' inside */}
          <div className="relative flex items-center justify-center p-1.5 overflow-visible">
            <svg
              width="40"
              height="36"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.85)] filter transition-transform duration-300 group-hover:scale-105"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#ffffff"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            The DevHouse
          </span>
        </Link>

        {/* Hamburger Menu Button (visible on all screens) */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#2c58e3] transition-colors p-2 flex flex-col justify-between h-5 w-6 group cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-full bg-white transition-all group-hover:bg-[#2c58e3]"></span>
          <span className="h-0.5 w-full bg-white transition-all group-hover:bg-[#2c58e3]"></span>
          <span className="h-0.5 w-full bg-white transition-all group-hover:bg-[#2c58e3]"></span>
        </button>
      </div>

      {/* Slide-out Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#05070c]/95 border-l border-white/10 z-[100] flex flex-col p-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  The DevHouse
                </span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white hover:text-[#2c58e3] transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 my-auto">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    key={link.href}
                    href={link.href}
                    className={`text-3xl md:text-4xl font-bold tracking-tight font-sans transition-colors duration-300 ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-[#2c58e3]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                  href="#contact"
                  className="mt-8 w-full py-4 bg-[#2c58e3] text-white text-center font-bold tracking-wide rounded-full text-base hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(44,88,227,0.3)] hover:shadow-white/20"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  Let&apos;s Talk
                </motion.a>
              </div>

              <div className="mt-auto text-xs text-slate-500 border-t border-white/5 pt-6">
                © {new Date().getFullYear()} The DevHouse. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
