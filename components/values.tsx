"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Communication is Key",
    description: "To develop the best possible LMS and software solutions for our clients, we make it a priority to deeply understand their needs, goals, and how their teams actually work.",
    icon: MessageSquare,
    color: "bg-[#4F7CFF]/10 border-[#4F7CFF]/20",
    iconColor: "text-[#3B6DFF]",
  },
  {
    title: "100% Hassle Free",
    description: "We take care of all the technical work — from development to deployment — so you can stay focused on your business. Your project is our responsibility, end to end.",
    icon: Zap,
    color: "bg-[#2F5DFF]/10 border-[#2F5DFF]/20",
    iconColor: "text-[#2F5DFF]",
  },
  {
    title: "We're in it for the long run!",
    description: "Our job doesn't end at development or deployment. We provide ongoing support and maintenance to make sure your LMS or software keeps running smoothly.",
    icon: Shield,
    color: "bg-[#4F7CFF]/10 border-[#4F7CFF]/20",
    iconColor: "text-[#3B6DFF]",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-white relative z-10 border-t border-[#E5E7EB]">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 font-serif tracking-tight"
        >
          Our Core Principles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#6B7280] text-base md:text-lg font-sans"
        >
          The foundation of our success lies in these three fundamental 
         <br></br>principles.
        </motion.p>
      </section>  
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-10 rounded-[24px] border border-[#E5E7EB] bg-white hover:border-[#3B6DFF]/30 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 group"
            >
              <div className={`w-16 h-16 rounded-full border ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(79,124,255,0.15)] transition-all duration-500`}>
                <value.icon className={`w-7 h-7 ${value.iconColor}`} />
              </div>
              <h3 className="text-xl font-black text-[#111827] mb-5 font-serif tracking-tight">
                {value.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base font-sans">
                {value.description}
              </p>
              <div className="mt-auto pt-8">
                <div className="w-12 h-1 bg-[#E5E7EB] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
