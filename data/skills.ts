export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["Python", "TypeScript", "Rust", "C#", "Java", "SQL"] },
  { title: "AI & Data", items: ["Machine Learning (ML)", "Transformers", "LangChain", "LangGraph", "MCP", "n8n", "Ragas", "scikit-learn", "pandas", "pgvector"] },
  { title: "Web & Backend", items: ["FastAPI", "Next.js", "Astro", "React", "Tailwind CSS", "Node.js", "Express", "Spring", ".NET", "Tauri", "WebSocket"] },
  { title: "Infrastructure & Databases", items: ["Docker", "Kubernetes", "Linux", "Nginx", "Azure", "PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { title: "Tooling & Observability", items: ["Git", "GitHub Actions", "Playwright", "Grafana", "Prometheus", "Langfuse"] },
  { title: "Ways of working", items: ["TDD", "Agile", "Jira", "Confluence"] },
];
