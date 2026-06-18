export const siteConfig = {
  name: "NextechFusion",
  tagline: "Digital Agency",
  description:
    "We build, market, and ship the internet's most ambitious products.",
  email: "hello@nextechfusion.com",
  location: "Dhaka, Bangladesh",
  hours: "Mon–Fri, 9am–6pm BST",
  edokandarUrl: "https://edokandar.cloud",
} as const;

export const footerSocial = [
  { label: "LinkedIn", href: "#contact" },
  { label: "GitHub", href: "#contact" },
  { label: "X", href: "#contact" },
] as const;

export const navLinks = [
  { href: "#services", label: "Services", shortLabel: "Services" },
  { href: "#portfolio", label: "Portfolio", shortLabel: "Work" },
  { href: "#about", label: "About", shortLabel: "About" },
  { href: "#edokandar", label: "edokandar", shortLabel: "Product" },
  { href: "#contact", label: "Contact", shortLabel: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Services",
    links: [
      { href: "#services", label: "Web Development" },
      { href: "#services", label: "Software Development" },
      { href: "#services", label: "Digital Marketing" },
      { href: "#services", label: "Graphics Design" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#contact", label: "Contact" },
      { href: "#edokandar", label: "edokandar.cloud" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#workflow", label: "Our Process" },
      { href: "#contact", label: "Get a Quote" },
    ],
  },
] as const;

export const portfolioProjects = [
  {
    title: "ShopLocal BD",
    description: "Full-stack marketplace for local merchants across Bangladesh.",
    services: ["Web Development", "Digital Marketing"],
    accent: "orange",
    outcome: "3× revenue in Q1",
    year: "2025",
  },
  {
    title: "Bloom Cosmetics",
    description: "D2C brand identity, Shopify store, and Meta ad campaigns.",
    services: ["Graphics Design", "Social Media"],
    accent: "pink",
    outcome: "2× ROAS, −30% ad spend",
    year: "2025",
  },
  {
    title: "Hassan Traders",
    description: "Custom ERP and edokandar.cloud integration for wholesale ops.",
    services: ["Custom Development", "Software"],
    accent: "violet",
    outcome: "ERP live in 10 weeks",
    year: "2024",
  },
] as const;
