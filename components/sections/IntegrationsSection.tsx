"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { techIconMap } from "@/components/icons/tech-icons";
import {
  integrationCategories,
  integrations,
  type TechCategory,
} from "@/lib/integrations";

function TechCard({
  id,
  name,
  category,
  description,
}: {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
}) {
  const Icon = techIconMap[id];

  return (
    <article className="group flex flex-col gap-3 rounded-xl border border-hairline bg-canvas p-4 sm:p-5 card-shadow h-full">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-hairline bg-canvas text-ink shrink-0">
          {Icon ? <Icon /> : null}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border border-hairline text-muted shrink-0">
          {category}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

export function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState<TechCategory | "All">(
    "All"
  );

  const filtered =
    activeCategory === "All"
      ? integrations
      : integrations.filter((t) => t.category === activeCategory);

  const categoryCounts = integrationCategories.map((cat) => ({
    cat,
    count: integrations.filter((t) => t.category === cat).length,
  }));

  return (
    <section id="stack" className="py-14 sm:py-16 md:py-20 bg-canvas border-y border-hairline">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* Left — intro */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Tech stack
            </p>
            <h2 className="font-display text-display-md text-ink">
              Technologies we work with
            </h2>
            <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-md">
              Battle-tested tools across frontend, backend, cloud, design, and
              growth — chosen per project, not hype.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
              <div className="rounded-xl border border-hairline p-4 card-shadow">
                <p className="font-display text-2xl text-ink">
                  {integrations.length}+
                </p>
                <p className="text-xs text-muted mt-1">Core platforms</p>
              </div>
              <div className="rounded-xl border border-hairline p-4 card-shadow">
                <p className="font-display text-2xl text-ink">5</p>
                <p className="text-xs text-muted mt-1">Stack layers</p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 hidden sm:block">
              {categoryCounts.map(({ cat, count }) => (
                <li
                  key={cat}
                  className="flex items-center justify-between text-sm text-body border-b border-hairline-soft pb-2 last:border-0"
                >
                  <span>{cat}</span>
                  <span className="font-medium text-ink">{count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — filter + grid */}
          <div className="min-w-0">
            <div className="w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-6">
              <div className="flex flex-nowrap sm:flex-wrap gap-2 min-w-max sm:min-w-0">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border min-h-[44px] ${
                  activeCategory === "All"
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-canvas text-muted border-hairline hover:text-ink"
                }`}
              >
                All
              </button>
              {integrationCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border min-h-[44px] ${
                    activeCategory === cat
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-canvas text-muted border-hairline hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
              </div>
            </div>

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3 sm:gap-4">
              {filtered.map((tech) => (
                <TechCard key={tech.id} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
