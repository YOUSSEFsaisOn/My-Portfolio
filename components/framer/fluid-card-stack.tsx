"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  buttonText?: string;
}

interface FluidCardStackProps {
  cards: CardData[];
  className?: string;
}

export default function FluidCardStack({
  cards,
  className,
}: FluidCardStackProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className={`flex flex-col md:flex-row gap-4 w-full h-auto md:h-[400px] ${className}`}
    >
      {cards.map((card) => {
        const isHovered = hoveredId === card.id;
        const isNoneHovered = hoveredId === null;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setHoveredId(isHovered ? null : card.id)}
            layout
            initial={false}
            animate={{
              flex: isHovered ? 3 : isNoneHovered ? 1 : 0.5,
              height: isHovered ? "auto" : "auto",
              minHeight: isHovered ? "200px" : "80px",
              translateY: isHovered ? -4 : 0,
              boxShadow: isHovered
                ? `0 20px 60px rgba(0,0,0,0.45), 0 0 70px ${card.color}22`
                : "none",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative overflow-hidden rounded-3xl cursor-pointer flex flex-col p-6 h-full border border-white/0 bg-white/0"
            style={{ backgroundColor: isHovered ? "#0b0b0b" : "#0f0f0f" }}
          >
            {/* Top highlight line (color-aware) */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
              style={{
                background: `linear-gradient(90deg, ${card.color}, rgba(255,255,255,0))`,
              }}
            />

            {/* Icon Container */}
            <motion.div
              layout
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 border border-white/10"
              style={{
                backgroundColor: card.color,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 28px ${card.color}33`,
              }}
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              layout
              className="text-xl font-bold mb-2 whitespace-nowrap"
              style={{
                color: isHovered
                  ? "rgba(255,255,255,0.98)"
                  : "rgba(255,255,255,0.92)",
                textShadow: isHovered ? `0 0 24px ${card.color}55` : "none",
              }}
            >
              {card.title}
            </motion.h3>

            {/* Description - only shown when expanded */}
            <AnimatePresence mode="wait">
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full overflow-hidden"
                >
                  <p
                    className="text-sm mb-6 mt-2 leading-relaxed"
                    style={{
                      color: "rgba(229,231,235,0.92)",
                      textShadow: isHovered
                        ? `0 0 18px ${card.color}33`
                        : "none",
                    }}
                  >
                    {card.description}
                  </p>

                  {card.buttonText && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto self-start px-6 py-2 rounded-full text-sm font-semibold mb-2 border border-white/10"
                      style={{
                        background: `linear-gradient(90deg, ${card.color} 0%, rgba(255,255,255,0.06) 120%)`,
                        color: "rgba(5,7,12,0.95)",
                        boxShadow: `0 10px 30px ${card.color}22`,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.buttonText}
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${card.color}22 0%, transparent 68%)`,
                opacity: isHovered ? 1 : 0,
                transition: "opacity 500ms ease",
              }}
            />

            {/* Hover surface */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: isHovered ? 1 : 0,
                transition: "opacity 400ms ease",
                background: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 55%)`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
