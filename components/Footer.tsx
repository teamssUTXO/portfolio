import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-6">
      <p className="mx-auto max-w-6xl text-center font-mono text-xs uppercase tracking-widest text-dim">
        © {new Date().getFullYear()} {profile.alias} · {profile.location}
      </p>
    </footer>
  );
}
