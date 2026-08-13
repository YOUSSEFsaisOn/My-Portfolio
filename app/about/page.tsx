"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Building2,
  Lightbulb,
  Sparkles,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import FloatingAi from "@/components/floating-ai";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  commonWhileInView,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Quality",
      description: "Excellence is not an act, it is a habit in everything we do",
    },
    {
      icon: <Users className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Collaboration",
      description: "We believe the best ideas come from diverse perspectives",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#8B5CF6]" />,
      title: "Integrity",
      description: "Trust and transparency form the foundation of our relationships",
    },
  ];

  return (
    <div className="text-foreground min-h-screen relative overflow-hidden">
      {/* Video Background - Full Screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/8103036-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 -z-10" />

      {/* Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs font-black uppercase tracking-[0.3em] text-[#8B5CF6] font-sans mb-8 bg-black/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/10"
          >
            About TheDevHouse
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[clamp(48px,10vw,100px)] font-black text-white leading-[1.05] font-serif tracking-tighter"
          >
            DRIVEN BY
            <br />
            <span className="text-[#8B5CF6] drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              INNOVATION.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-sans font-medium mt-8"
          >
            We are a high-performance software engineering firm specializing in
            pixel-perfect client experiences, robust enterprise backends, and
            highly secure web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#8B5CF6] text-white px-10 py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#7C3AED] transition-all duration-300 shadow-lg shadow-purple-900/40 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="#story"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all duration-300 border border-white/10 cursor-pointer"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.1)}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left Column - Story */}
            <motion.div variants={fadeInLeft} className="space-y-8">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#8B5CF6] font-sans">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
                About <br />
                <span className="text-[#8B5CF6]">TheDevHouse</span>
              </h2>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed font-sans">
                <p>
                  We started with a simple mission: to create exceptional digital
                  experiences that empower businesses and turn ideas into reality.
                  We began operating remotely in 2021, building a strong
                  foundation and collaborating across borders.
                </p>
                <p>
                  In 2023, we established our onsite office in Cairo, Heliopolis,
                  bringing our talented team of developers, designers, and
                  strategists together under one roof. Today, we are passionate
                  about solving complex challenges with elegant, scalable
                  solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-white font-medium">Cairo, Heliopolis</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Calendar className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-white font-medium">Est. 2021</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <Building2 className="w-5 h-5 text-[#8B5CF6]" />
                  <span className="text-white font-medium">12 Team Members</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Company Info Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white font-serif uppercase tracking-tighter">
                    Company
                  </h3>
                </div>
                <div className="space-y-4 text-white/70 text-base leading-relaxed font-sans">
                  <p>
                    We are dedicated to delivering world-class software solutions
                    that drive business growth and digital transformation.
                  </p>
                  <p>
                    Our team combines technical expertise with creative thinking
                    to build products that stand out in the market.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - 2x2 Grid Glass Cards */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#8B5CF6] font-sans block mb-4">
              Company
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white font-serif tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.15)}
            className="grid md:grid-cols-2 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-[#8B5CF6]/10"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/30 transition-all duration-300">
                    {val.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold font-sans text-xl group-hover:text-[#8B5CF6] transition-colors duration-300">
                      {val.title}
                    </h4>
                    <p className="text-white/60 text-base font-sans leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={commonWhileInView}
            className="bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#8B5CF6]/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-[#8B5CF6]/10 to-transparent rounded-full blur-[60px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
                Ready to Work With Us?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans mt-4">
                Let&apos;s collaborate to build something amazing for your business
              </p>
              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#8B5CF6] text-white px-10 py-5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#7C3AED] transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 cursor-pointer"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
      <FloatingAi />
    </div>
  );
}