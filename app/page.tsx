import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import HomeSections from '@/components/home-sections'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />

      <Hero />

      <HomeSections />

      <Footer />
    </div>
  )
}
