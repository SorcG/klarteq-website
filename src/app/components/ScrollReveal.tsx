'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const trans = `opacity 550ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 550ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
    el.style.transition = trans;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';

    const observer = new IntersectionObserver(
      (entries) => {
        const { isIntersecting, boundingClientRect } = entries[0];
        const aboveViewport = boundingClientRect.top < 0;

        if (isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        } else if (aboveViewport) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(-20px)';
        } else {
          el.style.opacity = '0';
          el.style.transform = 'translateY(28px)';
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
