"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Calendar } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";

export default function CareersPage() {
  const [fileName, setFileName] = useState("No file chosen");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/110272-688187519_medium.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so nav text stays readable */}
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Content Section */}
      <section className="relative z-10 bg-white -mt-20 rounded-t-[2rem] px-6 pt-16 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight"
          >
            Careers at ultron
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Here at ultron, we are always looking for talented people to join our team! If you are interested in joining our team, please fill out the form below.
          </motion.p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 md:p-14"
        >
          <h2 className="text-xl md:text-2xl font-normal text-neutral-900 text-center mb-12">
            Fill out the form to apply for a position
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Secondary Contact Info */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Secondary Contact Info
              </label>
              <input
                type="text"
                placeholder="Phone, Messenger, WhatsApp..."
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Department of Interest */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Department of Interest
              </label>
              <input
                type="text"
                placeholder="Development, Marketing, Sales..."
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Why do you want to join us? */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Why do you want to join us?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your motivation..."
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors resize-none"
              />
            </div>

            {/* Current Job Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Current Job Title
              </label>
              <input
                type="text"
                placeholder="Senior Software Engineer, Student, etc."
                className="w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Available to Start */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-neutral-700">
                Available to Start
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

            {/* File Upload */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-neutral-700">
                Upload your resume and any other relevant files
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-neutral-700 transition-colors">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm border-b border-dashed border-neutral-300 pb-0.5">
                    Choose File
                  </span>
                </div>
                <span className="text-sm text-neutral-400">{fileName}</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      <FloatingContact />
    </div>
  );
}