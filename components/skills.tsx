'use client'

import { motion } from 'framer-motion'

const SkillItem = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-sm">
      <span className="text-white/70">{name}</span>
      <span className="text-white/40">{level}%</span>
    </div>
    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
        className="h-full bg-white rounded-full"
      />
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      category: 'State Management',
      icon: '🔄',
      skills: [
        { name: 'Redux Toolkit', level: 88 },
        { name: 'React Query', level: 90 },
        { name: 'Context API', level: 85 },
      ]
    },
    {
      category: 'Backend & APIs',
      icon: '🔌',
      skills: [
        { name: '.NET Framework', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Node.js', level: 80 },
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Firebase', level: 85 },
        { name: 'NoSQL', level: 80 },
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Vercel', level: 90 },
      ]
    },
    {
      category: 'Testing',
      icon: '✅',
      skills: [
        { name: 'Jest', level: 85 },
        { name: 'Unit Testing', level: 85 },
        { name: 'Optimization', level: 88 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-white/40 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <SkillItem key={i} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
