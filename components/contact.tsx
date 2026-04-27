"use client";

import { useState } from "react";

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
    setFormData(
      (prev: {
        name: string;
        email: string;
        subject: string;
        message: string;
      }) => ({
        ...prev,
        [name]: value,
      }),
    );
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
      icon: "📱",
      label: "Phone",
      value: "+20 110 736 1400",
      link: "tel:+201107361400",
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
    <section
      id="contact"
      className="py-20 px-6 bg-slate-800/40 relative overflow-hidden"
    >
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let&apos;s connect and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Quick Contact
            </h3>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/80 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 mt-1">
                    {method.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {method.label}
                    </h4>
                    <p className="text-gray-400 break-all group-hover:text-cyan-400 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-slate-900 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:bg-slate-800/70 focus:bg-slate-800 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/50"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                }`}
              >
                {submitted ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-700/50 text-center">
          <p className="text-gray-400 mb-6">
            Designed & Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span> by Yousef
            Mohamed
          </p>
          <div className="flex justify-center gap-6">
            {[
              {
                name: "GitHub",
                url: "https://github.com/YOUSSEFsaisOn",
                icon: "🐙",
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/yousef-mohamed-370260292",
                icon: "💼",
              },
              { name: "Email", url: "mailto:1234yusid@gmail.com", icon: "📧" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="hidden sm:inline group-hover:underline">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
