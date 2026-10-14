export type Certification = {
  name: string;
  issuer: string;
  year: string;
  href?: string;
};

// Leave the list empty to hide
export const certifications: Certification[] = [
  { name: "Model Context Protocol", issuer: "Anthropic", year: "2026", href: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics" },
  { name: "AWS Certified AI Practitioner", issuer: "AWS", year: "Expected Dec 2026" },
];
