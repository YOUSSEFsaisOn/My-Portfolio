"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface ThemeColors {
  primary: string;
  accent: string;
  ctaBlue: string;
}

const THEME_MAP: { [key: string]: ThemeColors } = {
  "/": {
    primary: "#3567E8", // Home: Vibrant Blue
    accent: "#D9E7FF",
    ctaBlue: "#3567E8",
  },
  "/about": {
    primary: "#8B5CF6", // About: Indigo/Purple
    accent: "#C084FC",
    ctaBlue: "#8B5CF6",
  },
  "/consultation": {
    primary: "#0797B2", // Consultation: Teal
    accent: "#2DD4BF",
    ctaBlue: "#0797B2",
  },
  "/careers": {
    primary: "#F59E0B", // Careers: Amber
    accent: "#FCD34D",
    ctaBlue: "#F59E0B",
  },
  "/portfolio": {
    primary: "#EC4899", // Portfolio: Hot Pink / Rose
    accent: "#FBCFE8",
    ctaBlue: "#EC4899",
  },
  "/contact": {
    primary: "#10B981", // Contact: Emerald Green
    accent: "#A7F3D0",
    ctaBlue: "#10B981",
  },
};

export default function DynamicTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    // Find matching theme or fall back to home
    const matchedTheme = THEME_MAP[pathname] || THEME_MAP["/"];

    // Update root level custom properties smoothly
    root.style.setProperty("--primary", matchedTheme.primary);
    root.style.setProperty("--accent", matchedTheme.accent);
    root.style.setProperty("--ring", matchedTheme.primary);
    root.style.setProperty("--color-cta-blue", matchedTheme.primary);
  }, [pathname]);

  return null; // Side-effect only component
}
