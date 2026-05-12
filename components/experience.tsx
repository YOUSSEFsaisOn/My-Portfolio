'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'The DevHouse',
      position: 'Frontend Developer',
      period: '03/2025 – Present',
      description: 'Building and maintaining responsive web apps using React.js, Next.js, and modern UI tools with Tailwind CSS. Improving UX design and optimizing performance through cross-functional team collaboration.',
      highlights: ['React.js', 'Next.js', 'Tailwind CSS', '.NET Integration', 'UI/UX Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Freelance / Self-Employed',
      position: 'Full Stack Developer',
      period: 'Jan 2026 – Feb 2026',
      description: 'Developed a production-ready web application using Next.js with scalable architecture. Implemented payment integration with Paymob and secure video streaming with Bunny.net.',
      highlights: ['Next.js', 'TypeScript', 'React Query', 'Paymob', 'Bunny.net', 'JWT', '.NET APIs'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Cyparta',
      position: 'Front End Developer',
      period: '09/2023 – 12/2024',
      description: 'Built and optimized e-commerce applications with payment integration and product filtering. Collaborated with cross-functional teams and conducted code reviews for quality assurance.',
      highlights: ['React.js', 'Next.js', 'Redux Toolkit', 'Jest', 'Payment', '.NET Backend'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      company: 'Route Company',
      position: 'Frontend Developer',
      period: '02/2023 – 08/2023',
      description: 'Built and maintained responsive user interfaces using React.js and Next.js. Collaborated with backend team to integrate REST APIs and ensure smooth data flow.',
      highlights: ['React.js', 'Next.js', 'REST APIs', '.NET Services', 'Responsive Design'],
      color: 'from-indigo-500 to-blue-500'
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Work <span className="text-blue-400">History</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I&apos;ve made at each stop.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/20 to-transparent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 bg-blue-500 rounded-full md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block" />

                <div className="flex-1">
                  <div className={`glass rounded-3xl p-8 relative overflow-hidden group hover:bg-white/5 transition-colors duration-500 ${index % 2 === 1 ? 'text-left md:text-right' : 'text-left'}`}>
                    <div className={`absolute top-0 ${index % 2 === 1 ? 'right-0' : 'left-0'} w-2 h-full bg-gradient-to-b ${exp.color}`} />

                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-lg font-medium text-gray-300 mb-4">{exp.company}</p>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                      {exp.highlights.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
