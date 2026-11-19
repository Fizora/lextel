"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.07] bg-[#050505]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-330 items-center justify-between px-6 md:h-18 md:px-10"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full text-[15px] font-semibold tracking-[-0.03em] text-white outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#050505]"
        >
          Lumen
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-[13px] font-medium text-white/55 outline-none transition-colors duration-300 hover:bg-white/5 hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium leading-none text-[#050505] outline-none transition-colors duration-300 hover:bg-[#EDEDED] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] md:inline-flex"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#2A2A2A] bg-white/3 outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden"
        >
          <span
            className={`absolute h-px w-4 bg-white transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-0.75"
            }`}
          />
          <span
            className={`absolute h-px w-4 bg-white transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-0.75"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col px-6 pb-6 pt-2">
              {LINKS.map((link) => (
                <li key={link.href} className="border-t border-white/[0.07]">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-semibold tracking-[-0.04em] text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-[13px] font-medium leading-none text-[#050505]"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
