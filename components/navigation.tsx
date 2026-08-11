'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { swiftScrollTo } from '@/lib/scroll'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const sectionOffsets = useRef<{ [key: string]: number }>({})

  useEffect(() => {
    const sections = ['about', 'divisions', 'experience', 'projects', 'skills', 'contact']

    const updateOffsets = () => {
      const offsets: { [key: string]: number } = {}
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          offsets[section] = el.offsetTop
        }
      })
      sectionOffsets.current = offsets
    }

    updateOffsets()

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const scrollY = window.scrollY
      for (const section of [...sections].reverse()) {
        const top = sectionOffsets.current[section]
        if (top !== undefined && scrollY >= top - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateOffsets, { passive: true })

    const timer = setTimeout(updateOffsets, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateOffsets)
      clearTimeout(timer)
    }
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      swiftScrollTo(Math.max(0, el.offsetTop - 100))
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
          ? 'bg-[#0D4982]/85 backdrop-blur-md border-[#115EA5]/60 py-3.5 px-6 shadow-md shadow-slate-900/50' 
          : 'bg-[#0D4982]/45 backdrop-blur-sm border-[#115EA5]/30 py-4 px-6 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center p-1.5 overflow-visible">
            <svg
              width="36"
              height="32"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(53,103,232,0.3)] filter transition-transform duration-300 group-hover:scale-105"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#FFFFFF"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#3567E8"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#3567E8"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#3567E8"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#3567E8"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#3567E8"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-sans">
            The DevHouse
          </span>
        </Link>

        {/* Hamburger Menu Button */}
      <button
  onClick={() => setIsOpen(true)}
  className="relative group p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3567E8]/50"
  aria-label="Toggle menu"
>
  <div className="flex flex-col justify-between w-6 h-5">
    <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#3567E8] group-hover:w-4/5 origin-left"></span>
    <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#3567E8] group-hover:w-full"></span>
    <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#3567E8] group-hover:w-4/5 origin-right"></span>
  </div>
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
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#0D365F] border-l border-[#123C6A] z-[100] flex flex-col p-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  The DevHouse
                </span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white hover:text-[#3567E8] transition-colors p-2 cursor-pointer"
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
                        ? 'text-white'
                        : 'text-[#CEDDEA]/50 hover:text-white'
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
                  className="mt-8 w-full py-4 bg-[#3567E8] text-white text-center font-bold tracking-wide rounded-full text-base hover:bg-[#D9E7FF] hover:text-[#0D365F] transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  Let&apos;s Talk
                </motion.a>
              </div>

              <div className="mt-auto text-xs text-[#CEDDEA]/60 border-t border-[#123C6A]/60 pt-6">
                © {new Date().getFullYear()} The DevHouse. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
