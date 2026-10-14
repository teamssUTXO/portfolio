"use client";

import { sections } from "@/data/sections";
import { useActiveSection } from "@/lib/useActiveSection";

const STEP = 44;

export function SectionRail() {
  const current = useActiveSection(true);
  const active = Math.max(0, sections.findIndex(({ id }) => id === current));

  return (
    <nav
      aria-label="Sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div aria-hidden className="absolute bottom-5.5 left-1/2 top-5.5 w-px -translate-x-1/2 bg-line" />
      <ul className="relative">
        {sections.map(({ id, label }, i) => (
          <li key={id} style={{ height: STEP }} className="grid place-items-center">
            <a
              href={`#${id}`}
              aria-current={active === i ? "location" : undefined}
              className="group relative grid size-11 place-items-center"
            >
              <span className="size-1.5 rounded-full bg-line-strong transition-colors duration-200 group-hover:bg-fg" />
              <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div
        aria-hidden
        style={{ transform: `translateY(${active * STEP}px)` }}
        className="pointer-events-none absolute left-1/2 top-0 -ml-4.75 mt-0.75 size-9.5 overflow-hidden rounded-full border border-line-strong bg-bg transition-transform duration-500 ease-out-expo motion-reduce:transition-none"
      >
        {sections.map(({ id, head }, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={id}
            src={head}
            alt=""
            width={38}
            height={38}
            className={`absolute inset-0 size-full transition-opacity duration-200 motion-reduce:transition-none ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
