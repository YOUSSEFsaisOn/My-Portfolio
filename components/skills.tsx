'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

/* ─── Marquee Row: auto-scrolling skill pills ─── */
function MarqueeRow({
  skills,
  direction = 'left',
  speed = 30,
}: {
  skills: string[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  // Double the list so the loop is seamless
  const doubled = [...skills, ...skills]

  return (
    <div className="skills-marquee-track overflow-hidden relative">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[#0C0C0C] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#0C0C0C] to-transparent" />

      <div
        className={`flex gap-4 w-max ${
          direction === 'left' ? 'skills-marquee-left' : 'skills-marquee-right'
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="skills-pill"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Skill Category Card ─── */
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
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 60, rotateX: -10 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="skills-card group"
      style={{ '--card-accent': category.accent } as React.CSSProperties}
    >
      {/* Animated border glow */}
      <div className="skills-card-border" />

      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="skills-icon-wrap">
            <span className="text-2xl">{category.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {category.category}
            </h3>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 rounded-full mt-1" />
          </div>
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.1 + i * 0.06 + 0.3,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="skills-chip"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover glow spot */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: category.accent }}
      />
    </motion.div>
  )
}

/* ─── Main Skills Section ─── */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax transforms for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const bgY2 = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9])
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ['0%', '100%'])

  const skillCategories = [
    {
      category: 'Frontend',
      icon: '⚛️',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      accent: 'rgba(59, 130, 246, 0.15)',
    },
    {
      category: 'State',
      icon: '🔄',
      skills: ['Redux Toolkit', 'React Query', 'Context API'],
      accent: 'rgba(34, 211, 238, 0.15)',
    },
    {
      category: 'Backend',
      icon: '🔌',
      skills: ['.NET Core', 'REST APIs', 'GraphQL'],
      accent: 'rgba(129, 140, 248, 0.15)',
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['SQL Server', 'Firebase', 'PostgreSQL'],
      accent: 'rgba(52, 211, 153, 0.15)',
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'Vercel', 'Figma'],
      accent: 'rgba(251, 191, 36, 0.12)',
    },
    {
      category: 'Quality',
      icon: '✅',
      skills: ['Jest', 'TDD', 'Performance', 'SEO'],
      accent: 'rgba(244, 114, 182, 0.12)',
    },
  ]

  // All skills flattened for marquee rows
  const row1 = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'React Query', 'Context API', '.NET Core', 'REST APIs', 'GraphQL']
  const row2 = ['SQL Server', 'Firebase', 'PostgreSQL', 'Git', 'Vercel', 'Figma', 'Jest', 'TDD', 'Performance', 'SEO']

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 md:py-36 px-6 bg-[#0C0C0C] relative overflow-hidden"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: bgY1, scale: bgScale }}
          className="absolute top-[5%] left-[10%] w-[450px] h-[450px] bg-blue-500/[0.03] rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/[0.025] rounded-full blur-[140px]"
        />
      </div>

      {/* ── Dot Grid Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          {/* Decorative line */}
          <motion.div
            style={{ width: lineWidth }}
            className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent mx-auto mb-10"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 border border-blue-500/20 bg-blue-500/[0.06] mb-6">
              Tech Arsenal
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={
              headingInView
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {}
            }
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
          >
            Technical{' '}
            <span className="text-gradient">Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-6 leading-relaxed"
          >
            A comprehensive overview of the technologies and tools I leverage to
            build production-grade applications.
          </motion.p>
        </div>

        {/* ── Marquee Rows ── */}
        <div className="mb-16 md:mb-20 space-y-5">
          <MarqueeRow skills={row1} direction="left" speed={35} />
          <MarqueeRow skills={row2} direction="right" speed={40} />
        </div>

        {/* ── Skill Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
