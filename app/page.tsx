import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white/20">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
