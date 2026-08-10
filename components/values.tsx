"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield } from "lucide-react";

const values = [
  {
    title: "Communication is Key",
    description: "In order to develop the best possible solution for my clients, I make an effort to deeply understand their needs and goals.",
    icon: MessageSquare,
  },
  {
    title: "100% Hassle Free",
    description: "I take care of all the technical stuff, so you can focus on your business. From development to deployment, your project is my responsibility.",
    icon: Zap,
  },
  {
    title: "We're in it for the long run!",
    description: "My job doesn't end with development or deployment. I also provide ongoing support and maintenance to ensure that your project is up and running smoothly.",
    icon: Shield,
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Added Our Core Principles section header as per the design image */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1A103C] font-serif tracking-tight"
          >
            Our Core Principles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto font-sans text-base md:text-lg"
          >
            The foundation of our success lies in these three fundamental principles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-10 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-[#E1EEF8] transition-all duration-500 group"
            >
              {/* Soft light blue circle background with deep midnight purple icon */}
              <div className="w-16 h-16 rounded-full bg-[#E1EEF8] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(26,16,60,0.1)] transition-all duration-500">
                <value.icon className="w-8 h-8 text-[#1A103C]" />
              </div>
              <h3 className="text-xl font-black text-[#1A103C] mb-6 font-serif tracking-tight">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-sans">
                {value.description}
              </p>
              <div className="mt-auto pt-8">
                <div className="w-12 h-1 bg-[#E1EEF8] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
