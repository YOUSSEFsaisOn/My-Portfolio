'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack application with payment integration, product filtering, and responsive design.',
      tags: ['Next.js', 'Paymob', 'React Query'],
      className: 'md:col-span-2 md:row-span-2',
      icon: '🛍️'
    },
    {
      title: 'Notes App',
      description: 'Management system with JWT auth and real-time sync.',
      tags: ['Next.js', '.NET', 'TypeScript'],
      className: 'md:col-span-1 md:row-span-1',
      icon: '📝'
    },
    {
      title: 'Video Platform',
      description: 'Secure streaming with Bunny.net and content protection.',
      tags: ['Security', 'Bunny.net', 'Next.js'],
      className: 'md:col-span-1 md:row-span-1',
      icon: '🎥'
    },
    {
      title: 'Course Platform',
      description: 'Scalable learning management system with course management.',
      tags: ['TypeScript', 'Auth', 'Next.js'],
      className: 'md:col-span-1 md:row-span-2',
      icon: '📚'
    },
    {
      title: 'Dashboard',
      description: 'Real-time data visualization and performance optimization.',
      tags: ['React', 'Charts', 'Tailwind'],
      className: 'md:col-span-2 md:row-span-1',
      icon: '📊'
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Selected Projects</h2>
          <p className="text-white/40 text-lg">A showcase of my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
              className={`glass p-8 rounded-[2.5rem] flex flex-col justify-between group cursor-pointer hover:bg-white/[0.05] transition-all duration-500 ${project.className}`}
            >
              <div>
                <div className="text-4xl mb-6 glass w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 glass rounded-full text-xs text-white/40 group-hover:text-white transition-colors">
                    {tag}
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
