"use client";

import { useRef } from "react";
import { m, useScroll, useSpring, type MotionValue, type Variants } from "motion/react";
import { certifications } from "@/data/certifications";
import { skillGroups } from "@/data/skills";
import { CertificationCard } from "../CertificationCard";
import { RevealItem, RevealList } from "../motion/Reveal";
import { SectionHeader } from "../SectionHeader";
import { headers } from "@/data/headers";

const pills: Variants = { show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } };
const pill: Variants = { hidden: { opacity: 0, y: 8, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }, };

function ScrollRule({ progress }: { progress: MotionValue<number> }) {
  return (
    <div aria-hidden className="relative mt-3 h-px bg-line">
      <m.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-fg" />
    </div>
  );
}

export function Skills() {
  const grid = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: grid, offset: ["start end", "start 70%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="skills" className="px-4 py-24 sm:px-6 md:py-25">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          title={headers.skills.title}
          kicker={headers.skills.kicker}
        >
          {headers.skills.intro}
        </SectionHeader>

        <div ref={grid}>
          <RevealList className="grid gap-x-16 gap-y-12 md:grid-cols-2">
            {skillGroups.map((group) => (
              <RevealItem key={group.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium">{group.title}</h3>
                </div>
                <ScrollRule progress={progress} />
                <m.ul variants={pills} className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <m.li
                      key={item}
                      variants={pill}
                      className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-line-strong hover:bg-white/5 hover:text-fg"
                    >
                      {item}
                    </m.li>
                  ))}
                </m.ul>
              </RevealItem>
            ))}
          </RevealList>

          {certifications.length > 0 && (
            <RevealList className="mt-12">
              <RevealItem>
                <h3 className="text-xl font-medium">Certifications</h3>
                <ScrollRule progress={progress} />
                <m.ul variants={pills} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {certifications.map((cert) => (
                    <m.li key={`${cert.name}-${cert.issuer}-${cert.year}`} variants={pill}>
                      <CertificationCard cert={cert} />
                    </m.li>
                  ))}
                </m.ul>
              </RevealItem>
            </RevealList>
          )}
        </div>
      </div>
    </section>
  );
}
