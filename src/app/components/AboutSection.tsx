'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import Kicker from './Kicker';
import { gsap, ScrollTrigger } from '@/app/lib/gsap';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('.about-image, .about-text', { opacity: 1, x: 0, y: 0 });
        gsap.set('.about-img', { scale: 1 });
        return;
      }

      // Effect 1: Slide-in from different sides
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

      // Effect 2: Parallax on photo
      gsap.to('.about-image', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Effect 3: Zoom on photo
      gsap.fromTo(
        '.about-img',
        { scale: 1.15 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'center center',
            scrub: 1,
          },
        },
      );

      // Effect 4: Animated counters
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        const target = parseInt(el.dataset.target ?? '0');
        ScrollTrigger.create({
          trigger: '.about-stats',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(el, {
              innerHTML: target,
              duration: 1.5,
              ease: 'power2.out',
              snap: { innerHTML: 1 },
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section bg-white">
      <div
        ref={ref}
        className="mx-auto max-w-[1200px] px-6 py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <div className="about-image md:col-span-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card">
              <Image
                src="/images/luca1.jpg"
                alt="Luca Sorci, Webentwickler aus Gütersloh"
                fill
                className="about-img object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </div>
          <div className="about-text md:col-span-3">
            <Kicker>Wer baut hier</Kicker>
            <h2 className="text-h2">
              Luca Sorci – dein Webentwickler aus Gütersloh.
            </h2>
            <p className="mt-6 font-serif text-body leading-[1.7] text-muted">
              Ich bin Luca, Entwickler aus Gütersloh. Hauptberuflich arbeite
              ich im E-Commerce, einer Welt, in der jede Sekunde Ladezeit
              und jeder Klick gemessen wird. Diese Erfahrung bringe ich zu
              lokalen Unternehmen, die bisher mit Websites arbeiten, die
              mehr schaden als nützen – zu langsam, nicht mobil-optimiert,
              bei Google unsichtbar.
            </p>
            <p className="mt-4 font-serif text-body leading-[1.7] text-muted">
              Mit modernen Entwicklungstools baue ich in Tagen, wofür
              klassische Agenturen Wochen brauchen. Keine Templates. Keine
              Standardlösungen. Sondern Websites, die für dein Geschäft
              arbeiten.
            </p>
            <div className="mt-6">
              <Button variant="link" href="/ueber-mich">
                Mehr über mich →
              </Button>
            </div>
            <div
              className="about-stats mt-8 grid grid-cols-3 gap-6 border-t pt-6"
              style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            >
              <div className="about-stat text-center">
                <div className="flex items-baseline justify-center">
                  <span
                    className="stat-number font-mono text-[36px] font-medium text-primary"
                    data-target="2"
                  >
                    0
                  </span>
                  <span className="font-mono text-[20px] text-accent">+</span>
                </div>
                <span className="font-sora text-[12px] uppercase tracking-[1px] text-muted">
                  Jahre Erfahrung
                </span>
              </div>
              <div className="about-stat text-center">
                <div className="flex items-baseline justify-center">
                  <span
                    className="stat-number font-mono text-[36px] font-medium text-primary"
                    data-target="20"
                  >
                    0
                  </span>
                  <span className="font-mono text-[20px] text-accent">+</span>
                </div>
                <span className="font-sora text-[12px] uppercase tracking-[1px] text-muted">
                  Projekte
                </span>
              </div>
              <div className="about-stat text-center">
                <div className="flex items-baseline justify-center">
                  <span className="font-mono text-[20px] text-accent">&lt;</span>
                  <span
                    className="stat-number font-mono text-[36px] font-medium text-primary"
                    data-target="2"
                  >
                    0
                  </span>
                  <span className="font-mono text-[20px] text-accent">s</span>
                </div>
                <span className="font-sora text-[12px] uppercase tracking-[1px] text-muted">
                  Ladezeit Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
