"use client";

import React, { useMemo, useState } from "react";
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
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative overflow-hidden rounded-3xl cursor-pointer flex flex-col p-6 h-full"
            style={{ backgroundColor: "#121212" }}
          >
            {/* Icon Container */}
            <motion.div
              layout
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              layout
              className="text-xl font-bold text-white mb-2 whitespace-nowrap"
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
                  <p className="text-gray-400 text-sm mb-6 mt-2 leading-relaxed">
                    {card.description}
                  </p>

                  {card.buttonText && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto self-start px-6 py-2 bg-white text-black rounded-full text-sm font-semibold mb-2"
                    >
                      {card.buttonText}
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle background glow */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${card.color}20 0%, transparent 70%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
