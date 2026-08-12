"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-28 bg-[#F8F9FC] border-y border-[#E5E7EB] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4F7CFF]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F5DFF]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B6DFF] uppercase mb-4 block">
          METHODOLOGY
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-[#111827] mb-6 font-serif tracking-tighter"
        >
          The Typical Cycle at Yousef&apos;s Lab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans"
        >
          Our proven development process ensures quality and client satisfaction at every step. From initial discovery to final launch.
        </motion.p>

        {/* Process steps */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
              <div className="w-16 h-16 rounded-[20px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#3B6DFF] font-black text-lg mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group-hover:border-[#3B6DFF] group-hover:shadow-[0_8px_25px_rgba(79,124,255,0.15)] group-hover:scale-105 transition-all duration-300">
                {item.step}
              </div>
              <span className="text-[#6B7280] group-hover:text-[#111827] font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors font-sans">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
