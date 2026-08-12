"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Framer Motion"],
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "MUI", "Bootstrap", "Sass/SCSS", "CSS3/HTML5"],
    },
    {
      title: "State & Data",
      skills: ["Redux", "Redux Toolkit", "React Query", "REST APIs", "GraphQL"],
    },
    {
      title: "Backend & DB",
      skills: [".NET", "SQL", "NoSQL", "Firebase", "JWT Security"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "ESLint", "Postman", "Jest"],
    },
    {
      title: "Others",
      skills: ["UI/UX Principles", "Responsive Design", "Agile", "Testing"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-[#F8F9FC] relative z-10 border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#3B6DFF] uppercase mb-4 block">
            EXPERTISE
          </span>
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-[#111827] leading-tight font-serif tracking-tighter">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-6"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#111827] border-b border-[#E5E7EB] pb-4 font-sans">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-sm font-bold text-[#6B7280] hover:text-[#3B6DFF] transition-colors cursor-default font-sans">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
