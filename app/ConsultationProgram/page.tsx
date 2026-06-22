import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function ConsultationPage() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 font-serif text-center">Consultation Program</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          We believe in giving back to the community. Schedule a consultation to discuss your project or ask any questions you have.
        </p>

        <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <div className="flex">
                <select className="bg-white/5 border border-white/10 rounded-l-xl p-3 focus:outline-none focus:border-blue-500 border-r-0">
                  <option value="+20">+20 (EG)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-r-xl p-3 focus:outline-none focus:border-blue-500" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Time</label>
            <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject / Project Details</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-3 h-32 focus:outline-none focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
            Send Request
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
