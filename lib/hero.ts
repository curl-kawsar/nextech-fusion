export type HeroMode = "web" | "software" | "marketing" | "design";

export type HeroModeConfig = {
  id: HeroMode;
  label: string;
  headline: string;
  description: string;
  metric: { label: string; value: string; delta: string };
  activity: string[];
  preview: {
    title: string;
    status: string;
    bars: number[];
    tags: string[];
  };
};

export const heroModes: HeroModeConfig[] = [
  {
    id: "web",
    label: "Web",
    headline: "Launch pixel-perfect websites that convert.",
    description:
      "Next.js, React, and blazing Core Web Vitals — from landing pages to full web apps.",
    metric: { label: "Page speed score", value: "98", delta: "+24%" },
    activity: [
      "Homepage deployed to production",
      "CMS sync completed",
      "SEO schema validated",
    ],
    preview: {
      title: "nextechfusion.com",
      status: "Building",
      bars: [72, 88, 65, 94, 80, 91],
      tags: ["Next.js", "Tailwind", "Vercel"],
    },
  },
  {
    id: "software",
    label: "Software",
    headline: "Ship production-grade software at startup speed.",
    description:
      "APIs, SaaS platforms, and custom tools — tested, documented, and built to scale.",
    metric: { label: "API uptime", value: "99.9%", delta: "30 days" },
    activity: [
      "Sprint 4 demo scheduled",
      "CI pipeline passed — 142 tests",
      "Staging deploy ready",
    ],
    preview: {
      title: "api.edokandar.cloud",
      status: "Live",
      bars: [45, 62, 78, 85, 92, 88],
      tags: ["Node.js", "PostgreSQL", "AWS"],
    },
  },
  {
    id: "marketing",
    label: "Marketing",
    headline: "Run campaigns that compound, not burn budget.",
    description:
      "Meta Ads, Google, SEO, and email — optimized weekly with real ROI reporting.",
    metric: { label: "ROAS this month", value: "4.2×", delta: "+38%" },
    activity: [
      "Meta campaign A/B test winning",
      "Email sequence activated",
      "Landing page CVR up 19%",
    ],
    preview: {
      title: "Campaign dashboard",
      status: "Optimizing",
      bars: [55, 70, 82, 76, 90, 95],
      tags: ["Meta Ads", "Google", "Analytics"],
    },
  },
  {
    id: "design",
    label: "Design",
    headline: "Craft brands people remember on first glance.",
    description:
      "Identity systems, UI/UX, and marketing assets — from Figma to production-ready.",
    metric: { label: "Brand assets delivered", value: "48", delta: "this sprint" },
    activity: [
      "Design system v2 approved",
      "Social kit exported",
      "Pitch deck finalized",
    ],
    preview: {
      title: "Brand workspace",
      status: "In review",
      bars: [60, 75, 68, 88, 72, 85],
      tags: ["Figma", "UI/UX", "Brand"],
    },
  },
];

export const heroRotatingWords = [
  "websites",
  "apps",
  "brands",
  "campaigns",
  "stores",
] as const;
