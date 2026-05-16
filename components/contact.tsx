"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { fadeInUp, commonWhileInView } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "1234yusid@gmail.com",
      link: "mailto:1234yusid@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+20 110 736 1400",
      link: "tel:+201107361400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "yousef-mohamed",
      link: "https://linkedin.com/in/yousef-mohamed-370260292",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "YOUSSEFsaisOn",
      link: "https://github.com/YOUSSEFsaisOn",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0C0C0C]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={commonWhileInView}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Ready to start a project? Let&apos;s talk about your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={commonWhileInView}
            className="space-y-6 md:space-y-8 px-4 md:px-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Info</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-2xl group hover:bg-white/5 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
                    {method.label}
                  </h4>
                  <p className="text-white font-medium truncate">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>
            
            <div className="p-8 glass rounded-3xl bg-blue-500/5 border-blue-500/20">
              <h4 className="text-xl font-bold text-white mb-2">Available for projects</h4>
              <p className="text-gray-400">I&apos;m currently accepting new freelance projects and full-time opportunities. Reach out and let&apos;s discuss your needs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={commonWhileInView}
            className="px-4 md:px-0"
          >
            <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                    placeholder="What are you interested in?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Tell me more about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                    submitted
                      ? "bg-emerald-500 text-white cursor-default"
                      : "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yousef Mohamed. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://github.com/YOUSSEFsaisOn" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/yousef-mohamed-370260292" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
