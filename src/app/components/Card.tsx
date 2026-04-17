import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  highlighted?: boolean;
  hover?: boolean;
  badge?: string;
  className?: string;
}

export default function Card({
  children,
  highlighted = false,
  hover = false,
  badge,
  className = "",
}: CardProps) {
  const badgeLabel = badge ?? (highlighted ? "Beliebt" : undefined);

  const base = "relative bg-white p-8 shadow-card transition-all duration-200 ease-out";
  const variantClass = highlighted
    ? "rounded-card border-2 border-accent"
    : "rounded-l-none rounded-r-card border border-border border-l-[3px] border-l-transparent hover:border-l-accent";
  const hoverClass = hover
    ? "hover:shadow-card-hover hover:-translate-y-[2px]"
    : "";

  return (
    <div className={`${base} ${variantClass} ${hoverClass} ${className}`.trim()}>
      {badgeLabel && (
        <span className="absolute top-4 right-4 rounded-full bg-accent px-[10px] py-1 font-sora text-[11px] font-semibold uppercase tracking-wider text-white">
          {badgeLabel}
        </span>
      )}
      {children}
    </div>
  );
}
