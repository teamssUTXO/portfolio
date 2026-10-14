"use client";

import { useId, useState } from "react";
import { type Experience, experience, formatPeriod, isCurrent } from "@/data/experience";
import { DetailsPanel, DetailsToggle } from "./Details";
import { RevealItem, RevealList } from "./motion/Reveal";
import { ScrollLine } from "./ScrollLine";

function Dot({ current }: { current: boolean }) {
  if (!current) {
    return <span aria-hidden className="absolute left-0 top-[1.15rem] size-2.75 rounded-full border border-fg bg-bg" />;
  }
  return (
    <span aria-hidden className="absolute left-0 top-[1.15rem] grid size-2.75 place-items-center">
      <span className="absolute size-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
      <span className="relative size-full rounded-full bg-emerald-400" />
    </span>
  );
}

function Entry({ entry }: { entry: Experience }) {
  const current = isCurrent(entry);
  const hasDetails = Boolean(entry.details?.length || entry.stack?.length);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      <Dot current={current} />
      <div className="grid gap-1 py-3 md:grid-cols-12 md:items-baseline md:gap-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:col-span-4 md:flex-col md:items-start">
          <p className="font-mono text-xs uppercase tracking-widest text-dim">{formatPeriod(entry)}</p>
          {current && (
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
              Currently
            </span>
          )}
        </div>
        <div className="md:col-span-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight">{entry.role}</h3>
            {hasDetails && (
              <DetailsToggle open={open} onToggle={() => setOpen(!open)} controls={panelId} label={entry.role} />
            )}
          </div>
          <p className="mt-1 text-sm">
            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg"
              >
                {entry.organisation}
              </a>
            ) : (
              <span className="text-fg">{entry.organisation}</span>
            )}
            <span className="text-dim">
              {" "}
              · {entry.location}
              {entry.note && ` · ${entry.note}`}
            </span>
          </p>

          <DetailsPanel id={panelId} open={open} points={entry.details} pills={entry.stack} />
        </div>
      </div>
    </>
  );
}

export function ExperienceTimeline() {
  return (
    <ScrollLine>
      <RevealList>
        {experience.map((entry) => (
          <RevealItem key={`${entry.organisation}-${entry.start}`} className="relative pl-10">
            <Entry entry={entry} />
          </RevealItem>
        ))}
      </RevealList>
    </ScrollLine>
  );
}
