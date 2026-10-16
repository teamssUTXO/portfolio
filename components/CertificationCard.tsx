import { ArrowUpRight, Award } from "lucide-react";
import { type Certification } from "@/data/certifications";

export function CertificationCard({ cert }: { cert: Certification }) {
  const expired = cert.status === "expired";
  const body = (
    <>
      <Award aria-hidden className="mt-0.5 size-4 shrink-0 text-dim transition-colors group-hover:text-fg" />
      <div className="min-w-0 flex-1">
        <p className={`text-sm leading-snug ${expired ? "text-muted line-through decoration-line-strong" : "text-fg"}`}>
          {cert.name}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-dim">
          {cert.issuer} · {cert.year}
        </p>
      </div>
      {cert.href && (
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
        />
      )}
    </>
  );
  const className = `group flex h-full items-start gap-3 rounded-2xl border p-4 transition-colors duration-200 ${
    expired ? "border-dashed border-line opacity-60 hover:opacity-100" : "border-line"
  }`;
  return cert.href ? (
    <a
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.name}, ${cert.issuer}${expired ? " (expired)" : ""} — view credential`}
      className={`${className} hover:border-line-strong hover:bg-white/5`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
