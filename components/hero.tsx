"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero3D from "./hero-3d";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-28 px-6 relative overflow-hidden bg-transparent">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]"
          style={{
            top: "-10%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-[#E1EEF8]/50 rounded-full blur-[120px]"
          style={{
            bottom: "-10%",
            left: "-10%",
          }}
        />
      </div>

      {/* 3D Animated Scene */}
      <Hero3D />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* Floating Logo floating directly on the background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="relative p-2 overflow-visible select-none">
            <svg
              width="140"
              height="120"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_20px_rgba(26,16,60,0.1)] drop-shadow-[0_0_35px_rgba(225,238,248,0.5)]"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#1A103C"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#3b82f6"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[clamp(44px,7vw,84px)] font-black text-[#1A103C] leading-[1.08] tracking-tighter mb-4 font-serif"
        >
          We Build The <br />
          <span className="text-[#3b82f6]">Engine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-8"
        >
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-[0.4em] select-none">
            The DevHouse
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          We design and build custom software that becomes the operational
          backbone of your business — replacing fragmented tools with a single,
          intelligent system built around how you actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <Link
            href="#contact"
            className="px-12 py-4 bg-[#1A103C] text-white font-bold rounded-full hover:bg-[#281b54] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-slate-200/50"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 select-none">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
            LEARN MORE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#1A103C] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
