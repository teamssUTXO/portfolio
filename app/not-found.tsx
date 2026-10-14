import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-dim">Error 404</p>
        <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-8xl">
          Nothing <span className="italic text-muted">here.</span>
        </h1>
        <Link
          href="/"
          className="group mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back home
        </Link>
      </div>
    </section>
  );
}
