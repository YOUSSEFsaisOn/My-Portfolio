import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingContact from "@/components/floating-contact";
import Footer from "@/components/footer";
import { TechBadgeGroup } from "@/components/shared/tech-badge";
import { getProjectBySlug, PROJECTS } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Hero */}
      <section className="bg-[#F8F9FC] border-b border-[#E5E7EB] px-6 pt-36 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#3B6DFF] text-sm font-medium font-sans transition-colors duration-200 rounded outline-none focus-visible:ring-2 focus-visible:ring-[#3B6DFF] focus-visible:ring-offset-2"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <span className="tech-badge-style inline-block mt-8">
            {project.category}
          </span>

          <h1 className="text-[clamp(36px,5.5vw,64px)] font-black text-[#111827] leading-tight font-serif tracking-tighter mt-4 mb-6">
            {project.title}
          </h1>

          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed font-sans max-w-3xl mb-8">
            {project.summary}
          </p>

          <div className="mb-10">
            <TechBadgeGroup techs={project.tech} />
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white px-7 py-3.5 rounded-[20px] text-sm font-bold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-blue-500/10 outline-none focus-visible:ring-2 focus-visible:ring-[#3B6DFF] focus-visible:ring-offset-2"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#111827] border border-[#E5E7EB] px-7 py-3.5 rounded-[20px] text-sm font-bold tracking-wide hover:border-[#3B6DFF] hover:text-[#3B6DFF] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#3B6DFF] focus-visible:ring-offset-2"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Case study sections */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {project.sections.map((section) => (
            <div
              key={section.heading}
              className="border-b border-[#E5E7EB] pb-14 mb-14 last:border-b-0 last:pb-0 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-black text-[#111827] font-serif tracking-tight mb-8">
                {section.heading}
              </h2>
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-[#3B6DFF] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-[#6B7280] leading-relaxed font-sans text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#F8F9FC] border-t border-[#E5E7EB] px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="card-premium p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] font-serif tracking-tight mb-4">
              Want something built like this?
            </h2>
            <p className="text-[#6B7280] font-sans text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Every project on this page is a production system running real
              businesses right now. Explore the rest of the work or start a
              conversation about yours.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center bg-gradient-to-b from-[#4F7CFF] to-[#2F5DFF] text-white px-8 py-4 rounded-[22px] text-sm font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-blue-500/10 outline-none focus-visible:ring-2 focus-visible:ring-[#3B6DFF] focus-visible:ring-offset-2"
            >
              Back to All Projects
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}