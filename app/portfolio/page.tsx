"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, GraduationCap, Server, Lock } from "lucide-react";
import SpaceBackground from "@/components/space-background";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import { TechBadgeGroup } from "@/components/shared/tech-badge";
import { fadeInUp } from "@/lib/animations";
import Footer from "@/components/footer";

const PROJECTS = [
  {
    title: "Compass College",
    description:
      "A full-stack e-learning platform (site + admin dashboard) for high school students — courses, books, exams, pricing, and auth. Developed instructor management system and course pricing with free/paid content support.",
    tech: ["Next.js", ".NET", "React Query", "Paymob", "Bunny.net"],
    link: "https://compass.college/",
    category: "E-Learning",
    icon: <GraduationCap className="w-5 h-5 text-[#EC4899]" />,
  },
  {
    title: "ET Engineering Academy",
    description:
      "Built a full-stack e-learning platform including courses, books, live sessions, instructors, and Zoom integration. Managed complex server state with React Query and implemented secure video delivery.",
    tech: ["Next.js", ".NET", "TypeScript", "React Query", "Bunny.net"],
    link: "https://etengineeringacademy.com",
    category: "E-Learning",
    icon: <GraduationCap className="w-5 h-5 text-[#EC4899]" />,
  },
  {
    title: "Notes Management App",
    description:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API. Implemented secure authentication and protected routes with JWT.",
    tech: ["React.js", ".NET", "JWT", "Tailwind CSS"],
    link: "#",
    category: "Full-Stack",
    icon: <Server className="w-5 h-5 text-[#EC4899]" />,
  },
  {
    title: "Firebase Auth System",
    description:
      "Built a secure authentication app with Google Sign-In and Email/Password login using Firebase Authentication.",
    tech: ["React", "Firebase", "Auth", "Security"],
    link: "#",
    category: "Auth & Security",
    icon: <Lock className="w-5 h-5 text-[#EC4899]" />,
  },
];

const CATEGORIES = ["All", "E-Learning", "Full-Stack", "Auth & Security"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

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
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#EC4899] font-sans">
            Our Work
          </span>
          <h1 className="text-[clamp(40px,7vw,80px)] font-black text-white leading-tight font-serif tracking-tighter">
            CASE STUDIES & <br />
            <span className="text-[#EC4899] drop-shadow-[0_0_15px_rgba(236,72,153,0.15)]">PRODUCTIONS.</span>
          </h1>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-lg font-sans">
            A comprehensive look at our modern e-learning applications, highly secure database structures, and high-performance frontend interfaces.
          </p>
        </motion.div>
      </section>

      {/* Category Filter Handles */}
      <section className="py-8 px-6 relative z-20">
        <div className="max-w-xl mx-auto bg-[#123C6A]/60 backdrop-blur-md p-1.5 rounded-2xl border border-[#115EA5]/30 flex flex-wrap justify-between items-center gap-1 shadow-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="relative flex-1 min-w-[90px] py-3 rounded-xl text-xs md:text-sm font-bold tracking-tight cursor-pointer transition-all duration-300 focus:outline-none text-center font-sans"
              style={{
                color: selectedCategory === cat ? "#ffffff" : "#CEDDEA",
              }}
            >
              {/* Slidable background handle */}
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategoryHandle"
                  className="absolute inset-0 bg-[#EC4899] rounded-xl shadow-md border border-white/10 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Case Studies */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative bg-[#115EA5] p-8 md:p-12 rounded-[2.5rem] border border-[#10477C] hover:border-[#EC4899]/30 transition-all duration-500 shadow-lg shadow-blue-950/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#123C6A] rounded-xl">
                        {project.icon}
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/60 font-sans">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      {[
                        {
                          href: "#",
                          label: "GitHub Repository",
                          title: "GitHub",
                          icon: <Github size={20} />,
                        },
                        {
                          href: project.link,
                          label: "Live Demo Link",
                          title: "Live Demo",
                          icon: <ExternalLink size={20} />,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      ].map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          target={item.target}
                          rel={item.rel}
                          className="text-[#CEDDEA]/80 hover:text-[#EC4899] transition-colors duration-200"
                          aria-label={item.label}
                          title={item.title}
                        >
                          {item.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white font-serif mb-6 tracking-tight group-hover:text-[#FBCFE8] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#CEDDEA] leading-relaxed mb-8 font-sans text-base">
                    {project.description}
                  </p>
                </div>

                {/* Built with techs */}
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <TechBadgeGroup techs={project.tech} />
                  </div>

                  <div className="pt-2 border-t border-[#123C6A]/60 flex items-center justify-between">
                    <a
                      href={project.link === "#" ? undefined : project.link}
                      target={project.link === "#" ? undefined : "_blank"}
                      rel={project.link === "#" ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center justify-center bg-[#EC4899] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#DB2777] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
                    >
                      Launch Case Study <span className="ml-2 font-bold font-sans">→</span>
                    </a>
                    <span className="text-xs text-[#CEDDEA]/50 font-bold font-sans uppercase">
                      The DevHouse Scope
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
}
