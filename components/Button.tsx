import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center min-h-[44px] h-10 px-5 text-sm font-semibold rounded-lg transition-colors";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary active:bg-primary-active",
  secondary:
    "bg-canvas text-ink border border-hairline active:bg-surface-strong",
  text: "bg-transparent text-ink h-auto px-0 font-medium",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...(linkProps as ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
