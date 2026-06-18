import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "w-7 h-7 sm:w-8 sm:h-8";

export function NextJsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 22V10l10 12V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.25" />
      <ellipse
        cx="16"
        cy="16"
        rx="12"
        ry="4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="12"
        ry="4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        transform="rotate(120 16 16)"
      />
    </svg>
  );
}

export function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <rect x="4" y="4" width="24" height="24" rx="3" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M11 14h4.5c1.8 0 3 1 3 2.45 0 1.65-1.35 2.55-3.35 2.55H13v2.5H11V14zm2 4h2.2c.85 0 1.35-.4 1.35-1.05 0-.65-.5-1.05-1.35-1.05H13v2.1zM19 14h2v8.5H19V14z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M16 8c-4 0-6.5 2-8 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.96 1.13 2.87 2.06.93.95 2.01 2.04 3.88 2.04 4 0 6.5-2 8-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.96-1.13-2.87-2.06C18.95 8.84 17.87 8 16 8zm-8 8c-4 0-6.5 2-8 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.96 1.13 2.87 2.06.93.95 2.01 2.04 3.88 2.04 4 0 6.5-2 8-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.96-1.13-2.87-2.06C10.95 16.84 9.87 16 8 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export function NodeJsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M16 4L26 10v12L16 28 6 22V10L16 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 11v10M13 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PostgreSqlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M16 6c-4.5 0-8 2-8 6.5 0 2.5 1.2 4.2 3 5.5-.5 1.5-.8 3-.5 4.5 1.2-.3 2.5-.2 3.8.3 1 .4 2.1.7 3.2.7 1.1 0 2.2-.3 3.2-.7 1.3-.5 2.6-.6 3.8-.3.3-1.5 0-3-.5-4.5 1.8-1.3 3-3 3-5.5C24 8 20.5 6 16 6z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="13" r="1" fill="currentColor" />
      <circle cx="19" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

export function AwsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M8 20c3 2.5 12 2.5 16 0M10 14l6-4 6 4M8 20l2-6M24 20l-2-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FigmaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <rect x="14" y="6" width="4" height="8" rx="2" fill="currentColor" fillOpacity="0.85" />
      <rect x="14" y="14" width="4" height="8" rx="2" fill="currentColor" fillOpacity="0.55" />
      <rect x="10" y="14" width="4" height="8" rx="2" fill="currentColor" fillOpacity="0.35" />
      <rect x="18" y="14" width="4" height="8" rx="2" fill="currentColor" fillOpacity="0.7" />
      <rect x="14" y="22" width="4" height="4" rx="2" fill="currentColor" fillOpacity="0.45" />
    </svg>
  );
}

export function ShopifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M16 6l8 3v14l-8 3-8-3V9l8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 12v8M13 14.5c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MetaAdsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <path
        d="M10 20c2-4 3.5-6 6-6s4 2 6 6c-1.5-3-3.5-4.5-6-4.5S11.5 17 10 20z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GoogleAdsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={base} aria-hidden {...props}>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10v12M12 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const techIconMap: Record<string, ComponentType<IconProps>> = {
  nextjs: NextJsIcon,
  react: ReactIcon,
  typescript: TypeScriptIcon,
  tailwind: TailwindIcon,
  nodejs: NodeJsIcon,
  postgresql: PostgreSqlIcon,
  aws: AwsIcon,
  figma: FigmaIcon,
  shopify: ShopifyIcon,
  "meta-ads": MetaAdsIcon,
  "google-ads": GoogleAdsIcon,
};
