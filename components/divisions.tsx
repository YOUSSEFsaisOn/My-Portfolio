"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Database, 
  Palette, 
  Cpu, 
  Check, 
  Activity, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import { TechBadgeGroup } from "./shared/tech-badge";

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

function StatCard({ label, value, icon: Icon, color }: StatCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#115EA5] border border-[#10477C] rounded-2xl hover:bg-[#1161AB] transition-colors shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#123C6A] rounded-lg text-white">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-sm font-bold text-white">{label}</span>
      </div>
      <span 
        className="text-lg font-black font-sans tracking-tight"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
}

const DIVISIONS = [
  {
    id: "frontend",
    title: "Frontend Lab",
    subtitle: "High-Fidelity Client Interfaces",
    description: "Specializing in React.js, Next.js (App Router), and TypeScript. We craft pixel-perfect, highly responsive, and interactive user interfaces with buttery-smooth transitions and modular components.",
    color: "#3567E8", // CTA blue
    colorClass: "from-blue-600 to-cyan-500",
    glowColor: "rgba(53, 103, 232, 0.25)",
    bgGradient: "from-blue-900/20 via-slate-900/40 to-cyan-900/10",
    shadowClass: "shadow-[0_0_50px_-12px_rgba(53, 103, 232, 0.15)]",
    techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stats: [
      { label: "Performance Score", value: "99%", icon: Zap },
      { label: "Core Web Vitals", value: "Optimized", icon: Activity },
      { label: "UI Framerate", value: "60 FPS", icon: Layout }
    ],
    icon: Layout
  },
  {
    id: "backend",
    title: "Backend Forge",
    subtitle: "Secure & High-Throughput APIs",
    description: "Designing enterprise-grade backend architectures using .NET Core and C#. We build highly-optimized REST APIs, JWT authentication layers, robust SQL databases, and secure cross-origin resource sharing schemas.",
    color: "#0797B2", // Teal
    colorClass: "from-teal-500 to-emerald-500",
    glowColor: "rgba(7, 151, 178, 0.25)",
    bgGradient: "from-teal-900/20 via-slate-900/40 to-emerald-900/10",
    shadowClass: "shadow-[0_0_50px_-12px_rgba(7, 151, 178, 0.15)]",
    techs: [".NET Core", "C#", "SQL Server", "JWT Security", "RESTful APIs"],
    stats: [
      { label: "API Availability", value: "99.99%", icon: ShieldCheck },
      { label: "Average Response", value: "< 45ms", icon: Activity },
      { label: "Authentication", value: "Role-Based", icon: Zap }
    ],
    icon: Database
  },
  {
    id: "creative",
    title: "Creative Atelier",
    subtitle: "Fluid Motion & Responsive Artistry",
    description: "Where technology meets absolute aesthetics. We design gorgeous minimalist interfaces, custom pointer-interaction canvasses, responsive fluid layout architectures, and interactive physical UI prototypes.",
    color: "#D9E7FF", // Soft Blue
    colorClass: "from-blue-300 to-indigo-300",
    glowColor: "rgba(217, 231, 255, 0.25)",
    bgGradient: "from-blue-900/20 via-slate-900/40 to-indigo-900/10",
    shadowClass: "shadow-[0_0_50px_-12px_rgba(217, 231, 255, 0.15)]",
    techs: ["UI/UX Architecture", "Figma Systems", "Micro-Interactions", "Fluid Grids", "Creative Coding"],
    stats: [
      { label: "Design Fidelity", value: "Premium", icon: Palette },
      { label: "Motion Curves", value: "Custom Spring", icon: Activity },
      { label: "Mobile Usability", value: "100%", icon: Layout }
    ],
    icon: Palette
  },
  {
    id: "solutions",
    title: "Solutions Assembly",
    subtitle: "E-Commerce & Platform Integrations",
    description: "Assembling complex functional integrations to empower production platforms. We streamline secure Paymob checkout paths, safe video playback servers (Bunny.net), Zoom webinar layers, and detailed admin hubs.",
    color: "#1161AB", // Icon Circle BG
    colorClass: "from-blue-500 to-sky-500",
    glowColor: "rgba(17, 97, 171, 0.25)",
    bgGradient: "from-blue-900/20 via-slate-900/40 to-sky-900/10",
    shadowClass: "shadow-[0_0_50px_-12px_rgba(17, 97, 171, 0.15)]",
    techs: ["Paymob Checkout", "Bunny.net Stream", "Zoom Live Integration", "Management Panels", "JWT Protected Flows"],
    stats: [
      { label: "E-Commerce Flows", value: "Hassle-Free", icon: Zap },
      { label: "Video Delivery", value: "Ultra-Secure", icon: ShieldCheck },
      { label: "Dashboard State", value: "Synchronized", icon: Database }
    ],
    icon: Cpu
  }
];

export default function Divisions() {
  const [activeId, setActiveId] = useState("frontend");
  const activeDiv = DIVISIONS.find((d) => d.id === activeId) || DIVISIONS[0];

  return (
    <section id="divisions" className="py-32 px-6 bg-transparent relative z-10 overflow-hidden">
      {/* Decorative Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 opacity-10"
        style={{
          background: activeDiv.color,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span 
              className="text-xs font-black uppercase tracking-[0.25em] transition-colors duration-500 font-sans"
              style={{ color: activeDiv.color }}
            >
              The DevHouse Scope
            </span>
            <h2 className="text-[clamp(32px,5vw,64px)] font-black text-white leading-none font-serif tracking-tighter mt-3">
              OPERATING <br />
              <span className="text-[#3567E8] transition-all duration-500" style={{ color: activeDiv.color, filter: `drop-shadow(0 0 12px ${activeDiv.glowColor})` }}>DIVISIONS.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#CEDDEA] max-w-md text-base leading-relaxed font-sans"
          >
            Each division represents a core pillar of technical expertise engineered to deliver premium digital solutions from concept to scale.
          </motion.p>
        </div>

        {/* Division Selection Handles (Custom Color-Coded Controller Rails) */}
        <div className="mb-12 bg-[#123C6A]/60 backdrop-blur-md p-2 rounded-[2rem] border border-[#115EA5]/30 flex flex-wrap justify-between items-center gap-2 max-w-4xl mx-auto relative z-20 shadow-sm">
          {DIVISIONS.map((division) => {
            const Icon = division.icon;
            const isActive = division.id === activeId;
            return (
              <button
                key={division.id}
                onClick={() => setActiveId(division.id)}
                className="relative flex-1 min-w-[150px] flex items-center justify-center gap-3 py-4 px-5 rounded-2xl text-sm font-bold tracking-tight cursor-pointer transition-all duration-300 focus:outline-none"
                style={{
                  color: isActive ? "#ffffff" : "#CEDDEA",
                }}
              >
                {/* Slidable background handle */}
                {isActive && (
                  <motion.div
                    layoutId="activeDivisionHandle"
                    className="absolute inset-0 rounded-2xl shadow-md border border-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${division.color}dd, ${division.color}aa)`,
                      boxShadow: `0 4px 15px ${division.glowColor}`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Left Mini Accent Colored Handle Indicator */}
                <div 
                  className="w-2.5 h-2.5 rounded-full transition-transform duration-300"
                  style={{ 
                    backgroundColor: isActive ? "#ffffff" : division.color,
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                    boxShadow: `0 0 8px ${division.color}`
                  }}
                />

                <span className="relative z-10 flex items-center gap-2 font-sans">
                  <Icon className="w-4 h-4 shrink-0" />
                  {division.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Divisions Content Showcase Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-[#115EA5] rounded-[2.5rem] border border-[#10477C] p-8 md:p-14 relative overflow-hidden transition-shadow duration-700 ${activeDiv.shadowClass}`}
              style={{
                borderColor: `${activeDiv.color}25`
              }}
            >
              {/* Soft decorative background gradient corner */}
              <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${activeDiv.bgGradient} rounded-full blur-[100px] pointer-events-none opacity-40`} />

              <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Description & Techs */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="p-2.5 rounded-xl transition-colors duration-500"
                        style={{ backgroundColor: `${activeDiv.color}15`, color: activeDiv.color }}
                      >
                        <activeDiv.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold tracking-wider text-[#CEDDEA]/80 uppercase font-sans">
                        {activeDiv.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white font-serif tracking-tight leading-none">
                      {activeDiv.title}
                    </h3>
                  </div>

                  <p className="text-[#CEDDEA] text-base md:text-lg leading-relaxed font-sans">
                    {activeDiv.description}
                  </p>

                  {/* Built with techs */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#CEDDEA]/60 font-sans">
                      Division Core Stack:
                    </h4>
                    <TechBadgeGroup techs={activeDiv.techs} />
                  </div>
                </div>

                {/* Statistics / Division Metrics Display */}
                <div className="lg:col-span-5 bg-[#123C6A] border border-[#10477C] p-8 rounded-3xl space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#CEDDEA]/60 pb-2 border-b border-[#10477C] flex justify-between items-center font-sans">
                    <span>Performance Metrics</span>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeDiv.color }} />
                  </h4>

                  <div className="space-y-5 font-sans">
                    {activeDiv.stats.map((stat, idx) => (
                      <StatCard
                        key={idx}
                        label={stat.label}
                        value={stat.value}
                        icon={stat.icon}
                        color={activeDiv.color}
                      />
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between text-xs text-[#CEDDEA]/60 font-medium font-sans">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      Continuous Integration Active
                    </span>
                    <span>v2.4.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
