'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import Kicker from './Kicker';
import HeroCounters from './HeroCounters';
import SplitTextReveal from './SplitTextReveal';

export default function HeroContent() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(6);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 250),
      setTimeout(() => setStep(3), 800),
      setTimeout(() => setStep(4), 1050),
      setTimeout(() => setStep(5), 1300),
      setTimeout(() => setStep(6), 1500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const reveal = (minStep: number, duration = 600) => ({
    opacity: step >= minStep ? 1 : 0,
    transform: step >= minStep ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  });

  return (
    <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
      <div style={reveal(1)}>
        <Kicker>Webentwicklung · Ostwestfalen</Kicker>
      </div>
      <h1 className="max-w-[720px] text-h1 font-sora">
        <SplitTextReveal
          text="Websites, die für dein Geschäft arbeiten."
          active={step >= 2}
        />
      </h1>
      <p
        className="mt-6 max-w-[560px] font-serif text-[18px] leading-[1.65] text-muted"
        style={reveal(3, 700)}
      >
        Ich baue schnelle, sichtbare Websites für lokale Unternehmen in
        Ostwestfalen. Keine Visitenkarten. Werkzeuge.
      </p>
      <div
        className="mt-8 flex flex-wrap items-center gap-6"
        style={reveal(4)}
      >
        <Button variant="primary" size="lg" href="/kontakt">
          Projekt besprechen
        </Button>
        <Button variant="link" href="/leistungen">
          Leistungen ansehen →
        </Button>
      </div>
      <p
        className="mt-6 font-serif text-[14px] text-muted"
        style={reveal(5, 500)}
      >
        Aus Gütersloh · Für Unternehmen in OWL
      </p>
      <div className="mt-6">
        <HeroCounters active={step >= 6} />
      </div>
    </div>
  );
}
