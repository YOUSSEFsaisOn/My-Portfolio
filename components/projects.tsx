"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data/projects";

// ---------------------------------------------------------------------------
// Inline browser-frame mockups — one per project, kept close to the data so
// each card still reads as a distinct product rather than a repeated shell.
// ---------------------------------------------------------------------------

function BrowserFrame({
  url,
  title,
  children,
}: {
  url: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-[220px] rounded-t-2xl overflow-hidden bg-gradient-to-br from-[#3A3F4B] via-[#23262E] to-[#101114] flex flex-col">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/20 backdrop-blur-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="ml-4 text-[10px] font-medium text-white/40 font-sans tracking-wide truncate">
          {url}
        </span>
      </div>
      <div className="flex-1 p-5 flex gap-4 overflow-hidden">
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      <span className="absolute left-5 bottom-4 text-xl md:text-2xl font-black text-white font-serif tracking-tight drop-shadow-sm">
        {title}
      </span>
    </div>
  );
}

const MOCKUPS: Record<string, React.ReactNode> = {
  "compass-college": (
    <BrowserFrame url="compass.college" title="Compass College">
      <div className="w-1/3 flex flex-col gap-2.5">
        <div className="h-6 w-full bg-white/15 rounded" />
        <div className="h-3 w-4/5 bg-white/10 rounded" />
        <div className="h-3 w-2/3 bg-white/10 rounded" />
        <div className="h-6 w-1/2 bg-[#5B8CFF] rounded mt-auto" />
      </div>
      <div className="flex-1 rounded bg-white/95 shadow-sm p-3 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#4F7CFF]/15 flex items-center justify-center text-[10px] font-bold text-[#3B6DFF]">
            CC
          </span>
          <div className="flex-1 flex flex-col gap-1">
            <div className="h-2 w-16 bg-slate-200 rounded" />
            <div className="h-1.5 w-10 bg-slate-100 rounded" />
          </div>
        </div>
        <div className="h-12 w-full bg-[#F8F9FC] rounded border border-slate-100" />
        <div className="flex gap-2">
          <div className="h-5 flex-1 bg-slate-100 rounded" />
          <div className="h-5 flex-1 bg-[#3B6DFF]/10 rounded" />
        </div>
      </div>
    </BrowserFrame>
  ),

  "et-engineering-academy": (
    <BrowserFrame url="etengineeringacademy.com" title="ET Engineering Academy">
      <div className="flex-1 rounded bg-white/95 shadow-sm p-3 flex flex-col gap-3">
        <div className="h-5 w-24 bg-slate-200 rounded" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-14 bg-slate-100 rounded flex flex-col p-2 gap-1.5">
            <div className="h-2 w-10 bg-slate-300 rounded" />
            <div className="h-1.5 w-full bg-slate-200 rounded" />
          </div>
          <div className="h-14 bg-[#4F7CFF]/5 rounded border border-[#4F7CFF]/15 flex flex-col p-2 gap-1.5">
            <div className="h-2 w-10 bg-[#3B6DFF]/30 rounded" />
            <div className="h-1.5 w-full bg-[#3B6DFF]/20 rounded" />
          </div>
        </div>
        <div className="h-6 w-full bg-[#3B6DFF] rounded mt-auto flex items-center justify-center text-[10px] text-white font-bold">
          Launch Dashboard
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-2.5">
        <div className="h-5 w-full bg-white/15 rounded" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-4/5 bg-white/10 rounded" />
      </div>
    </BrowserFrame>
  ),

  "u-learn": (
    <BrowserFrame url="u-learn.app" title="U-Learn">
      <div className="w-1/3 flex flex-col gap-2">
        <div className="h-4 w-full bg-white/15 rounded" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-3/4 bg-white/10 rounded" />
        <div className="h-3 w-5/6 bg-white/10 rounded" />
        <div className="mt-1 h-2 w-1/2 bg-[#5B8CFF]/60 rounded" />
      </div>
      <div className="flex-1 rounded bg-white/95 shadow-sm p-3 grid grid-cols-3 gap-2">
        {["Center", "Instructor", "Student"].map((role, i) => (
          <div
            key={role}
            className={`rounded border p-2 flex flex-col gap-1.5 ${
              i === 1
                ? "border-[#4F7CFF]/25 bg-[#4F7CFF]/5"
                : "border-slate-100 bg-[#F8F9FC]"
            }`}
          >
            <div className="h-1.5 w-8 bg-slate-300 rounded" />
            <div className="h-8 w-full bg-slate-100 rounded" />
            <div className="h-1.5 w-6 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  ),
};

// Rotates through a small set of badge color themes so each card's category
// pill reads distinctly, matching the reference (blue / pink / etc.)
const BADGE_THEMES = [
  "bg-[#EDE9FE] text-[#6D28D9]",
  "bg-[#FCE7F3] text-[#DB2777]",
  "bg-[#DBEAFE] text-[#2563EB]",
  "bg-[#DCFCE7] text-[#16A34A]",
];

export default function Projects() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-white relative z-10 border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-[clamp(36px,5.5vw,72px)] font-black text-[#111827] leading-tight font-serif tracking-tighter mb-6">
            The Proof is Live
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-base md:text-lg font-sans">
            Not mockups. Not demos. Production systems running real
            <br />
            <span className="text-[#3B6DFF] font-bold"> businesses </span>— right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/projects/${project.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") router.push(`/projects/${project.slug}`);
              }}
              className="group w-full rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative transform group-hover:scale-[1.01] transition-transform duration-500">
                {MOCKUPS[project.slug]}
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-[#111827] font-serif tracking-tight leading-snug group-hover:text-[#3B6DFF] transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full whitespace-nowrap ${
                      BADGE_THEMES[index % BADGE_THEMES.length]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="text-[#6B7280] leading-relaxed mb-8 font-sans text-sm md:text-base flex-1">
                  {project.summary}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center justify-center bg-gradient-to-b from-[#2D1B4E] to-[#150C2B] text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider group-hover:scale-[1.02] transition-all duration-300 shadow-md">
                    Read Full Case Study <span className="ml-2 font-bold font-sans">→</span>
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#6B7280] hover:text-[#3B6DFF] transition-all duration-300"
                    aria-label="Live Demo Link"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}