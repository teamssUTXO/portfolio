import { profile } from "@/data/profile";
import { SectionRail } from "@/components/SectionRail";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Events } from "@/components/sections/Events";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.alias,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressCountry: "FR" },
  alumniOf: { "@type": "CollegeOrUniversity", name: profile.school },
  sameAs: Object.values(profile.socials),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero
        name={profile.name}
        alias={profile.alias}
        role={profile.role}
        intro={profile.intro}
        location={profile.location}
        resume={profile.resume}
      />
      <About />
      <Work />
      <Skills />
      <Events />
      <Contact />
      <SectionRail />
    </>
  );
}
