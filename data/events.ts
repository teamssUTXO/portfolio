export type Event = {
  name: string;
  date: string;
  endDate?: string;
  location: string;
  kind: "Conference" | "Hackathon" | "Meetup" | "Workshop" | "Trade show";
  href?: string;
  // will show a LinkedIn button
  linkedin?: string;
  details?: string[];
  featured?: boolean;
};

const allEvents: Event[] = [
  {
    name: "Codeurs en Seine",
    href: "https://www.codeursenseine.com/",
    date: "2025-11-20",
    location: "Rouen, France",
    kind: "Conference",
    details: [
      "A full day of talks in my home city run by the local dev community.",
    ],
    featured: false,
  },
  {
    name: "VivaTech Paris",
    href: "https://vivatech.com/",
    date: "2026-06-19",
    location: "Paris, France",
    kind: "Conference",
    details: [
      "Europe's biggest tech event, from startups to tech giants.",
      "AI was everywhere: agents, automation, and infrastructure. These were the same topics I work on every day.",
    ],
    featured: true,
  },
  {
    name: "The AI Conference SF",
    href: "https://aiconference.com/",
    date: "2026-09-30",
    endDate: "2026-10-01",
    location: "San Francisco, California",
    kind: "Conference",
    details: [
      "Talks and panels with the people building the models, the infrastructure and the companies behind today's AI.",
      "Saw the gap between the US and Europe firsthand: the US is building, while Europe is still catching up.",
    ],
    featured: true,
  },
  {
    name: "Solana Dev Day Cafe",
    href: "https://luma.com/dev-day-cafe",
    date: "2026-09-29",
    location: "San Francisco, California",
    kind: "Meetup",
    details: [
      "Coworking and discussions with builders from Solana, Circle and MoonPay ecosystem.",
    ],
    featured: true,
  },
];


export const events = allEvents.sort((a, b) => b.date.localeCompare(a.date));
export const featuredEvents = events.filter((e) => e.featured);

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatEventDate({ date, endDate }: Event) {
  const [y1, m1, d1] = date.split("-").map(Number);
  const day = (d: number, m: number, y?: number) => `${d} ${MONTHS[m - 1]}${y ? ` ${y}` : ""}`;
  if (!endDate) return day(d1, m1, y1);
  const [y2, m2, d2] = endDate.split("-").map(Number);
  if (y1 !== y2) return `${day(d1, m1, y1)} – ${day(d2, m2, y2)}`;
  if (m1 !== m2) return `${day(d1, m1)} – ${day(d2, m2, y2)}`;
  return `${d1}–${day(d2, m2, y2)}`;
}
