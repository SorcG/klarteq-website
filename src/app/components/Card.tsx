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

  const base = "relative bg-white rounded-card p-8 shadow-card";
  const borderClass = highlighted
    ? "border-2 border-accent"
    : "border border-border";
  const hoverClass = hover
    ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-[2px]"
    : "";

  return (
    <div className={`${base} ${borderClass} ${hoverClass} ${className}`.trim()}>
      {badgeLabel && (
        <span className="absolute top-4 right-4 rounded-full bg-accent px-[10px] py-1 font-sora text-[11px] font-semibold uppercase tracking-wider text-white">
          {badgeLabel}
        </span>
      )}
      {children}
    </div>
  );
}
