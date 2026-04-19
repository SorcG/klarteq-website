'use client';

interface Props {
  text: string;
  active: boolean;
  className?: string;
}

export default function SplitTextReveal({ text, active, className }: Props) {
  const words = text.split(' ');
  return (
    <span aria-label={text} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 500ms ease-out ${i * 80}ms, transform 500ms ease-out ${i * 80}ms`,
          }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
