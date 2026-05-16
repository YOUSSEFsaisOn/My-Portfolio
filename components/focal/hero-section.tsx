'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/fade-in';
import Magnet from '@/components/ui/magnet';
import ContactButton from '@/components/ui/contact-button';

const navLinks = ["About", "Price", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col relative overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-50">
          <div className="flex justify-between w-full">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-grow flex flex-col justify-start pt-6 sm:pt-4 md:-mt-5 relative z-20">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m focal
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait (Image) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-[4/5]">
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Focal AI Device"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            an ai device driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
