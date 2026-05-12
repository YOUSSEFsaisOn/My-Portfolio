'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, product filtering, and responsive design. Implemented using Next.js, React Query, and Paymob payment gateway.',
      tags: ['Next.js', 'React Query', 'Paymob'],
      image: '🛍️'
    },
    {
      title: 'Notes Management App',
      description: 'Full-stack notes application with CRUD operations, JWT authentication, and real-time synchronization. Built with Next.js frontend and .NET Web API backend.',
      tags: ['Next.js', 'TypeScript', '.NET API'],
      image: '📝'
    },
    {
      title: 'Secure Video Platform',
      description: 'Video streaming application with secure content protection and Bunny.net integration. Implemented authentication, protected routes, and optimized video delivery.',
      tags: ['Next.js', 'Bunny.net', 'Security'],
      image: '🎥'
    },
    {
      title: 'Firebase Auth System',
      description: 'Secure authentication application with Google Sign-In and Email/Password login. Implemented using Firebase Authentication with modern React patterns.',
      tags: ['React.js', 'Firebase', 'OAuth'],
      image: '🔐'
    },
    {
      title: 'Course Learning Platform',
      description: 'Production-ready learning platform with course management, video streaming, and payment integration. Fully deployed on MonsterASP.NET with scalable architecture.',
      tags: ['Next.js', 'TypeScript', 'Course Management'],
      image: '📚'
    },
    {
      title: 'Responsive Dashboard',
      description: 'Modern dashboard application with real-time data visualization, responsive design, and optimized performance. Built with React.js and custom CSS animations.',
      tags: ['React.js', 'Data Vis', 'Animations'],
      image: '📊'
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black mb-4"
            >
              Selected <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Projects</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              A collection of technical solutions and creative builds that showcase my focus on performance and UX.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800" />
              ))}
            </div>
            <p className="text-sm text-gray-500">Trusted by 20+ clients</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-3xl p-8 transition-all duration-500 hover:bg-white/10 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-9xl">{project.image}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
                      {project.image}
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                        <Github size={18} />
                      </button>
                      <button className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:gap-4 transition-all">
            Explore all projects on GitHub <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
