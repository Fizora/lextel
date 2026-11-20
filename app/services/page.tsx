"use client";

import { useEffect } from "react";
import { useLanguage } from "@/app/context/LangaugeContext";
import Link from "next/link";
import {
  LuCircleCheck,
  LuArrowRight,
  LuShieldCheck,
  LuLayers,
} from "react-icons/lu";
import { servicesContentByLang } from "@/app/const/page/Services";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = servicesContentByLang[lang];

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };
    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash);
    return () => window.removeEventListener("hashchange", handleScrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-black dark:text-white pt-32 pb-24 transition-colors">
      {/* Hero Section */}
      <section className="mx-auto max-w-360 px-6 md:px-10 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
            <LuLayers className="size-3" />
            <span>{t.badge}</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-tighter leading-[0.95] mb-8">
            {t.title}
          </h1>
          <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 max-w-2xl mb-12">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:business@lexentify.com"
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white border border-black dark:border-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-none"
            >
              <span>{t.ctaPrimary}</span>
              <LuArrowRight className="size-4" />
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-none"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="mx-auto max-w-360 px-6 md:px-10 py-12 border-t border-black/10 dark:border-white/10">
        <div className="space-y-0 border border-black/10 dark:border-white/10 divide-y divide-black/10 dark:divide-white/10">
          {t.services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
                  <div className="w-12 h-12 border border-black/20 dark:border-white/20 flex items-center justify-center mb-8 bg-white dark:bg-[#050505]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 block mb-2">
                    {service.tagline}
                  </span>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60 mb-10">
                    {service.description}
                  </p>

                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-3 mb-4">
                      {lang === "id"
                        ? "Fitur Utama & Ruang Lingkup:"
                        : "Key Features & Scope:"}
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[12px] text-black/70 dark:text-white/70"
                        >
                          <LuCircleCheck className="size-4 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 md:p-12 bg-black/2 dark:bg-white/2 flex flex-col justify-between">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-4">
                        {lang === "id"
                          ? "Teknologi & Stack Utama"
                          : "Core Tech & Stack"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((techItem, idx) => (
                          <span
                            key={idx}
                            className="border border-black/20 dark:border-white/20 px-3 py-1.5 text-[10px] font-mono tracking-widest"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 border border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] text-[12px] font-medium leading-relaxed">
                      {service.target}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="mailto:business@lexentify.com"
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:text-black/50 dark:hover:text-white/50 transition-colors"
                    >
                      <span>
                        {lang === "id"
                          ? "Mulai Konsultasi Layanan Ini"
                          : "Consult This Service"}
                      </span>
                      <LuArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Methodology Section */}
      <section
        id="maintenance"
        className="mx-auto max-w-360 px-6 md:px-10 py-24 border-t border-black/10 dark:border-white/10"
      >
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
            {t.processTitle}
          </h2>
          <p className="text-[14px] text-black/60 dark:text-white/60">
            {t.processSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border border-black/10 dark:border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-black/10 dark:divide-white/10">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 md:p-12 flex flex-col justify-between group hover:bg-black/2 dark:hover:bg-white/2 transition-colors"
            >
              <div>
                <div className="text-4xl font-mono font-bold text-black/20 dark:text-white/20 mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60">
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-black/10 dark:border-white/10 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                <LuShieldCheck className="size-3" />
                <span>Standardized Workflow</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
