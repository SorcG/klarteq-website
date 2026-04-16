import type { ReactNode } from "react";

interface KickerProps {
  children: ReactNode;
  className?: string;
}

export default function Kicker({ children, className = "" }: KickerProps) {
  return (
    <div
      className={`font-sora text-kicker uppercase text-accent mb-4 ${className}`}
    >
      {children}
    </div>
  );
}
