import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { DiscordIcon, GitHubIcon, HuggingFaceIcon, LeetCodeIcon, XIcon } from "../icons";
import { Reveal } from "../motion/Reveal";
import { SectionHeader } from "../SectionHeader";
import { headers } from "@/data/headers";

const details = [
  { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { Icon: MapPin, label: profile.location },
];

const socials = [
  { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.socials.huggingface, label: "Hugging Face", Icon: HuggingFaceIcon },
  { href: profile.socials.x, label: "X", Icon: XIcon },
  { href: profile.socials.leetcode, label: "LeetCode", Icon: LeetCodeIcon },
  { href: profile.socials.discord, label: "Discord", Icon: DiscordIcon },
];

const circle = "grid size-11 shrink-0 place-items-center rounded-full border border-line";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 md:py-25">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          title={headers.contact.title}
          kicker={headers.contact.kicker}
        >
          {headers.contact.intro}
        </SectionHeader>

        <Reveal className="space-y-12">
          <ul className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-16">
            {details.map(({ Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className={circle}>
                  <Icon className="size-4" aria-hidden />
                </span>
                {href ? (
                  <a href={href} className="underline-offset-4 transition-colors hover:underline">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="-mt-6 text-center font-mono text-xs uppercase tracking-widest text-dim">
            {profile.responseTime}
          </p>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${circle} text-muted transition-colors duration-200 hover:border-line-strong hover:text-fg`}
                  title={label}
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
