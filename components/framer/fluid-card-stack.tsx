'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CardData {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  buttonText?: string
}

interface FluidCardStackProps {
  cards: CardData[]
  className?: string
}

export default function FluidCardStack({ cards, className }: FluidCardStackProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={`flex flex-col md:flex-row gap-4 w-full h-[500px] md:h-[400px] ${className}`}>
      {cards.map((card) => {
        const isHovered = hoveredId === card.id
        const isNoneHovered = hoveredId === null

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHoveredId(card.id)}
            onMouseLeave={() => setHoveredId(null)}
            layout
            initial={false}
            animate={{
              flex: isHovered ? 3 : isNoneHovered ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative overflow-hidden rounded-3xl cursor-pointer flex flex-col p-6 h-full"
            style={{ backgroundColor: '#121212' }}
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

            {/* Description - only shown when expanded or on small screens if we decide */}
            <AnimatePresence>
              {(isHovered) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 md:line-clamp-none">
                    {card.description}
                  </p>
                  
                  {card.buttonText && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto self-start px-6 py-2 bg-white text-black rounded-full text-sm font-semibold"
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
                opacity: isHovered ? 1 : 0 
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
