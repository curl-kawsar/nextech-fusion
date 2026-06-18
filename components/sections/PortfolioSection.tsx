"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolioProjects } from "@/lib/site";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/icons";

const accents: Record<
  string,
  { border: string; text: string; mesh: string; dot: string }
> = {
  orange: {
    border: "border-l-badge-orange",
    text: "text-badge-orange",
    mesh: "radial-gradient(circle at 30% 40%, rgba(194,65,12,0.22), transparent 55%)",
    dot: "bg-badge-orange",
  },
  pink: {
    border: "border-l-badge-pink",
    text: "text-badge-pink",
    mesh: "radial-gradient(circle at 70% 30%, rgba(190,24,93,0.2), transparent 55%)",
    dot: "bg-badge-pink",
  },
  violet: {
    border: "border-l-badge-violet",
    text: "text-badge-violet",
    mesh: "radial-gradient(circle at 40% 60%, rgba(124,58,237,0.2), transparent 55%)",
    dot: "bg-badge-violet",
  },
};

export function PortfolioSection() {
  const [active, setActive] = useState(0);
  const project = portfolioProjects[active];
  const style = accents[project.accent];

  return (
    <section
      id="portfolio"
      className="pt-10 md:pt-12 pb-16 md:pb-24 bg-canvas border-t border-hairline-soft overflow-hidden"
    >
      <Container>
        {/* Header — editorial, not card-grid */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Portfolio
              </span>
              <span className="h-px flex-1 max-w-12 bg-hairline" aria-hidden="true" />
              <span className="font-mono text-xs text-muted">
                {String(portfolioProjects.length).padStart(2, "0")} case files
              </span>
            </div>
            <h2 className="font-display text-display-lg text-ink max-w-lg">
              Work we&apos;re proud of
            </h2>
          </div>
          <p className="text-sm text-body max-w-sm leading-relaxed lg:text-right">
            Open a file to read the brief, outcome, and stack — then tell us what
            you want to build next.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Case file index */}
          <div
            className="flex flex-col gap-2"
            role="tablist"
            aria-label="Portfolio projects"
          >
            {portfolioProjects.map((item, index) => {
              const itemStyle = accents[item.accent];
              const isActive = active === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  className={`group w-full text-left rounded-xl border-l-4 transition-all duration-300 ${
                    itemStyle.border
                  } ${
                    isActive
                      ? "border border-hairline bg-canvas card-shadow-md pl-5 pr-5 py-5"
                      : "border border-transparent bg-transparent pl-5 pr-4 py-4 hover:bg-surface-strong/40"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-mono text-2xl font-semibold tabular-nums transition-colors ${
                        isActive ? itemStyle.text : "text-ink/25 group-hover:text-ink/40"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`font-semibold tracking-tight truncate ${
                          isActive ? "text-ink text-lg" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5 hidden sm:block">
                        {item.year} · {item.outcome}
                      </p>
                    </div>
                    <span
                      className={`hidden sm:block w-2 h-2 rounded-full shrink-0 transition-opacity ${
                        itemStyle.dot
                      } ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cinematic preview panel */}
          <div
            role="tabpanel"
            className="relative min-h-[min(420px,85dvh)] sm:min-h-[420px] rounded-xl sm:rounded-2xl border border-hairline bg-canvas card-shadow-md overflow-hidden"
          >
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ background: style.mesh }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/80 to-canvas/30"
              aria-hidden="true"
            />

            {/* Giant watermark letter */}
            <span
              className="absolute -right-2 sm:-right-4 top-2 sm:top-4 font-display text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none text-ink/[0.04] select-none pointer-events-none"
              aria-hidden="true"
            >
              {project.title.charAt(0)}
            </span>

            <div className="relative flex flex-col h-full min-h-[min(420px,85dvh)] sm:min-h-[420px] p-5 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className={`text-xs font-semibold uppercase tracking-widest ${style.text}`}>
                  Case file · {project.year}
                </span>
                <span className="font-mono text-xs text-muted">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(portfolioProjects.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.08] max-w-md">
                {project.title}
              </h3>

              <p className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.services.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-hairline bg-canvas/80 text-ink backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                    Outcome
                  </p>
                  <p className="mt-1 font-display text-2xl sm:text-3xl text-ink">
                    {project.outcome}
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-on-primary bg-primary rounded-lg px-5 py-3 hover:bg-primary-active transition-colors shrink-0 group"
                >
                  Build something like this
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Progress rail */}
            <div className="absolute bottom-0 left-0 right-0 flex h-1">
              {portfolioProjects.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show project ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`flex-1 transition-colors duration-300 ${
                    i === active ? style.dot : "bg-hairline hover:bg-muted-soft"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
