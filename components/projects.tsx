"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TechBadge } from "./shared/tech-badge";

const ALL_PROJECTS = [
  {
    title: "Compass College",
    description:
      "A full-stack e-learning platform (site + admin dashboard) for high school students — courses, books, exams, pricing, and auth. Developed instructor management system and course pricing with free/paid content support.",
    tech: ["Next.js", ".NET", "React Query", "Paymob", "Bunny.net"],
    link: "https://compass.college/",
  },
  {
    title: "ET Engineering Academy",
    description:
      "Built a full-stack e-learning platform including courses, books, live sessions, instructors, and Zoom integration. Managed complex server state with React Query and implemented secure video delivery.",
    tech: ["Next.js", ".NET", "TypeScript", "React Query", "Bunny.net"],
    link: "https://etengineeringacademy.com",
  },
  {
    title: "Notes Management App",
    description:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API. Implemented secure authentication and protected routes with JWT.",
    tech: ["React.js", ".NET", "JWT", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Firebase Auth System",
    description:
      "Built a secure authentication app with Google Sign-In and Email/Password login using Firebase Authentication.",
    tech: ["React", "Firebase", "Auth", "Security"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#1A103C] leading-tight font-serif tracking-tighter mb-6">
            FEATURED <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.15)]">PROJECTS.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-sans">
            A selection of platforms and applications I&apos;ve built, focusing on e-learning and full-stack solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ALL_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-[#E1EEF8] transition-all duration-500 shadow-lg shadow-slate-100/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <TechBadge key={i} variant="project">
                        {t}
                      </TechBadge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-[#1A103C] transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1A103C] transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-[#1A103C] font-serif mb-6 tracking-tight group-hover:text-[#3b82f6] transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Styled exactly like the Deep Midnight Purple button in the design image */}
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1A103C] text-white px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#2c1a5d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
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
