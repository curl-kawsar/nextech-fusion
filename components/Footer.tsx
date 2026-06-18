import Link from "next/link";
import type { ReactNode } from "react";
import { footerColumns, footerSocial, siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { ExternalLinkIcon } from "./icons";

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className = "text-sm text-body hover:text-ink transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} inline-flex items-center gap-1`}
      >
        {children}
        <ExternalLinkIcon className="w-3.5 h-3.5 opacity-50" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-hairline dock-pb">
      <Container className="py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="#" className="font-display text-xl text-ink tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-body leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-4">
              {footerSocial.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-medium text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink
                        href={link.href}
                        external={link.href.startsWith("http")}
                      >
                        {link.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink hover:text-brand-accent transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-body">{siteConfig.location}</li>
              <li className="text-body">{siteConfig.hours}</li>
              <li>
                <FooterLink href={siteConfig.edokandarUrl} external>
                  edokandar.cloud
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-hairline-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted">
          <p>
            © {year} {siteConfig.name}
          </p>
          <a href="#" className="hover:text-ink transition-colors">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
