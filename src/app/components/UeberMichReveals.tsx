'use client';

import { useEffect } from 'react';
import { gsap } from '@/app/lib/gsap';

export default function UeberMichReveals() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ueber-reveal').forEach((el) => {
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

      gsap.utils.toArray<HTMLElement>('.ueber-reveal-left').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.8,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('.ueber-reveal-right').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.8,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
