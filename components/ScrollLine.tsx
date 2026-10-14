"use client";

import React, { useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollLine({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 420px"] });
  const { scrollY } = useScroll();
  const progress = useTransform([scrollYProgress, scrollY], ([lineProgress]: number[]) => {
    const section = ref.current?.closest("section");
    return section && section.getBoundingClientRect().top <= 2 ? 1 : lineProgress;
  });
  const scaleY = useSpring(progress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <div aria-hidden className="absolute bottom-0 left-1.25 top-0 w-px bg-line" />
      <m.div
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-0 left-1.25 top-0 w-px origin-top bg-fg"
      />
      {children}
    </div>
  );
}
