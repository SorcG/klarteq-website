'use client';

import { useEffect } from 'react';
import { gsap } from '@/app/lib/gsap';

export default function AboutSlideIn() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.8,
          },
        },
      );

      gsap.fromTo(
        '.about-text',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.8,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return null;
}
