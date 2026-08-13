"use client";

import { motion } from "framer-motion";
import { Lightbulb, Building2, Clock, Rocket } from "lucide-react";

const FEATURES = [
  {
    icon: <Lightbulb className="w-6 h-6 text-sky-500" />,
    title: "Explore The Possibilities",
    description:
      "Have a friendly chat with one of our project managers and learn how we can help you with your business. Two heads are better than one, let's think about it together!",
  },
  {
    icon: <Building2 className="w-6 h-6 text-sky-500" />,
    title: "For Established Businesses",
    description:
      "If you are already a well established business, we can optimize and automate your business cycle and help you grow.",
  },
  {
    icon: <Clock className="w-6 h-6 text-sky-500" />,
    title: "Save Time & Money",
    description:
      "We are 100% hassle free. We take care of everything from planning to implementation to ongoing maintenance, so you can focus on the things that matter to you.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-sky-500" />,
    title: "For New Businesses",
    description:
      "If you are a new business or just starting out, we can turn your ideas into reality, fast and reliably because we already know what works and what doesn't.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight"
          >
            Why Choose The DevHouse
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto"
          >
            Discover how we transform businesses through innovative software solutions
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 p-8 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-900 mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}