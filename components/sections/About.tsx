import { profile } from "@/data/profile";
import { ExperienceTimeline } from "../ExperienceTimeline";
import { Reveal } from "../motion/Reveal";
import { SectionHeader } from "../SectionHeader";
import { headers } from "@/data/headers";

export function About() {
  const [lead, ...rest] = profile.bio;
  return (
    <section id="about" className="px-4 py-24 sm:px-6 md:py-25">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          title={headers.about.title}
          kicker={headers.about.kicker}
        >
          <p className="text-fg">{lead}</p>
        </SectionHeader>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>

            <h3 className="mt-16 font-mono text-xs uppercase tracking-widest text-dim">Path so far</h3>
            <div className="mt-6">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
