"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-32 bg-[#007bff] relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 font-serif tracking-tighter"
        >
          The Typical Cycle at Yousef&apos;s Lab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Our proven development process ensures quality and client satisfaction at every step. From initial discovery to final launch.
        </motion.p>

        {/* Process steps could be added here if needed, but for now we match the image's layout */}
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
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold mb-4">
                {item.step}
              </div>
              <span className="text-white font-bold uppercase tracking-widest text-xs">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
