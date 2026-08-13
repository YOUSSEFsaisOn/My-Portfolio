"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Clock, Calendar, Send, CheckCircle2 } from "lucide-react";
import SpaceBackground from "@/components/space-background";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import { fadeInUp, commonWhileInView } from "@/lib/animations";
import Footer from "@/components/footer";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const steps = [
    {
      icon: <HelpCircle className="w-5 h-5 text-[#0797B2]" />,
      title: "1. Brief Discovery Call",
      description: "A snappy 30-minute dialogue to address your product vision, system bottlenecks, and execution schedule.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0797B2]" />,
      title: "2. Technical Scoping",
      description: "We map out high-fidelity software requirements, database structure schema, and API integrations.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#0797B2]" />,
      title: "3. Architecture Design",
      description: "Get a comprehensive technical blueprint detailing standard system models, hosting scale, and budget.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0797B2] font-sans">
            Expert Advisory
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-tight font-serif tracking-tighter">
            CONSULTATION <span className="text-[#0797B2] drop-shadow-[0_0_15px_rgba(7,151,178,0.15)]">SERVICES.</span>
          </h1>
          <p className="text-[#CEDDEA] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-sans font-medium">
            Accelerate your engineering decisions. Meet with our technical leads to scope, optimize, and blueprint your system architecture.
          </p>
        </motion.div>
      </section>

      {/* Scoping Pillars */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-tight">
              Our Structured <br />
              <span className="text-[#0797B2]">Scoping Framework.</span>
            </h2>
            <p className="text-[#CEDDEA]/90 text-base md:text-lg leading-relaxed font-sans">
              No guessing, no surprises. We leverage a structured framework to map out your digital products from early conception to secure, reliable cloud deployments.
            </p>
          </div>

          <div className="space-y-6 font-sans">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={commonWhileInView}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-6 bg-[#115EA5] rounded-2xl border border-[#10477C]"
              >
                <div className="p-3 bg-[#123C6A] rounded-xl shrink-0 h-fit">
                  {step.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-serif">{step.title}</h3>
                  <p className="text-sm text-[#CEDDEA]/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Booking/Request Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={commonWhileInView}
          className="bg-[#115EA5] p-8 md:p-12 rounded-[2.5rem] border border-[#10477C] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-br from-[#0797B2]/20 to-transparent rounded-full blur-[80px] pointer-events-none" />

          <h3 className="text-2xl font-black text-white font-serif tracking-tight mb-8">
            Request Strategy Call
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 font-sans relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#123C6A]/60 border border-[#123C6A] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0797B2] transition-colors font-semibold text-white"
                placeholder="E.g. Jane Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                Business Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-[#123C6A]/60 border border-[#123C6A] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0797B2] transition-colors font-semibold text-white"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                Primary Challenge
              </label>
              <select
                required
                className="w-full bg-[#123C6A] border border-[#123C6A] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0797B2] transition-colors font-semibold text-[#CEDDEA]"
              >
                <option value="">Select an option</option>
                <option value="scaling">Scaling Frontend / React Platforms</option>
                <option value="backend">Robust .NET API Development</option>
                <option value="custom">Custom Web Application Scoping</option>
                <option value="integrations">Third-party Payment & Zoom Integrations</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                Project Context (Optional)
              </label>
              <textarea
                rows={3}
                className="w-full bg-[#123C6A]/60 border border-[#123C6A] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0797B2] transition-colors font-semibold text-white resize-none"
                placeholder="Give us a brief brief of what you want to achieve"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4.5 bg-[#0797B2] text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#068096] transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-teal-900/40 cursor-pointer"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={20} />
                  Call Request Received
                </>
              ) : (
                <>
                  Schedule Free Session
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
}
