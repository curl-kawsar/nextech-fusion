"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 bg-canvas/95 backdrop-blur-sm border-b border-hairline">
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href="#"
          className="font-display text-base sm:text-lg tracking-tight text-ink shrink-0 min-w-0 truncate max-w-[55%] sm:max-w-none"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button href="#contact" variant="text">
            Sign in
          </Button>
          <Button href="#contact" variant="primary">
            Start a project
          </Button>
        </div>

        <Button href="#contact" variant="primary" className="lg:hidden h-9 px-4 text-xs">
          Start
        </Button>
      </Container>
    </header>
  );
}
