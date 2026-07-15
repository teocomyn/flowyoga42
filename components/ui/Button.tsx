import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { MOMOYOGA_URL } from "@/lib/constants";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  ctaLocation?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-clay-400 text-ink-900 hover:bg-clay-600 hover:text-sand-50 border border-clay-400",
  secondary:
    "bg-transparent text-moss-500 border border-moss-500 hover:bg-moss-500 hover:text-sand-50",
  ghost:
    "bg-transparent text-ink-900 border border-sand-200 hover:border-clay-400",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ctaLocation,
  href = MOMOYOGA_URL,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-wide transition-colors duration-300";

  const dataAttrs = ctaLocation
    ? { "data-cta": "reservation", "data-location": ctaLocation }
    : {};

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...dataAttrs}
        {...props}
      >
        {children}
      </a>
    );
  }

  const linkProps = { ...props } as Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href"
  >;

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...dataAttrs}
      {...linkProps}
    >
      {children}
    </Link>
  );
}

export function ReservationButton({
  location,
  className = "",
}: {
  location: string;
  className?: string;
}) {
  return (
    <Button
      href={MOMOYOGA_URL}
      variant="primary"
      ctaLocation={location}
      className={className}
    >
      Réserver un cours
    </Button>
  );
}
