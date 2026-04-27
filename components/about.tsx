'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/40 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a motivated Frontend Developer with a passion for building responsive, interactive, and user-friendly web applications. With experience in React.js, Next.js, and modern JavaScript frameworks, I specialize in creating seamless digital experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across modern web technologies including TypeScript, Tailwind CSS, and state management solutions. I&apos;m committed to writing clean, maintainable code and optimizing performance in every project.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;ve worked with various teams at companies like The DevHouse and Cyparta, collaborating on full-stack solutions that integrate seamlessly with .NET backend services. I&apos;m always eager to learn new technologies and improve my craft.
            </p>

            <div className="pt-4">
              <h3 className="text-cyan-400 font-semibold mb-3">Key Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>5+ projects delivered with production-ready code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Full-stack development experience with React & .NET</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Payment integration expertise (Paymob)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Video streaming implementation (Bunny.net)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl" />
            <div className="relative bg-slate-900 rounded-2xl p-8 group-hover:p-6 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 min-h-64 flex flex-col justify-center gap-6">
                <div className="group/card hover:scale-110 transition-transform duration-300">
                  <p className="text-sm text-gray-400 mb-2">Experience</p>
                  <p className="text-3xl font-bold text-blue-400">2+ Years</p>
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                <div className="group/card hover:scale-110 transition-transform duration-300">
                  <p className="text-sm text-gray-400 mb-2">Focus Areas</p>
                  <p className="text-lg font-semibold text-cyan-300">React, Next.js, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
