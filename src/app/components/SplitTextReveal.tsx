interface Props {
  text: string;
  className?: string;
}

export default function SplitTextReveal({ text, className }: Props) {
  const words = text.split(' ');
  return (
    <span aria-label={text} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="hero-word inline-block"
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}
