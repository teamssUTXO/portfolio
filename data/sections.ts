export type Section = {
  id: string;
  label: string;
  // Icon shown on the rail while this section is active
  head: string;
};

export const sections: Section[] = [
  { id: "about", label: "About", head: "/heads/about.svg" },
  { id: "work", label: "Work", head: "/heads/work.svg" },
  { id: "skills", label: "Skills", head: "/heads/skills.svg" },
  { id: "events", label: "Events", head: "/heads/events.svg" },
  { id: "contact", label: "Contact", head: "/heads/contact.svg" },
];
