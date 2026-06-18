"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import {
  heroModes,
  heroRotatingWords,
  type HeroMode,
} from "@/lib/hero";

function useParallaxEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return enabled;
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % heroRotatingWords.length);
        setVisible(true);
      }, 280);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block text-brand-accent transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {heroRotatingWords[index]}
    </span>
  );
}

function ModePills({
  active,
  onChange,
}: {
  active: HeroMode;
  onChange: (mode: HeroMode) => void;
}) {
  return (
    <div className="w-full max-w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div
        className="inline-flex min-w-max p-1 sm:p-1.5 rounded-full border border-hairline bg-canvas card-shadow"
        role="tablist"
        aria-label="Service focus"
      >
        {heroModes.map((mode) => {
          const isActive = active === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(mode.id)}
              className={`shrink-0 px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 min-h-[44px] ${
                isActive
                  ? "bg-primary text-on-primary card-shadow"
                  : "text-muted hover:text-ink"
              }`}
            >
              {mode.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ActivityFeed({ items, keyId }: { items: string[]; keyId: string }) {
  return (
    <ul className="space-y-2" key={keyId}>
      {items.map((item, i) => (
        <li
          key={item}
          className="hero-fade-up flex items-start gap-2 text-xs text-body leading-relaxed"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-badge-emerald shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CommandCenter({
  mode,
  parallax,
  parallaxEnabled,
}: {
  mode: (typeof heroModes)[number];
  parallax: { x: number; y: number };
  parallaxEnabled: boolean;
}) {
  const transform = parallaxEnabled
    ? `perspective(1200px) rotateX(${parallax.y * -0.35}deg) rotateY(${parallax.x * 0.35}deg)`
    : undefined;

  return (
    <div
      className="relative w-full max-w-[min(100%,28rem)] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto pt-6 sm:pt-4"
      style={{
        transform,
        transition: parallaxEnabled ? "transform 0.15s ease-out" : undefined,
      }}
    >
      <div className="absolute top-0 left-0 z-20 hero-float flex sm:hidden items-center gap-2 px-2.5 py-1 rounded-full border border-hairline bg-canvas card-shadow text-[11px] font-medium text-ink">
        <span className="w-1.5 h-1.5 rounded-full bg-badge-emerald shrink-0" />
        Live sprint
      </div>

      <div className="absolute -top-2 sm:-top-4 left-0 sm:-left-2 z-20 hero-float hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-canvas card-shadow text-xs font-medium text-ink">
        <span className="w-2 h-2 rounded-full bg-badge-emerald shrink-0" />
        Live sprint
      </div>
      <div className="absolute top-8 sm:top-auto sm:bottom-auto sm:top-1/4 -right-1 sm:-right-2 z-20 hero-float flex px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-hairline bg-canvas card-shadow text-[11px] sm:text-xs font-semibold text-brand-accent max-w-[40%] truncate">
        {mode.metric.delta}
      </div>
      <div className="absolute bottom-2 sm:bottom-1/4 -left-1 sm:-left-6 z-20 hero-float hidden md:flex px-3 py-1.5 rounded-full border border-hairline bg-canvas card-shadow text-xs text-muted">
        Dhaka → Global
      </div>

      <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 rounded-2xl border border-hairline bg-canvas/60 card-shadow pointer-events-none" />

      <div
        key={mode.id}
        className="relative rounded-xl sm:rounded-2xl border border-hairline bg-canvas card-shadow-md overflow-hidden hero-fade-up"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-hairline bg-canvas min-w-0">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline shrink-0" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-hairline shrink-0" />
          <span className="ml-1 sm:ml-3 text-[11px] sm:text-xs font-medium text-muted truncate flex-1 min-w-0">
            {mode.preview.title}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full border border-hairline text-muted shrink-0">
            {mode.preview.status}
          </span>
        </div>

        <div className="p-3 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-4 sm:mb-5">
            <div className="min-w-0">
              <p className="text-[11px] sm:text-xs text-muted mb-0.5 sm:mb-1">
                {mode.metric.label}
              </p>
              <p className="text-2xl sm:text-3xl font-display text-ink tracking-tight">
                {mode.metric.value}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {mode.preview.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 sm:py-1 rounded-md border border-hairline text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="h-20 sm:h-28 rounded-lg sm:rounded-xl border border-hairline bg-canvas p-2 sm:p-3 mb-3 sm:mb-4 flex items-end gap-1 sm:gap-1.5">
            {mode.preview.bars.map((h, i) => (
              <div
                key={`${mode.id}-bar-${i}`}
                className="flex-1 min-w-0 rounded-sm bg-primary/15 origin-bottom hero-fade-up"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 60}ms`,
                }}
              />
            ))}
          </div>

          <div className="rounded-lg sm:rounded-xl border border-hairline p-2.5 sm:p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
              Live activity
            </p>
            <ActivityFeed items={mode.activity} keyId={mode.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [activeMode, setActiveMode] = useState<HeroMode>("web");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);
  const parallaxEnabled = useParallaxEnabled();

  const mode = heroModes.find((m) => m.id === activeMode) ?? heroModes[0];

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!parallaxEnabled) return;
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setParallax({ x, y });
    },
    [parallaxEnabled]
  );

  const handlePointerLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-canvas border-b border-hairline">
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <Container className="relative pt-8 pb-12 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-20 items-center">
          <div className="w-full min-w-0 order-1 lg:order-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-canvas card-shadow mb-4 sm:mb-6 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-badge-emerald shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-muted truncate">
                NextechFusion · Digital Agency
              </span>
            </div>

            <h1 className="font-display text-display-xl text-ink [overflow-wrap:anywhere]">
              <span className="block sm:inline">We build </span>
              <RotatingWord />
              <span className="block mt-1 sm:mt-0 sm:inline sm:ml-1">
                that actually ship.
              </span>
            </h1>

            <div key={mode.id} className="hero-fade-up mt-4 sm:mt-6">
              <p className="text-base sm:text-lg font-semibold text-ink leading-snug">
                {mode.headline}
              </p>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-body leading-relaxed">
                {mode.description}
              </p>
            </div>

            <div className="mt-6 sm:mt-8 w-full min-w-0">
              <ModePills active={activeMode} onChange={setActiveMode} />
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col min-[480px]:flex-row gap-3 w-full sm:w-auto">
              <Button href="#contact" variant="primary" className="w-full min-[480px]:w-auto justify-center">
                Start a project
              </Button>
              <Button href="#portfolio" variant="secondary" className="w-full min-[480px]:w-auto justify-center">
                See our work
              </Button>
            </div>
          </div>

          <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative w-full min-w-0 order-2 lg:order-none px-1 sm:px-0"
          >
            <CommandCenter
              mode={mode}
              parallax={parallax}
              parallaxEnabled={parallaxEnabled}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
