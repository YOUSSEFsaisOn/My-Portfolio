'use client'

export default function Experience() {
  const experiences = [
    {
      company: 'The DevHouse',
      position: 'Frontend Developer',
      period: '03/2025 – Present',
      description: 'Building and maintaining responsive web apps using React.js, Next.js, and modern UI tools with Tailwind CSS. Improving UX design and optimizing performance through cross-functional team collaboration.',
      highlights: ['React.js', 'Next.js', 'Tailwind CSS', '.NET Integration', 'UI/UX Optimization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'Freelance / Self-Employed',
      position: 'Full Stack Developer',
      period: 'Jan 2026 – Feb 2026',
      description: 'Developed a production-ready web application using Next.js with scalable architecture. Implemented payment integration with Paymob and secure video streaming with Bunny.net.',
      highlights: ['Next.js', 'TypeScript', 'React Query', 'Paymob Integration', 'Bunny.net Streaming', 'JWT Auth', '.NET APIs'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      company: 'Cyparta',
      position: 'Front End Developer',
      period: '09/2023 – 12/2024',
      description: 'Built and optimized e-commerce applications with payment integration and product filtering. Collaborated with cross-functional teams and conducted code reviews for quality assurance.',
      highlights: ['React.js', 'Next.js', 'Redux Toolkit', 'Jest Testing', 'Payment Integration', '.NET Backend'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      company: 'Route Company',
      position: 'Frontend Developer',
      period: '02/2023 – 08/2023',
      description: 'Built and maintained responsive user interfaces using React.js and Next.js. Collaborated with backend team to integrate REST APIs and ensure smooth data flow.',
      highlights: ['React.js', 'Next.js', 'REST APIs', '.NET Services', 'Responsive Design'],
      color: 'from-purple-500 to-purple-600'
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`} />
              <div className="relative bg-slate-800/60 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group-hover:bg-slate-800/80">
                <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-b-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {exp.position}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mt-2">{exp.period}</p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-slate-700/50 text-cyan-300 text-sm rounded-full border border-slate-600/50 hover:bg-slate-700 hover:border-cyan-400/50 hover:text-cyan-200 transition-all duration-300 cursor-default group-hover:scale-105 origin-center"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-6xl font-bold text-white/5">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
