"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import React from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
