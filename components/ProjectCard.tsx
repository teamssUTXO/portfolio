"use client";

import { ArrowUpRight, GitBranch, GraduationCap, User } from "lucide-react";
import { projectKinds, type Project, type ProjectKind } from "@/data/projects";
import React from "react";

const kindIcons: Record<ProjectKind, typeof User> = {
  personal: User,
  foss: GitBranch,
  school: GraduationCap,
};

function KindTab({ kind }: { kind: ProjectKind }) {
  const Icon = kindIcons[kind];
  return (
    <span className="absolute left-0 top-0 flex items-center gap-2 rounded-br-2xl border-b border-r border-line bg-bg/40 py-2 pl-4 pr-4 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors duration-300 group-hover:border-line-strong group-hover:text-fg sm:pl-4">
      <Icon aria-hidden className="size-3.5" />
      {projectKinds[kind]}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, stack, href, kind } = project;

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const body = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(255 255 255 / 0.07), transparent 60%)",
        }}
      />
      <KindTab kind={kind} />
      <div className="relative flex min-h-10 items-start justify-end gap-3">
        {href && (
          <span className="grid size-10 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>
      <div className="relative mt-2 pt-10">
        <h3 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-muted">{summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  const className = "group relative flex h-full min-h-80 flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong sm:p-8";

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={onPointerMove}
      className={className}
      aria-label={`${title} (${projectKinds[kind]}) — view on GitHub`}
    >
      {body}
    </a>
  ) : (
    <article onPointerMove={onPointerMove} className={className}>
      {body}
    </article>
  );
}
