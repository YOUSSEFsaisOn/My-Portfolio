'use client'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '⚛️',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      category: 'State Management',
      icon: '🔄',
      skills: [
        { name: 'Redux Toolkit', level: 88 },
        { name: 'React Query', level: 90 },
        { name: 'Context API', level: 85 },
      ]
    },
    {
      category: 'Backend & APIs',
      icon: '🔌',
      skills: [
        { name: '.NET Framework', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'Node.js', level: 80 },
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'Firebase', level: 85 },
        { name: 'NoSQL', level: 80 },
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Vercel Deployment', level: 90 },
      ]
    },
    {
      category: 'Testing & Quality',
      icon: '✅',
      skills: [
        { name: 'Jest', level: 85 },
        { name: 'Unit Testing', level: 85 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Code Review', level: 85 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Card */}
              <div className="relative bg-slate-800/60 rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {category.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden group-hover:bg-slate-700 transition-colors duration-300">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full group-hover:h-2/3 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Projects Completed', value: '15+' },
            { label: 'Years Experience', value: '2+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Certifications', value: '3+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 hover:bg-slate-800/60 transition-all duration-300 hover:scale-105"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
