import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";

const values = [
  {
    title: "Ship fast, ship right",
    description:
      "We move quickly without cutting corners. Every deliverable is tested and built to last.",
  },
  {
    title: "Own the outcome",
    description:
      "We measure results, optimize, and stay accountable to your goals.",
  },
  {
    title: "Build in the open",
    description:
      "Weekly demos, transparent communication, and shared roadmaps.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-py bg-canvas border-t border-hairline-soft">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
          <div>
            <h2 className="font-display text-display-lg text-ink">
              We are NextechFusion
            </h2>
            <div className="mt-6 space-y-4 text-body leading-relaxed">
              <p>
                Founded in 2026, NextechFusion started as a small team of
                engineers and designers in Dhaka who believed South Asian
                businesses deserved world-class digital infrastructure.
              </p>
              <p>
                Our flagship product,{" "}
                <a
                  href={siteConfig.edokandarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent font-medium"
                >
                  edokandar.cloud
                </a>
                , powers e-commerce for hundreds of merchants. Everything we
                learn building our own products makes us better partners for
                yours.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-canvas rounded-xl p-6 border border-hairline card-shadow"
              >
                <h3 className="text-base font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
