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
    <section id="skills" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-[clamp(32px,5vw,64px)] font-black text-white leading-tight font-serif tracking-tighter">
            TECHNICAL <br />
            <span className="text-[#3567E8] drop-shadow-[0_0_15px_rgba(53,103,232,0.15)]">EXPERTISE.</span>
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
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#D9E7FF] border-b border-[#123C6A] pb-4 font-sans">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-sm font-bold text-[#CEDDEA] hover:text-[#3567E8] transition-colors cursor-default font-sans">
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
