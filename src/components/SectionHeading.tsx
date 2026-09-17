"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Rule } from "./Rule";

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
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      id={id}
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span
        className={`eyebrow transition-all duration-500 ease-out ${isLight ? "text-ice" : ""} ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight transition-all duration-700 ease-out sm:text-4xl ${
          isLight ? "text-white" : "text-navy-deep"
        } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        style={{ transitionDelay: inView ? "80ms" : "0ms" }}
      >
        {heading}
      </h2>
      <Rule className="mt-4" center={isCenter} delay={260} />
      {lead ? (
        <p
          className={`mt-4 text-lg transition-all duration-700 ease-out ${
            isLight ? "text-white/80" : "text-navy-deep/70"
          } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: inView ? "180ms" : "0ms" }}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
