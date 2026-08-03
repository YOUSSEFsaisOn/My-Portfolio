import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Lightning OS",
    description: "A comprehensive management system for fiber optic connectivity providers, streamlining operations and customer management.",
    live: "https://lightningos.world",
    image: "/projects/lightning.jpg" // Placeholder path
  },
  {
    title: "QR Waiters",
    description: "Smart QR code menu platform for restaurants and cafés, enabling digital ordering and efficient table management.",
    live: "#",
    image: "/projects/qr-waiters.jpg"
  },
  {
    title: "Med-CO",
    description: "Modern medical software and healthcare solutions platform designed for clinics and healthcare providers.",
    live: "https://medcoplatform.com",
    image: "/projects/medco.jpg"
  },
  {
    title: "Serial Plotter",
    description: "Real-time data visualization tool for serial devices, helping engineers and developers monitor data streams efficiently.",
    live: "https://serialplotter.io",
    image: "/projects/serialplotter.jpg"
  },
  {
    title: "Token & QR Management",
    description: "Customizable QR token platform for secure and efficient access or transaction management.",
    live: "https://kindcities.web.app",
    image: "/projects/token.jpg"
  }
]

export default function PastProjectsPage() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 font-serif text-center">Our Portfolio</h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Explore some of the high-impact custom software solutions we&apos;ve built for our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <div className="aspect-video bg-white/10 relative">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {project.title} Mockup
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-serif">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-sm font-bold">
                    Learn More
                  </button>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold text-sm">
                      Visit Live <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
