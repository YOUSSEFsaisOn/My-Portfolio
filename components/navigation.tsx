'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/consultation', label: 'Consultation' },
    { href: '/careers', label: 'Careers' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About Us' },
  ]

  // Nav text should be white on transparent dark nav (over hero background), and dark/white appropriately
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 rounded-full border ${
        scrolled 
          ? 'bg-[#070B14]/90 backdrop-blur-md border-white/10 py-3 px-6 shadow-lg shadow-slate-950/20'
          : 'bg-[#070B14]/40 backdrop-blur-sm border-white/5 py-4 px-6'
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center p-1.5 overflow-visible">
            <svg
              width="32"
              height="28"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(79,124,255,0.3)] filter transition-transform duration-300 group-hover:scale-105"
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
                stroke="#4F7CFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#4F7CFF"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#4F7CFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#4F7CFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#4F7CFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-base font-bold tracking-tight text-white font-sans">
            The DevHouse
          </span>
        </Link>

        {/* Navigation Menu Links (Hidden on Mobile, Displayed on Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === link.href ? 'text-[#4F7CFF]' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book a Consultation Link (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/consultation"
            className="text-xs font-bold tracking-wide uppercase px-5 py-2.5 bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white rounded-[18px] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_15px_rgba(79,124,255,0.25)]"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden relative group p-2.5 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3B6DFF]/50"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-5 h-4">
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#4F7CFF] group-hover:w-4/5 origin-left"></span>
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#4F7CFF] group-hover:w-full"></span>
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:bg-[#4F7CFF] group-hover:w-4/5 origin-right"></span>
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
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#0B1020] border-l border-white/5 z-[100] flex flex-col p-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  The DevHouse
                </span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white hover:text-[#4F7CFF] transition-colors p-2 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 my-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    key={link.href}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl md:text-3xl font-bold tracking-tight font-sans transition-colors duration-300 block ${
                        pathname === link.href
                          ? 'text-white'
                          : 'text-white/50 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                >
                  <Link 
                    href="/contact"
                    className="mt-8 block w-full py-4 bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white text-center font-bold tracking-wide rounded-[20px] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Let&apos;s Talk
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto text-xs text-white/40 border-t border-white/5 pt-6">
                © {new Date().getFullYear()} The DevHouse. All rights reserved.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
