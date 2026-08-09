"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Glow Logo design in the center of Hero matching image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center mb-10"
        >
          <div className="relative p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_50px_rgba(44,88,227,0.25)]">
            <svg
              width="110"
              height="100"
              viewBox="0 0 100 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_20px_rgba(44,88,227,0.95)]"
            >
              {/* Outer house outline */}
              <path
                d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Inner 'dev' design inside house */}
              <path
                d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
                stroke="#2c58e3"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M42 43 L42 62"
                stroke="#2c58e3"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M48 55 C48 46, 58 46, 58 55 L48 55"
                stroke="#2c58e3"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 55 C48 64, 58 64, 58 55"
                stroke="#2c58e3"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M64 45 L70 62 L76 45"
                stroke="#2c58e3"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(36px,8vw,90px)] font-black text-white leading-[1.0] tracking-tighter mb-4 font-serif"
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
          <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            The DevHouse
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          We design and build custom software that becomes the operational
          backbone of your business — replacing fragmented tools with a
          single, intelligent system built around how you actually work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#2c58e3] text-white font-bold rounded-full hover:bg-[#1e40af] transition-all duration-300 shadow-[0_0_20px_rgba(44,88,227,0.35)]"
          >
            Book a Consultation
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            View GitHub
          </a>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold text-white/70"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2c58e3] rounded-full" />
            1234YUSID@GMAIL.COM
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2c58e3] rounded-full" />
            01107361400
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2c58e3] rounded-full" />
            CAIRO, EGYPT
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            LEARN MORE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#2c58e3] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
