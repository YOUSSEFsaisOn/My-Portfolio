import Hero from '@/components/hero'
import About from '@/components/about'
import Divisions from '@/components/divisions'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import Values from '@/components/values'
import Process from '@/components/process'
import FloatingContact from '@/components/floating-contact'
import FloatingAi from '@/components/floating-ai'
import SpaceBackground from '@/components/space-background'
import ScrollNav from '@/components/scroll-nav'

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <ScrollNav />
      <Navigation />
      <Hero />
      <Values />
      <About />
      <Divisions />
      <Experience />
      <Process />
      <Projects />
      <Skills />
      <Contact />
      <FloatingContact />
      <FloatingAi />
    </div>
  )
}
