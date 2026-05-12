'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex justify-between items-center px-6 py-2 rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/80 backdrop-blur-md border-white/10 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`}>
          <Link href="#" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
            YOUSEF<span className="text-blue-500">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
            <Link 
              href="#contact"
              className="ml-4 px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="#contact"
                className="mt-4 px-6 py-3 bg-white text-black text-center font-bold rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
