import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import Values from '@/components/values'
import Process from '@/components/process'
import FloatingContact from '@/components/floating-contact'

export default function Home() {
  return (
    <div className="bg-white text-[#050812] min-h-screen">
      <Navigation />
      <Hero />
      <Values />
      <About />
      <Experience />
      <Process />
      <Projects />
      <Skills />
      <Contact />
      <FloatingContact />
    </div>
  )
}
