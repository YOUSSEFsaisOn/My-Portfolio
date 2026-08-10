"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-32 bg-white border-y border-slate-100 relative overflow-hidden shadow-sm">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E1EEF8]/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-[#1A103C] mb-8 font-serif tracking-tighter"
        >
          The Typical Cycle at Yousef&apos;s Lab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-sans"
        >
          Our proven development process ensures quality and client satisfaction at every step. From initial discovery to final launch.
        </motion.p>

        {/* Process steps */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Discovery", step: "01" },
            { label: "Design", step: "02" },
            { label: "Development", step: "03" },
            { label: "Launch", step: "04" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E1EEF8] border border-[#E1EEF8] flex items-center justify-center text-[#1A103C] font-black text-lg mb-4 group-hover:border-[#1A103C] group-hover:shadow-[0_0_15px_rgba(26,16,60,0.15)] transition-all duration-300">
                {item.step}
              </div>
              <span className="text-slate-700 group-hover:text-[#1A103C] font-bold uppercase tracking-widest text-xs transition-colors font-sans">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
