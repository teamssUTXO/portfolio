import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { RevealItem, RevealList } from "../motion/Reveal";
import { IdeasEgg } from "../IdeasEgg";
import { ProjectCard } from "../ProjectCard";
import { SectionHeader } from "../SectionHeader";
import { headers } from "@/data/headers";

export function Work() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 md:py-25">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          title={headers.work.title}
          kicker={headers.work.kicker}
        >
          {headers.work.intro}
        </SectionHeader>

        <RevealList className="grid gap-4 md:grid-cols-2" stagger={0.08}>
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealList>

        <IdeasEgg>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
          >
            More on GitHub
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </IdeasEgg>
      </div>
    </section>
  );
}
