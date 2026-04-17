'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          setTimeout(() => {
            el.style.transition = 'all 500ms ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
