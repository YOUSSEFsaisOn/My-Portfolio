'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '⚛️',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'State',
      icon: '🔄',
      skills: ['Redux Toolkit', 'React Query', 'Context API']
    },
    {
      category: 'Backend',
      icon: '🔌',
      skills: ['.NET Core', 'REST APIs', 'Node.js', 'GraphQL']
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['SQL Server', 'Firebase', 'PostgreSQL']
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'Vercel', 'Figma']
    },
    {
      category: 'Quality',
      icon: '✅',
      skills: ['Jest', 'TDD', 'Performance', 'SEO']
    },
  ]

  return (
    <section id="skills" className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Technical <span className="text-blue-500">Stack</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build production-grade applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-3xl group hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
