import React from "react";

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="tech-badge-style">
      {tech}
    </span>
  );
}

interface TechBadgeGroupProps {
  techs: string[];
}

export function TechBadgeGroup({ techs }: TechBadgeGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((t, idx) => (
        <TechBadge key={idx} tech={t} />
      ))}
    </div>
  );
}
