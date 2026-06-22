"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MouseTrail from "./framer/mouse-trail";
import TextVideoMask from "./framer/text-video-mask";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid setState cascading warnings in React strict mode.
    const id = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#050c18" }}
    >
      {/* Mouse Trail */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <MouseTrail
          variant="particles"
          trailColor="#22d3ee"
          trailColorEnd="#3b82f6"
          fillType="gradient"
          particleCount={8}
          particleSize={4}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "10%",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-white tracking-tight">
          We Build The Engine
        </h1>
        <div className="h-28 sm:h-32 md:h-48 mb-4 sm:mb-6 flex items-center justify-center overflow-visible">
          <TextVideoMask
            text="THE DEVHOUSE"
            fontSize="clamp(40px, 12vw, 140px)"
            fontWeight={900}
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-medium px-4 max-w-3xl mx-auto">
          We build the custom operational backbones that power modern businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-6">
          <Link
            href="/ConsultationProgram"
            className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 group text-center"
          >
            Book a Consultation
          </Link>
          <Link
            href="/AboutUs"
            className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
          >
            Learn More
          </Link>
        </div>

      </div>

      {/* Scroll Indicator - bara el-content w taht shwai */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
