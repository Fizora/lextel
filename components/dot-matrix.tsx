"use client";

import { useEffect, useRef } from "react";

type Props = { className?: string };

/**
 * Generative dot-matrix light-wave.
 * - Warm amber / burnt-orange / soft-white particle field
 * - Sharp vertical "lumen" beam that tracks the cursor and breathes
 * - Pointer ripple that distorts the wave field locally
 */
export default function DotMatrix({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let time = 0;
    let last = performance.now();

    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: false, ready: false };
    const beam = { x: 0, tx: 0 };

    /* ---------- precomputed colour + radius lookup table ---------- */
    type Entry = { color: string; radius: number };
    const LUT: Entry[] = [];
    for (let i = 0; i < 64; i++) {
      const t = i / 63;
      const ct = Math.min(1, Math.pow(t, 1.1) * 1.08);

      let r: number, g: number, b: number;
      if (ct < 0.5) {
        const k = ct / 0.5; // burnt orange -> amber
        r = 255;
        g = 106 + (168 - 106) * k;
        b = 26 + (66 - 26) * k;
      } else {
        const k = (ct - 0.5) / 0.5; // amber -> soft white
        r = 255;
        g = 168 + (240 - 168) * k;
        b = 66 + (214 - 66) * k;
      }

      const a = 0.04 + Math.pow(t, 1.6) * 0.96;
      LUT.push({
        color: `rgba(${r | 0},${g | 0},${b | 0},${a.toFixed(3)})`,
        radius: 0.8 + Math.pow(t, 2.1) * 1.9,
      });
    }

    /* ----------------------------- sizing ----------------------------- */
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!beam.x) {
        beam.x = beam.tx = width * 0.64;
        pointer.x = pointer.tx = width * 0.5;
        pointer.y = pointer.ty = height * 0.4;
      }
    };

    /* ---------------------------- pointer ----------------------------- */
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const outside =
        x < -180 || y < -180 || x > rect.width + 180 || y > rect.height + 180;

      if (outside) {
        pointer.active = false;
        return;
      }

      pointer.tx = x;
      pointer.ty = y;
      pointer.active = true;

      if (!pointer.ready) {
        pointer.x = x;
        pointer.y = y;
        pointer.ready = true;
      }

      // beam keeps a margin so it never dies against the edges
      beam.tx = Math.min(width * 0.9, Math.max(width * 0.1, x));
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    /* ------------------------------ draw ------------------------------ */
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      if (!width || !height) return;

      const spacing = width < 640 ? 21 : 17;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      beam.x += (beam.tx - beam.x) * 0.065;
      pointer.x += (pointer.tx - pointer.x) * 0.1;
      pointer.y += (pointer.ty - pointer.y) * 0.1;

      const breathe = 0.84 + 0.16 * Math.sin(time * 1.45);

      for (let row = 0; row < rows; row++) {
        const y = row * spacing + spacing * 0.5;

        for (let col = 0; col < cols; col++) {
          const x = col * spacing + spacing * 0.5;

          // slow travelling interference field
          const wave =
            Math.sin(x * 0.0115 + time * 0.72) *
              Math.cos(y * 0.0135 - time * 0.52) *
              0.55 +
            Math.sin((x + y) * 0.0068 - time * 0.88) * 0.45;

          let intensity = 0.075 + wave * 0.125;

          // vertical light beam (gaussian falloff around beam.x)
          const dxb = x - beam.x;
          intensity += Math.exp(-(dxb * dxb) / 11500) * 0.95 * breathe;

          // cursor ripple
          if (pointer.active) {
            const pdx = x - pointer.x;
            const pdy = y - pointer.y;
            const d2 = pdx * pdx + pdy * pdy;
            intensity += Math.exp(-d2 / 46000) * 0.5;
          }

          if (intensity <= 0.015) continue;

          if (intensity > 1) intensity = 1;

          const idx = (intensity * 63) | 0;
          const entry = LUT[idx];

          ctx.fillStyle = entry.color;
          ctx.beginPath();
          ctx.arc(x, y, entry.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt;

      if (!pointer.active) {
        beam.tx = width * (0.63 + Math.sin(time * 0.32) * 0.07);
      }

      render();
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    if (reduced) {
      render(); // single static frame
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`dot-mask h-full w-full ${className}`}
    />
  );
}
