'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-white/70 text-lg leading-relaxed"
          >
            <p>
              I&apos;m a Frontend Developer dedicated to building high-quality, performant web applications. My focus is on creating seamless user experiences through clean code and modern design principles.
            </p>
            <p>
              With expertise in the React ecosystem, I specialize in Next.js, TypeScript, and Tailwind CSS. I bridge the gap between design and functionality, ensuring every project is as beautiful as it is robust.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-6 rounded-[2rem]">
                <p className="text-white font-bold text-3xl">2+</p>
                <p className="text-white/40 text-sm">Years Exp.</p>
              </div>
              <div className="glass p-6 rounded-[2rem]">
                <p className="text-white font-bold text-3xl">15+</p>
                <p className="text-white/40 text-sm">Projects</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="glass aspect-square rounded-[2.5rem] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 glass rounded-full mx-auto mb-6 flex items-center justify-center border border-white/5">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Based in Cairo</h3>
                <p className="text-white/60">Working globally with modern teams</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
