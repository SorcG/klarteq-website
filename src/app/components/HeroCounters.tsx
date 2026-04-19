'use client';

import { useEffect, useState } from 'react';
import { Zap, Gauge, Smartphone, type LucideIcon } from 'lucide-react';

interface Counter {
  icon: LucideIcon;
  target: number;
  duration: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const COUNTERS: Counter[] = [
  { icon: Zap, target: 2, duration: 1000, prefix: '< ', suffix: 's', label: 'Ladezeit' },
  { icon: Gauge, target: 90, duration: 1200, suffix: '+', label: 'Lighthouse' },
  { icon: Smartphone, target: 100, duration: 1400, suffix: '%', label: 'mobil' },
];

export default function HeroCounters({ active = false }: { active?: boolean }) {
  const [values, setValues] = useState<number[]>(() => COUNTERS.map(() => 0));

  useEffect(() => {
    if (!active) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValues(COUNTERS.map((c) => c.target));
      return;
    }

    const rafIds: number[] = [];
    COUNTERS.forEach((counter, idx) => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / counter.duration, 1);
        const val = Math.floor(progress * counter.target);
        setValues((prev) => {
          if (prev[idx] === val) return prev;
          const next = [...prev];
          next[idx] = val;
          return next;
        });
        if (progress < 1) {
          rafIds[idx] = requestAnimationFrame(tick);
        } else {
          setValues((prev) => {
            const next = [...prev];
            next[idx] = counter.target;
            return next;
          });
        }
      };
      rafIds[idx] = requestAnimationFrame(tick);
    });

    return () => rafIds.forEach((id) => cancelAnimationFrame(id));
  }, [active]);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      {COUNTERS.map(({ icon: Icon, prefix = '', suffix, label }, idx) => (
        <div key={label} className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px]"
            style={{ backgroundColor: 'rgba(91,140,111,0.08)' }}
            aria-hidden="true"
          >
            <Icon size={18} style={{ color: '#374151' }} />
          </span>
          <span className="flex items-baseline gap-2">
            <span className="font-mono text-[18px] font-medium text-primary">
              {prefix}
              {values[idx]}
              {suffix}
            </span>
            <span className="font-sora text-[12px] text-muted">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
