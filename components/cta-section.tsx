'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-white rounded-b-[100%] z-10" />

      <div className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-[#008CFF] to-[#0062CC] rounded-t-[50px] md:rounded-t-[100px]">
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-24 h-24 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 hidden md:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[15%] w-32 h-32 bg-white/10 rounded-full backdrop-blur-md border border-white/20 hidden md:block"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight"
          >
            Ready to build the future of your business?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-[#0062CC] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
