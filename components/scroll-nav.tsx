"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home", color: "#2c58e3" },
  { id: "about", label: "About", color: "#2c58e3" },
  { id: "divisions", label: "Divisions", color: "#10b981" },
  { id: "experience", label: "Experience", color: "#2c58e3" },
  { id: "process", label: "Process", color: "#06b6d4" },
  { id: "projects", label: "Projects", color: "#2c58e3" },
  { id: "skills", label: "Skills", color: "#a855f7" },
  { id: "contact", label: "Contact", color: "#f59e0b" }
];

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i].id;
        const el = document.getElementById(sectionId);
        if (sectionId === "hero") {
          // Fallback to top if hero isn't found or scroll is near zero
          if (window.scrollY < 300) {
            setActiveSection("hero");
            return;
          }
        }
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const activeSectionObj = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];

  return (
    <>
      {/* 1. Sleek Scroll Progress Bar at Viewport Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left pointer-events-none"
        style={{
          scaleX,
          background: `linear-gradient(to right, #2c58e3, ${activeSectionObj.color}, #06b6d4)`,
          boxShadow: `0 1px 10px ${activeSectionObj.color}`
        }}
      />

      {/* 2. Floating Vertical Dot Handles (Only visible on md and up) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-5 bg-[#0a0d14]/40 backdrop-blur-md p-4 rounded-full border border-white/5 shadow-2xl">
        {SECTIONS.map((section) => {
          const isActive = section.id === activeSection;
          const isHovered = section.id === hoveredId;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-center group"
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip Label (Shows on left) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: -16, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-full mr-2 py-1.5 px-3 rounded-lg text-xs font-black tracking-wider uppercase text-white whitespace-nowrap bg-[#121622]/90 border border-white/10 shadow-lg pointer-events-none"
                    style={{
                      boxShadow: `0 2px 10px rgba(0,0,0,0.4), 0 0 12px ${section.color}20`
                    }}
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glowing active outer ring */}
              <button
                onClick={() => handleDotClick(section.id)}
                className="relative w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label={`Scroll to ${section.label}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeScrollDotRing"
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: section.color,
                      boxShadow: `0 0 8px ${section.color}60`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Inner dot handle */}
                <motion.span
                  className="w-2.5 h-2.5 rounded-full block transition-transform duration-300"
                  style={{
                    backgroundColor: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.25)",
                    boxShadow: isActive ? `0 0 8px ${section.color}` : "none",
                    transform: isActive || isHovered ? "scale(1.2)" : "scale(1)"
                  }}
                  whileHover={{
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 10px ${section.color}`
                  }}
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
