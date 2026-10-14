import { Reveal } from "./motion/Reveal";
import React from "react";

type Props = {
  index: string;
  title: string;
  kicker?: string;
  children?: React.ReactNode;
};

export function SectionHeader({ index, title, kicker, children }: Props) {
  return (
    <Reveal className="mb-10 grid gap-6 border-t border-line pt-6 md:mb-10 md:grid-cols-12">
      <p className="font-mono text-xs uppercase tracking-widest text-dim md:col-span-3">
        <span className="text-fg">{index}</span> / {kicker ?? title}
      </p>
      <div className="md:col-span-9">
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl">
          {title}
        </h2>
        {children && <div className="mt-6 max-w-xl text-lg text-muted">{children}</div>}
      </div>
    </Reveal>
  );
}
