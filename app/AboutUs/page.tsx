import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 font-serif text-center">About Us</h1>
        <section className="mb-16">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The DevHouse started as a remote collaboration in 2021, bringing together talented developers and designers to build high-quality software solutions. Our dedication to excellence and client satisfaction led us to open our physical headquarters in Heliopolis, Cairo, in 2023.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            Today, we are a leading software agency dedicated to building the custom operational backbones that power modern businesses.
          </p>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Innovation", desc: "We constantly explore new technologies to provide the best solutions." },
            { title: "Quality", desc: "We maintain the highest standards in every line of code we write." },
            { title: "Collaboration", desc: "We work closely with our clients to ensure their vision is realized." },
            { title: "Integrity", desc: "We believe in transparency and honesty in all our dealings." }
          ].map((value) => (
            <div key={value.title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 font-serif">{value.title}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 font-serif">Ready to Work With Us?</h2>
          <a href="/ContactUs" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
