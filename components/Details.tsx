"use client";

import { AnimatePresence, m } from "motion/react";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export function DetailsToggle({open, onToggle, controls, label }: {
  open: boolean;
  onToggle: () => void;
  // id of the panel it controls
  controls: string;
  // what the details are about for screen readers
  label: string;
}) {
  const Chevrons = open ? ChevronsDownUp : ChevronsUpDown;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={`${open ? "Hide" : "Show"} details: ${label}`}
      className={`grid size-8 shrink-0 cursor-pointer place-items-center rounded-full border transition-colors duration-200 ${
        open ? "border-line-strong text-fg" : "border-line text-dim hover:border-line-strong hover:text-fg"
      }`}
    >
      <Chevrons aria-hidden className="size-3.5" />
    </button>
  );
}

export function DetailsPanel({id, open, points, pills}: {
  id: string;
  open: boolean;
  points?: string[];
  pills?: string[];
}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <m.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-4 border-l border-line pl-4">
            {points && (
              <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
                {points.map((point, i) => (
                  <li key={i} className="before:mr-2 before:text-dim before:content-['—']">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {pills && (
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Stack">
                {pills.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
