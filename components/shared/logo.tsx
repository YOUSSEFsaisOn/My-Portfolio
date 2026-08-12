"use client";

import React from "react";

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
  strokeColor?: string;
  innerStrokeColor?: string;
}

export default function Logo({
  width = "36",
  height = "32",
  className = "drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] filter transition-transform duration-300 group-hover:scale-105",
  strokeColor = "#FFFFFF",
  innerStrokeColor = "#FFFFFF",
}: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer house outline */}
      <path
        d="M50 10 L85 45 L85 80 L15 80 L15 45 Z"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner 'dev' design inside house */}
      <path
        d="M32 46 C32 40, 42 40, 42 46 L42 62 C42 68, 32 68, 32 62 Z"
        stroke={innerStrokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M42 43 L42 62"
        stroke={innerStrokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 55 C48 46, 58 46, 58 55 L48 55"
        stroke={innerStrokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M48 55 C48 64, 58 64, 58 55"
        stroke={innerStrokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M64 45 L70 62 L76 45"
        stroke={innerStrokeColor}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
