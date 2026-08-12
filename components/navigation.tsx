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
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 rounded-full border ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-slate-700/50 py-3.5 px-6 shadow-lg shadow-black/40' 
          : 'bg-slate-900/40 backdrop-blur-sm border-slate-700/30 py-4 px-6 shadow-md'
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center p-1.5 overflow-visible">
            <svg
              width="36"
              height="32"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] filter transition-transform duration-300 group-hover:scale-105"
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
          <span className="text-lg font-semibold tracking-tight text-white font-sans">
            The DevHouse
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-3 rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400/50"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-4">
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:w-4/5 origin-left"></span>
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
            <span className="block h-0.5 w-full bg-white rounded-full transition-all duration-300 group-hover:w-4/5 origin-right"></span>
          </div>
        </button>
      </div>

      {/* Slide-out Central Floating Menu Modal/Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with dark gradient overlay matching image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[99]"
            />
            
            {/* Centered Modal Content Card matching the image design */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="pointer-events-auto w-full max-w-xl bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 shadow-2xl shadow-black/80 flex flex-col max-h-[90vh] overflow-y-auto"
              >
                {/* Navigation Links List */}
                <div className="flex flex-col divide-y divide-slate-800/60 my-2">
                  {navLinks.map((link, idx) => {
                    const IconComponent = link.icon
                    const isActive = pathname === link.href

                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.href}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center gap-4 py-4 px-4 rounded-2xl transition-all duration-200 group ${
                            isActive
                              ? 'bg-white/10 text-white font-medium'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="p-2 rounded-xl bg-slate-800/80 text-slate-300 group-hover:text-white group-hover:bg-slate-700 transition-colors">
                            <IconComponent size={20} />
                          </span>
                          <span className="text-base font-medium tracking-wide">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Bottom Action Button matching 'Get Started' style */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-6 pt-4"
                >
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-950 font-semibold tracking-wide rounded-2xl text-base hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Started</span>
                    <ArrowUpDown size={16} className="rotate-90 text-slate-700" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}