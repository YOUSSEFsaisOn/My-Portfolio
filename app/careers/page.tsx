"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, DollarSign, Send, CheckCircle2, Heart, Award, Cpu, BookOpen } from "lucide-react";
import SpaceBackground from "@/components/space-background";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import FloatingAi from "@/components/floating-ai";
import Footer from "@/components/footer";
import { fadeInUp, commonWhileInView } from "@/lib/animations";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: "frontend",
      title: "Lead Frontend Architect",
      department: "Engineering",
      location: "Remote (Global)",
      salary: "$85k - $110k",
      requirements: [
        "5+ years of deep expertise with React.js, Next.js (App Router), and TypeScript",
        "Expertise in state synchronization and React Query rendering models",
        "Passionate about CSS rendering architectures and buttery-smooth animation curves (Framer Motion)",
      ],
    },
    {
      id: "backend",
      title: "Senior .NET Backend Engineer",
      department: "Engineering",
      location: "Hybrid (Cairo, Egypt)",
      salary: "Competitive",
      requirements: [
        "5+ years of enterprise backend design in C# and .NET Web APIs",
        "Deep familiarity with Entity Framework, SQL indexing, and database tuning",
        "Strong handle on JWT token distribution, security middleware, and microservice structures",
      ],
    },
    {
      id: "fullstack",
      title: "Full-Stack Engineer (Next.js & .NET)",
      department: "Engineering",
      location: "Remote (Egypt / Europe)",
      salary: "Competitive",
      requirements: [
        "3+ years of mixed development with React, TypeScript, and .NET APIs",
        "Experience setting up e-commerce pipelines (Paymob) and secure media distribution (Bunny.net)",
        "Passionate about test automation and CI/CD pipelines",
      ],
    },
  ];

  const perks = [
    {
      icon: <Cpu className="w-5 h-5 text-[#F59E0B]" />,
      title: "Premium Tech Stack",
      description: "Work on Next.js 16+, TypeScript, Tailwind CSS 4, and .NET Core. No legacy code dragging you down.",
    },
    {
      icon: <Award className="w-5 h-5 text-[#F59E0B]" />,
      title: "Execution-Driven",
      description: "We hate red tape. We prioritize raw technical talent, clean architecture, and product results.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#F59E0B]" />,
      title: "Dedicated Learning",
      description: "Annual tech conference tickets, premium books, and online learning courses fully reimbursed.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#F59E0B]" />,
      title: "Fluid Autonomy",
      description: "Flexible schedules, remote work freedom, and continuous trust in your work delivery.",
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 3500);
  };

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
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#F59E0B] font-sans">
            Work With Us
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-tight font-serif tracking-tighter">
            JOIN THE <span className="text-[#F59E0B] drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]">DEVHOUSE.</span>
          </h1>
          <p className="text-[#CEDDEA] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-sans font-medium">
            We are looking for exceptional engineers who obsess over pixel perfection, lightning-fast queries, and clean engineering logic.
          </p>
        </motion.div>
      </section>

      {/* Culture Perks */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B]">
            Team Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight">
            Engineered For Developer Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#115EA5] rounded-3xl border border-[#10477C] hover:border-[#F59E0B]/50 transition-colors duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="w-12 h-12 bg-[#123C6A] rounded-xl flex items-center justify-center">
                {perk.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-serif">{perk.title}</h3>
                <p className="text-sm text-[#CEDDEA]/80 leading-relaxed font-sans">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Board Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B]">
            Current Roles
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight">
            We are actively hiring
          </h2>
        </div>

        <div className="space-y-8">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={commonWhileInView}
              className="bg-[#115EA5] p-8 md:p-12 rounded-[2.5rem] border border-[#10477C] space-y-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-4 max-w-2xl">
                <div>
                  <span className="px-3.5 py-1 bg-[#123C6A] border border-[#10477C] text-xs font-black uppercase tracking-wider text-[#F59E0B] rounded-full font-sans">
                    {job.department}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white font-serif tracking-tight">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-sm text-[#CEDDEA] font-bold font-sans">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F59E0B]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#F59E0B]" />
                    {job.salary}
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/60">
                    What we look for:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#CEDDEA]/85 font-sans">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="w-full md:w-auto px-8 py-4 bg-[#F59E0B] text-white rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#D97706] transition-all duration-300 cursor-pointer text-center"
                >
                  {selectedJob === job.id ? "Close Details" : "Apply Now"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Modal-Style Expandable Form */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 bg-[#123C6A] p-8 md:p-12 rounded-[2.5rem] border border-[#115EA5] shadow-inner"
            >
              <h3 className="text-2xl font-black text-white font-serif mb-6">
                Apply for {jobs.find((j) => j.id === selectedJob)?.title}
              </h3>

              <form onSubmit={handleApply} className="space-y-6 font-sans">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#115EA5]/60 border border-[#10477C] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] transition-colors font-semibold text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-[#115EA5]/60 border border-[#10477C] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] transition-colors font-semibold text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                    LinkedIn / GitHub Link
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full bg-[#115EA5]/60 border border-[#10477C] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] transition-colors font-semibold text-white"
                    placeholder="https://github.com/yourprofile"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/80">
                    Brief Statement / Cover Note
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-[#115EA5]/60 border border-[#10477C] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#F59E0B] transition-colors font-semibold text-white resize-none"
                    placeholder="Tell us what excites you about this role..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4.5 bg-[#F59E0B] text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#D97706] transition-all duration-300 flex items-center justify-center gap-3 shadow-md cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      Application Submitted!
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <FloatingContact />
      <FloatingAi />
      <Footer />
    </div>
  );
}
