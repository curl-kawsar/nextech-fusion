export const edokandarCaseStudy = {
  badge: "Flagship product",
  name: "edokandar.cloud",
  productName: "ArektaDokan",
  tagline: "Build the store. Run the orders. Keep growth visible.",
  lead: "Our in-house e-commerce OS — the same platform we ship to merchants across Bangladesh. One admin for storefront, orders, payments, delivery, and daily growth.",
  url: "https://edokandar.cloud",
  merchantExample: {
    name: "Deshi Mart",
    subdomain: "demo.stores.edokandar.cloud",
    status: "ACTIVE",
  },
} as const;

export const edokandarPillars = [
  {
    id: "storefront",
    label: "Storefront",
    headline: "Themes, pages, campaigns, SEO-ready catalog",
    detail:
      "Merchants launch branded storefronts with 12+ themes, custom domains, free SSL, and product pages built for discovery — no developer required.",
  },
  {
    id: "commerce",
    label: "Commerce",
    headline: "Orders, payments, fulfillment, and stock in one admin",
    detail:
      "Checkout, bKash, COD, vouchers, and warehouse stock stay in sync. Every order flows from cart to courier without spreadsheet chaos.",
  },
  {
    id: "operations",
    label: "Operations",
    headline: "Roles, approvals, audit trails, and daily insight loops",
    detail:
      "Multi-tenant control plane with isolated stores, team roles, billing, fraud checks, and profit insights — built for agencies and growing brands.",
  },
] as const;

export type EdokandarPillarId = (typeof edokandarPillars)[number]["id"];

export const edokandarPlatformStats = [
  { value: "4,757", label: "Orders captured weekly", sub: "Live platform aggregate" },
  { value: "৳4.4M+", label: "Gross order volume", sub: "Weekly merchant volume" },
  { value: "128+", label: "Active shops", sub: "Running across Bangladesh" },
  { value: "34+", label: "Platform modules", sub: "Catalog to analytics" },
] as const;

export const edokandarDashboardStats = [
  { label: "Gross Revenue", value: "৳57,200", hint: "Net margin 18%" },
  { label: "Conversion Rate", value: "11.5%", hint: "Visitors → orders" },
  { label: "Total Orders", value: "248", hint: "1,842 all-time" },
  { label: "Store Visits", value: "6,120", hint: "Unique visitors" },
] as const;

export const edokandarChartBars = [42, 58, 48, 72, 55, 88, 65, 78] as const;

export const edokandarLiveFeed = [
  { type: "PAGE VIEW", text: "/products/organic-honey" },
  { type: "ORDER PLACED", text: "Order #4821" },
  { type: "PAYMENT", text: "bKash confirmed" },
  { type: "PAGE VIEW", text: "/" },
] as const;

export const edokandarTopProducts = [
  { name: "ভূমি জরিপ", sold: 42 },
  { name: "মোবাইল সার্ভে কোর্স", sold: 28 },
  { name: "Stainless food box set", sold: 19 },
] as const;

export const edokandarStackLoops = [
  {
    step: "01",
    title: "Catalog → Orders → Payments",
    detail: "Product data flows directly into checkout and payment status.",
  },
  {
    step: "02",
    title: "Warehouse → Shipping → Delivery",
    detail: "Stock levels and courier partners stay aligned on every order.",
  },
  {
    step: "03",
    title: "Marketing → Analytics → Profit",
    detail: "Campaigns, sales, and margin roll into one realtime view.",
  },
  {
    step: "04",
    title: "Email → Expenses → True margin",
    detail: "SMTP, Gmail, or webmail beside profit and expense tracking.",
  },
] as const;

export const edokandarModules = [
  "Products & categories",
  "Orders & payments",
  "Inventory & warehouse",
  "Shipping & couriers",
  "bKash & gateways",
  "Analytics & profit",
  "WhatsApp marketing",
  "Domains & free SSL",
  "Storefront themes",
  "Fraud checker",
  "Multi-tenant DMCL",
  "24/7 support",
] as const;

export const edokandarResults = [
  {
    quote:
      "We went from spreadsheets to one dashboard for orders, payouts, and fulfillment.",
    author: "Farzana Haque",
    role: "Owner, Mrittika",
  },
  {
    quote:
      "Custom domains and tenant isolation without hiring a platform team.",
    author: "Shamim Reza",
    role: "CTO, Deshi Look",
  },
] as const;
