import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "w-6 h-6 sm:w-7 sm:h-7";

export function WebDevIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <rect x="5" y="7" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12h22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="11.5" cy="9.5" r="1" fill="currentColor" />
      <path d="M11 18l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SoftwareDevIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M8 10l-4 6 4 6M24 10l4 6-4 6M19 8l-6 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CustomDevIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M8 12h8v8H8v-8zM16 12h8v8h-8v-8zM8 20h8v4H8v-4zM16 20h8v4h-8v-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 8v4M20 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DigitalMarketingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path d="M6 22V14l10-6 10 6v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 22v-6h8v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 22h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GraphicsDesignIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14" r="2" fill="currentColor" fillOpacity="0.5" />
      <circle cx="19" cy="12" r="2" fill="currentColor" fillOpacity="0.75" />
      <circle cx="18" cy="19" r="2" fill="currentColor" fillOpacity="0.35" />
      <path d="M8 24l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SocialMediaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 12.5L10 19M18 12.5l4 6.5M11 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIconMap: Record<string, ComponentType<IconProps>> = {
  "web-development": WebDevIcon,
  "software-development": SoftwareDevIcon,
  "custom-development": CustomDevIcon,
  "digital-marketing": DigitalMarketingIcon,
  "graphics-design": GraphicsDesignIcon,
  "social-media-marketing": SocialMediaIcon,
};
