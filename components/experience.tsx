'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'The DevHouse',
      position: 'Frontend Developer',
      period: '03/2025 – Present',
      description: 'Building and maintaining responsive web apps using React.js, Next.js, and modern UI tools with Tailwind CSS. Improving UX design and optimizing performance through cross-functional team collaboration.',
    },
    {
      company: 'Freelance / Self-Employed',
      position: 'Full Stack Developer',
      period: 'Jan 2026 – Feb 2026',
      description: 'Developed a production-ready web application using Next.js with scalable architecture. Implemented payment integration with Paymob and secure video streaming with Bunny.net.',
    },
    {
      company: 'Cyparta',
      position: 'Front End Developer',
      period: '09/2023 – 12/2024',
      description: 'Built and optimized e-commerce applications with payment integration and product filtering. Collaborated with cross-functional teams and conducted code reviews for quality assurance.',
    },
    {
      company: 'Route Company',
      position: 'Frontend Developer',
      period: '02/2023 – 08/2023',
      description: 'Built and maintained responsive user interfaces using React.js and Next.js. Collaborated with backend team to integrate REST APIs and ensure smooth data flow.',
    },
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-white/40 text-lg">My professional path</p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="glass p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-colors group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.position}</h3>
                  <p className="text-white/60 font-medium">{exp.company}</p>
                </div>
                <div className="px-4 py-1.5 glass rounded-full text-sm text-white/40">
                  {exp.period}
                </div>
              </div>
              <p className="mt-4 text-white/50 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
