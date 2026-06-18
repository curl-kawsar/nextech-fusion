export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Cloud"
  | "Design"
  | "Growth";

export type Integration = {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
};

export const integrationCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Cloud",
  "Design",
  "Growth",
];

export const integrations: Integration[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description: "App Router, SSR & edge-ready sites",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Component-driven UI at scale",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe codebases",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design systems",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    description: "APIs, workers & realtime",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Backend",
    description: "Relational data & analytics",
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    description: "Deploy, scale & secure infra",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    description: "UI/UX & design handoff",
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "Design",
    description: "E-commerce storefronts",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    category: "Growth",
    description: "Facebook & Instagram campaigns",
  },
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Growth",
    description: "Search & display performance",
  },
];
