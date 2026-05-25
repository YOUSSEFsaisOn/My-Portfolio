import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import SmoothSection from '@/components/smooth-section'
import CursorGlow from '@/components/cursor-glow'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <Navigation />
      <CursorGlow />

      <Hero />

      <SmoothSection parallaxSpeed={0.3}>
        <About />
      </SmoothSection>

      <SmoothSection parallaxSpeed={0.2}>
        <Experience />
      </SmoothSection>

      <SmoothSection parallaxSpeed={0.3}>
        <Projects />
      </SmoothSection>

      <SmoothSection parallaxSpeed={0.2}>
        <Skills />
      </SmoothSection>

      <SmoothSection parallaxSpeed={0.15}>
        <Contact />
      </SmoothSection>
    </div>
  )
}
