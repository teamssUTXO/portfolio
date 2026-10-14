type Header = {
  title: string;
  kicker: string;
  intro?: string;
};

export const headers = {
  about: { title: "Hi, I'm Tim.", kicker: "About" },
  work: { title: "What I'm building", kicker: "Projects", intro: "Each of these projects started as something I wanted to understand or to solve. The fastest way I found to get there was to build it myself: side projects, open-source contributions and school work, wherever my curiosity took me." },
  skills: { title: "I'm building with", kicker: "Skills", intro: "My head and my keyboard, mostly. Here are the languages and tools I use every day in my projects." },
  events: { title: "Events & conferences", kicker: "Events", intro: "I go where people are building cool things. I show up to learn, meet new people and bring ideas back home." },
  contact: { title: "Let's connect.", kicker: "Contact", intro: "If you've read this far, we probably have something to talk about. I'm open to internships, projects and new opportunities, so feel free to reach out!" },
} satisfies Record<string, Header>;
