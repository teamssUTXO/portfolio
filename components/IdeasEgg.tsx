"use client";

import React, { useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ideas } from "@/data/ideas";

function IdeasEggButton({ open, onToggle, controls }: { open: boolean; onToggle: () => void; controls: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Hide the ideas backlog" : "Open the ideas backlog"}
      className="group inline-flex cursor-pointer items-center font-mono text-sm text-dim/40 transition-colors duration-300 hover:text-muted focus-visible:text-muted"
    >
      <span className="grid max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-500 ease-out-expo group-hover:max-w-40 group-focus-visible:max-w-40">
        {open ? "exit" : "ls ~/ideas"}&nbsp;
      </span>
      <span aria-hidden className={open ? "" : "animate-blink"}>
        _
      </span>
    </button>
  );
}

function IdeasEggPanel({ id, open }: { id: string; open: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <m.div
          id={id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="mt-6 rounded-3xl border border-dashed border-line-strong p-6 font-mono text-sm md:p-8">
            <p className="text-dim">
              <span className="text-fg">~/ideas</span> $ cat backlog.txt
            </p>
            <m.ol
              className="mt-5 space-y-3"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
              {ideas.map((idea, i) => (
                <m.li
                  key={`${i}-${idea.name}`}
                  variants={{ hidden: { opacity: 0, x: -6 }, show: { opacity: 1, x: 0 } }}
                  className="grid gap-1 md:grid-cols-[3rem_1fr_auto] md:gap-4"
                >
                  <span className="text-dim">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted">
                    <span className="text-fg">{idea.name}</span> — {idea.pitch}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest ${idea.status === "next" ? "text-fg" : "text-dim"}`}
                  >
                    [{idea.status}]
                  </span>
                </m.li>
              ))}
            </m.ol>
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + ideas.length * 0.12 }}
              className="mt-6 text-dim"
            >
              {"// You found my backlog. Keep it between us ahah."}
            </m.p>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export function IdeasEgg({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  if (ideas.length === 0) return <div className="mt-10">{children}</div>;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between gap-4">
        {children}
        <IdeasEggButton open={open} onToggle={() => setOpen(!open)} controls={panelId} />
      </div>
      <IdeasEggPanel id={panelId} open={open} />
    </div>
  );
}
