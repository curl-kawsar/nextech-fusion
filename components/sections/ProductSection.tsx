"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import {
  edokandarCaseStudy,
  edokandarModules,
  edokandarPillars,
  edokandarPlatformStats,
  edokandarResults,
  edokandarStackLoops,
  type EdokandarPillarId,
} from "@/lib/edokandar";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ExternalLinkIcon } from "@/components/icons";
import { MerchantConsole } from "@/components/sections/edokandar/MerchantConsole";

export function ProductSection() {
  const [activePillar, setActivePillar] = useState<EdokandarPillarId>("commerce");
  const pillar = edokandarPillars.find((p) => p.id === activePillar)!;

  return (
    <section
      id="edokandar"
      className="section-py bg-canvas border-t border-hairline relative overflow-hidden"
    >
      <div
        className="absolute inset-0 hero-grid-bg opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[min(100%,36rem)] h-80 hero-glow pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Case study header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-10 sm:mb-14 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted border border-hairline px-3 py-1.5 rounded-full card-shadow">
              {edokandarCaseStudy.badge}
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Live
            </span>
            <h2 className="mt-5 font-display text-display-lg text-ink">
              {edokandarCaseStudy.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-brand-accent">
              {edokandarCaseStudy.productName} — {edokandarCaseStudy.tagline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-xl">
              {edokandarCaseStudy.lead}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href={siteConfig.edokandarUrl} variant="primary" className="w-full sm:w-auto justify-center">
                Visit live site
                <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto justify-center">
                Custom integration
              </Button>
            </div>
          </div>

          {/* Pillar switcher + copy */}
          <div className="rounded-xl sm:rounded-2xl border border-hairline bg-canvas p-4 sm:p-6 card-shadow">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Platform layers
            </p>
            <div
              className="flex flex-wrap gap-2 mb-6"
              role="tablist"
              aria-label="Platform layers"
            >
              {edokandarPillars.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activePillar === p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg border min-h-[44px] transition-colors ${
                    activePillar === p.id
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-canvas text-muted border-hairline hover:text-ink"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-ink">{pillar.headline}</h3>
            <p className="mt-2 text-sm text-body leading-relaxed">{pillar.detail}</p>
          </div>
        </div>

        {/* Interactive console preview */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Case study · Merchant console
              </p>
              <p className="mt-1 text-sm text-body">
                Pixel-aligned with the live portal merchants use every day.
              </p>
            </div>
            <p className="text-xs text-muted font-mono">
              {edokandarCaseStudy.merchantExample.subdomain}
            </p>
          </div>
          <MerchantConsole activePillar={activePillar} />
        </div>

        {/* Platform stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-20">
          {edokandarPlatformStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-hairline bg-canvas p-5 card-shadow"
            >
              <p className="font-display text-2xl sm:text-3xl text-ink">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-ink">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Connected stack loops */}
        <div className="mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Built from the full stack
          </p>
          <h3 className="font-display text-display-sm text-ink mb-8">
            Four connected workflows, zero duplicate data entry
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {edokandarStackLoops.map((loop) => (
              <article
                key={loop.step}
                className="rounded-xl border border-hairline bg-canvas p-5 card-shadow"
              >
                <span className="font-mono text-xs text-brand-accent">{loop.step}</span>
                <h4 className="mt-2 text-sm font-semibold text-ink leading-snug">
                  {loop.title}
                </h4>
                <p className="mt-2 text-xs text-body leading-relaxed">{loop.detail}</p>
                <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-wider text-success">
                  Connected
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Module marquee strip */}
        <div className="rounded-xl sm:rounded-2xl border border-hairline bg-surface-strong/30 p-4 sm:p-6 mb-10 sm:mb-14 lg:mb-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            34+ modules · 16+ integrations
          </p>
          <div className="flex flex-wrap gap-2">
            {edokandarModules.map((mod) => (
              <span
                key={mod}
                className="text-xs font-medium text-body border border-hairline bg-canvas px-3 py-1.5 rounded-full"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>

        {/* Merchant quotes + CTA */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="space-y-4">
            {edokandarResults.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-xl border border-hairline bg-canvas p-6 card-shadow"
              >
                <p className="text-sm text-body leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-xs">
                  <span className="font-semibold text-ink">{t.author}</span>
                  <span className="text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="rounded-xl sm:rounded-2xl border border-hairline bg-canvas p-6 sm:p-8 card-shadow flex flex-col justify-center">
            <h3 className="font-display text-display-sm text-ink">
              Launch faster with the stack we run ourselves
            </h3>
            <p className="mt-3 text-body leading-relaxed">
              Start on edokandar.cloud or ask us to integrate it with your custom
              ERP, marketplace, or agency workflow.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href={siteConfig.edokandarUrl} variant="primary" className="w-full sm:w-auto justify-center">
                Start free on edokandar
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto justify-center">
                Talk to engineering
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
