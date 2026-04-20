'use client';

import { useEffect, useRef } from 'react';

const BASE      = [250, 250, 247] as const;
const HIGHLIGHT = [232, 240, 235] as const;
const SAGE      = [ 91, 140, 111] as const;
const DEEP_SAGE = [ 74, 122,  94] as const;

type Color = readonly [number, number, number];

interface Point {
  color: Color;
  cx: number; cy: number;
  ax: number; ay: number;
  px: number; py: number;
  phx: number; phy: number;
  r: number;
  rWob: number; rPer: number; rPh: number;
  iBase: number; iWob: number; iPer: number; iPh: number;
}

const POINTS: Point[] = [
  { color: SAGE,      cx: 0.72, cy: 0.28, ax: 0.28, ay: 0.22, px: 22, py: 18, phx: 0.0, phy: 1.3, r: 0.55, rWob: 0.06, rPer: 11, rPh: 0.4, iBase: 0.85, iWob: 0.15, iPer: 17, iPh: 0.8 },
  { color: DEEP_SAGE, cx: 0.22, cy: 0.78, ax: 0.24, ay: 0.20, px: 25, py: 19, phx: 2.1, phy: 0.6, r: 0.45, rWob: 0.05, rPer: 13, rPh: 1.7, iBase: 0.70, iWob: 0.20, iPer: 21, iPh: 0.0 },
  { color: HIGHLIGHT, cx: 0.40, cy: 0.35, ax: 0.30, ay: 0.26, px: 18, py: 23, phx: 3.6, phy: 2.9, r: 0.48, rWob: 0.07, rPer: 15, rPh: 2.3, iBase: 0.95, iWob: 0.05, iPer: 19, iPh: 1.1 },
  { color: SAGE,      cx: 0.80, cy: 0.82, ax: 0.22, ay: 0.24, px: 20, py: 17, phx: 1.2, phy: 3.4, r: 0.50, rWob: 0.06, rPer: 12, rPh: 0.9, iBase: 0.75, iWob: 0.18, iPer: 23, iPh: 2.2 },
  { color: DEEP_SAGE, cx: 0.55, cy: 0.62, ax: 0.26, ay: 0.18, px: 24, py: 21, phx: 4.5, phy: 1.8, r: 0.42, rWob: 0.05, rPer: 14, rPh: 3.1, iBase: 0.60, iWob: 0.22, iPer: 16, iPh: 0.5 },
];

function rgba(c: Color, a: number) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
}

function oscil(t: number, period: number, phase: number) {
  return Math.sin((t / period) * Math.PI * 2 + phase);
}

export default function HeroMeshBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, D = 0, DPR = 1;
    let rafId = 0;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      D = Math.hypot(W, H);
      canvas!.width  = Math.floor(W * DPR);
      canvas!.height = Math.floor(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    const start = performance.now();

    function frame(now: number) {
      const t = reduced ? 0 : (now - start) / 1000;

      ctx!.globalCompositeOperation = 'source-over';
      ctx!.fillStyle = `rgb(${BASE[0]},${BASE[1]},${BASE[2]})`;
      ctx!.fillRect(0, 0, W, H);

      for (const p of POINTS) {
        const x      = (p.cx + p.ax * oscil(t, p.px, p.phx)) * W;
        const y      = (p.cy + p.ay * oscil(t, p.py, p.phy)) * H;
        const radius = Math.max(1, (p.r + p.rWob * oscil(t, p.rPer, p.rPh)) * D);
        const intensity = Math.max(0, Math.min(1, p.iBase + p.iWob * oscil(t, p.iPer, p.iPh)));
        const peak = 0.55 * intensity;

        const g = ctx!.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0.00, rgba(p.color, peak));
        g.addColorStop(0.35, rgba(p.color, peak * 0.55));
        g.addColorStop(0.70, rgba(p.color, peak * 0.15));
        g.addColorStop(1.00, rgba(p.color, 0));

        ctx!.fillStyle = g;
        ctx!.fillRect(0, 0, W, H);
      }

      const sweep = ctx!.createRadialGradient(
        W * (0.15 + 0.05 * oscil(t, 30, 0)),
        H * (0.10 + 0.05 * oscil(t, 34, 1)),
        0,
        W * 0.15, H * 0.10,
        D * 0.7,
      );
      sweep.addColorStop(0, rgba(HIGHLIGHT, 0.35));
      sweep.addColorStop(1, rgba(HIGHLIGHT, 0));
      ctx!.fillStyle = sweep;
      ctx!.fillRect(0, 0, W, H);

      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
