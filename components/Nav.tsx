"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { sections } from "@/data/sections";
import { useActiveSection } from "@/lib/useActiveSection";
import { Logo } from "./Logo";

function SectionLink({
  id,
  onHome,
  ...props
}: { id: string; onHome: boolean } & Omit<React.ComponentProps<"a">, "href">) {
  if (onHome) return <a href={`#${id}`} {...props} />;
  return <Link href={`/#${id}`} {...props} />;
}

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome);
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  const logoClass =
    "grid size-11 place-items-center rounded-2xl border border-line bg-bg/70 backdrop-blur-md transition-colors duration-200 hover:border-line-strong";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        {onHome ? (
          <a href="#top" aria-label="Tim, back to top" className={logoClass}>
            <Logo className="size-7" priority />
          </a>
        ) : (
          <Link href="/" aria-label="Tim, home" className={logoClass}>
            <Logo className="size-7" priority />
          </Link>
        )}

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-bg/70 p-1 backdrop-blur-md">
            {sections.map(({ id, label }) => (
              <li key={id} className="relative">
                {active === id && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fg"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <SectionLink
                  id={id}
                  onHome={onHome}
                  aria-current={active === id ? "location" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    active === id ? "text-bg" : "text-muted hover:text-fg"
                  }`}
                >
                  {label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="h-11 cursor-pointer rounded-full border border-line bg-bg/70 px-5 font-mono text-xs uppercase tracking-widest backdrop-blur-md md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-surface/95 p-2 backdrop-blur-md md:hidden"
          >
            <ul>
              {sections.map(({ id, label }, i) => (
                <li key={id}>
                  <SectionLink
                    id={id}
                    onHome={onHome}
                    onClick={close}
                    className="flex items-baseline justify-between rounded-2xl px-4 py-3 text-lg transition-colors hover:bg-white/5"
                  >
                    {label}
                    <span className="font-mono text-xs text-dim">0{i + 1}</span>
                  </SectionLink>
                </li>
              ))}
            </ul>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
