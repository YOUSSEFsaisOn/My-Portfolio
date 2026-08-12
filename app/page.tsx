import Hero from '@/components/hero'
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

export default function Home() {
  return (
    <div className="text-foreground min-h-screen relative overflow-hidden bg-[#070B14]">
      <SpaceBackground />
      <Navigation />

      {/* 1. Dark Hero Section */}
      <div className="relative z-10">
        <Hero />
        <Values />
      </div>

      {/* 2. White Portfolio/Projects Section */}
      <div className="relative z-20 bg-white text-[#111827]">
        <Projects />
      </div>

      {/* 3. Light Gray Feature Section */}
      <div className="relative z-20 bg-[#F8F9FC] text-[#111827]">
        <Experience />
        <Process />
        <Skills />
      </div>

      {/* 4. Dark CTA/Footer Section */}
      <div className="relative z-10 bg-[#070B14] text-white">
        <Contact />
      </div>

      <FloatingContact />
      <FloatingAi />
    </div>
  )
}
