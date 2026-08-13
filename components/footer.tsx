'use client'

import Link from 'next/link'
import { 
  Home, 
  MessageSquare, 
  Briefcase, 
  Monitor, 
  Mail, 
  Users, 
  ArrowUpRight 
} from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/consultation', label: 'Consultation', icon: MessageSquare },
    { href: '/careers', label: 'Careers', icon: Briefcase },
    // { href: '/portfolio', label: 'Portfolio', icon: Monitor },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    // { href: '/about', label: 'About Us', icon: Users },
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-[#0B1020] to-[#070B14] text-white border-t border-white/5 pt-16 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1.5 overflow-visible">
              <svg
                width="36"
                height="32"
                viewBox="0 0 100 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_8px_rgba(53,103,232,0.3)] filter transition-transform duration-300 group-hover:scale-105"
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
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              The DevHouse
            </span>
          </Link>
          <p className="text-[#CEDDEA]/70 text-sm leading-relaxed">
            Building exceptional digital experiences, scalable software, and bringing your innovative ideas to life with precision and speed.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Quick Links</h3>
          <ul className="grid grid-cols-1 gap-3">
            {footerLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-[#CEDDEA]/70 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <IconComponent size={16} className="text-[var(--primary)] group-hover:text-white transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Contact info / Services */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Get in Touch</h3>
          <p className="text-[#CEDDEA]/70 text-sm mb-4">
            Ready to start your next project or looking for expert consultation?
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-white font-medium rounded-xl text-sm hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-md"
            style={{
              backgroundImage: 'linear-gradient(to bottom, var(--primary), var(--primary))',
            }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Newsletter or extra info column */}
        <div>
          <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Office</h3>
          <p className="text-[#CEDDEA]/70 text-sm leading-relaxed mb-4">
            Working globally with startups, scale-ups, and enterprises to shape the future of technology.
          </p>
          <div className="text-xs text-[#CEDDEA]/50">
            support@thedevhouse.com
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CEDDEA]/60">
        <p>© {new Date().getFullYear()} The DevHouse. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
