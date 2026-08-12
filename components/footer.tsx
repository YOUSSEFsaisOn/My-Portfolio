"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  Linkedin,
  Github,
  Compass,
  MessageSquare,
  Briefcase,
  Monitor,
  Users,
  Home
} from "lucide-react";
import { swiftScrollTo } from "@/lib/scroll";
import Logo from "./shared/logo";

export default function Footer() {
  const pathname = usePathname();

  // Hide top CTA banner on Contact and Consultation pages to avoid redundancy
  const showCtaBanner = pathname !== "/contact" && pathname !== "/consultation";

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/consultation", label: "Consultation", icon: MessageSquare },
    { href: "/careers", label: "Careers", icon: Briefcase },
    { href: "/portfolio", label: "Portfolio", icon: Monitor },
    { href: "/contact", label: "Contact Us", icon: Mail },
    { href: "/about", label: "About Us", icon: Users },
  ];

  const handleScrollToTop = () => {
    swiftScrollTo(0, 500);
  };

  return (
    <footer className="relative bg-[#070B14] border-t border-white/5 overflow-hidden z-10 font-sans">
      {/* Visual background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-[#3B6DFF]/5 rounded-full blur-[120px]"
          style={{
            bottom: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-[#4F7CFF]/5 rounded-full blur-[120px]"
          style={{
            top: "-10%",
            right: "-10%",
          }}
        />
      </div>

      {showCtaBanner && (
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-[#115EA5]/30 to-[#10477C]/30 p-12 md:p-16 rounded-[2.5rem] border border-[#10477C]/60 flex flex-col md:flex-row justify-between items-center gap-8 overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#3B6DFF]/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="space-y-4 text-center md:text-left max-w-xl">
              <h3 className="text-2xl md:text-4xl font-black text-white font-serif tracking-tight leading-tight">
                Ready to build the future of software with us?
              </h3>
              <p className="text-[#CEDDEA]/80 text-sm md:text-base leading-relaxed">
                Partner with us to engineer robust digital solutions, secure platforms, and custom software that accelerates your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-premium px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center select-none"
              >
                Start Your Project Now
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center select-none"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative flex items-center justify-center p-1.5 overflow-visible">
                <Logo />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                The DevHouse
              </span>
            </Link>

            <p className="text-[#CEDDEA]/70 text-sm leading-relaxed max-w-sm">
              A premium software development company specializing in robust React, Next.js, and .NET applications. We engineer high-performance web solutions built with clean architecture.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Github, link: "https://github.com/YOUSSEFsaisOn", label: "GitHub" },
                { icon: Linkedin, link: "https://linkedin.com/in/yousef-mohamed-370260292", label: "LinkedIn" },
                { icon: Mail, link: "mailto:1234yusid@gmail.com", label: "Email" },
                { icon: Phone, link: "tel:+201107361400", label: "Phone" }
              ].map((social, index) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 hover:bg-[#3B6DFF] border border-white/10 hover:border-[#3B6DFF] rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    <IconComp size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Menu */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#3B6DFF]">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-[#CEDDEA]/70 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    <span className="text-slate-500 group-hover:text-[#3B6DFF] transition-colors">
                      <link.icon size={14} />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#3B6DFF]">
              Direct Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:1234yusid@gmail.com"
                  className="flex items-start gap-3.5 text-[#CEDDEA]/70 hover:text-white transition-colors group"
                >
                  <span className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 group-hover:text-[#3B6DFF] group-hover:bg-white/10 transition-colors">
                    <Mail size={16} />
                  </span>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Email Address</span>
                    <span className="text-sm font-semibold font-sans">1234yusid@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201107361400"
                  className="flex items-start gap-3.5 text-[#CEDDEA]/70 hover:text-white transition-colors group"
                >
                  <span className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400 group-hover:text-[#3B6DFF] group-hover:bg-white/10 transition-colors">
                    <Phone size={16} />
                  </span>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Phone / WhatsApp</span>
                    <span className="text-sm font-semibold font-sans">01107361400</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3.5 text-[#CEDDEA]/70">
                  <span className="p-2 bg-white/5 rounded-lg border border-white/10 text-slate-400">
                    <Compass size={16} />
                  </span>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-slate-500">Location</span>
                    <span className="text-sm font-semibold font-sans">Cairo, Egypt (Worldwide Remote)</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-1.5 text-xs text-white/40 font-bold uppercase tracking-wider font-sans">
            <span>© {new Date().getFullYear()} THE DEVHOUSE.</span>
            <span>All rights reserved.</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md select-none"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
