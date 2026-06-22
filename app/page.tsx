import FloatingNavbar from '@/components/floating-navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import FeaturesSection from '@/components/features-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import CTASection from '@/components/cta-section'
import ContactSection from '@/components/contact-section'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="relative bg-[#050812]">
      <div className="noise" />

      <FloatingNavbar />

      <HeroSection />

      <AboutSection />

      <FeaturesSection />

      <SkillsSection />

      <ProjectsSection />

      <CTASection />

      <ContactSection />

      <footer className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <span className="text-white font-black text-sm">DH</span>
                </div>
                <span className="text-black font-bold text-xl tracking-tight">
                  The DevHouse
                </span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                We design and build custom software that becomes the operational backbone of your business. Replacing fragmented tools with a single, intelligent system.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a></li>
                <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-black mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <ul className="space-y-4 text-gray-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The DevHouse. All rights reserved. Built with precision.
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  )
}
