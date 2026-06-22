import FloatingNavbar from '@/components/floating-navbar'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import CTASection from '@/components/cta-section'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="relative">
      <div className="noise" />

      <FloatingNavbar />

      <HeroSection />

      <FeaturesSection />

      <CTASection />

      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
               <span className="text-white font-black text-sm">DH</span>
            </div>
            <span className="text-black font-bold text-xl tracking-tight">
              The DevHouse
            </span>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The DevHouse. All rights reserved.
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  )
}
