"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Communication is Key",
    description: "In order to develop the best possible solution for my clients, I make an effort to deeply understand their needs and goals.",
    icon: MessageSquare,
    color: "bg-[#115EA5]/40 border-[#10477C]/30",
    iconColor: "text-[#D9E7FF]",
  },
  {
    title: "100% Hassle Free",
    description: "I take care of all the technical stuff, so you can focus on your business. From development to deployment, your project is my responsibility.",
    icon: Zap,
    color: "bg-[#1161AB]/40 border-[#115EA5]/30",
    iconColor: "text-[#0797B2]",
  },
  {
    title: "We're in it for the long run!",
    description: "My job doesn't end with development or deployment. I also provide ongoing support and maintenance to ensure that your project is up and running smoothly.",
    icon: Shield,
    color: "bg-[#123C6A]/40 border-[#10477C]/30",
    iconColor: "text-[#235ccf]",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-10 rounded-[2rem] border border-white/5 bg-[#10477C]/45 backdrop-blur-sm hover:border-[#235ccf]/30 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-full border ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(53,103,232,0.2)] transition-all duration-500`}>
                <value.icon className={`w-8 h-8 ${value.iconColor}`} />
              </div>
              <h3 className="text-xl font-black text-white mb-6 font-serif tracking-tight">
                {value.title}
              </h3>
              <p className="text-[#CEDDEA] leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
              <div className="mt-auto pt-8">
                <div className="w-12 h-1 bg-white/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
