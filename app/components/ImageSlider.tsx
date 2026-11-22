"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PortfolioImage } from "@/app/const/landing/Portfolio";

interface ImageSliderProps {
  images: PortfolioImage[];
  href?: string;
  liveUrl?: string;
  interval?: number;
}

export default function ImageSlider({
  images,
  href,
  liveUrl,
  interval = 4000,
}: ImageSliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [active, hasMultiple, paused, images.length, interval]);

  const main = (
    <>
      <div className="px-4 py-2.5 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
          <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
          <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
        </div>

        {liveUrl ? (
          <span className="text-[9px] font-mono text-black/40 dark:text-white/40 truncate max-w-48">
            {liveUrl.replace(/^https?:\/\//, "")}
          </span>
        ) : (
          <span />
        )}

        <span className="text-[9px] font-bold uppercase tracking-widest text-black dark:text-white shrink-0">
          {hasMultiple ? `${active + 1}/${images.length}` : "PREVIEW"}
        </span>
      </div>

      <div className="relative aspect-video w-full bg-black/5 dark:bg-white/5 overflow-hidden">
        {images.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={idx === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/80 dark:bg-black/70 backdrop-blur-sm pointer-events-none">
            {images.map((img, idx) => (
              <span
                key={img.src}
                className={`h-1.5 transition-all duration-300 ${
                  idx === active
                    ? "w-5 bg-black dark:bg-white"
                    : "w-1.5 bg-black/30 dark:bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {href ? (
        <Link href={href} className="block">
          {main}
        </Link>
      ) : (
        <div>{main}</div>
      )}

      {hasMultiple && (
        <div className="flex gap-2 p-3 overflow-x-auto border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
          {images.map((img, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Tampilkan gambar ${idx + 1}`}
                aria-current={isActive}
                className={`relative z-10 shrink-0 aspect-video w-24 sm:w-28 overflow-hidden border-2 transition-all cursor-pointer rounded-none ${
                  isActive
                    ? "border-black dark:border-white opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="112px"
                  className="object-cover object-top pointer-events-none"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
