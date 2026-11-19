"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const EMAIL = "hello@lumen.dev";

const COLUMNS = [
  {
    title: "Studio",
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web & Mobile Apps", href: "#services" },
      { label: "Custom ERP & Systems", href: "#services" },
      { label: "UI/UX Engineering", href: "#services" },
      { label: "Cloud Architecture", href: "#services" },
    ],
  },
  {
    title: "Connect",
    external: true,
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
    ],
  },
];

const linkClass =
  "inline-block rounded text-[14px] text-white/55 outline-none transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/50";

const subscribe = () => () => {};

function useCurrentYear() {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );
}

export default function Footer() {
  const year = useCurrentYear();

  return (
    <footer className="relative z-10 overflow-hidden border-b border-[#222222] bg-[#050505]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="max-w-sm text-[22px] font-medium leading-tight tracking-[-0.02em] text-white md:text-[26px]">
              Custom software, engineered with clarity.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2A] bg-white/3 px-5 py-3 text-[13px] font-medium leading-none text-white/75 outline-none transition-all duration-300 hover:border-white/25 hover:bg-white/6 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {EMAIL}
              <span className="h-1 w-1 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-150" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="flex items-center gap-2 font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
                  <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
                  {col.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {col.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bar bawah */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/[0.07] py-6 text-[12.5px] text-white/40 md:mt-20 sm:flex-row sm:items-center">
          <p>© {year} Lumen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="rounded outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="rounded outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded text-white/60 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Back to top
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <path
                  d="M7 12V2M7 2L3 6M7 2L11 6"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Wordmark besar ───────────────────────────────────── */}
      <div className="flex items-end justify-center overflow-hidden px-[1vw] pt-6 md:pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="select-none whitespace-nowrap text-center text-[clamp(2.75rem,31.5vw,40rem)] font-extrabold leading-[0.74] tracking-[-0.055em] text-white"
        >
          Lumen
          <span className="ml-[0.02em] align-top text-[0.2em] font-semibold tracking-normal text-white/55">
            ™
          </span>
        </motion.h2>
      </div>
    </footer>
  );
}
