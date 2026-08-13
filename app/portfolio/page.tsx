"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import Footer from "@/components/footer";
import { fadeInUp, fadeInLeft, fadeInRight, commonWhileInView } from "@/lib/animations";

const PROJECTS = [
  {
    title: "Lightning OS",
    description:
      "At Lightning OS Internet, we bring you the future of connectivity through advanced fiber technology. Discover The Power Of Fiber Optic Internet",
    image: "/projects/lightning-os.jpg",
    link: "#",
    liveLink: "#",
  },
  {
    title: "QR Waiters",
    description:
      "smart QR code menu platform empowers restaurants, cafés, and hotels to deliver a seamless, digital dining experience. instant menu updates.",
    image: "/projects/qr-waiters.jpg",
    link: "#",
    liveLink: "#",
  },
  {
    title: "Med-CO",
    description:
      "Med-CO is a leading provider of medical software and digital healthcare solutions, dedicated to transforming the way medical facilities operate.",
    image: "/projects/med-co.jpg",
    link: "#",
    liveLink: "#",
  },
  {
    title: "Serial Plotter",
    description:
      "Serial Plotter is a real-time data visualization tool for monitoring serial devices, supporting multiple channels with customizable names and colors.",
    image: "/projects/serial-plotter.jpg",
    link: "#",
    liveLink: "#",
  },
  {
    title: "Token & QR Management System",
    description:
      "A customizable web platform for generating and managing QR-based tokens tailored to any business system. It features a central dashboard for tracking accounts, token usage, and scan activity, along with fully customizable token templates to match branding and operational requirements.",
    image: "/projects/token-qr.jpg",
    link: "#",
    liveLink: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0f1525] text-white relative overflow-hidden">
      {/* Navigation */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-[clamp(36px,5vw,64px)] font-bold text-white leading-tight tracking-tight">
            Our Past Projects
          </h1>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="py-6 px-4 md:px-6 max-w-7xl mx-auto relative z-10 space-y-6 pb-24">
        {PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={commonWhileInView}
              variants={isEven ? fadeInLeft : fadeInRight}
              className="group bg-[#1a2235] rounded-[2rem] border border-white/[0.05] overflow-hidden hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                {/* Image Side */}
                <div className={`relative min-h-[320px] lg:min-h-[420px] bg-[#0b1120] flex items-center justify-center overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {/* Fallback mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-lg">
                        {/* Laptop frame */}
                        <div className="bg-[#0f1525] rounded-xl border border-white/10 p-3 shadow-2xl">
                          <div className="bg-[#1a2235] rounded-lg aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/30 to-transparent" />
                            <span className="text-white/20 text-sm font-medium relative z-10">{project.title} Preview</span>
                          </div>
                        </div>
                        {/* Phone frame */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-40 bg-[#0f1525] rounded-2xl border border-white/10 p-1.5 shadow-xl">
                          <div className="bg-[#1a2235] rounded-xl w-full h-full flex items-center justify-center">
                            <span className="text-white/20 text-[10px]">Mobile</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-base md:text-[17px] leading-[1.7] max-w-md">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.link}
                      className="inline-flex items-center justify-center bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      Visit Live
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      <FloatingContact />
    </div>
  );
}