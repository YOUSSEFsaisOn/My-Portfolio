"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import Footer from "@/components/footer";
import { fadeInUp, fadeInLeft, fadeInRight, commonWhileInView } from "@/lib/animations";

export default function ContactPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/8347245-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-8 px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-3"
        >
          <h1 className="text-[clamp(36px,5vw,56px)] font-light text-white leading-tight tracking-normal">
            Contact Us
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column - Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={fadeInLeft}
            className="space-y-8 pt-6"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-[42px] font-bold text-white leading-tight">
                Contact<br />Information
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                Reach out directly or book a free consultation session — we&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-white/80 text-base">+20 103 668 9217</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-white/80 text-base">sales@thedevhouse.io</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-white/80 text-base">Heliopolis, Cairo, Egypt</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.2 0 .39.03.58.07V9.2a6.37 6.37 0 0 0-.58-.03A6.34 6.34 0 0 0 3 15.51a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.13 8.13 0 0 0 4.75 1.53V6.92a4.86 4.86 0 0 1-.84-.23z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Say Hi Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={fadeInRight}
            className="bg-neutral-100 rounded-2xl p-10 md:p-14 shadow-xl"
          >
            <div className="text-center space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-700 tracking-tight">
                Say Hi!
              </h3>
              <p className="text-neutral-600 text-base md:text-[17px] leading-relaxed max-w-sm mx-auto">
                Book a free consultation session to ask us about anything you like. We will be happy to answer any questions you have and we respond FAST!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 shadow-lg shadow-sky-500/25 cursor-pointer"
                >
                  Book Consultation Session
                </button>
              </div>
            </div>

            {/* Optional Inline Form */}
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-10 pt-8 border-t border-neutral-200"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea
                      rows={3}
                      className="w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-sky-500 focus:outline-none resize-none transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}