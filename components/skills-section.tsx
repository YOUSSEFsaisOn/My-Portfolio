'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function MarqueeRow({
  skills,
  direction = 'left',
  speed = 30,
}: {
  skills: string[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const doubled = [...skills, ...skills]

  return (
    <div className="overflow-hidden relative py-4">
      <div
        className={`flex gap-6 w-max ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white font-medium text-lg whitespace-nowrap shadow-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function SkillCard({
  category,
  index,
}: {
  category: { category: string; icon: string; skills: string[]; accent: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:border-blue-500/50 transition-colors duration-500 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">
          {category.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white/5 rounded-xl text-sm text-gray-300 border border-white/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      icon: '⚛️',
      skills: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      accent: 'rgba(59, 130, 246, 0.15)',
    },
    {
      category: 'System Architecture',
      icon: '🏗️',
      skills: ['Microservices', 'Serverless', 'Edge Computing', 'Event-Driven'],
      accent: 'rgba(34, 211, 238, 0.15)',
    },
    {
      category: 'Backend & Cloud',
      icon: '☁️',
      skills: ['Node.js', '.NET Core', 'PostgreSQL', 'Redis', 'AWS / Vercel'],
      accent: 'rgba(129, 140, 248, 0.15)',
    },
  ]

  const row1 = ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React 19', 'Turbopack', 'Three.js']
  const row2 = ['Node.js', '.NET Core', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Vercel']

  return (
    <section id="expertise" className="py-28 bg-[#080D18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Our <span className="italic">Expertise</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            We leverage the latest technologies to build high-performance software systems that stay ahead of the curve.
          </p>
        </div>

        <div className="mb-20">
          <MarqueeRow skills={row1} direction="left" speed={40} />
          <MarqueeRow skills={row2} direction="right" speed={45} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  )
}
