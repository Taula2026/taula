import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  heading: ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  lead,
  align = "left",
  tone = "dark",
  id,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div id={id} className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <span className={`eyebrow ${isLight ? "text-ice" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          isLight ? "text-white" : "text-navy-deep"
        }`}
      >
        {heading}
      </h2>
      <span className={`rule mt-4 ${isCenter ? "mx-auto" : ""}`} />
      {lead ? (
        <p className={`mt-4 text-lg ${isLight ? "text-white/80" : "text-navy-deep/70"}`}>{lead}</p>
      ) : null}
    </div>
  );
}
