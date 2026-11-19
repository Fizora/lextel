"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship a first working version in 8 to 12 weeks. Larger systems such as ERPs are delivered in phases, so your team is using real software well before the full scope is finished.",
  },
  {
    q: "How do you price a project?",
    a: "Well-defined scopes are quoted at a fixed price. Ongoing product work runs on a monthly retainer. After discovery you receive a written estimate that lists every deliverable, so there are no surprises later.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Source code, documentation and infrastructure access are handed over to you at launch. You are never locked in to Lumen.",
  },
  {
    q: "Can you work with our existing systems or team?",
    a: "Yes. We integrate with the tools you already use, and we can work inside your repositories and alongside your engineers as an extension of your team.",
  },
  {
    q: "What happens after launch?",
    a: "We offer maintenance plans that cover monitoring, fixes, updates and new features. Support is optional, but most clients keep it because the system keeps evolving with their business.",
  },
  {
    q: "Which technologies do you use?",
    a: "We choose the stack that fits the problem, not the other way around. Usually that means Next.js, TypeScript, Node.js, PostgreSQL and AWS, and we explain the trade-offs before anything is decided.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 w-full scroll-mt-20 bg-[#050505] px-6 pb-24 pt-8 md:px-10 md:pb-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ── Intro (menempel saat scroll di desktop) ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
            <span className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
              FAQ
            </span>
          </div>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
            Questions before we start.
          </h2>
          <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/45">
            Can&apos;t find yours? Write to us and a real person will reply.
          </p>
          <a
            href="mailto:hello@lumen.dev"
            className="mt-6 inline-flex items-center gap-2 rounded-full text-[13px] font-medium text-white outline-none transition-colors hover:text-[#FF5A1F] focus-visible:text-[#FF5A1F]"
          >
            <span className="h-1 w-1 rounded-full bg-[#FF7A1A]" />
            hello@lumen.dev
          </a>
        </motion.div>

        <ul className="border-b border-white/8 lg:col-span-8">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-t border-white/8">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left outline-none focus-visible:text-[#FF5A1F] md:py-7"
                  >
                    <span
                      className={`text-[19px] font-medium leading-snug tracking-[-0.02em] transition-colors duration-300 md:text-[24px] ${
                        isOpen
                          ? "text-white"
                          : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {item.q}
                    </span>

                    <span
                      aria-hidden
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#FF5A1F] text-[#FF5A1F]"
                          : "border-white/15 text-white/60 group-hover:border-white/40"
                      }`}
                    >
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span
                        className={`absolute h-3.5 w-px bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-[14.5px] leading-relaxed text-white/50 md:pb-8">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
