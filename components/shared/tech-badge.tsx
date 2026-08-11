import React from "react";

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="px-4 py-2 bg-[#1161AB] text-white text-xs font-bold uppercase tracking-wider rounded-full border border-[#10477C] font-sans">
      {tech}
    </span>
  );
}
