"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Communication is Key",
    description: "In order to develop the best possible solution for my clients, I make an effort to deeply understand their needs and goals.",
    icon: MessageSquare,
    color: "bg-[#4F7CFF]/10 border-[#4F7CFF]/20",
    iconColor: "text-[#3B6DFF]",
  },
  {
    title: "100% Hassle Free",
    description: "I take care of all the technical stuff, so you can focus on your business. From development to deployment, your project is my responsibility.",
    icon: Zap,
    color: "bg-[#2F5DFF]/10 border-[#2F5DFF]/20",
    iconColor: "text-[#2F5DFF]",
  },
  {
    title: "We're in it for the long run!",
    description: "My job doesn't end with development or deployment. I also provide ongoing support and maintenance to ensure that your project is up and running smoothly.",
    icon: Shield,
    color: "bg-[#4F7CFF]/10 border-[#4F7CFF]/20",
    iconColor: "text-[#3B6DFF]",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-white relative z-10 border-t border-[#E5E7EB]">
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
