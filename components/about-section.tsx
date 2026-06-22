'use client'

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

export default function AboutSection() {
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);

  const highlights = [
    "Expertise in custom ERP and operational backbone systems",
    "High-performance frontend architecture with Next.js 15",
    "Seamless integration with enterprise APIs and legacy systems",
    "Secure financial and data streaming implementations",
    "Strategic software consulting and product roadmap development",
  ];

  const stats = [
    {
      label: "Engineers",
      value: 12,
      suffix: "+",
      unit: "Experts",
      color: "from-blue-400 to-cyan-400",
      description: "Dedicated software engineering team",
    },
    {
      label: "Solutions",
      value: 45,
      suffix: "+",
      unit: "Deployed",
      color: "from-cyan-400 to-emerald-400",
      description: "Custom enterprise systems delivered",
    },
    {
      label: "Retention",
      value: 98,
      suffix: "%",
      unit: "Success",
      color: "from-violet-400 to-blue-400",
      description: "Client satisfaction and project success rate",
    },
  ];

  const focusTags = [
    "Enterprise",
    "AI",
    "Automation",
    "Scale",
    "Security",
    "Cloud",
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 relative overflow-hidden bg-[#050812]"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-cyan-500/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={commonWhileInView}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={commonWhileInView}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"
          />

          <h2 className="font-serif text-4xl md:text-6xl text-white mb-5 tracking-tight">
            Engineering <span className="italic">Excellence</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            We are a team of dedicated engineers focused on building the digital infrastructure that powers modern business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            variants={staggerContainer(0.12, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            className="space-y-6"
          >
            <motion.p
              variants={fadeInLeft}
              className="text-[#9CA3AF] text-lg leading-relaxed"
            >
              At The DevHouse, we don&apos;t just write code; we architect solutions. We understand that your software is the engine of your business, and it needs to be reliable, scalable, and intelligent.
            </motion.p>

            <motion.p
              variants={fadeInLeft}
              className="text-[#9CA3AF] text-lg leading-relaxed"
            >
              Our approach combines deep technical expertise with a thorough understanding of business operations. This allows us to create custom systems that feel like they were built specifically for your unique workflow.
            </motion.p>

            <motion.div variants={fadeInLeft} className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-white font-bold text-xl">
                  Strategic Advantages
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    onMouseEnter={() => setHoveredHighlight(i)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    className={`
                      flex items-start gap-3 p-3 rounded-xl transition-all duration-300
                      ${hoveredHighlight === i ? "bg-blue-500/[0.08] border border-blue-400/20" : "border border-transparent"}
                    `}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={commonWhileInView}
            className="relative"
          >
            <TiltCard>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="grid grid-cols-3 gap-4 relative z-10 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className={`text-[10px] font-bold mb-2 uppercase tracking-widest bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold text-white">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 relative z-10 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label + "-desc"} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.color}`} />
                      <p className="text-gray-400 text-sm">{stat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <p className="text-[#60A5FA] font-bold mb-4 uppercase tracking-widest text-[10px]">
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {focusTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
