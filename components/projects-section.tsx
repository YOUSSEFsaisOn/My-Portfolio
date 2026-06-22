'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: "Quantum ERP",
    category: "Enterprise Software",
    description: "A comprehensive resource planning system built for high-scale manufacturing, replacing 12 fragmented legacy tools.",
    tags: ["Next.js", "PostgreSQL", "Real-time"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Aura AI",
    category: "Machine Learning",
    description: "An intelligent customer support engine that handles 80% of routine inquiries with human-like precision.",
    tags: ["OpenAI", "Python", "Vector DB"],
    color: "from-purple-600 to-blue-500"
  },
  {
    title: "Nexus Core",
    category: "FinTech",
    description: "Secure, low-latency transaction processing backbone handling over $50M in monthly volume.",
    tags: ["Rust", "Node.js", "Security"],
    color: "from-cyan-600 to-teal-500"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-[#050812] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Selected <span className="italic">Works</span>
            </h2>
            <p className="text-[#9CA3AF] text-lg">
              Explore the engines we&apos;ve built for industry leaders and ambitious startups.
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-white font-bold group"
          >
            View all projects <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-all duration-500 group-hover:border-blue-500/30">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
