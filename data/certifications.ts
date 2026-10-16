export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status?: "active" | "expired"; // defaults to "active"
  href?: string;
};

// Leave the list empty to hide
export const certifications: Certification[] = [
  { name: "Model Context Protocol", issuer: "Anthropic", year: "2026", href: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics" },
  { name: "NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)", issuer: "NVIDIA", year: "Expected Dec 2026" },
];
