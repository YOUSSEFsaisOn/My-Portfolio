import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Navigation from '@/components/navigation'
import Values from '@/components/values'
import Process from '@/components/process'
import FloatingContact from '@/components/floating-contact'
import SpaceBackground from '@/components/space-background'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="text-foreground min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navigation />
      <Hero />
      <Projects />
      <Values />
      <Process />
      <Footer />
      <FloatingContact />
    </div>
  )
}
