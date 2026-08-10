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
    <section id="contact" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#1A103C] leading-tight font-serif tracking-tighter">
            LET&apos;S <br />
            <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">CONNECT.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
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
                  <div className="w-16 h-16 bg-[#E1EEF8] border border-[#E1EEF8]/80 rounded-2xl flex items-center justify-center text-[#1A103C] group-hover:bg-[#1A103C] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(26,16,60,0.15)] transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1 font-sans">
                      {method.label}
                    </p>
                    <p className="text-xl font-bold text-[#1A103C] group-hover:text-[#3b82f6] transition-colors font-sans">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-10 bg-[#E1EEF8]/40 backdrop-blur-sm rounded-[2rem] border border-[#E1EEF8]/60 shadow-sm">
              <h3 className="text-xl font-black text-[#1A103C] mb-4 uppercase tracking-tighter font-serif">
                Based in Cairo, Egypt
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed font-sans text-base">
                I&apos;m ready to relocate and open to opportunities worldwide.
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[3rem] text-[#1A103C] border border-slate-100 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#1A103C] transition-colors font-bold text-xl text-[#1A103C] font-sans placeholder-slate-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#1A103C] transition-colors font-bold text-xl text-[#1A103C] font-sans placeholder-slate-300"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 font-sans">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-[#1A103C] transition-colors font-bold text-xl resize-none text-[#1A103C] font-sans placeholder-slate-300"
                  placeholder="Your Project Details"
                />
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-[#1A103C] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#281b54] transition-all duration-300 flex items-center justify-center gap-3 shadow-md shadow-slate-100"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={24} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 font-bold text-sm font-sans">
            © {new Date().getFullYear()} YOUSEF MOHAMED.
          </p>
          <div className="flex gap-10">
            <a href="https://github.com/YOUSSEFsaisOn" className="text-sm font-black uppercase tracking-widest hover:text-[#3b82f6] transition-colors text-slate-400 font-sans">GitHub</a>
            <a href="https://linkedin.com/in/yousef-mohamed-370260292" className="text-sm font-black uppercase tracking-widest hover:text-[#3b82f6] transition-colors text-slate-400 font-sans">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
