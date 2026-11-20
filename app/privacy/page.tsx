"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { privacyContentByLang } from "@/app/const/page/Privacy";
import { LuChevronLeft, LuShieldCheck, LuMail } from "react-icons/lu";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const content = privacyContentByLang[lang];

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white pt-32 pb-24 transition-colors">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        {/* Navigation Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <LuChevronLeft className="size-3" />
          <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
        </Link>

        {/* Header */}
        <div className="mb-16 border-b border-black/10 dark:border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
            <LuShieldCheck className="size-3" />
            <span>{content.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
            {content.title}
          </h1>
          <p className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 uppercase">
            {content.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <p className="text-[13px] leading-relaxed font-medium bg-black/2 dark:bg-white/2 p-6 border border-black/10 dark:border-white/10">
            {content.intro}
          </p>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wider border-b border-black/10 dark:border-white/10 pb-2">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-[13px] leading-relaxed text-black/60 dark:text-white/60"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-16 p-8 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[12px] font-medium text-black/70 dark:text-white/70">
              {content.contactText}
            </p>
            <a
              href={`mailto:${content.contactCta}`}
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black/80 dark:hover:bg-white/80 transition-colors shrink-0 rounded-none"
            >
              <LuMail className="size-3" />
              <span>{content.contactCta}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
