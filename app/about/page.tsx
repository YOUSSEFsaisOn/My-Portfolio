"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Sparkles, Users, Shield } from "lucide-react";
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
      icon: <Lightbulb className="w-6 h-6 text-white/80" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white/80" />,
      title: "Quality",
      description: "Excellence is not an act, it is a habit in everything we do",
    },
    {
      icon: <Users className="w-6 h-6 text-white/80" />,
      title: "Collaboration",
      description: "We believe the best ideas come from diverse perspectives",
    },
    {
      icon: <Shield className="w-6 h-6 text-white/80" />,
      title: "Integrity",
      description: "Trust and transparency form the foundation of our relationships",
    },
  ];

  return (
    <div className="text-foreground min-h-screen relative overflow-hidden">
      {/* Background Image / Video */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/8103036-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[clamp(40px,8vw,80px)] font-medium text-white leading-tight tracking-tight"
          >
            About TheDevHouse
          </motion.h1>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.1)}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Story */}
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Our Story
              </h2>
              <div className="space-y-5 text-white/70 text-base md:text-lg leading-relaxed font-sans">
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
              <div className="bg-white/5 backdrop-blur-xl p-12 md:p-20 rounded-[2rem] border border-white/10 shadow-2xl w-full max-w-md flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-32 h-32 md:w-40 md:h-40 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M40 160 L40 80 L100 40 L160 80 L160 160 L100 120 Z" />
                  <circle cx="75" cy="105" r="12" fill="currentColor" stroke="none" />
                  <circle cx="125" cy="105" r="12" fill="currentColor" stroke="none" />
                  <path d="M85 135 Q100 150 115 135" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 font-sans block mb-3">
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
            variants={staggerContainer(0.12)}
            className="grid md:grid-cols-2 gap-5"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold font-sans text-lg">
                      {val.title}
                    </h4>
                    <p className="text-white/50 text-sm font-sans leading-relaxed">
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
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-sans">
              Let&apos;s collaborate to build something amazing for your business
            </p>
            <div className="pt-4">
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