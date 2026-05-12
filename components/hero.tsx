"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Knotch-style Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-background animate-slow-pan opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8"
        >
          Building modern and scalable <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            web applications.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I&apos;m{" "}
          <span className="text-white font-semibold">Yousef Mohamed</span>,
          Frontend Developer specializing in React.js, Next.js, and TypeScript
          with experience building responsive applications, integrating secure
          APIs, and optimizing performance for real-world projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            View My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/YOUSSEFsaisOn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:1234yusid@gmail.com"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Stats/Features area inspired by Knotch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/5"
        >
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "40+" },
            { label: "Happy Clients", value: "25+" },
            { label: "Core Technologies", value: "12+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
