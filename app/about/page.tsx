"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Users, Shield } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import {
  fadeInLeft,
  fadeInRight,
  commonWhileInView,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-5 h-5 text-white/70" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white/70" />,
      title: "Quality",
      description: "Excellence is not an act, it is a habit in everything we do",
    },
    {
      icon: <Users className="w-5 h-5 text-white/70" />,
      title: "Collaboration",
      description: "We believe the best ideas come from diverse perspectives",
    },
    {
      icon: <Shield className="w-5 h-5 text-white/70" />,
      title: "Integrity",
      description: "Trust and transparency form the foundation of our relationships",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Lighter overlay so image shows through */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/8103036-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Light overlay - fateh shewaya */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-[clamp(36px,7vw,72px)] font-light text-white leading-tight tracking-normal">
            About TheDevHouse
          </h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.1)}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left Column - Story */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Our Story
              </h2>
              <div className="space-y-5 text-white/80 text-base md:text-[17px] leading-[1.8] font-sans font-normal">
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
            </motion.div>

            {/* Right Column - Logo Glass Card */}
            <motion.div
              variants={fadeInRight}
              className="flex items-center justify-center"
            >
              <div className="bg-white/[0.06] backdrop-blur-xl p-16 md:p-24 rounded-[2rem] border border-white/[0.08] shadow-2xl w-full max-w-lg flex items-center justify-center min-h-[320px]">
                <svg
                  viewBox="0 0 240 200"
                  className="w-40 h-auto text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* House roof */}
                  <path d="M20 100 L120 20 L220 100" />
                  {/* House body */}
                  <path d="M40 100 L40 180 L200 180 L200 100" />
                  {/* d */}
                  <path d="M70 150 L70 110 C70 95 85 95 85 110 L85 150" />
                  <path d="M85 130 C85 115 100 115 100 130 C100 145 85 145 85 130" />
                  {/* e */}
                  <circle cx="130" cy="130" r="18" />
                  <path d="M118 130 L142 130" />
                  {/* v */}
                  <path d="M155 112 L170 150 L185 112" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 font-sans block mb-3">
              Company
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.1)}
            className="grid md:grid-cols-2 gap-4"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group bg-white/[0.04] backdrop-blur-xl p-7 rounded-2xl border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0 border border-white/[0.08]">
                    {val.icon}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="text-white font-semibold font-sans text-base">
                      {val.title}
                    </h4>
                    <p className="text-white/45 text-sm font-sans leading-relaxed">
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
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-[42px] font-semibold text-white tracking-tight leading-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-white/45 max-w-lg mx-auto text-base md:text-lg leading-relaxed font-sans">
              Let&apos;s collaborate to build something amazing for your business
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-black px-10 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 cursor-pointer"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
    </div>
  );
}