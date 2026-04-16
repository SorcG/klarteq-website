interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: { text: 18, dot: 6, tracking: "-0.5px" },
  md: { text: 24, dot: 8, tracking: "-1px" },
  lg: { text: 36, dot: 12, tracking: "-2px" },
} as const;

export default function Logo({ variant = "light", size = "md" }: LogoProps) {
  const { text, dot, tracking } = SIZE_MAP[size];
  const textColor = variant === "dark" ? "var(--color-powder)" : "var(--color-primary)";

  return (
    <span
      className="inline-flex items-start font-manrope leading-none whitespace-nowrap select-none"
      style={{ color: textColor, letterSpacing: tracking }}
    >
      <span style={{ fontSize: `${text}px`, fontWeight: 800 }}>Klar</span>
      <span style={{ fontSize: `${text}px`, fontWeight: 400 }}>teq</span>
      <span
        aria-hidden="true"
        className="rounded-full bg-accent"
        style={{
          width: `${dot}px`,
          height: `${dot}px`,
          marginLeft: `-${Math.round(dot / 2)}px`,
          marginTop: `-${Math.round(dot / 8)}px`,
          flexShrink: 0,
        }}
      />
    </span>
  );
}
