"use client";

import { m, type Variants } from "motion/react";
import React from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "0px 0px -10% 0px" };

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: Props) {
  return (
    <m.div
      className={className}
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

export function RevealList({children, className, stagger = 0.06}: Omit<Props, "delay"> & { stagger?: number }) {
  return (
    <m.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </m.ul>
  );
}

export function RevealItem({ children, className }: Omit<Props, "delay">) {
  return (
    <m.li className={className} variants={item}>
      {children}
    </m.li>
  );
}
