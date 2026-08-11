import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import Values from '@/components/values'
import Process from '@/components/process'
import SelectedWork from '@/components/selected-work'
import FloatingContact from '@/components/floating-contact'
import FloatingAi from '@/components/floating-ai'
import SpaceBackground from '@/components/space-background'

export default function Home() {
  return (
    <div className="text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navigation />
      <Hero />
      <Values />
      <Experience />
      <Process />
      <SelectedWork />
      <Projects />
      <Skills />
      <Contact />
      <FloatingContact />
      <FloatingAi />
    </div>
  )
}
