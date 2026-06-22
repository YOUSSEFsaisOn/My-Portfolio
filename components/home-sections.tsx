'use client'

import Link from 'next/link'
import { ExternalLink, Rocket, Code, Palette, ShieldCheck, Zap, HeartHandshake } from 'lucide-react'

export default function HomeSections() {
  return (
    <div className="space-y-32 pb-32">
      {/* The Proof is Live */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-center">The Proof is Live</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Med-CO",
              desc: "Medical software/healthcare solutions",
              link: "https://medcoplatform.com",
              features: ["Appointment Management", "Patient Records", "Billing System"]
            },
            {
              title: "Lightning OS",
              desc: "Fiber optic connectivity management",
              link: "https://lightningos.world",
              features: ["Network Monitoring", "Automated Billing", "Customer Portal"]
            }
          ].map((project) => (
            <div key={project.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all">
              <div className="aspect-video bg-white/10 rounded-2xl mb-8 flex items-center justify-center text-gray-500">
                {project.title} Mockup
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.desc}</p>
              <ul className="flex flex-wrap gap-2 mb-8">
                {project.features.map(f => (
                  <li key={f} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">{f}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors">
                Visit Live <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Principles */}
      <section className="px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif">Our Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "User-Centric Design", icon: Palette },
            { title: "Scalable Architecture", icon: Zap },
            { title: "Clean Code", icon: Code },
            { title: "Performance First", icon: Rocket },
            { title: "Security by Default", icon: ShieldCheck },
            { title: "Long-term Partnership", icon: HeartHandshake },
          ].map((principle) => (
            <div key={principle.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 mx-auto mb-6">
                <principle.icon size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif">{principle.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* The Typical Cycle */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-center">The Typical Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your vision and business requirements." },
            { step: "02", title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences." },
            { step: "03", title: "Development", desc: "Building your solution with cutting-edge technologies." },
            { step: "04", title: "Quality Assurance", desc: "Ensuring every detail meets our high standards." },
            { step: "05", title: "Launch", desc: "Deploying your solution to the world." },
            { step: "06", title: "Long Term Support", desc: "Continuously improving and scaling your product." },
          ].map((item) => (
            <div key={item.step} className="relative p-8 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-4xl font-bold text-blue-500/20 absolute top-4 right-6">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4 font-serif">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose The DevHouse */}
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-serif text-center">Why Choose The DevHouse</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Explore The Possibilities", desc: "We push the boundaries of what's possible with technology." },
            { title: "For Established Businesses", desc: "Optimize and scale your existing operations with custom software." },
            { title: "Save Time & Money", desc: "Our efficient processes deliver high-quality results faster." },
            { title: "For New Businesses", desc: "Build a strong foundation for your startup with the right engine." },
          ].map((card) => (
            <div key={card.title} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
              <h3 className="text-3xl font-bold mb-4 font-serif group-hover:text-blue-500 transition-colors">{card.title}</h3>
              <p className="text-gray-400 text-lg">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Odoo Partner */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 font-serif">Official Odoo Partner</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl">
              As an official Odoo partner, we specialize in designing, implementing, and supporting custom Odoo ERP solutions that streamline your entire business operation.
            </p>
            <Link href="/ContactUs" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors">
              Get Odoo Support
            </Link>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  )
}
