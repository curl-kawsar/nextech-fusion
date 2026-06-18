export const workflowContent = {
  badge: "How we work",
  title: "From brief to launch,\nwithout the chaos",
  description:
    "A proven five-step process for websites, software, and campaigns — clear milestones, weekly demos, and no surprise invoices.",
} as const;

export const workflowSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your goals, audience, and technical needs into a focused brief with timeline and budget.",
    accent: "violet" as const,
    pin: "violet" as const,
    rotation: "md:rotate-6 -rotate-12",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Wireframes, brand direction, and UI concepts your customers will trust and remember.",
    accent: "blue" as const,
    pin: "blue" as const,
    rotation: "rotate-12 md:-rotate-6",
  },
  {
    number: "03",
    title: "Architecture",
    description:
      "We choose the right stack, APIs, and infrastructure — built to be fast, secure, and scalable.",
    accent: "emerald" as const,
    pin: "emerald" as const,
    rotation: "md:rotate-6 -rotate-12",
  },
  {
    number: "04",
    title: "Build & Iterate",
    description:
      "Agile sprints with weekly demos. You see progress every step — not just at the finish line.",
    accent: "orange" as const,
    pin: "orange" as const,
    rotation: "rotate-12 md:-rotate-6",
  },
  {
    number: "05",
    title: "Launch & Scale",
    description:
      "Deploy, measure, and optimize. Need marketing or growth? We stay on as your partner.",
    accent: "pink" as const,
    pin: "pink" as const,
    rotation: "md:rotate-6 -rotate-12",
  },
] as const;

export const workflowAccentStyles = {
  violet: {
    gradient: "from-badge-violet/25",
    number: "text-badge-violet",
  },
  blue: {
    gradient: "from-brand-accent/20",
    number: "text-brand-accent",
  },
  emerald: {
    gradient: "from-badge-emerald/25",
    number: "text-badge-emerald",
  },
  orange: {
    gradient: "from-badge-orange/25",
    number: "text-badge-orange",
  },
  pink: {
    gradient: "from-badge-pink/25",
    number: "text-badge-pink",
  },
} as const;

export const workflowBackgroundImage =
  "https://framerusercontent.com/images/6k6TXmNiavD2kvwomWnu3oQDkjg.png";

export const workflowPinImages = {
  violet: "https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png",
  blue: "https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png",
  emerald: "https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png",
  orange: "https://framerusercontent.com/images/ceWoRGcAON0ADKDjPd9HhJlf0h4.png",
  pink: "https://framerusercontent.com/images/qfrgnhbit9GLh4NOTnKVvU.png",
} as const;
