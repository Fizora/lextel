"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { aboutContentByLang } from "@/app/const/page/About";
import { LuArrowRight, LuBuilding } from "react-icons/lu";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = aboutContentByLang[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20 transition-colors duration-200">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-6">
            <LuBuilding className="text-red-600 dark:text-red-400 shrink-0" />
            <span>{t.badge}</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            {t.titleMain}{" "}
            <span className="text-red-600 dark:text-red-500">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Key Metrics / Stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800"
            >
              <div className="font-sans text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-500 mb-2">
                {stat.value}
              </div>
              <div className="font-sans text-lg font-bold text-slate-900 dark:text-white">
                {stat.label}
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                LEXTEL BY LEXENTIFY
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2 leading-tight">
                {t.storyTitle}
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.storyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-5">
            <span className="size-1.5 rounded-full bg-red-600 dark:bg-red-400" />
            <span>{t.principlesBadge}</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {t.principlesTitle}
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.principlesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.principles.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800 transition-colors"
              >
                <div className="size-12 rounded-xl bg-red-50 dark:bg-red-950/70 border border-red-100 dark:border-red-900/60 text-red-600 dark:text-red-400 flex items-center justify-center mb-5">
                  <IconComponent className="size-6" />
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-red-800 dark:bg-red-950 border border-red-700 dark:border-red-900 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight">
              {t.ctaTitle}
            </h2>
            <p className="font-sans text-sm sm:text-base text-red-100 leading-relaxed">
              {t.ctaDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href={t.ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-red-50 text-red-800 font-semibold px-6 py-3.5 rounded-xl transition-colors"
            >
              <span>{t.ctaPrimary.label}</span>
              <LuArrowRight className="size-4" />
            </Link>
            <Link
              href={t.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 bg-red-900/70 hover:bg-red-900 text-white font-semibold px-6 py-3.5 rounded-xl border border-red-600/70 transition-colors"
            >
              <span>{t.ctaSecondary.label}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
