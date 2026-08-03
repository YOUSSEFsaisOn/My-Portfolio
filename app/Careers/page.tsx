import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function CareersPage() {
  return (
    <div className="bg-[#050812] text-white min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 font-serif text-center">Careers</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Join our team of talented individuals and help us build the future of technology.
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
              <label className="block text-sm font-medium mb-2">Secondary Contact Info</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Department of Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500">
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="management">Management</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Job Title</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Why do you want to join us?</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-3 h-32 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Available to Start</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-500" placeholder="e.g. Immediately, or a specific date" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Resume / CV (File Upload)</label>
            <input type="file" className="w-full text-gray-400" />
          </div>
          <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
            Send Application
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
