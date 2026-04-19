'use client';

import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Kicker from './Kicker';
import HeroCounters from './HeroCounters';
import SplitTextReveal from './SplitTextReveal';
import { gsap } from '@/app/lib/gsap';

export default function HeroContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets =
        '.hero-label, .hero-word, .hero-paragraph, .hero-cta, .hero-meta, .hero-trust';

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        setCountersActive(true);
        return;
      }

      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      );

      tl.fromTo(
        '.hero-word',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.07,
        },
        '-=0.2',
      );

      tl.fromTo(
        '.hero-paragraph',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3',
      );

      tl.fromTo(
        '.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.2',
      );

      tl.fromTo(
        '.hero-meta, .hero-trust',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.1,
          onStart: () => setCountersActive(true),
        },
        '-=0.1',
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32"
    >
      <div className="hero-label">
        <Kicker>Webentwicklung · Ostwestfalen</Kicker>
      </div>
      <h1 className="max-w-[720px] text-h1 font-sora">
        <SplitTextReveal text="Websites, die für dein Geschäft arbeiten." />
      </h1>
      <p className="hero-paragraph mt-6 max-w-[560px] font-serif text-[18px] leading-[1.65] text-muted">
        Ich baue schnelle, sichtbare Websites für lokale Unternehmen in
        Ostwestfalen. Keine Visitenkarten. Werkzeuge.
      </p>
      <div className="hero-cta mt-8 flex flex-wrap items-center gap-6">
        <Button variant="primary" size="lg" href="/kontakt">
          Projekt besprechen
        </Button>
        <Button variant="link" href="/leistungen">
          Leistungen ansehen →
        </Button>
      </div>
      <p className="hero-meta mt-6 font-serif text-[14px] text-muted">
        Aus Gütersloh · Für Unternehmen in OWL
      </p>
      <div className="hero-trust mt-6">
        <HeroCounters active={countersActive} />
      </div>
    </div>
  );
}
