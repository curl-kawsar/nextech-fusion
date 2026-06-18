import Link from "next/link";
import { services } from "@/lib/services";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/icons";
import { serviceIconMap } from "@/components/icons/service-icons";

const accentBar: Record<string, string> = {
  "web-development": "bg-badge-orange",
  "software-development": "bg-badge-violet",
  "custom-development": "bg-badge-emerald",
  "digital-marketing": "bg-badge-orange",
  "graphics-design": "bg-badge-pink",
  "social-media-marketing": "bg-badge-violet",
};

const bentoLayout: { slug: string; span: string }[] = [
  { slug: "web-development", span: "md:col-span-7 md:row-span-2" },
  { slug: "software-development", span: "md:col-span-5" },
  { slug: "custom-development", span: "md:col-span-5" },
  { slug: "digital-marketing", span: "md:col-span-12" },
  { slug: "graphics-design", span: "md:col-span-6" },
  { slug: "social-media-marketing", span: "md:col-span-6" },
];

function BentoTile({ slug, span }: { slug: string; span: string }) {
  const service = services.find((s) => s.slug === slug)!;
  const Icon = serviceIconMap[slug];
  const featured = slug === "web-development";

  return (
    <Link
      href="#contact"
      className={`group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-hairline bg-canvas card-shadow hover:border-ink/20 hover:card-shadow-md transition-all duration-200 ${span} ${
        featured ? "min-h-0 sm:min-h-[220px] md:min-h-full p-5 sm:p-7 md:p-9" : "p-5 sm:p-6 md:p-7"
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${accentBar[slug]}`}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-hairline text-ink shrink-0">
          {Icon ? <Icon /> : null}
        </div>
        <span className="font-mono text-xs text-muted">{service.number}</span>
      </div>

      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-accent">
        {service.eyebrow}
      </p>
      <h3
        className={`mt-1 font-semibold text-ink tracking-tight ${
          featured ? "text-xl sm:text-2xl md:text-3xl" : "text-base sm:text-lg md:text-xl"
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`mt-2 text-body leading-relaxed flex-1 ${
          featured ? "text-base max-w-lg" : "text-sm"
        }`}
      >
        {service.shortDescription}
      </p>

      {featured && (
        <ul className="mt-5 space-y-1.5">
          {service.deliverables.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted">
              <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink opacity-60 group-hover:opacity-100 transition-opacity">
        Discuss project
        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-py bg-canvas border-t border-hairline-soft">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Services
            </p>
            <h2 className="font-display text-display-lg text-ink">
              Your all-purpose digital agency
            </h2>
            <p className="mt-4 text-base text-body leading-relaxed">
              Six disciplines, one team — pick one or combine them for a full
              digital transformation.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-hairline rounded-lg px-5 py-3 hover:bg-surface-strong/40 transition-colors shrink-0 self-start md:self-auto group"
          >
            Start a project
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 md:auto-rows-[minmax(150px,auto)]">
          {bentoLayout.map(({ slug, span }) => (
            <BentoTile key={slug} slug={slug} span={span} />
          ))}
        </div>
      </Container>
    </section>
  );
}
