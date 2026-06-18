"use client";

import type { EdokandarPillarId } from "@/lib/edokandar";
import {
  edokandarCaseStudy,
  edokandarChartBars,
  edokandarDashboardStats,
  edokandarLiveFeed,
  edokandarTopProducts,
} from "@/lib/edokandar";

const merchant = edokandarCaseStudy.merchantExample;

const sidebarItems: { id: EdokandarPillarId | "analytics"; label: string }[] = [
  { id: "storefront", label: "Storefront" },
  { id: "commerce", label: "Orders" },
  { id: "operations", label: "Settings" },
  { id: "analytics", label: "Analytics" },
];

type MerchantConsoleProps = {
  activePillar: EdokandarPillarId;
};

export function MerchantConsole({ activePillar }: MerchantConsoleProps) {
  return (
    <div className="rounded-2xl border border-hairline bg-canvas card-shadow-md overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-hairline bg-surface-strong/30">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="flex gap-1 shrink-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline" />
          </span>
          <span className="text-[10px] sm:text-xs font-medium text-muted truncate">
            <span className="sm:hidden">Console</span>
            <span className="hidden sm:inline">Merchant Console · {merchant.subdomain}</span>
          </span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full shrink-0">
          {merchant.status}
        </span>
      </div>

      <div className="flex min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex-col sm:flex-row">
        {/* Mobile nav pills */}
        <div className="sm:hidden flex gap-1.5 p-3 border-b border-hairline overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink-0">
          {sidebarItems.map((item) => {
            const active =
              item.id === activePillar ||
              (item.id === "analytics" && activePillar === "operations");
            return (
              <span
                key={item.label}
                className={`shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-medium whitespace-nowrap ${
                  active ? "bg-primary text-on-primary" : "text-muted border border-hairline"
                }`}
              >
                {item.label}
              </span>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-32 md:w-36 lg:w-40 border-r border-hairline bg-surface-strong/20 py-4 px-2 gap-0.5 shrink-0">
          <p className="px-2 pb-3 text-[10px] font-semibold uppercase tracking-wider text-muted">
            {merchant.name}
          </p>
          {sidebarItems.map((item) => {
            const active =
              item.id === activePillar ||
              (item.id === "analytics" && activePillar === "operations");
            return (
              <div
                key={item.label}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                  active
                    ? "bg-primary text-on-primary"
                    : "text-muted"
                }`}
              >
                {item.label}
              </div>
            );
          })}
        </aside>

        {/* Main panel */}
        <div className="flex-1 p-3 sm:p-5 min-w-0 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
            <div>
              <h4 className="text-sm font-semibold text-ink">{merchant.name}</h4>
              <p className="text-[10px] text-muted mt-0.5">Last 7 days · demo</p>
            </div>
            <div className="flex gap-1">
              {["7d", "15d", "30d"].map((range, i) => (
                <span
                  key={range}
                  className={`text-[10px] px-2 py-1 rounded-md font-medium ${
                    i === 0
                      ? "bg-primary text-on-primary"
                      : "text-muted border border-hairline"
                  }`}
                >
                  {range}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
            {edokandarDashboardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-hairline bg-canvas p-3"
              >
                <p className="text-[10px] text-muted">{stat.label}</p>
                <p className="text-base sm:text-lg font-semibold text-ink mt-0.5">
                  {stat.value}
                </p>
                <p className="text-[10px] text-muted mt-0.5">{stat.hint}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-hairline p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
                Sales trend
              </p>
              <div className="h-16 flex items-end gap-1">
                {edokandarChartBars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-brand-accent/25 rounded-sm min-h-[4px]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-hairline p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
                Live feed
              </p>
              <ul className="space-y-1.5">
                {edokandarLiveFeed.map((item) => (
                  <li key={item.text} className="text-[10px] leading-snug">
                    <span className="font-semibold text-brand-accent">{item.type}</span>
                    <span className="text-muted ml-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 rounded-xl border border-hairline p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
              Top products by margin
            </p>
            <ul className="space-y-1">
              {edokandarTopProducts.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between text-xs text-body"
                >
                  <span className="truncate pr-2">{p.name}</span>
                  <span className="text-muted shrink-0">{p.sold} sold</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
