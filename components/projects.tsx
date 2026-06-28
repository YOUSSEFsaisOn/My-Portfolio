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
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#050812] leading-tight font-serif tracking-tighter mb-6">
            FEATURED <span className="text-[#de0000]">PROJECTS.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
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
              className="group relative bg-[#f4f4f5] p-10 rounded-[3rem] border border-black/5 hover:border-red-600/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#de0000] bg-red-600/5 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-[#050812] transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#de0000] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-3xl font-black text-[#050812] font-serif mb-6 tracking-tight group-hover:text-[#de0000] transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#050812] group-hover:text-[#de0000] transition-colors"
              >
                Explore Project <span className="w-10 h-px bg-[#050812] group-hover:bg-[#de0000] transition-colors" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
