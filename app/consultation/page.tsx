"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import Footer from "@/components/footer";
import { fadeInUp, fadeInLeft, fadeInRight, commonWhileInView } from "@/lib/animations";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/8426049-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
      </section>

      {/* Content Section */}
      <section className="relative z-10 bg-white -mt-16 rounded-t-[2rem] px-6 pt-16 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-900 tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            ultron Consultation Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            The ultron consultation program is, first and foremost, an effort to give back to the community by making our knowledge available through a consultation session. This also serves as a low-commitment way to get your questions answered. We are happy to answer any questions you have about our products and services.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 md:p-12"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-10">
            Schedule Your Consultation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm text-neutral-600">
                Full Name <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="block text-sm text-neutral-600">
                Email Address <span className="text-neutral-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@domain.com"
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-2">
              <div className="flex items-center border-b border-neutral-200">
                <div className="flex items-center gap-2 pr-4 shrink-0">
                  <span className="text-lg">🇪🇬</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-neutral-900 text-base">+20</span>
                </div>
                <input
                  type="tel"
                  placeholder=""
                  className="w-full border-0 bg-transparent px-0 py-2.5 text-neutral-900 focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="block text-sm text-neutral-600">
                Subject <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="What's this consultation about?"
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Preferred Date & Time */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm text-neutral-600">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  <Calendar className="absolute right-0 top-2.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-neutral-600">
                  Preferred Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="--:-- --"
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  <Clock className="absolute right-0 top-2.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-300"
              >
                {submitted ? "Request Submitted!" : "Schedule Consultation"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      <FloatingContact />
    </div>
  );
}