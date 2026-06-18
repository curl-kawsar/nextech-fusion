export type Service = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    number: "01",
    eyebrow: "WEB",
    title: "Web Development",
    shortDescription:
      "Fast, accessible websites and web apps built with modern frameworks.",
    description:
      "We craft high-performance websites and web applications using Next.js, React, and TypeScript. From marketing sites to complex dashboards, every build is SEO-ready, mobile-first, and built to scale.",
    deliverables: [
      "Responsive UI with pixel-perfect design implementation",
      "Next.js / React application architecture",
      "CMS integration (Sanity, Contentful, WordPress)",
      "Performance optimization (Core Web Vitals)",
      "SEO setup and analytics integration",
      "Deployment and CI/CD pipeline",
    ],
    process: [
      { step: "Audit", detail: "Review existing site, competitors, and technical requirements." },
      { step: "Architecture", detail: "Define tech stack, page structure, and component library." },
      { step: "Development", detail: "Sprint-based build with weekly demos and feedback loops." },
      { step: "Launch", detail: "QA, performance testing, DNS cutover, and post-launch support." },
    ],
    faqs: [
      {
        question: "What technologies do you use?",
        answer: "We primarily use Next.js, React, TypeScript, and Tailwind CSS. For CMS we work with Sanity, Contentful, or headless WordPress.",
      },
      {
        question: "How long does a typical website take?",
        answer: "A marketing site takes 4–6 weeks. Complex web apps range from 8–16 weeks depending on scope.",
      },
    ],
  },
  {
    slug: "software-development",
    number: "02",
    eyebrow: "SOFTWARE",
    title: "Software Development",
    shortDescription:
      "Robust backends, APIs, and SaaS products engineered for scale.",
    description:
      "We build production-grade software — APIs, microservices, SaaS platforms, and internal tools. Our engineering team follows best practices for testing, documentation, and maintainability.",
    deliverables: [
      "RESTful and GraphQL API design",
      "Database architecture (PostgreSQL, MongoDB)",
      "Authentication and authorization systems",
      "Cloud infrastructure (AWS, Vercel, Railway)",
      "Automated testing and CI/CD",
      "Technical documentation and handoff",
    ],
    process: [
      { step: "Scoping", detail: "Define MVP features, user stories, and acceptance criteria." },
      { step: "Design", detail: "System architecture, database schema, and API contracts." },
      { step: "Build", detail: "Two-week sprints with code reviews and automated testing." },
      { step: "Ship", detail: "Staging validation, production deploy, monitoring setup." },
    ],
    faqs: [
      {
        question: "Do you work with existing codebases?",
        answer: "Yes. We audit existing code, identify technical debt, and can take over maintenance or refactor incrementally.",
      },
      {
        question: "What about ongoing support?",
        answer: "We offer monthly retainer packages for bug fixes, feature additions, and infrastructure monitoring.",
      },
    ],
  },
  {
    slug: "custom-development",
    number: "03",
    eyebrow: "CUSTOM",
    title: "Custom Development",
    shortDescription:
      "Bespoke solutions tailored to your unique business workflows.",
    description:
      "When off-the-shelf doesn't fit, we build custom. ERPs, internal dashboards, automation pipelines, and integrations that solve your specific operational challenges.",
    deliverables: [
      "Requirements analysis and workflow mapping",
      "Custom application development",
      "Third-party API integrations",
      "Data migration and ETL pipelines",
      "Admin panels and reporting dashboards",
      "Training and documentation",
    ],
    process: [
      { step: "Discovery", detail: "Map current workflows, pain points, and desired outcomes." },
      { step: "Prototype", detail: "Build a working prototype to validate the approach." },
      { step: "Develop", detail: "Full build with iterative feedback from stakeholders." },
      { step: "Deploy", detail: "Rollout, team training, and ongoing optimization." },
    ],
    faqs: [
      {
        question: "How is custom different from software development?",
        answer: "Custom development focuses on unique business logic and integrations. Software development covers standard SaaS and API products.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer: "Absolutely. We integrate with Shopify, WooCommerce, Salesforce, QuickBooks, and most platforms with an API.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    number: "04",
    eyebrow: "MARKETING",
    title: "Digital Marketing",
    shortDescription:
      "Data-driven campaigns across search, display, and email channels.",
    description:
      "We run performance marketing campaigns that deliver measurable ROI. From Google Ads to email automation, every channel is optimized with data and tested relentlessly.",
    deliverables: [
      "Marketing strategy and channel planning",
      "Google Ads and Meta Ads management",
      "SEO audits and content strategy",
      "Email marketing automation",
      "Conversion rate optimization",
      "Monthly performance reporting",
    ],
    process: [
      { step: "Audit", detail: "Analyze current channels, competitors, and conversion funnels." },
      { step: "Strategy", detail: "Define target audiences, messaging, and channel mix." },
      { step: "Execute", detail: "Launch campaigns with A/B testing and budget optimization." },
      { step: "Optimize", detail: "Weekly reporting, bid adjustments, and creative refreshes." },
    ],
    faqs: [
      {
        question: "What's your minimum ad spend?",
        answer: "We recommend a minimum of $2,000/month in ad spend for meaningful data and optimization.",
      },
      {
        question: "Do you handle creative assets?",
        answer: "Yes. Our graphics team produces ad creatives, landing page assets, and email templates.",
      },
    ],
  },
  {
    slug: "graphics-design",
    number: "05",
    eyebrow: "DESIGN",
    title: "Graphics Design",
    shortDescription:
      "Brand identities, UI/UX, and visual systems that stand out.",
    description:
      "From logo design to full brand guidelines and UI/UX systems, our design team creates visuals that communicate your value and convert visitors into customers.",
    deliverables: [
      "Brand identity (logo, colors, typography)",
      "UI/UX design for web and mobile",
      "Marketing collateral (banners, social posts)",
      "Presentation and pitch deck design",
      "Design system and component library",
      "Figma handoff for development",
    ],
    process: [
      { step: "Brief", detail: "Understand brand values, audience, and competitive landscape." },
      { step: "Concept", detail: "Present 2–3 creative directions with mood boards." },
      { step: "Refine", detail: "Iterate on chosen direction with stakeholder feedback." },
      { step: "Deliver", detail: "Final assets, brand guidelines, and dev-ready files." },
    ],
    faqs: [
      {
        question: "Do you redesign existing brands?",
        answer: "Yes. We handle full rebrands and incremental refreshes while maintaining brand recognition.",
      },
      {
        question: "What file formats do you deliver?",
        answer: "Figma source files, SVG/PNG exports, PDF brand guidelines, and CSS design tokens when needed.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    number: "06",
    eyebrow: "SOCIAL",
    title: "Social Media Marketing",
    shortDescription:
      "Content strategy, community management, and paid social that grows your brand.",
    description:
      "We manage your social presence end-to-end — content calendars, community engagement, influencer partnerships, and paid social campaigns across Meta, TikTok, LinkedIn, and more.",
    deliverables: [
      "Social media strategy and content calendar",
      "Platform-specific content creation",
      "Community management and engagement",
      "Paid social campaign management",
      "Influencer outreach and partnerships",
      "Analytics and growth reporting",
    ],
    process: [
      { step: "Audit", detail: "Review current profiles, competitors, and audience insights." },
      { step: "Plan", detail: "Content pillars, posting schedule, and campaign themes." },
      { step: "Create", detail: "Produce graphics, copy, reels, and stories on schedule." },
      { step: "Grow", detail: "Engage community, run ads, and report on KPIs monthly." },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer: "Facebook, Instagram, TikTok, LinkedIn, Twitter/X, and YouTube. We tailor strategy per platform.",
      },
      {
        question: "Can you handle video content?",
        answer: "Yes. We produce short-form video (reels, TikToks) and coordinate with videographers for long-form.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
