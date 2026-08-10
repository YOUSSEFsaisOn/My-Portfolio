'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'divisions', 'experience', 'projects', 'skills', 'contact']
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
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
    { href: '#divisions', label: 'Divisions' },
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 rounded-full border ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-[#E1EEF8] py-3.5 px-6 shadow-md shadow-slate-200/50' 
          : 'bg-[#E1EEF8]/45 backdrop-blur-sm border-[#E1EEF8]/60 py-4 px-6 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="#" className="flex items-center gap-3 group">
          {/* Neon/Premium Logo design matching image's home shape with 'dev' inside */}
          <div className="relative flex items-center justify-center p-1.5 overflow-visible">
            <svg
              width="36"
              height="32"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(26,16,60,0.15)] filter transition-transform duration-300 group-hover:scale-105"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#1A103C"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1A103C] font-sans">
            The DevHouse
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#1A103C] hover:text-[#3b82f6] transition-colors p-2 flex flex-col justify-between h-5 w-6 group cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-full bg-[#1A103C] transition-all group-hover:bg-[#3b82f6]"></span>
          <span className="h-0.5 w-full bg-[#1A103C] transition-all group-hover:bg-[#3b82f6]"></span>
          <span className="h-0.5 w-full bg-[#1A103C] transition-all group-hover:bg-[#3b82f6]"></span>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[99]"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-white border-l border-slate-100 z-[100] flex flex-col p-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold tracking-tight text-[#1A103C] font-sans">
                  The DevHouse
                </span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-[#1A103C] hover:text-[#3b82f6] transition-colors p-2"
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
                        ? 'text-[#1A103C]'
                        : 'text-slate-400 hover:text-[#1A103C]'
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
                  className="mt-8 w-full py-4 bg-[#1A103C] text-white text-center font-bold tracking-wide rounded-full text-base hover:bg-[#E1EEF8] hover:text-[#1A103C] transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  Let&apos;s Talk
                </motion.a>
              </div>

              <div className="mt-auto text-xs text-slate-400 border-t border-slate-100 pt-6">
                © {new Date().getFullYear()} The DevHouse. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
