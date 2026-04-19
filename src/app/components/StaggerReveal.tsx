'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/app/lib/gsap';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerReveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<Element>('.stagger-item', ref.current)
        .forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: item as Element,
                start: 'top 90%',
                end: 'top 55%',
                scrub: 0.5,
              },
            },
          );
        });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
