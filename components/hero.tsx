"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MouseTrail from "./framer/mouse-trail";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-white">
      {/* Mouse Trail */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <MouseTrail
          variant="particles"
          trailColor="#de0000"
          trailColorEnd="#ff4d4d"
          fillType="gradient"
          particleCount={6}
          particleSize={3}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]"
          style={{
            top: "-10%",
            right: "-10%",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]"
          style={{
            bottom: "-10%",
            left: "-10%",
          }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto text-center transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-red-600/5 border border-red-600/10 rounded-full text-red-600 text-xs font-bold uppercase tracking-widest">
            Frontend Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(40px,10vw,120px)] font-black text-[#050812] leading-[0.9] tracking-tighter mb-8 font-serif"
        >
          YOUSEF <br />
          <span className="text-[#de0000]">MOHAMED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Motivated Frontend Developer with experience specializing in React.js,
          Next.js, .NET, and modern JavaScript frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#de0000] text-white font-bold rounded-full hover:bg-[#b00000] transition-all duration-300 shadow-lg shadow-red-500/20"
          >
            Start a Project
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-white text-[#050812] font-bold rounded-full border border-black/5 hover:border-black/20 transition-all duration-300"
          >
            View GitHub
          </a>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-black/5 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold text-[#050812]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#de0000] rounded-full" />
            1234YUSID@GMAIL.COM
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#de0000] rounded-full" />
            01107361400
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#de0000] rounded-full" />
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
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
