"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MouseTrail from "./framer/mouse-trail";
import TextVideoMask from "./framer/text-video-mask";
import StarBackground from "./star-background";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#050812" }}
    >
      {/* 3D Star Animation Background */}
      <StarBackground />

      {/* Mouse Trail */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <MouseTrail
          variant="particles"
          trailColor="#3b82f6"
          trailColorEnd="#2563eb"
          fillType="gradient"
          particleCount={8}
          particleSize={4}
        />
      </div>

      {/* Animated Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"
          style={{
            top: "20%",
            left: "15%",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"
          style={{
            bottom: "20%",
            right: "15%",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-block px-5 py-2.5 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
          👋 Welcome to my portfolio
        </div>

        <div className="h-28 sm:h-32 md:h-48 mb-4 sm:mb-6 flex items-center justify-center overflow-visible">
          <TextVideoMask
            text="YOUSEF"
            fontSize="clamp(56px, 18vw, 180px)"
            fontWeight={900}
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 font-medium px-4">
          Frontend Developer | React.js & Next.js Specialist{" "}
        </p>

        <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Motivated Frontend Developer with hands-on experience building
          full-stack e-learning platforms, e-commerce apps, and production-ready
          web applications. Specialized in React.js, Next.js, TypeScript, and
          .NET backend integration with a strong focus on performance, security,
          and clean architecture.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-6">
          <Link
            href="#contact"
            className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300 group text-center"
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
            className="px-8 py-3.5 border border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
          >
            View GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a
            href="mailto:1234yusid@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
            1234yusid@gmail.com
          </a>
          <a
            href="tel:+201107361400"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 group"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
            +20 110 736 1400
          </a>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Cairo, Egypt
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
