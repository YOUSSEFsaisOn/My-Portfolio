'use client';

import React from 'react';
import FadeIn from '@/components/ui/fade-in';

const services = [
  {
    id: "01",
    title: "AI Automations",
    description: "Creation of sophisticated AI-driven workflows that handle repetitive tasks, allowing you to focus on high-impact creative work."
  },
  {
    id: "02",
    title: "Focus Mode",
    description: "A hardware-integrated focus environment that manages digital distractions and optimizes your neuro-efficiency for peak performance."
  },
  {
    id: "03",
    title: "Project Generation",
    description: "Using advanced generative AI to bootstrap new projects, from initial concepts to detailed execution plans in minutes."
  },
  {
    id: "04",
    title: "Smart Branding",
    description: "Leveraging AI to maintain brand consistency across all touchpoints, ensuring a unified and professional visual identity."
  },
  {
    id: "05",
    title: "Web Ecosystems",
    description: "Building automated web presences that adapt to user behavior and market trends in real-time without manual intervention."
  }
];

export default function ServicesSection() {
  return (
    <section id="price" className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          className="font-black uppercase mb-16 sm:mb-20 md:mb-28 text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>

        <div className="w-full max-w-5xl mx-auto flex flex-col">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0">
                <span
                  className="font-black text-[#0C0C0C] leading-none mb-4 md:mb-0 md:mr-12"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                    {service.title}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
