"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { privacyContentByLang } from "@/app/const/page/Privacy";
import { LuChevronLeft, LuShieldCheck, LuMail } from "react-icons/lu";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const content = privacyContentByLang[lang];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-24 transition-colors">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors mb-10"
        >
          <LuChevronLeft className="size-4" />
          <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <LuShieldCheck className="size-4" />
            <span>{content.badge}</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {content.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            {content.intro}
          </p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.id} className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {content.contactText}
            </p>
            <a
              href={`mailto:${content.contactCta}`}
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-200 text-white dark:text-slate-900 font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0 shadow-sm"
            >
              <LuMail className="size-4" />
              <span>{content.contactCta}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
