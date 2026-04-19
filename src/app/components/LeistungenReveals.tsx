'use client';

import { useEffect } from 'react';
import { gsap } from '@/app/lib/gsap';

export default function LeistungenReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.leistung-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.5,
            },
          },
        );
      });

      const mm = gsap.matchMedia();

      mm.add('(max-width: 767px)', () => {
        gsap.utils
          .toArray<HTMLElement>('.leistung-reveal-side')
          .forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, x: -60 },
              {
                opacity: 1,
                x: 0,
                ease: 'none',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  end: 'top 50%',
                  scrub: 0.5,
                },
              },
            );
          });
      });

      mm.add('(min-width: 768px)', () => {
        gsap.utils
          .toArray<HTMLElement>('.leistung-reveal-side')
          .forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                ease: 'none',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  end: 'top 50%',
                  scrub: 0.5,
                },
              },
            );
          });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
