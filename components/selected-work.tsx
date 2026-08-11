"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Play, Lock, ArrowUpRight } from "lucide-react";
import { TechBadgeGroup } from "./shared/tech-badge";

const SELECTED_PROJECTS = [
  {
    title: "Compass College",
    category: "E-Learning Platform",
    description: "A premium full-stack educational system with course pricing, admin dashboards, student portals, secure book downloads, and Paymob checkout integration.",
    tech: ["Next.js", ".NET", "React Query", "Paymob", "Bunny.net"],
    link: "https://compass.college/",
    github: "#",
    mockType: "compass"
  },
  {
    title: "ET Engineering Academy",
    category: "Live Academy Portal",
    description: "High-performance platform for engineering courses with Zoom integration, live sessions calendar, secure video delivery via Bunny.net, and automated state management.",
    tech: ["Next.js", ".NET", "TypeScript", "React Query", "Bunny.net"],
    link: "https://etengineeringacademy.com",
    github: "#",
    mockType: "et"
  },
  {
    title: "Notes Management App",
    category: "Full-Stack SaaS",
    description: "A highly interactive notes and workspace management SaaS with customizable tags, rich text editor support, secure JWT authentication, and SQL database.",
    tech: ["React.js", ".NET", "JWT", "Tailwind CSS"],
    link: "#",
    github: "#",
    mockType: "notes"
  },
  {
    title: "Firebase Auth System",
    category: "Identity & Security",
    description: "A secure, modern authentication portal featuring multi-provider login (Google, Email/Password), session security, and state-of-the-art token validation.",
    tech: ["React", "Firebase", "Auth", "Security"],
    link: "#",
    github: "#",
    mockType: "auth"
  }
];

export default function SelectedWork() {
  return (
    <section id="selected-work" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-24 text-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#3567E8] font-sans block mb-4">
            Our Portfolio
          </span>
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-white leading-tight font-serif tracking-tighter mb-6">
            SELECTED <span className="text-[#3567E8] drop-shadow-[0_0_15px_rgba(53,103,232,0.15)]">WORK.</span>
          </h2>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-lg font-sans">
            These are real-world, high-performance web applications designed, engineered, and successfully launched by our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SELECTED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#115EA5] p-6 md:p-10 rounded-[2.5rem] border border-[#10477C] hover:border-[#3567E8]/40 transition-all duration-500 shadow-xl shadow-blue-950/40 flex flex-col justify-between overflow-hidden"
            >
              {/* Card top bar with Category & Links */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D9E7FF] font-sans">
                    {project.category}
                  </span>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-[#CEDDEA]/80 hover:text-white transition-colors duration-200"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github size={20} />
                    </a>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CEDDEA]/80 hover:text-white transition-colors duration-200"
                        aria-label={`${project.title} live demo link`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Browser Mockup Image Container */}
                <div className="relative aspect-video rounded-2xl border border-[#10477C]/70 bg-[#080B14] overflow-hidden mb-8 group-hover:border-[#3567E8]/30 transition-all duration-500 shadow-inner">
                  {/* Browser Toolbar Mockup */}
                  <div className="h-8 border-b border-[#10477C]/70 bg-[#0D365F]/60 px-4 flex items-center gap-2 select-none">
                    {/* Window Control Buttons */}
                    <div className="flex gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
                    </div>
                    {/* URL Bar Mockup */}
                    <div className="w-full max-w-xs mx-auto h-5 bg-[#080B14]/70 rounded-md border border-[#10477C]/40 px-2 flex items-center justify-between text-[10px] text-[#CEDDEA]/50">
                      <div className="flex items-center gap-1">
                        <Lock size={8} className="text-green-500/80" />
                        <span className="truncate">
                          {project.link === "#" ? `workspace.${project.mockType}` : project.link.replace("https://", "")}
                        </span>
                      </div>
                      <span className="text-[8px] opacity-45">✓</span>
                    </div>
                  </div>

                  {/* Mock Browser Body Content */}
                  <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden select-none font-sans text-[11px] p-4 text-[#CEDDEA]">
                    {project.mockType === "compass" && (
                      <div className="h-full flex flex-col justify-between">
                        {/* Mock header */}
                        <div className="flex justify-between items-center border-b border-[#123C6A]/60 pb-2">
                          <span className="font-bold text-white tracking-wider text-[10px] uppercase flex items-center gap-1">
                            <span className="text-[#3567E8]">▲</span> Compass College
                          </span>
                          <span className="text-[8px] bg-[#3567E8]/20 text-[#D9E7FF] px-2 py-0.5 rounded-full border border-[#3567E8]/30">
                            Instructor Dashboard
                          </span>
                        </div>
                        {/* Course Cards Grid */}
                        <div className="grid grid-cols-2 gap-3 my-auto">
                          <div className="bg-[#115EA5]/30 p-2.5 rounded-xl border border-[#10477C]/80">
                            <div className="flex justify-between items-start mb-1.5">
                              <span className="font-bold text-white text-[10px] truncate block">Advanced Physics</span>
                              <span className="text-[8px] text-[#D9E7FF] font-bold">EGP 400</span>
                            </div>
                            <div className="w-full bg-[#080B14] h-1 rounded-full mb-1">
                              <div className="bg-[#3567E8] h-full rounded-full w-4/5" />
                            </div>
                            <div className="flex justify-between text-[8px] text-[#CEDDEA]/50">
                              <span>32 Enrolled</span>
                              <span>80% Complete</span>
                            </div>
                          </div>
                          <div className="bg-[#115EA5]/30 p-2.5 rounded-xl border border-[#10477C]/80">
                            <div className="flex justify-between items-start mb-1.5">
                              <span className="font-bold text-white text-[10px] truncate block">Organic Chemistry</span>
                              <span className="text-[8px] text-green-400 font-bold">Free</span>
                            </div>
                            <div className="w-full bg-[#080B14] h-1 rounded-full mb-1">
                              <div className="bg-[#0797B2] h-full rounded-full w-2/5" />
                            </div>
                            <div className="flex justify-between text-[8px] text-[#CEDDEA]/50">
                              <span>104 Enrolled</span>
                              <span>40% Complete</span>
                            </div>
                          </div>
                        </div>
                        {/* Status bar */}
                        <div className="flex justify-between items-center text-[8px] text-[#CEDDEA]/40 border-t border-[#123C6A]/40 pt-1.5">
                          <span>Paymob: Active</span>
                          <span>Secured Content: Bunny.net</span>
                        </div>
                      </div>
                    )}

                    {project.mockType === "et" && (
                      <div className="h-full flex gap-3">
                        {/* Left: Video stream mockup */}
                        <div className="flex-1 bg-[#080B14] rounded-xl border border-[#123C6A]/50 relative overflow-hidden flex flex-col justify-between p-2.5">
                          <span className="text-[8px] bg-red-500/80 text-white font-bold px-1.5 py-0.5 rounded uppercase tracking-wider w-max">
                            Live Session
                          </span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-[#3567E8]/95 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                              <Play size={14} className="fill-current ml-0.5" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-[8px] text-[#CEDDEA]/60 z-10">
                            <span>Chapter 04: Thermodynamics</span>
                            <span>Stream Secured</span>
                          </div>
                        </div>
                        {/* Right: Simulated Chat */}
                        <div className="w-24 shrink-0 bg-[#0D365F]/40 rounded-xl p-2 border border-[#10477C]/50 flex flex-col justify-between">
                          <div className="border-b border-[#123C6A]/60 pb-1 mb-1">
                            <span className="font-bold text-white text-[8px] uppercase tracking-wider block">Live Chat</span>
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5 justify-end">
                            <div className="bg-[#3567E8]/10 p-1 rounded border border-[#3567E8]/20">
                              <span className="font-bold text-white text-[7px] block">Dr. Ahmed</span>
                              <span className="text-[7px] leading-none text-[#CEDDEA]">Ready for Q&A</span>
                            </div>
                            <div className="bg-white/5 p-1 rounded">
                              <span className="font-bold text-[#D9E7FF] text-[7px] block">Sarah M.</span>
                              <span className="text-[7px] leading-none text-[#CEDDEA]/80">Secure feed is great!</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockType === "notes" && (
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-between items-center border-b border-[#123C6A]/60 pb-2">
                          <span className="font-bold text-white text-[10px] flex items-center gap-1">
                            Workspace Dashboard
                          </span>
                          <span className="w-4 h-4 rounded-full bg-[#3567E8] flex items-center justify-center text-white text-[8px] font-bold">
                            +
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 my-auto">
                          <div className="bg-[#3567E8]/10 p-2.5 rounded-xl border border-[#3567E8]/20 flex flex-col justify-between h-16">
                            <span className="font-bold text-white text-[9px] block">API Routes</span>
                            <span className="text-[8px] text-[#CEDDEA]/60 leading-tight line-clamp-2">Complete the user endpoints.</span>
                            <span className="text-[7px] text-[#3567E8] font-bold uppercase mt-1">.NET API</span>
                          </div>
                          <div className="bg-yellow-500/5 p-2.5 rounded-xl border border-yellow-500/20 flex flex-col justify-between h-16">
                            <span className="font-bold text-[#eab308] text-[9px] block">UI Tweaks</span>
                            <span className="text-[8px] text-[#CEDDEA]/60 leading-tight line-clamp-2">Adjust responsive menu gaps.</span>
                            <span className="text-[7px] text-yellow-500 font-bold uppercase mt-1">Next.js</span>
                          </div>
                          <div className="bg-green-500/5 p-2.5 rounded-xl border border-green-500/20 flex flex-col justify-between h-16">
                            <span className="font-bold text-green-400 text-[9px] block">Launch Prep</span>
                            <span className="text-[8px] text-[#CEDDEA]/60 leading-tight line-clamp-2">Verify JWT session timing out.</span>
                            <span className="text-[7px] text-green-400 font-bold uppercase mt-1">Done</span>
                          </div>
                        </div>
                        <div className="text-[8px] text-[#CEDDEA]/40 text-right">
                          Saved locally and synced with Cloud
                        </div>
                      </div>
                    )}

                    {project.mockType === "auth" && (
                      <div className="h-full flex items-center justify-center">
                        <div className="w-48 bg-[#0D365F]/80 p-3.5 rounded-xl border border-[#115EA5]/60 flex flex-col gap-2.5 shadow-xl relative overflow-hidden">
                          {/* Inner glowing lock icon */}
                          <div className="absolute top-2 right-2 text-[#3567E8]/20">
                            <Lock size={28} />
                          </div>
                          <div className="text-center">
                            <span className="font-black text-white text-[10px] uppercase tracking-wide block">Secure Authentication</span>
                            <span className="text-[7px] text-[#CEDDEA]/50">Powered by Firebase Auth</span>
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-5 bg-[#080B14] rounded border border-[#123C6A] px-2 flex items-center justify-between text-[7px] text-[#CEDDEA]/60">
                              <span>user@thedevhouse.io</span>
                              <span>✓</span>
                            </div>
                            <div className="h-5 bg-[#080B14] rounded border border-[#123C6A] px-2 flex items-center justify-between text-[7px] text-[#CEDDEA]/60">
                              <span>•••••••••••••</span>
                              <span className="opacity-40">🔑</span>
                            </div>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="flex-1 h-5 bg-[#3567E8] text-white text-[8px] font-bold rounded flex items-center justify-center cursor-pointer hover:bg-[#254fbf] transition-colors">
                              Sign In
                            </div>
                            <div className="flex-1 h-5 bg-white/5 border border-white/10 text-[#D9E7FF] text-[8px] font-bold rounded flex items-center justify-center gap-1 cursor-pointer hover:bg-white/10 transition-colors">
                              <span className="text-[8px]">G</span> Google
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Info Block */}
                <h3 className="text-2xl font-black text-white font-serif mb-3 tracking-tight group-hover:text-[#D9E7FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#CEDDEA]/90 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Technologies group and View Action CTA */}
              <div className="space-y-6 pt-4 border-t border-[#123C6A]/40 mt-auto">
                <TechBadgeGroup techs={project.tech} />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#CEDDEA]/50">
                    The DevHouse Production
                  </span>
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white hover:text-[#D9E7FF] group/link transition-colors duration-300"
                    >
                      View Live Site
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  ) : (
                    <span className="text-xs font-black uppercase tracking-widest text-[#CEDDEA]/40 cursor-default select-none">
                      Private System
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
