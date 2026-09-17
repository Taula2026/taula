"use client";

import { useInView } from "@/hooks/useInView";

interface RuleProps {
  className?: string;
  delay?: number;
  center?: boolean;
}

export function Rule({ className = "", delay = 0, center = false }: RuleProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`rule transition-transform duration-700 ease-out ${
        center ? "mx-auto origin-center" : "origin-left"
      } ${inView ? "scale-x-100" : "scale-x-0"} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    />
  );
}
