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
        <div className="mb-6 inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
          👋 Welcome to my portfolio
        </div>

        <div className="h-32 md:h-48 mb-6 flex items-center justify-center">
          <TextVideoMask
            text="YOUSEF"
            fontSize="clamp(60px, 15vw, 180px)"
            fontWeight={900}
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Frontend Developer | React.js & Next.js Specialist{" "}
        </p>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Motivated Frontend Developer with hands-on experience building
          full-stack e-learning platforms, e-commerce apps, and production-ready
          web applications. Specialized in React.js, Next.js, TypeScript, and
          .NET backend integration with a strong focus on performance, security,
          and clean architecture.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#contact"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-300 group"
          >
            Get In Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
          <a
            href="https://github.com/YOUSSEFsaisOn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-cyan-400/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400/60 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            View GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a
            href="mailto:1234yusid@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
            1234yusid@gmail.com
          </a>
          <a
            href="tel:+201107361400"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
            +20 110 736 1400
          </a>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full" />
            Cairo, Egypt
          </div>
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
