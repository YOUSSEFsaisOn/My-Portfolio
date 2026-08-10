import React from "react";

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "project" | "experience" | "division";
}

export function TechBadge({ children, variant = "project" }: TechBadgeProps) {
  let classes = "";
  if (variant === "project") {
    classes = "text-[10px] font-bold uppercase tracking-widest text-[#1A103C] bg-[#E1EEF8] border border-[#E1EEF8]/80 px-3 py-1 rounded-full font-sans shrink-0";
  } else if (variant === "experience") {
    classes = "px-4 py-2 bg-[#E1EEF8]/65 text-[#1A103C] text-xs font-bold uppercase tracking-wider rounded-full border border-[#E1EEF8] font-sans shrink-0";
  } else if (variant === "division") {
    classes = "px-4 py-2 bg-[#E1EEF8]/50 text-[#1A103C] text-xs font-bold uppercase tracking-wider rounded-full border border-[#E1EEF8]/80 hover:bg-white transition-colors font-sans shrink-0";
  }

  return (
    <span className={classes}>
      {children}
    </span>
  );
}
