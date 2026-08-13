"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, CheckCircle2, MapPin } from "lucide-react";
import SpaceBackground from "@/components/space-background";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import FloatingAi from "@/components/floating-ai";
import { fadeInUp, commonWhileInView } from "@/lib/animations";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Direct Email",
      value: "1234yusid@gmail.com",
      link: "mailto:1234yusid@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone / Whatsapp",
      value: "01107361400",
      link: "tel:+201107361400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn Profile",
      value: "yousef-mohamed",
      link: "https://linkedin.com/in/yousef-mohamed-370260292",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] font-sans">
            Contact Us
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-tight font-serif tracking-tighter">
            GET IN <span className="text-[var(--primary)] drop-shadow-[0_0_15px_rgba(16,185,129,0.15)]">TOUCH.</span>
          </h1>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-lg font-sans">
            Ready to design, secure, and accelerate your next engineering project? Leave your details below and a developer will connect with you directly.
          </p>
        </motion.div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={commonWhileInView}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group bg-[#0B1020]/45 backdrop-blur-[20px] p-6 rounded-2xl border border-white/10 hover:bg-[#0B1020]/65 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/60 mb-0.5 font-sans">
                      {method.label}
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-[var(--primary)] transition-colors font-sans break-all">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location block */}
            <div className="p-8 bg-[#0B1020]/45 backdrop-blur-[20px] rounded-[2rem] border border-white/10 space-y-4 font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-[var(--primary)]">
                  <MapPin size={20} />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tighter font-serif">
                  Based in Cairo, Egypt
                </h3>
              </div>
              <p className="text-[#CEDDEA]/90 font-medium leading-relaxed text-base">
                We support completely remote engagements worldwide, as well as hybrid models in Cairo. Wherever your product users reside, our architecture can be localized and optimized for their needs.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={commonWhileInView}
            className="lg:col-span-7 bg-[#0B1020]/45 backdrop-blur-[20px] p-8 md:p-14 rounded-[3rem] text-white border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-black text-white font-serif mb-8 tracking-tight">
              Submit Your Proposal
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8 font-sans">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/80">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors font-semibold text-lg text-white"
                  placeholder="E.g. Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/80">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors font-semibold text-lg text-white"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/80">
                  Project Vision & Scope
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors font-semibold text-lg text-white resize-none"
                  placeholder="Tell us about the product and target launch date..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 text-white rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-md cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, var(--primary), var(--primary))',
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={24} />
                    Message Dispatched Successfully
                  </>
                ) : (
                  <>
                    Send Secure Proposal
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
      <FloatingAi />
      <Footer />
    </div>
  );
}
