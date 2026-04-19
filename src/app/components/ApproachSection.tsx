'use client';

import { useEffect, useRef } from 'react';
import { Zap, Gauge, Code2, type LucideIcon } from 'lucide-react';
import Kicker from './Kicker';
import { gsap, ScrollTrigger } from '@/app/lib/gsap';

const APPROACH_BLOCKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Zap,
    title: 'Tempo, das Agenturen nicht liefern können',
    text: 'Ich arbeite mit modernen, KI-gestützten Entwicklungstools. Das heißt: Was in einer klassischen Agentur vier Wochen dauert, baue ich in vier Tagen. Gleiche Qualität, andere Geschwindigkeit. Das spart dir Zeit, und weil meine Prozesse schlanker sind, auch Geld.',
  },
  {
    icon: Gauge,
    title: 'Performance statt Dekoration',
    text: 'Ich baue keine Seiten, die nur schön aussehen. Ich baue Seiten, die unter 2 Sekunden laden, die Google versteht, und die auf jedem Handy funktionieren. Lighthouse-Score 90+ ist bei mir Standard, nicht Upgrade.',
  },
  {
    icon: Code2,
    title: 'Keine Templates',
    text: 'Ich arbeite nicht mit Baukästen. Jede Seite wird als Code für dein Unternehmen geschrieben. Das klingt nach Mehraufwand – ist aber genau das, was deine Seite schneller, sichtbarer und langfristig wartbarer macht.',
  },
];

export default function ApproachSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.approach-item').forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0.25, x: 24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 65%',
                toggleActions: 'play none none none',
              },
            },
          );
        });
      }, ref);
      return () => ctx.revert();
    });

    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.approach-item',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          },
        );
      }, ref);
      return () => ctx.revert();
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  return (
    <section className="bg-powder">
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[45fr_55fr] md:gap-16">
          <div className="md:sticky md:top-[120px] md:self-start">
            <Kicker>Mein Ansatz</Kicker>
            <h2 className="text-h2">
              Wie ich arbeite – und warum das anders ist.
            </h2>
            <p className="mt-6 font-serif text-body leading-[1.7] text-muted">
              Ich komme nicht aus der klassischen Webdesign-Welt. Hauptberuflich
              baue ich im E-Commerce mit – einer Branche, in der jede Sekunde
              Ladezeit und jeder Klick gemessen wird. Dort lernst du sehr
              schnell, was eine Website leisten muss, um Umsatz zu machen.
              Dieses Denken bringe ich in jedes Projekt.
            </p>
          </div>
          <div className="flex flex-col gap-14 md:gap-0">
            {APPROACH_BLOCKS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="approach-item md:pb-20 last:md:pb-0">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-accent-light"
                  aria-hidden="true"
                >
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="mt-6 font-sora text-h3 text-primary">{title}</h3>
                <p className="mt-3 max-w-[560px] font-serif text-body leading-[1.7] text-muted">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
