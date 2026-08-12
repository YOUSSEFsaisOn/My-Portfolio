"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TechBadgeGroup } from "./shared/tech-badge";

const ALL_PROJECTS = [
  {
    title: "Compass College",
    description:
      "A full-stack e-learning platform (site + admin dashboard) for high school students — courses, books, exams, pricing, and auth. Developed instructor management system and course pricing with free/paid content support.",
    tech: ["Next.js", ".NET", "React Query", "Paymob", "Bunny.net"],
    link: "https://compass.college/",
    // Adding beautiful inline representation of high-fidelity responsive CSS mockup
    mockup: (
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 flex flex-col shadow-inner">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-[#E5E7EB]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-4 text-[10px] font-medium text-slate-400 font-sans tracking-wide truncate">compass.college</span>
        </div>
        {/* Mockup screen content */}
        <div className="flex-1 p-5 flex gap-4 overflow-hidden bg-[#F8F9FC]">
          <div className="w-1/3 flex flex-col gap-2.5">
            <div className="h-6 w-full bg-gradient-to-r from-[#4F7CFF]/20 to-[#2F5DFF]/10 rounded" />
            <div className="h-3 w-4/5 bg-slate-200 rounded" />
            <div className="h-3 w-2/3 bg-slate-200 rounded" />
            <div className="h-6 w-1/2 bg-[#3B6DFF] rounded mt-auto" />
          </div>
          <div className="flex-1 rounded bg-white shadow-sm border border-[#E5E7EB] p-3 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#4F7CFF]/15 flex items-center justify-center text-[10px] font-bold text-[#3B6DFF]">CC</span>
              <div className="flex-1 flex flex-col gap-1">
                <div className="h-2 w-16 bg-slate-200 rounded" />
                <div className="h-1.5 w-10 bg-slate-100 rounded" />
              </div>
            </div>
            <div className="h-12 w-full bg-[#F8F9FC] rounded border border-slate-100" />
            <div className="flex gap-2">
              <div className="h-5 flex-1 bg-slate-100 rounded" />
              <div className="h-5 flex-1 bg-[#3B6DFF]/10 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "ET Engineering Academy",
    description:
      "Built a full-stack e-learning platform including courses, books, live sessions, instructors, and Zoom integration. Managed complex server state with React Query and implemented secure video delivery.",
    tech: ["Next.js", ".NET", "TypeScript", "React Query", "Bunny.net"],
    link: "https://etengineeringacademy.com",
    mockup: (
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 flex flex-col shadow-inner">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-[#E5E7EB]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-4 text-[10px] font-medium text-slate-400 font-sans tracking-wide truncate">etengineeringacademy.com</span>
        </div>
        {/* Mockup screen content */}
        <div className="flex-1 p-5 flex gap-4 overflow-hidden bg-[#F8F9FC]">
          <div className="flex-1 rounded bg-white shadow-sm border border-[#E5E7EB] p-3 flex flex-col gap-3">
            <div className="h-5 w-24 bg-slate-200 rounded" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 bg-slate-100 rounded flex flex-col p-2 gap-1.5">
                <div className="h-2 w-10 bg-slate-300 rounded" />
                <div className="h-1.5 w-full bg-slate-200 rounded" />
              </div>
              <div className="h-14 bg-[#4F7CFF]/5 rounded border border-[#4F7CFF]/15 flex flex-col p-2 gap-1.5">
                <div className="h-2 w-10 bg-[#3B6DFF]/30 rounded" />
                <div className="h-1.5 w-full bg-[#3B6DFF]/20 rounded" />
              </div>
            </div>
            <div className="h-6 w-full bg-[#3B6DFF] rounded mt-auto flex items-center justify-center text-[10px] text-white font-bold">Launch Dashboard</div>
          </div>
          <div className="w-1/3 flex flex-col gap-2.5">
            <div className="h-5 w-full bg-[#3B6DFF]/15 rounded" />
            <div className="h-3 w-full bg-slate-200 rounded" />
            <div className="h-3 w-4/5 bg-slate-100 rounded" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Notes Management App",
    description:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API. Implemented secure authentication and protected routes with JWT.",
    tech: ["React.js", ".NET", "JWT", "Tailwind CSS"],
    link: "#",
    mockup: (
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 flex flex-col shadow-inner">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-[#E5E7EB]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-4 text-[10px] font-medium text-slate-400 font-sans tracking-wide truncate">localhost:3000</span>
        </div>
        {/* Mockup screen content */}
        <div className="flex-1 p-5 flex flex-col gap-3 bg-[#F8F9FC]">
          <div className="flex justify-between items-center">
            <div className="h-4 w-16 bg-[#3B6DFF]/20 rounded" />
            <div className="h-4 w-10 bg-slate-200 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-3 flex-1 overflow-hidden">
            <div className="rounded bg-white border border-[#E5E7EB] p-2 flex flex-col gap-1.5">
              <div className="h-2 w-10 bg-[#3B6DFF] rounded" />
              <div className="h-1.5 w-full bg-slate-100 rounded" />
              <div className="h-1.5 w-4/5 bg-slate-100 rounded" />
            </div>
            <div className="rounded bg-white border border-[#E5E7EB] p-2 flex flex-col gap-1.5">
              <div className="h-2 w-12 bg-amber-400 rounded" />
              <div className="h-1.5 w-full bg-slate-100 rounded" />
              <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
            </div>
            <div className="rounded bg-white border border-[#E5E7EB] p-2 flex flex-col gap-1.5">
              <div className="h-2 w-8 bg-emerald-400 rounded" />
              <div className="h-1.5 w-full bg-slate-100 rounded" />
              <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Firebase Auth System",
    description:
      "Built a secure authentication app with Google Sign-In and Email/Password login using Firebase Authentication.",
    tech: ["React", "Firebase", "Auth", "Security"],
    link: "#",
    mockup: (
      <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 flex flex-col shadow-inner">
        {/* Browser header */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-b border-[#E5E7EB]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-4 text-[10px] font-medium text-slate-400 font-sans tracking-wide truncate">auth-system.web.app</span>
        </div>
        {/* Mockup screen content */}
        <div className="flex-1 p-5 flex items-center justify-center bg-[#F8F9FC]">
          <div className="w-[160px] rounded-lg bg-white shadow-md border border-[#E5E7EB] p-4 flex flex-col gap-2.5 items-center">
            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="text-[8px] font-bold">🔒</span>
            </div>
            <div className="h-2.5 w-16 bg-slate-200 rounded" />
            <div className="h-5 w-full bg-[#3B6DFF]/10 rounded border border-[#3B6DFF]/15 flex items-center justify-center text-[8px] text-[#3B6DFF] font-bold">Google Sign-In</div>
            <div className="h-5 w-full bg-[#3B6DFF] rounded flex items-center justify-center text-[8px] text-white font-bold">Sign In with Email</div>
          </div>
        </div>
      </div>
    )
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-white relative z-10 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B6DFF] uppercase mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="text-[clamp(36px,5.5vw,72px)] font-black text-[#111827] leading-tight font-serif tracking-tighter mb-6">
            The Proof is Live
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-base md:text-lg font-sans">
            Not mockups. Not demos. Production systems running real businesses — right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ALL_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-premium p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Visual mockup of the app/website instead of a blank image */}
                <div className="mb-8 transform group-hover:scale-[1.01] transition-transform duration-500">
                  {project.mockup}
                </div>

                <div className="flex justify-between items-start mb-6">
                  <TechBadgeGroup techs={project.tech} />
                  <div className="flex gap-4">
                    {[
                      {
                        href: "#",
                        label: "GitHub Repository",
                        title: "GitHub",
                        icon: <Github size={20} />,
                        target: undefined,
                        rel: undefined,
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
                        className={idx === 0 ? "text-[#6B7280] hover:text-[#111827] transition-colors duration-200" : "text-[#6B7280] hover:text-[#3B6DFF] transition-all duration-300"}
                        aria-label={item.label}
                        title={item.title}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#111827] font-serif mb-4 tracking-tight group-hover:text-[#3B6DFF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed mb-8 font-sans text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              {/* Explore Project Gradient CTA button */}
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white px-6 py-3 rounded-[18px] text-[11px] font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-blue-500/10"
                >
                  Explore Project <span className="ml-2 font-bold font-sans">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
