"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { dockIconMap } from "@/components/icons/dock-icons";

export function DockNav() {
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      aria-label="Mobile dock navigation"
    >
      <div className="mx-auto flex max-w-md items-stretch gap-0.5 rounded-2xl border border-hairline bg-canvas/92 backdrop-blur-md p-1 sm:p-1.5 card-shadow-md">
        {navLinks.map((link) => {
          const Icon = dockIconMap[link.href];
          const isActive = active === link.href;
          const label = "shortLabel" in link ? link.shortLabel : link.label;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 sm:py-2 min-h-[48px] sm:min-h-[52px] min-w-0 px-0.5 transition-colors ${
                isActive
                  ? "bg-surface-strong text-ink"
                  : "text-muted hover:text-ink hover:bg-surface-strong/50"
              }`}
              aria-current={isActive ? "page" : undefined}
              aria-label={link.label}
            >
              {Icon ? <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" /> : null}
              <span className="text-[9px] sm:text-[10px] font-medium leading-none truncate max-w-full px-0.5">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
