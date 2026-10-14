"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { m, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Logo } from "../Logo";
import { announcement } from "@/data/announcement";

type Props = {
  name: string;
  alias: string;
  role: string;
  intro: string;
  location: string;
  resume: string;
};

const ease = [0.16, 1, 0.3, 1] as const;

function MaskLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <m.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </m.span>
    </span>
  );
}

function Orbits({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const rotate = useTransform(progress, [0, 1], [0, 40]);
  const circles = [
    { r: 220, delay: 0.2 },
    { r: 150, delay: 0.45 },
    { r: 80, delay: 0.7 },
  ];
  return (
    <m.svg
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden
      style={{ rotate }}
      className="pointer-events-none absolute -right-40 top-1/2 hidden size-168 -translate-y-1/2 text-white/15 lg:block"
    >
      {circles.map(({ r, delay }) => (
        <m.circle
          key={r}
          cx={250 + (220 - r) * 0.6}
          cy={250 - (220 - r) * 0.6}
          r={r}
          stroke="currentColor"
          strokeWidth={1}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay, ease }}
        />
      ))}
    </m.svg>
  );
}

function Announcement({ label, text, href, color }: NonNullable<typeof announcement>) {
  const body = (
    <>
      <span
        style={{ backgroundColor: color }}
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.7rem] font-bold uppercase text-black"
      >
        <span aria-hidden className="size-1.5 rounded-full bg-black" />
        {label}
      </span>
      <span className="pr-2 text-sm">{text}</span>
      {href && <ArrowUpRight aria-hidden className="mr-1 size-4 text-muted transition-colors group-hover:text-fg" />}
    </>
  );
  const className =
    "group mb-8 inline-flex items-center gap-3 rounded-full border bg-bg/70 p-1 backdrop-blur-md";
  return href ? (
    <a href={href} style={{ borderColor: color }} className={`${className} transition-colors duration-200 hover:bg-white/5`}>
      {body}
    </a>
  ) : (
    <p style={{ borderColor: color }} className={className}>
      {body}
    </p>
  );
}

export function Hero({ name, alias, role, intro, location, resume }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.85, 1], [1, 1, 0, 0]);

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-dvh items-end overflow-hidden px-4 pb-16 pt-32 sm:px-6 md:pb-24"
    >
      <Orbits progress={scrollYProgress} />

      <m.div style={{ y, opacity }} className="relative mx-auto w-full max-w-6xl">
        <m.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {announcement && <Announcement {...announcement} />}
        </m.div>

        <h1 className="font-display text-[clamp(3.5rem,min(15vw,22dvh),12.5rem)] leading-[0.85] tracking-[-0.03em]">
          <MaskLine delay={0.15}>{name}</MaskLine>
        </h1>
        <p className="mt-4 font-display text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-muted">
          <MaskLine delay={0.3}>
            <span className="italic text-dim">aka</span> {alias}
          </MaskLine>
        </p>

        <m.div
          className="mt-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Logo priority className="size-14" />
          <p className="font-mono text-xs uppercase leading-relaxed tracking-widest text-muted">
            {role}
            <br />
            <span className="text-dim">{location}</span>
          </p>
        </m.div>

        <m.div
          className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
        >
          <p className="max-w-md text-lg leading-relaxed text-muted md:col-span-6">{intro}</p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:justify-end">
            <Link
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-transform duration-200 active:scale-[0.97]"
            >
              See my work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-6 text-sm transition-colors duration-200 hover:bg-white/5 active:scale-[0.97]"
            >
              Resume
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
