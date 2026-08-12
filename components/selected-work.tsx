"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, GraduationCap, Server, Lock } from "lucide-react";
import { TechBadgeGroup } from "./shared/tech-badge";

const PROJECTS = [
  {
    title: "Compass College",
    description:
      "A full-stack e-learning platform (site + admin dashboard) for high school students — courses, books, exams, pricing, and auth. Developed instructor management system and course pricing with free/paid content support.",
    tech: ["Next.js", ".NET", "React Query", "Paymob", "Bunny.net"],
    link: "https://compass.college/",
    category: "E-Learning Platform",
    browserUrl: "compass.college",
    mockupColor: "from-[#115EA5] to-[#0D365F]",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    title: "ET Engineering Academy",
    description:
      "Built a full-stack e-learning platform including courses, books, live sessions, instructors, and Zoom integration. Managed complex server state with React Query and implemented secure video delivery.",
    tech: ["Next.js", ".NET", "TypeScript", "React Query", "Bunny.net"],
    link: "https://etengineeringacademy.com",
    category: "E-Learning Platform",
    browserUrl: "etengineeringacademy.com",
    mockupColor: "from-[#10477C] to-[#080B14]",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    title: "Notes Management App",
    description:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API. Implemented secure authentication and protected routes with JWT.",
    tech: ["React.js", ".NET", "JWT", "Tailwind CSS"],
    link: "#",
    category: "Full-Stack System",
    browserUrl: "notes.yousef.dev",
    mockupColor: "from-[#123C6A] to-[#0D4982]",
    icon: <Server className="w-5 h-5 text-white" />,
  },
  {
    title: "Firebase Auth System",
    description:
      "Built a secure authentication app with Google Sign-In and Email/Password login using Firebase Authentication.",
    tech: ["React", "Firebase", "Auth", "Security"],
    link: "#",
    category: "Auth & Security Application",
    browserUrl: "auth.yousef.dev",
    mockupColor: "from-[#0D4982] to-[#115EA5]",
    icon: <Lock className="w-5 h-5 text-white" />,
  },
];

export default function SelectedWork() {
  return (
    <section id="projects" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Large centered section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-24 text-center space-y-6"
        >
          <h2 className="text-[clamp(36px,5vw,64px)] font-black text-white leading-tight font-serif tracking-tighter">
            SELECTED <span className="text-[#3567E8] drop-shadow-[0_0_15px_rgba(53,103,232,0.15)]">WORK.</span>
          </h2>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-lg font-sans">
            Real-world digital products and enterprise platforms built by our company, bringing robust frontend interfaces and secure backends to life.
          </p>
        </motion.div>

        {/* Responsive Grid with generous whitespace */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-[#115EA5] rounded-[2.5rem] border border-[#10477C] hover:border-[#3567E8]/30 hover:shadow-[0_30px_60px_-15px_rgba(8,11,20,0.8)] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl shadow-blue-950/30"
            >
              {/* Interactive CSS Browser Mockup */}
              <div className="p-6 pb-0">
                <div className={`relative aspect-[16/10] w-full rounded-2xl bg-gradient-to-br ${project.mockupColor} border border-[#10477C]/60 overflow-hidden group-hover:scale-[1.01] transition-transform duration-500`}>
                  {/* Browser Top Bar */}
                  <div className="h-8 bg-[#080B14]/40 border-b border-[#123C6A]/60 flex items-center justify-between px-4">
                    {/* Dots */}
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#123C6A]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#123C6A]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#123C6A]" />
                    </div>
                    {/* URL Bar */}
                    <div className="bg-[#080B14]/30 text-[#CEDDEA]/40 text-[10px] px-8 py-0.5 rounded-md font-mono border border-[#123C6A]/20">
                      https://{project.browserUrl}
                    </div>
                    <div className="w-8" />
                  </div>

                  {/* Browser Content Simulated Layout */}
                  <div className="p-6 h-full flex flex-col justify-between text-left">
                    <div className="space-y-3">
                      <div className="w-12 h-1.5 bg-white/20 rounded-full" />
                      <div className="w-32 h-3 bg-white/10 rounded-full" />
                      <div className="w-20 h-2 bg-white/5 rounded-full" />
                    </div>

                    {/* Central UI Mockup Element */}
                    <div className="my-auto self-center flex flex-col items-center justify-center text-center p-4 bg-[#080B14]/35 rounded-2xl border border-white/5 backdrop-blur-sm max-w-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#3567E8]/10 flex items-center justify-center text-[#3567E8] mb-3">
                        {project.icon}
                      </div>
                      <div className="h-2.5 w-24 bg-white/20 rounded-full mb-1.5" />
                      <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                      <div className="h-8 bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-8 bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-8 bg-[#3567E8]/10 rounded-lg border border-[#3567E8]/20" />
                    </div>
                  </div>

                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-[#080B14]/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>

              {/* Textual Details & Actions */}
              <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-[#CEDDEA]/60 font-sans">
                      {project.category}
                    </span>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-[#CEDDEA]/80 hover:text-white transition-colors duration-200"
                        aria-label="GitHub Repository"
                        title="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#CEDDEA]/80 hover:text-[#3567E8] transition-colors duration-200"
                          aria-label="Live Demo Link"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white font-serif mb-4 tracking-tight group-hover:text-[#D9E7FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#CEDDEA] leading-relaxed mb-8 font-sans text-base">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-[#123C6A]/60">
                  <div className="flex flex-wrap gap-2">
                    <TechBadgeGroup techs={project.tech} />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={project.link === "#" ? undefined : project.link}
                      target={project.link === "#" ? undefined : "_blank"}
                      rel={project.link === "#" ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center justify-center bg-[#3567E8] text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#254fbf] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      View Project <span className="ml-2 font-bold font-sans">→</span>
                    </a>
                    <span className="text-xs text-[#CEDDEA]/50 font-bold font-sans uppercase">
                      THE DEVHOUSE SCOPE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
