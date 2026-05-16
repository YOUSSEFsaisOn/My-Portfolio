import HeroSection from '@/components/focal/hero-section'
import MarqueeSection from '@/components/focal/marquee-section'
import AboutSection from '@/components/focal/about-section'
import ServicesSection from '@/components/focal/services-section'
import ProjectsSection from '@/components/focal/projects-section'

export default function Home() {
  return (
    <main className="bg-[#0C0C0C] text-white min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
