"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { supportContentByLang } from "@/app/const/page/Support";
import { LuChevronLeft, LuHeadphones, LuMail } from "react-icons/lu";

/* ── Inline SVG icons for the scope table ──────────────────────── */

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="mt-[3px] shrink-0 text-black dark:text-white"
    >
      <path
        d="M2.5 7.5L5.5 10.5L11.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="mt-[3px] shrink-0 text-black/30 dark:text-white/30"
    >
      <path
        d="M3 3L11 11M11 3L3 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function SupportPage() {
  const { lang } = useLanguage();
  const c = supportContentByLang[lang];

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white pt-32 pb-24 transition-colors">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        {/* ── Navigation Back ──────────────────────────────────── */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <LuChevronLeft className="size-3" />
          <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
        </Link>

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-16 border-b border-black/10 dark:border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
            <LuHeadphones className="size-3" />
            <span>{c.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            {c.title}
          </h1>
          <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60 max-w-[56ch]">
            {c.intro}
          </p>
          <p className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 uppercase mt-4">
            {c.lastUpdated}
          </p>
        </div>

        {/* ── Content ──────────────────────────────────────────── */}
        <div className="space-y-16">
          {/* ── How we work with clients ──────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                {c.howWeWorkLabel}
              </p>
              <p className="text-lg font-bold tracking-tight">
                {c.howWeWorkHeading}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {c.principles.map((p) => (
                <div
                  key={p.id}
                  className="border-t border-black/10 dark:border-white/10 pt-5 space-y-2"
                >
                  <h3 className="text-[14px] font-bold">{p.title}</h3>
                  {p.content.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-[13px] leading-relaxed text-black/60 dark:text-white/60"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* ── How a project proceeds ───────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                {c.projectFlowLabel}
              </p>
              <h2 className="text-lg font-bold tracking-tight">
                {c.projectFlowHeading}
              </h2>
              <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                {c.projectFlowSub}
              </p>
            </div>

            <ol className="relative ml-3 border-l border-black/10 dark:border-white/10 space-y-8">
              {c.steps.map((s, i) => {
                const last = i === c.steps.length - 1;
                return (
                  <li key={s.title} className="relative pl-8">
                    <span
                      aria-hidden
                      className={`absolute -left-[5px] top-1.5 size-2.5 border ${
                        last
                          ? "border-black dark:border-white bg-black dark:bg-white"
                          : "border-black/40 dark:border-white/40 bg-white dark:bg-[#050505]"
                      }`}
                    />
                    <p className="text-[10px] font-mono uppercase tracking-widest text-black/35 dark:text-white/35">
                      {lang === "id" ? `Langkah ${i + 1}` : `Step ${i + 1}`}
                    </p>
                    <h3 className="mt-1 text-[15px] font-bold">{s.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-black/60 dark:text-white/60 max-w-[56ch]">
                      {s.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* ── What support covers ──────────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                {c.supportScopeLabel}
              </p>
              <h2 className="text-lg font-bold tracking-tight">
                {c.supportScopeHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-black/10 dark:border-white/10">
              {/* Included */}
              <div className="p-6">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/70 dark:text-white/70">
                  {c.includedLabel}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {c.covered.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] leading-snug text-black/75 dark:text-white/75"
                    >
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quoted separately */}
              <div className="border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10 p-6">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                  {c.quotedLabel}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {c.notCovered.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] leading-snug text-black/50 dark:text-white/50"
                    >
                      <CrossIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[12px] leading-relaxed text-black/40 dark:text-white/40">
                  {c.quotedNote}
                </p>
              </div>
            </div>
          </section>

          {/* ── Get in touch ─────────────────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                {c.getInTouchLabel}
              </p>
              <h2 className="text-lg font-bold tracking-tight">
                {c.getInTouchHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Existing clients */}
              <div className="border border-black/10 dark:border-white/10 p-6 space-y-5">
                <span className="inline-block border border-black/20 dark:border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {c.existingClientsBadge}
                </span>
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                  {c.existingClientsText}
                </p>

                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-black/35 dark:text-white/35">
                    {c.includeLabel}
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {c.requestChecklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[12px] leading-snug text-black/65 dark:text-white/65"
                      >
                        <span className="mt-[6px] size-1 shrink-0 bg-black dark:bg-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Prospective clients */}
              <div className="border border-black/10 dark:border-white/10 p-6 space-y-5">
                <span className="inline-block border border-black/20 dark:border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {c.prospectiveClientsBadge}
                </span>
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                  {c.prospectiveClientsText}
                </p>
              </div>
            </div>
          </section>

          {/* ── Contact Box ──────────────────────────────────── */}
          <div className="mt-16 p-8 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[12px] font-medium text-black/70 dark:text-white/70">
              {c.contactText}
            </p>
            <a
              href={`mailto:${c.contactCta}`}
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black/80 dark:hover:bg-white/80 transition-colors shrink-0 rounded-none"
            >
              <LuMail className="size-3" />
              <span>{c.contactCta}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
