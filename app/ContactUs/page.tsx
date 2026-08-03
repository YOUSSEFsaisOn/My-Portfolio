import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUsPage() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 font-serif text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 font-serif">Say Hi!</h2>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
              We&apos;re always excited to hear about new projects and ideas. Whether you have a question or just want to say hi, feel free to get in touch.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">+20 110 736 1400</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-400">sales@thedevhouse.io</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-gray-400">Heliopolis, Cairo, Egypt</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">View on Google Maps</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-6 font-serif">Ready to start?</h3>
            <p className="text-gray-400 mb-8">Schedule a consultation session with our experts to discuss your requirements.</p>
            <a href="/ConsultationProgram" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
              Book Consultation Session
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
