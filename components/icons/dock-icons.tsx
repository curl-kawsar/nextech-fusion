import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconClass = "w-5 h-5";

export function DockServicesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DockPortfolioIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden {...props}>
      <path d="M4 7h16v12H4V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 11h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V5h8v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DockAboutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden {...props}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DockProductIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden {...props}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function DockContactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden {...props}>
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const dockIconMap: Record<string, ComponentType<IconProps>> = {
  "#services": DockServicesIcon,
  "#portfolio": DockPortfolioIcon,
  "#about": DockAboutIcon,
  "#edokandar": DockProductIcon,
  "#contact": DockContactIcon,
};
