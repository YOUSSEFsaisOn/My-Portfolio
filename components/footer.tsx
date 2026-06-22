'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050812] text-white py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block font-serif">
              The DevHouse
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Building the custom operational backbones that power modern businesses. We specialize in custom software, Odoo ERP, and high-end digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              {/* Added TikTok placeholder if icon not available, but Lucide doesn't have TikTok easily sometimes, or I can use a generic one */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors font-bold text-xs">
                TK
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/AboutUs" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/PastProjects" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/Careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/ConsultationProgram" className="text-gray-400 hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Heliopolis, Cairo, Egypt</li>
              <li><a href="mailto:sales@thedevhouse.io" className="hover:text-white transition-colors">sales@thedevhouse.io</a></li>
              <li><a href="tel:+201107361400" className="hover:text-white transition-colors">+20 110 736 1400</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} The DevHouse. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
