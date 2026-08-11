"use client";

import { motion } from "framer-motion";

export default function FloatingAi() {
  return (
    <div className="fixed bottom-10 left-10 z-[100]">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        className="w-14 h-14 bg-[#115EA5] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(8,11,20,0.4)] border border-[#10477C] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
        onClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="AI Consultation"
      >
        {/* Glowing aura around button */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#3567E8] via-[#0797B2] to-[#D9E7FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md -z-10" />

        {/* Colorful gradient brain/AI SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="none"
          stroke="url(#ai-brain-grad)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ai-brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3567E8" />
              <stop offset="50%" stopColor="#0797B2" />
              <stop offset="100%" stopColor="#D9E7FF" />
            </linearGradient>
          </defs>
          {/* Left brain hemisphere */}
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
          {/* Right brain hemisphere */}
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
          {/* Synaptic connection links */}
          <path d="M12 8h2.5M12 12h3M12 16h2.5M12 8H9.5M12 12H9M12 16H9.5" />
        </svg>
      </motion.button>
    </div>
  );
}
