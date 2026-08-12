"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "1234yusid@gmail.com",
      link: "mailto:1234yusid@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "01107361400",
      link: "tel:+201107361400",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "yousef-mohamed",
      link: "https://linkedin.com/in/yousef-mohamed-370260292",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-[#070B14] relative z-10 border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-[#4F7CFF]/10 rounded-full blur-[120px]"
          style={{
            bottom: "-10%",
            right: "-10%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#4F7CFF] uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-[clamp(36px,5.5vw,72px)] font-black text-white leading-tight font-serif tracking-tighter">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-12">
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center text-white group-hover:bg-[#3B6DFF] group-hover:border-[#3B6DFF] group-hover:shadow-[0_0_20px_rgba(79,124,255,0.3)] transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-1 font-sans">
                      {method.label}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white group-hover:text-[#4F7CFF] transition-colors font-sans">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-8 md:p-10 bg-white/5 backdrop-blur-sm rounded-[24px] border border-white/5 shadow-xl">
              <h3 className="text-lg md:text-xl font-black text-white mb-4 uppercase tracking-tighter font-serif">
                Based in Cairo, Egypt
              </h3>
              <p className="text-[#CEDDEA] font-medium leading-relaxed font-sans text-sm md:text-base">
                I&apos;m ready to relocate and open to opportunities worldwide.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 lg:p-16 rounded-[24px] text-white border border-white/5 shadow-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3.5 focus:outline-none focus:border-[#4F7CFF] transition-colors font-bold text-lg text-white font-sans placeholder-white/20"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3.5 focus:outline-none focus:border-[#4F7CFF] transition-colors font-bold text-lg text-white font-sans placeholder-white/20"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/60 font-sans">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3.5 focus:outline-none focus:border-[#4F7CFF] transition-colors font-bold text-lg resize-none text-white font-sans placeholder-white/20"
                  placeholder="Your Project Details"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white rounded-[20px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={22} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-28 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-bold text-sm font-sans">
            © {new Date().getFullYear()} YOUSEF MOHAMED.
          </p>
          <div className="flex gap-8">
            <a href="https://github.com/YOUSSEFsaisOn" className="text-xs font-black uppercase tracking-widest hover:text-[#4F7CFF] transition-colors text-white/40 font-sans">GitHub</a>
            <a href="https://linkedin.com/in/yousef-mohamed-370260292" className="text-xs font-black uppercase tracking-widest hover:text-[#4F7CFF] transition-colors text-white/40 font-sans">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
