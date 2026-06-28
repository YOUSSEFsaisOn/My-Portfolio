"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Freelance / compass.college",
      position: "Frontend Developer (Next.js)",
      period: "06/2026 – 07/2026",
      description:
        "Architected a full-stack e-learning platform with student site and admin dashboard. Engineered role-based auth system with JWT, protected routes, and scoped content access. Integrated Paymob checkout and secured video delivery via Bunny.net.",
      highlights: ["Next.js", "TypeScript", "React Query", ".NET", "Paymob"],
    },
    {
      company: "Freelance / etengineeringacademy.com",
      position: "Frontend Developer (Next.js)",
      period: "Jan 2026 – Feb 2026",
      description:
        "Architected a full-stack e-learning platform including live sessions and Zoom integration. Managed complex server state with React Query and built reusable TypeScript service layers.",
      highlights: ["Next.js", "React Query", "TypeScript", "Bunny.net", "Zoom"],
    },
    {
      company: "The DevHouse",
      position: "Frontend Developer",
      period: "02/2026 – 03/2026",
      description:
        "Built and maintained responsive web apps using React.js and Next.js. Improved UX design and optimized performance through cross-functional team collaboration.",
      highlights: ["React.js", "Next.js", "Tailwind CSS", ".NET"],
    },
    {
      company: "Cyparta",
      position: "Front End Developer",
      period: "09/2023 – 12/2024",
      description:
        "Built and optimized e-commerce applications with payment integration and product filtering. Conducted code reviews and wrote unit tests with Jest.",
      highlights: ["React.js", "Next.js", "Redux Toolkit", "Jest", ".NET"],
    },
    {
      company: "Route Company",
      position: "Frontend Developer",
      period: "02/2023 – 08/2023",
      description:
        "Built and maintained responsive user interfaces using React.js and JavaScript. Collaborated with backend teams to integrate REST APIs.",
      highlights: ["React.js", "JavaScript", "REST APIs", ".NET"],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#f4f4f5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#050812] leading-tight font-serif tracking-tighter">
            WORK <br />
            <span className="text-[#de0000]">EXPERIENCE.</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 hover:border-red-600/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-600/5 rounded-lg text-[#de0000]">
                      <Briefcase size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#050812] font-serif tracking-tight">
                    {exp.position}
                  </h3>
                  <p className="text-xl font-bold text-[#de0000]">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:w-48 shrink-0">
                  {exp.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full border border-black/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
