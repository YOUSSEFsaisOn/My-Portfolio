"use client";

import FluidCardStack from "./framer/fluid-card-stack";
import { ShoppingBag, StickyNote, Video, Lock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, commonWhileInView } from "@/lib/animations";

const ALL_PROJECTS = [
  {
    id: "1",
    title: "Compass College ",
    shortTitle: "Compass College",
    description:
      "Next.js · .NET · React Query · TypeScript · Paymob · Bunny.net · Admin Dashboard",
    shortDescription:
      "Next.js · .NET · React Query · TypeScript · Paymob · Bunny.net · Admin Dashboard Built a full-stack e-learning platform (site + admin dashboard) for high school students — courses, books, exams, pricing, and auth Developed instructor management system and course pricing with free/​paid content support Implemented secure video streaming via Bunny.net⁠ and payment flow using Paymob Used Next.js (App Router), TypeScript, React Query, and .NET backend APIs with JWT authentication Deployed to MonsterASP.NET⁠ with clean architecture, protected routes, and production-ready configurations",
    tags: ["Next.js", "React Query", "Paymob", "Tailwind CSS", ".NET Backend"],
    gradient: "from-blue-500 to-purple-500",
    color: "#3b82f6",
    icon: <ShoppingBag className="text-white" size={24} />,
    emoji: "🛍️",
  },
  {
    id: "2",
    title: "ET Engineering Academy — E-Learning Platform⁠",
    shortTitle: "ET Engineering Academy",
    description:
      "Next.js · .NET · React Query · TypeScript · Paymob · Bunny.net",
    shortDescription:
      "Next.js · .NET · React Query · TypeScript · Paymob · Bunny.net Built a full-stack e-learning platform (courses, books, live sessions, instructors, Zoom) with login & register Integrated Paymob payment flow and Bunny.net⁠ protected video streaming Used Next.js (App Router), TypeScript, React Query, and .NET backend APIs with JWT auth Deployed to MonsterASP.NET⁠ as a freelance solution following clean architecture and best practices ",
    tags: ["Next.js", "TypeScript", ".NET API", "JWT Auth", "Real-time Sync"],
    gradient: "from-cyan-500 to-blue-500",
    color: "#10b981",
    icon: <StickyNote className="text-white" size={24} />,
    emoji: "📝",
  },
  {
    id: "3",
    title: "Firebase Auth System",
    shortTitle: "Firebase Auth System",
    description:
      "Built a secure authentication app with Google Sign-In and Email/​Password login using Firebase Authentication",
    shortDescription:
      "•Built a secure authentication app with Google Sign-In and Email/​Password login using Firebase Authentication",
    tags: ["Next.js", "Bunny.net", "Authentication", "Security", "Performance"],
    gradient: "from-emerald-500 to-cyan-500",
    color: "#a855f7",
    icon: <Video className="text-white" size={24} />,
    emoji: "🎥",
  },
  {
    id: "4",
    title: "Notes Management App",
    shortTitle: "Notes Management App",
    description:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API.• Implemented secure ",
    shortDescription:
      "Developed a full-stack notes management application with CRUD functionality using Next.js and .NET Web API Implemented secure authentication and protected routes with JWT.• Designed a responsive UI with clean state management and real-time user feedback ",
    tags: ["React.js", "Firebase", "OAuth", "Authentication", "Security"],
    gradient: "from-orange-500 to-red-500",
    color: "#f59e0b",
    icon: <Lock className="text-white" size={24} />,
    emoji: "🔐",
  },
];

export default function Projects() {
  const featuredProjectIds = ["1", "2", "3", "4"];
  const cardData = ALL_PROJECTS.filter((p) =>
    featuredProjectIds.includes(p.id),
  ).map((p) => ({
    id: p.id,
    title: p.shortTitle || p.title,
    description: p.shortDescription || p.description,
    icon: p.icon || <BookOpen size={24} />,
    color: p.color || "#3b82f6",
    buttonText: "View Project",
  }));

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#0C0C0C] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={commonWhileInView}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[2px] w-12 sm:w-16 rounded-full bg-gradient-to-r from-blue-400/70 to-cyan-400/70" />
            <p className="text-gray-300/90 text-lg">Showcase of my best work</p>
            <div className="h-[2px] w-12 sm:w-16 rounded-full bg-gradient-to-l from-blue-400/70 to-cyan-400/70" />
          </div>
        </motion.div>

        <div className="mb-12">
          <FluidCardStack cards={cardData} />
        </div>
      </div>
    </section>
  );
}
