'use client'

import { motion } from 'framer-motion'
import { MessageSquare, ShieldCheck, Clock } from 'lucide-react'

const features = [
  {
    title: "Communication is Key",
    text: "In order to develop the best possible solution for our clients, we make an effort to deeply understand their needs and goals.",
    icon: <MessageSquare className="w-6 h-6 text-[#3B82F6]" />
  },
  {
    title: "100% Hassle Free",
    text: "We take care of all the technical stuff, so you can focus on your business. From development to deployment to ongoing maintenance.",
    icon: <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
  },
  {
    title: "We're in it for the long run!",
    text: "Our job doesn't end with development or deployment. We provide ongoing support and maintenance.",
    icon: <Clock className="w-6 h-6 text-[#3B82F6]" />
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[25px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
