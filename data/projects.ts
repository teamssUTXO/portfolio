export type ProjectKind = "personal" | "foss" | "school";

export const projectKinds: Record<ProjectKind, string> = {
  personal: "Personal",
  foss: "FOSS contribution",
  school: "School",
};

export type Project = {
  title: string;
  kind: ProjectKind;
  summary: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "RLBattle",
    kind: "personal",
    summary:
      "A new way to compete on Rocket League: players record their best goals, then rate each other's clips live to climb the leaderboard.",
    stack: ["Rust", "Tauri", "Next.js"],
    href: "https://github.com/teamssUTXO/RLBattle/",
  },
  {
    title: "CodeStar",
    kind: "foss",
    summary:
      "An open-source, self-hosted e-learning platform template, built so anyone can launch their own.",
    stack: ["Next.js", "Java", "Spring", "AI integration"],
    href: "https://github.com/CodeStar-Project",
  },
  {
    title: "BTCPay Server ecosystem",
    kind: "foss",
    summary:
      "Plugins, translations and new features for the open-source payment processor that lets merchants accept Bitcoin without any middleman.",
    stack: ["C#"],
    href: "https://github.com/btcpayserver/",
  },
  {
    title: "Bitcoin MCP Server",
    kind: "personal",
    summary:
      "An MCP server that gives AI assistants like Claude live Bitcoin data: blocks, transactions, fees, mining and market stats.",
    stack: ["Python", "MCP"],
    href: "https://github.com/teamssUTXO/bitcoin_mcp",
  },
  {
    title: "Beat Battle",
    kind: "personal",
    summary:
      "Translating the online arena where music producers battle their beats against each other.",
    stack: ["i18n"],
    href: "https://beat-battle.net/",
  },
  {
    title: "WeTalk",
    kind: "school",
    summary:
      "A lightweight, Twitter-like social network built on microservices, with an AI assistant that answers from the docs through RAG and acts on the platform through MCP tools.",
    stack: ["Next.js", "Express", "Docker", "RAG", "MCP"],
    href: "https://github.com/WeTalk-com/WeTalk/",
  },
  {
    title: "SHA256",
    kind: "personal",
    summary:
      "SHA-256 written from scratch in C, following the NIST standard and tested against its official test vectors.",
    stack: ["C", "Hash"],
    href: "https://github.com/teamssUTXO/SHA256/",
  },
];
