"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home", color: "#3567E8" },
  { id: "values", label: "Principles", color: "#0797B2" },
  { id: "about", label: "About", color: "#D9E7FF" },
  { id: "divisions", label: "Divisions", color: "#1161AB" },
  { id: "experience", label: "Experience", color: "#3567E8" },
  { id: "process", label: "Process", color: "#0797B2" },
  { id: "projects", label: "Projects", color: "#D9E7FF" },
  { id: "skills", label: "Skills", color: "#1161AB" },
  { id: "contact", label: "Contact", color: "#25D366" }
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
          if (window.scrollY < 300) {
            setActiveSection("hero");
            return;
          }
        }
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        className="fixed top-0 left-0 right-0 h-[3.5px] z-[9999] origin-left pointer-events-none"
        style={{
          scaleX,
          background: `linear-gradient(to right, #3567E8, ${activeSectionObj.color}, #0797B2)`,
          boxShadow: `0 1px 10px ${activeSectionObj.color}`
        }}
      />

      {/* 2. Floating Vertical Dot Handles (Only visible on md and up) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center gap-5 bg-[#10477C]/90 backdrop-blur-md p-4 rounded-full border border-[#115EA5]/40 shadow-xl shadow-blue-950/40">
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
                    className="absolute right-full mr-2 py-1.5 px-3 rounded-lg text-xs font-black tracking-wider uppercase text-white whitespace-nowrap bg-[#115EA5] border border-[#10477C] shadow-md pointer-events-none"
                    style={{
                      boxShadow: `0 2px 10px rgba(8,11,20,0.4), 0 0 12px ${section.color}30`
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
                      boxShadow: `0 0 8px ${section.color}30`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Inner dot handle */}
                <motion.span
                  className="w-2.5 h-2.5 rounded-full block transition-transform duration-300"
                  style={{
                    backgroundColor: isActive ? section.color : "rgba(217, 231, 255, 0.2)",
                    boxShadow: isActive ? `0 0 6px ${section.color}40` : "none",
                    transform: isActive || isHovered ? "scale(1.2)" : "scale(1)"
                  }}
                  whileHover={{
                    backgroundColor: section.color,
                    boxShadow: `0 0 10px ${section.color}50`
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
