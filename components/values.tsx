"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Communication is Key",
    description: "In order to develop the best possible solution for my clients, I make an effort to deeply understand their needs and goals.",
    icon: MessageSquare,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "100% Hassle Free",
    description: "I take care of all the technical stuff, so you can focus on your business. From development to deployment, your project is my responsibility.",
    icon: Zap,
    color: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
  {
    title: "We're in it for the long run!",
    description: "My job doesn't end with development or deployment. I also provide ongoing support and maintenance to ensure that your project is up and running smoothly.",
    icon: Shield,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

export default function Values() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-10 rounded-[2rem] border border-black/5 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 group"
            >
              <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <value.icon className={`w-8 h-8 ${value.iconColor}`} />
              </div>
              <h3 className="text-xl font-black text-[#050812] mb-6 font-serif tracking-tight">
                {value.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
              <div className="mt-auto pt-8">
                <div className="w-12 h-1 bg-black/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
