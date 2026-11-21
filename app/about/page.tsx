"use client";

import { useLanguage } from "@/app/context/LangaugeContext";
import { aboutContentByLang } from "@/app/const/page/About";
import { LuArrowRight, LuBuilding } from "react-icons/lu";

const LEXENTIFY_URL = "https://lexentify.com";

function LinkifyBrand({ text }: { text: string }) {
  const parts = text.split(/(Lexentify)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "Lexentify" ? (
          <a
            key={i}
            href={LEXENTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black dark:text-white underline underline-offset-4 decoration-black/30 dark:decoration-white/30 hover:decoration-black dark:hover:decoration-white transition-colors"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = aboutContentByLang[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white pb-20 transition-colors duration-200">
      {/* Hero Section */}
      <section className="mx-auto max-w-360 px-6 md:px-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
            <LuBuilding className="size-3" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[0.95] mb-8">
            {t.titleMain} <br />
            <span className="text-black/30 dark:text-white/30">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 max-w-2xl">
            <LinkifyBrand text={t.subtitle} />
          </p>
        </div>

        {/* Key Metrics / Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 border border-black/10 dark:border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-black/10 dark:divide-white/10">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-mono font-bold tracking-tighter mb-4">
                {stat.value}
              </div>
              <div className="text-[12px] font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <p className="text-[11px] text-black/50 dark:text-white/50">
                <LinkifyBrand text={stat.sublabel} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="border-y border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a]">
        <div className="mx-auto max-w-360 px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 block mb-4">
                SISTER STUDIO OF LEXENTIFY
              </span>
              <h2 className="text-3xl font-bold uppercase tracking-tight leading-tight">
                {t.storyTitle}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[14px] leading-relaxed text-black/70 dark:text-white/70">
              {t.storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  <LinkifyBrand text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="mx-auto max-w-360 px-6 md:px-10 py-24">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="size-1.5 bg-black dark:bg-white" />
            <span>{t.principlesBadge}</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-tight leading-[1.05] mb-6">
            {t.principlesTitle}
          </h2>
          <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60">
            <LinkifyBrand text={t.principlesSubtitle} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10 dark:border-white/10 divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
          {t.principles.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 md:p-10 group hover:bg-black/2 dark:hover:bg-white/2 transition-colors"
              >
                <div className="size-12 border border-black/20 dark:border-white/20 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <IconComponent className="size-5" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                  <LinkifyBrand text={item.description} />
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sister Studio */}
      <section className="mx-auto max-w-360 px-6 md:px-10 pb-24">
        <div className="border border-black/10 dark:border-white/10">
          <div className="p-8 md:p-12 border-b border-black/10 dark:border-white/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="size-1.5 bg-black dark:bg-white" />
                <span>{t.sisterStudio.badge}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05] mb-4">
                {t.sisterStudio.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60">
                <LinkifyBrand text={t.sisterStudio.description} />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
            <div className="p-8 md:p-10">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                {t.sisterStudio.lextelName}
              </h3>
              <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                <LinkifyBrand text={t.sisterStudio.lextelDesc} />
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                <span className="size-1.5 bg-black dark:bg-white" />
                {t.sisterStudio.lextelHere}
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                  {t.sisterStudio.lexentifyName}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                  <LinkifyBrand text={t.sisterStudio.lexentifyDesc} />
                </p>
              </div>
              <a
                href={t.sisterStudio.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start border border-black dark:border-white px-5 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                <span>{t.sisterStudio.cta.label}</span>
                <LuArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
