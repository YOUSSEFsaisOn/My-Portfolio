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
            FEATURED <span className="text-[#235ccf] drop-shadow-[0_0_15px_rgba(53,103,232,0.15)]">PROJECTS.</span>
          </h2>
          <p className="text-[#CEDDEA] max-w-2xl mx-auto text-lg font-sans">
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
              className="group relative bg-[#115EA5] p-10 rounded-[3rem] border border-[#10477C] hover:border-[#123C6A] transition-all duration-500 shadow-lg shadow-blue-950/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
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
                        className={idx === 0 ? "text-[#CEDDEA]/90 hover:text-white transition-colors duration-200" : "text-[#CEDDEA] hover:text-[#D9E7FF] transition-all duration-300"}
                        aria-label={item.label}
                        title={item.title}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white font-serif mb-6 tracking-tight group-hover:text-[#D9E7FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#CEDDEA] leading-relaxed mb-8 font-sans">
                  {project.description}
                </p>
              </div>

              {/* CTA Blue button */}
              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#235ccf] text-white px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-[#1b4fa6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
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
