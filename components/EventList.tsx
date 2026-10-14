"use client";

import { useId, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { type Event, formatEventDate } from "@/data/events";
import { DetailsPanel, DetailsToggle } from "./Details";
import { LinkedInIcon } from "./icons";
import { RevealItem, RevealList } from "./motion/Reveal";
import { ScrollLine } from "./ScrollLine";

function EventRow({ event }: { event: Event }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const hasDetails = Boolean(event.details?.length);

  return (
    <div className="grid gap-2 p-6 md:grid-cols-12 md:items-baseline md:gap-6">
      <p className="font-mono text-xs uppercase tracking-widest text-dim md:col-span-3">
        <time dateTime={event.date}>{formatEventDate(event)}</time>
      </p>
      <div className="md:col-span-9">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl leading-tight">
              {event.href ? (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-fg"
                >
                  {event.name}
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 self-center text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                  />
                </a>
              ) : (
                event.name
              )}
            </h3>
            <p className="mt-2 text-muted">
              <span className="text-fg">{event.kind}</span> · {event.location}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {event.linkedin && (
              <a
                href={event.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${event.name} — read the LinkedIn post`}
                className="grid size-8 place-items-center rounded-full border border-line text-dim transition-colors duration-200 hover:border-line-strong hover:text-fg"
              >
                <LinkedInIcon className="size-3.5" />
              </a>
            )}
            {hasDetails && (
              <DetailsToggle open={open} onToggle={() => setOpen(!open)} controls={panelId} label={event.name} />
            )}
          </div>
        </div>
        <DetailsPanel id={panelId} open={open} points={event.details} />
      </div>
    </div>
  );
}

const keyOf = (event: Event) => `${event.date}-${event.name}`;

export function EventList({ events }: { events: Event[] }) {
  const [initialKeys] = useState(() => new Set(events.map(keyOf)));

  if (events.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-line-strong p-10 text-center">
        <p className="font-display text-3xl">First entries soon.</p>
        <p className="mt-2 text-muted">Conferences, hackathons and meetups I attend will show up here.</p>
      </div>
    );
  }

  return (
    <ScrollLine>
      <RevealList className="space-y-2">
        <AnimatePresence initial={false}>
          {events.map((event) => {
            const key = keyOf(event);
            const content = (
              <>
                <span aria-hidden className="absolute left-0 top-9 size-2.75 rounded-full border border-fg bg-bg" />
                <EventRow event={event} />
              </>
            );
            return initialKeys.has(key) ? (
              <RevealItem key={key} className="relative pl-10">
                {content}
              </RevealItem>
            ) : (
              <m.li
                key={key}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden pl-10"
              >
                {content}
              </m.li>
            );
          })}
        </AnimatePresence>
      </RevealList>
    </ScrollLine>
  );
}

export function EventFeed({ events, featured }: { events: Event[]; featured: Event[] }) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = events.length > featured.length;

  return (
    <>
      <EventList events={showAll ? events : featured} />
      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
          className="group mt-10 inline-flex cursor-pointer items-center gap-2 text-muted transition-colors hover:text-fg"
        >
          {showAll ? "Show fewer" : `All events (${events.length})`}
          <ChevronDown
            aria-hidden
            className={`size-4 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"}`}
          />
        </button>
      )}
    </>
  );
}
