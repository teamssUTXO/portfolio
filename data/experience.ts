export type Experience = {
  role: string;
  organisation: string;
  href?: string;
  location: string;
  start: string;
  end?: string;
  note?: string;
  details?: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    role: "AI developer - apprenticeship",
    organisation: "Agirc-Arrco",
    href: "https://www.agirc-arrco.fr/",
    location: "Orléans, France",
    start: "2025-10",
    details: [
      "Design and build AI solutions embedded in the business processes of a pension organisation serving 53M people.",
      "Build RAG pipelines and multi-agent systems integrated into the information system.",
      "Apply AI to IT operations (AIOps) to help keep large-scale services running smoothly.",
    ],
    stack: ["RAG", "Multi-agent", "AIOps", "AI evaluation"],
  },
  {
    role: "AI integrator & fullstack developer - internship",
    organisation: "Founders",
    href: "https://www.multifoundation.io/",
    location: "Remote",
    start: "2025-04",
    end: "2025-07",
    details: [
      "Designed vertical RAG agents, from prompt optimization to knowledge bases structured in a vector database.",
      "Integrated the agents into automation scenarios with n8n.",
      "Built a messaging platform and its Chrome extension.",
    ],
    stack: ["RAG", "Vector DB", "Automation", "API design", "Real-time"],
  },
  {
    role: "Master of science in computer science engineering",
    organisation: "CESI School of Engineering",
    href: "https://www.cesi.fr/",
    location: "Rouen, France",
    start: "2023-09",
    note: "Graduating 2028",
    details: [
      "Engineering projects across networks, infrastructure, TSP solver and IoT.",
      "Applications built with a scientific approach: hypotheses, experiments and measured results.",
    ],
  },
];

export function isCurrent(entry: Experience) {
  return !entry.end;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatPeriod({ start, end }: Experience) {
  const fmt = (ym: string) => {
    const [year, month] = ym.split("-").map(Number);
    return `${MONTHS[month - 1]} ${year}`;
  };
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`;
}
