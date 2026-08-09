"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceBackground from "./space-background";
import FloatingAi from '@/components/floating-ai'


export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 px-6 relative overflow-hidden bg-transparent">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
          style={{
            top: "-10%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]"
          style={{
            bottom: "-10%",
            left: "-10%",
          }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Glowing Logo floating directly on the background */}
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
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.95)] drop-shadow-[0_0_35px_rgba(44,88,227,0.65)]"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#ffffff"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#2c58e3"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#2c58e3"
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
          className="text-[clamp(44px,7vw,84px)] font-black text-white leading-[1.08] tracking-tighter mb-4 font-serif"
        >
          We Build The <br />
          <span className="text-white">Engine</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mb-8"
        >
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-[0.4em] select-none">
            The DevHouse
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          We design and build custom software that becomes the operational
          backbone of your business — replacing fragmented tools with a
          single, intelligent system built around how you actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <Link
            href="#contact"
            className="px-12 py-4 bg-[#2c58e3] text-white font-bold rounded-full hover:bg-[#1e40af] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(44,88,227,0.45)]"
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
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
            LEARN MORE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#2c58e3] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
