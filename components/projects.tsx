"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-white leading-tight font-serif tracking-tighter mb-6">
            FEATURED <span className="text-[#2c58e3] drop-shadow-[0_0_15px_rgba(44,88,227,0.3)]">PROJECTS.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-sans">
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
              className="group relative bg-[#121622]/60 backdrop-blur-sm p-10 rounded-[3rem] border border-white/5 hover:border-[#2c58e3]/30 transition-all duration-500 shadow-xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#2c58e3] bg-[#2c58e3]/10 border border-[#2c58e3]/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2c58e3] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white font-serif mb-6 tracking-tight group-hover:text-[#2c58e3] transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-8 font-sans">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-[#2c58e3] transition-colors"
              >
                Explore Project <span className="w-10 h-px bg-white group-hover:bg-[#2c58e3] transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
