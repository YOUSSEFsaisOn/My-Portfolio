'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { fadeInUp, commonWhileInView } from '@/lib/animations'

export default function Experience() {
  const experiences = [
    {
      company: 'Freelance / compass.college',
      position: 'Full Stack Developer',
      period: '06/2026 – 07/2026',
      description: 'Architected a full-stack e-learning platform (courses, books, exams, homework, materials, instructors, pricing) with student site and admin dashboard Engineered role-based auth system with JWT, protected routes, and scoped content access for students and adminsBuilt course content logic with video lessons, exams, and homework all scoped per course and enrollment statusIntegrated Paymob checkout with order and payment state logic supporting free and paid coursesSecured video delivery via Bunny.net⁠ with token-based streaming preventing direct URL accessBuilt with Next.js (App Router), TypeScript, React Query, and .NET backend APIs — deployed to MonsterASP.NET⁠.',
      highlights: ['Next.js', 'TypeScript', 'React Query', 'Paymob', 'Bunny.net', 'JWT', '.NET APIs'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'Freelance / etengineeringacademy.com⁠',
      position: 'Front End Developer',
      period: '09/2023 – 12/2024',
      description: 'Built and optimized e-commerce applications with payment integration and product filtering. Collaborated with cross-functional teams and conducted code reviews for quality assurance.',
      highlights: ['React.js', 'Next.js', 'Redux Toolkit', 'Jest', 'Payment', '.NET Backend'],
      color: 'from-blue-500 to-indigo-500'
    },
     {
      company: 'The DevHouse ',
      position: 'Frontend Developer',
      period: '02/2026 – 03/2025',
      description: 'Built and maintained responsive web apps using React.js Next.js and modern Ul tools with Tailwind CSS Improved UX design and optimized performance through cross-functional team collaboration Integrated.NET backend services and secure APIs for seamless full-stack functionality.',
      highlights: ['React.js', 'Next.js', 'Tailwind CSS', '.NET Integration', 'UI/UX Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
     {
      company: 'Cyparta ',
      position: 'Front End Developer',
      period: '09/2023 – 12/2024',
      description: '•Built and optimized e-commerce applications with features like payment integration and product filtering using React.js and Next.js •Collaborated with cross-functional teams to deliver responsive and accessible web applications with.NET backend integration •Focused on clean code performance optimization, and SEO improvements through modern development practices Integrated third-party APIs and conducted code reviews for quality assurance Wrote unit tests with Jest and used Redux Toolkit for efficient state management ',
      highlights: ['React.js', 'Next.js', 'Tailwind CSS', '.NET Integration', 'UI/UX Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Route Company',
      position: 'Frontend Developer',
      period: 'Jan 2026 – Feb 2026',
      description: '•Built and maintained responsive user interfaces using React.js Next.js and JavaScript •Collaborated with the backend team to integrate REST APIs and ensure smooth dataflow with .NET services⁠',
      highlights: ['React.js', 'Next.js', 'REST APIs', '.NET Services', 'Responsive Design'],
      color: 'from-indigo-500 to-blue-500'
    },
  ]

  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0C0C0C]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={commonWhileInView}
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
                viewport={commonWhileInView}
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
