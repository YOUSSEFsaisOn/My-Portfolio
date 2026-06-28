"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Expertise in React.js, Next.js (App Router), and TypeScript",
    "Full-stack development with .NET backend integration",
    "Experience building e-learning and e-commerce platforms",
    "Secure video streaming (Bunny.net) and payment (Paymob) integration",
    "Clean architecture, secure APIs, and modern design principles",
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#050812] leading-tight mb-8 font-serif tracking-tighter">
              DRIVEN BY <br />
              <span className="text-[#de0000]">INNOVATION.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Motivated Frontend Developer with experience specializing in React.js, Next.js, .NET, and modern JavaScript frameworks. Passionate about building responsive, interactive, user-friendly web applications and full-stack solutions.
              </p>
              <p>
                I focus on performance, clean code, secure APIs, and modern design principles. My background includes building complex platforms like e-learning systems with student and admin dashboards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#f4f4f5] p-8 md:p-12 rounded-[2rem] border border-black/5"
          >
            <h3 className="text-2xl font-black text-[#050812] mb-8 font-serif uppercase tracking-tighter">
              Key Focus Areas
            </h3>
            <ul className="space-y-6">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#de0000] shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
