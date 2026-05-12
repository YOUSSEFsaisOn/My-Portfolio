"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "1234yusid@gmail.com",
      link: "mailto:1234yusid@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yousef-mohamed",
      link: "https://linkedin.com/in/yousef-mohamed-370260292",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "YOUSSEFsaisOn",
      link: "https://github.com/YOUSSEFsaisOn",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white/40 text-lg">Let&apos;s build something together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-[2rem] block hover:bg-white/[0.05] transition-colors group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl glass w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {method.icon}
                  </span>
                  <div>
                    <p className="text-sm text-white/40 mb-1">{method.label}</p>
                    <p className="text-white font-medium">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 glass rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 glass rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 glass rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 glass rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                  submitted
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-black hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm text-center md:text-left">
            Designed & Built with <span className="text-white/40">❤️</span> by Yousef Mohamed
          </p>
          <div className="flex gap-8 text-white/20 text-sm">
             <a href="https://github.com/YOUSSEFsaisOn" className="hover:text-white transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/yousef-mohamed-370260292" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="mailto:1234yusid@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
