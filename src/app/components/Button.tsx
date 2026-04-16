"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "link";
type Size = "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

const BASE = "inline-flex items-center justify-center gap-2 font-sora text-[15px] font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary:
    "rounded-btn bg-accent text-white hover:bg-accent-hover hover:-translate-y-px disabled:hover:translate-y-0",
  secondary:
    "rounded-btn border-[1.5px] border-border bg-transparent text-primary hover:border-accent hover:text-accent",
  link:
    "text-accent hover:text-accent-hover hover:underline underline-offset-4",
};

const SIZES: Record<Size, string> = {
  md: "px-7 py-3",
  lg: "px-8 py-[14px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  disabled = false,
  loading = false,
  type = "button",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const isLink = variant === "link";
  const classes = [
    BASE,
    VARIANTS[variant],
    isLink ? "" : SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? (
    <>
      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
      <span>Wird gesendet...</span>
    </>
  ) : (
    children
  );

  if (href && !loading && !disabled) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      className={classes}
    >
      {content}
    </button>
  );
}
