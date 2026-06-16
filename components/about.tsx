"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  scaleIn,
  staggerItem,
  popIn,
  staggerContainer,
  commonWhileInView,
} from "@/lib/animations";

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: [0.16, 1, 0.3, 1] });
    }
  }, [inView, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Stats Card with 3D Tilt ─── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      rotateY.set(((x - centerX) / centerX) * 6);
      rotateX.set(((centerY - y) / centerY) * 6);
    },
    [rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    animate(rotateX, 0, { duration: 0.4 });
    animate(rotateY, 0, { duration: 0.4 });
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

/* ─── Main About Section ─── */
export default function About() {
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);

  const highlights = [
    "7+ projects delivered including 2 full production e-learning platforms",
    "Full-stack development with React.js, Next.js, and .NET backend APIs",
    "Payment integration expertise (Paymob) with complete checkout and order flow",
    "Secure video streaming implementation (Bunny.net) with token-based protection",
    "Role-based auth systems with JWT, protected routes, and admin dashboards",
  ];

  const stats = [
    {
      label: "Experience",
      value: 3,
      suffix: "+",
      unit: "Years",
      color: "from-blue-400 to-cyan-400",
      description: "Professional software development",
    },
    {
      label: "Projects",
      value: 7,
      suffix: "+",
      unit: "Delivered",
      color: "from-cyan-400 to-emerald-400",
      description: "Production-ready applications",
    },
    {
      label: "Platforms",
      value: 2,
      suffix: "",
      unit: "E-Learning",
      color: "from-violet-400 to-blue-400",
      description: "Full production platforms built",
    },
  ];

  const focusTags = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    ".NET",
    "Paymob",
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden bg-[#0C0C0C]"
    >
      {/* ── Animated Background Mesh ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-cyan-500/[0.05] rounded-full blur-[120px] animate-float-fast" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* ── Grid Pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={commonWhileInView}
          className="mb-16 md:mb-20 text-center"
        >
          {/* Decorative top line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={commonWhileInView}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
          />

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-2xl mx-auto px-4">
            <div className="h-[2px] w-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400/70 to-cyan-400/70" />
            <p className="text-gray-300/90 text-base md:text-lg leading-relaxed text-center">
              High-performance frontend engineering with clean architecture,
              secure integrations, and polished UI.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* ── Left Column: Bio & Highlights ── */}
          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            className="space-y-6 px-4 md:px-0"
          >
            <motion.p
              variants={fadeInLeft}
              className="text-gray-300 text-base md:text-lg leading-relaxed"
            >
              I&apos;m a Frontend Developer with experience delivering
              production-ready full-stack applications. I&apos;ve built complete
              e-learning platforms with role-based auth, secure video streaming,
              payment integration, and admin dashboards — all as freelance
              solutions following clean architecture best practices.
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="text-gray-300 text-base md:text-lg leading-relaxed"
            >
              My expertise spans React.js, Next.js (App Router), TypeScript,
              React Query, Paymob, Bunny.net, and .NET backend APIs. I&apos;m
              committed to writing clean, maintainable code and building secure,
              scalable systems.
            </motion.p>

            {/* Key Highlights */}
            <motion.div variants={fadeInLeft} className="pt-4 md:pt-6">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  Key Highlights
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/30 to-transparent" />
              </div>

              <motion.div
                variants={staggerContainer(0.08, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={commonWhileInView}
                className="grid grid-cols-1 gap-3"
              >
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    onMouseEnter={() => setHoveredHighlight(i)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    className={`
                      flex items-start gap-3 p-3 rounded-xl
                      transition-all duration-300 cursor-default
                      ${
                        hoveredHighlight === i
                          ? "bg-blue-500/[0.08] border border-blue-400/20"
                          : "border border-transparent"
                      }
                    `}
                  >
                    <motion.div variants={popIn} className="shrink-0 mt-0.5">
                      <CheckCircle2
                        className={`w-5 h-5 transition-colors duration-300 ${
                          hoveredHighlight === i
                            ? "text-cyan-400"
                            : "text-blue-400"
                        }`}
                      />
                    </motion.div>
                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Stats Card ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            className="relative"
          >
            <TiltCard>
              <div className="gradient-border shimmer-hover">
                <div className="relative bg-[#0f0f0f] rounded-3xl p-8 md:p-10 flex flex-col gap-8 overflow-hidden">
                  {/* Card internal glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/[0.05] rounded-full blur-[50px] pointer-events-none" />

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 relative z-10">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={commonWhileInView}
                        transition={{
                          delay: 0.3 + i * 0.15,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-center"
                      >
                        <p
                          className={`text-xs font-medium mb-2 uppercase tracking-widest bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.label}
                        </p>
                        <p className="text-3xl md:text-4xl font-bold text-white animate-counter-pulse">
                          <AnimatedCounter
                            target={stat.value}
                            suffix={stat.suffix}
                          />
                        </p>
                        <p className="text-[11px] text-gray-500 mt-1.5 uppercase tracking-wider">
                          {stat.unit}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider with gradient */}
                  <div className="relative">
                    <div className="h-px w-full bg-white/[0.06]" />
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-3 relative z-10">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label + "-desc"}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={commonWhileInView}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.color} shrink-0`}
                        />
                        <p className="text-gray-300/80 text-sm transition-colors duration-300 hover:text-cyan-200/90">
                          {stat.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="h-px w-full bg-white/[0.06]" />
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                  </div>

                  {/* Focus Areas */}
                  <div className="relative z-10">
                    <p className="text-cyan-400 font-medium mb-4 uppercase tracking-widest text-xs">
                      Focus Areas
                    </p>
                    <motion.div
                      variants={staggerContainer(0.06, 0.6)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={commonWhileInView}
                      className="flex flex-wrap gap-2"
                    >
                      {focusTags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={popIn}
                          whileHover={{
                            scale: 1.08,
                            backgroundColor: "rgba(96, 165, 250, 0.12)",
                            borderColor: "rgba(96, 165, 250, 0.4)",
                          }}
                          className="px-4 py-1.5 bg-white/[0.04] rounded-full text-sm text-gray-300 border border-white/[0.08] cursor-default transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating decorative orbs */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-500/[0.08] rounded-full blur-2xl animate-float-slow pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-cyan-500/[0.06] rounded-full blur-3xl animate-float-fast pointer-events-none" />
            <div className="absolute top-1/2 -right-4 w-3 h-3 bg-blue-400/40 rounded-full animate-float-fast pointer-events-none" />
            <div className="absolute bottom-1/4 -left-3 w-2 h-2 bg-cyan-400/50 rounded-full animate-float-slow pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
