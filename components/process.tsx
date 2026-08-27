"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Book a Free Consultation",
    subtitle: "Your journey starts here — no cost, no commitment.",
    points: [
      "Schedule a consultation session with us — it's quick and free.",
      "Explain your needs and business processes in detail so we fully understand your vision.",
    ],
  },
  {
    title: "Requirements & Planning",
    subtitle: "We define the solution's scope together.",
    points: [
      "Finalize the project requirements and outline the solution.",
      "Agree on acceptance criteria, timeline, and key milestones.",
      "Set a clear budget that fits your needs and expectations.",
    ],
  },
  {
    title: "Secure Your Spot",
    subtitle: "Reserve our development resources with a deposit.",
    points: [
      "Pay an agreed-upon deposit to kickstart the project.",
      "Your project is now locked in our schedule — development begins immediately.",
      "All transactions are secure and transparent.",
    ],
  },
  {
    title: "Development & Updates",
    subtitle: "We build your solution and keep you in the loop.",
    points: [
      "Our team starts building based on the agreed plan.",
      "You receive regular progress updates and previews.",
      "We adjust based on your feedback before the final delivery.",
    ],
  },
  {
    title: "Launch & Review",
    subtitle: "Your solution goes live — time to test it out.",
    points: [
      "We deploy your solution to a live environment.",
      "You test it thoroughly and share your feedback.",
      "We implement final tweaks to make sure it's perfect.",
    ],
  },
  {
    title: "Ongoing Support",
    subtitle: "We stay with you even after launch.",
    points: [
      "Get access to post-launch support for a smooth transition.",
      "We handle maintenance, updates, and optimizations.",
      "Your success is our priority — we grow with you.",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden bg-[#0a1f3d]">
      {/* Blue gradient background matching the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d5aa3] via-[#0a3a6e] to-[#071a33]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0d7bc9]/20 rounded-full -translate-x-1/4 -translate-y-1/4 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold tracking-[0.25em] text-white/40 uppercase mb-4 block"
          >
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight"
          >
            The Typical Cycle at Untra   
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
             Our proven development process ensures quality and client satisfaction at every step — from initial discovery to final launch.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0d3a6b]/40 backdrop-blur-xl rounded-[2rem] border border-white/[0.08] p-8 md:p-10"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/[0.1] flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white/80" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white text-center mb-3">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white/60 text-sm text-center mb-6 leading-relaxed">
                {step.subtitle}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0" />
                    <span className="text-white/60 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}