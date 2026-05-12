'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlights = [
    "5+ projects delivered with production-ready code",
    "Full-stack development experience with React & .NET",
    "Payment integration expertise (Paymob)",
    "Video streaming implementation (Bunny.net)"
  ]

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A developer focused on building high-performance, visually stunning digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a motivated Frontend Developer with a passion for building responsive, interactive, and user-friendly web applications. With experience in React.js, Next.js, and modern JavaScript frameworks, I specialize in creating seamless digital experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across modern web technologies including TypeScript, Tailwind CSS, and state management solutions. I&apos;m committed to writing clean, maintainable code and optimizing performance in every project.
            </p>

            <div className="pt-6 space-y-4">
              <h3 className="text-white font-semibold text-xl mb-4">Key Highlights</h3>
              <div className="grid sm:grid-cols-1 gap-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-1 relative z-10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-950/40 rounded-[calc(1.5rem-1px)] p-10 flex flex-col gap-10">
                <div>
                  <p className="text-blue-400 font-medium mb-2 uppercase tracking-wider text-xs">Experience</p>
                  <p className="text-5xl font-bold text-white">2+ Years</p>
                  <p className="text-gray-400 mt-2">Professional software development</p>
                </div>

                <div className="h-px bg-white/10 w-full" />

                <div>
                  <p className="text-cyan-400 font-medium mb-2 uppercase tracking-wider text-xs">Focus Areas</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['React', 'Next.js', 'Tailwind', 'TypeScript'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements for style */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
