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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50"
    >
      <div className={`transition-all duration-500 flex justify-between items-center px-8 py-4 rounded-[2rem] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${
        scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#de0000] rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-white font-black text-xl italic">Y</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-[#050812] font-serif">
            YOUSEF<span className="text-[#de0000]">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#de0000]'
                  : 'text-slate-500 hover:text-[#050812]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-6 py-2 bg-[#de0000] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#050812] transition-all duration-300"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#050812] hover:text-[#de0000] transition-colors p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-0 h-screen w-full bg-white z-50 flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black tracking-tighter text-[#050812] font-serif">
                YOUSEF<span className="text-[#de0000]">.</span>
              </span>
              <button onClick={() => setIsOpen(false)} className="text-[#050812]">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-4xl font-black tracking-tighter uppercase font-serif ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-[#de0000]'
                      : 'text-[#050812]'
                  }`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="mt-8 w-full py-6 bg-[#de0000] text-white text-center font-black uppercase tracking-widest rounded-2xl text-xl"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
