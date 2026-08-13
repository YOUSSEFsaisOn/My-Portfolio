"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Flame, Terminal, Users } from "lucide-react";
import Link from "next/link";
import SpaceBackground from "@/components/space-background";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import FloatingAi from "@/components/floating-ai";
import Footer from "@/components/footer";
import { fadeInUp, fadeInLeft, fadeInRight, commonWhileInView, staggerContainer, staggerItem } from "@/lib/animations";

export default function AboutPage() {
  const values = [
    {
      icon: <Terminal className="w-6 h-6 text-[var(--primary)]" />,
      title: "Technical Excellence",
      description: "We write clean, well-tested, and performant code that scales seamlessly under production workloads.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[var(--primary)]" />,
      title: "Security First",
      description: "From role-based JWT auth schemas to secure API routes, we safeguard customer data at every level.",
    },
    {
      icon: <Flame className="w-6 h-6 text-[var(--primary)]" />,
      title: "Driven by Innovation",
      description: "We proactively evaluate and adopt cutting-edge technologies to keep our partners ahead of the curve.",
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)]" />,
      title: "Absolute Transparency",
      description: "We communicate honestly, demo frequently, and treat our clients as long-term engineering partners.",
    },
  ];

  const benefits = [
    "Expertise in React.js, Next.js (App Router), and TypeScript",
    "Enterprise-grade .NET backend API and security architecture",
    "Production-hardened e-learning and e-commerce platforms",
    "Secure video streaming and payment integration protocols",
    "Rapid transition times via snappy custom-curved scrolling utilities",
  ];

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] font-sans">
            Who We Are
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-tight font-serif tracking-tighter">
            DRIVEN BY <span className="text-[var(--primary)] drop-shadow-[0_0_15px_rgba(139,92,246,0.15)]">INNOVATION.</span>
          </h1>
          <p className="text-[#CEDDEA] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-sans font-medium">
            We are a high-performance software engineering firm specializing in pixel-perfect client experiences, robust enterprise backends, and highly secure web applications.
          </p>
        </motion.div>
      </section>

      {/* Story & Approach Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={fadeInLeft}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
              Our Vision & <br />
              <span className="text-[var(--primary)]">Architectural Philosophy.</span>
            </h2>
            <div className="space-y-6 text-[#CEDDEA] text-base md:text-lg leading-relaxed font-sans">
              <p>
                At The DevHouse, we reject cookie-cutter designs and bloated codebases. We believe software should be as beautiful on the inside (clean architecture, robust API design, state synchronization) as it is on the outside (fluid motion, buttery-smooth layouts, intuitive user experiences).
              </p>
              <p>
                Whether building complex e-learning systems with role-based dashboard control, responsive e-commerce platforms with secure checkout structures, or low-latency interfaces, our mission is to deliver production-grade software that accelerates your business goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={fadeInRight}
            className="bg-[#0B1020]/45 backdrop-blur-[20px] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-xl space-y-8"
          >
            <h3 className="text-2xl font-black text-white font-serif uppercase tracking-tighter">
              What We Excel At
            </h3>
            <ul className="space-y-5">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={commonWhileInView}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                  <span className="text-[#CEDDEA] font-medium font-sans text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-black/30 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={commonWhileInView}
            className="text-center mb-16 space-y-4"
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[var(--primary)] font-sans">
              Guided Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight">
              Values That Drive Our Execution
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            variants={staggerContainer(0.12)}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="p-8 bg-[#0B1020]/45 backdrop-blur-[20px] rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between hover:border-[var(--primary)]/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-serif">{val.title}</h3>
                  <p className="text-sm text-[#CEDDEA]/80 leading-relaxed font-sans">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={commonWhileInView}
          className="bg-[#0B1020]/45 backdrop-blur-[20px] p-12 md:p-20 rounded-[2.5rem] border border-white/10 shadow-xl space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
            Elevate Your Product <br />
            To The Next Tier.
          </h2>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-sans">
            Ready to build performance-optimized, secure, and absolutely beautiful web software? Let&apos;s map out your project details.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-b from-[var(--primary)] to-[var(--primary)]/80 text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[var(--primary)]/20 cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to bottom, var(--primary), var(--primary))',
              }}
            >
              Start Your Project Now <span className="ml-2 font-bold">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <FloatingContact />
      <FloatingAi />
      <Footer />
    </div>
  );
}
