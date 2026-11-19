"use client";

import { useEffect } from "react"; // <-- Tambahkan import useEffect
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

  // FUNGSI UNTUK MEMAKSA SCROLL KE ID SAAT DIKLIK DARI FOOTER
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Delay sedikit agar komponen selesai di-render oleh React
        setTimeout(() => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    // Jalankan saat halaman pertama dimuat
    handleScrollToHash();

    // Jalankan juga jika URL hash berubah (misal klik link di halaman yang sama)
    window.addEventListener("hashchange", handleScrollToHash);
    return () => window.removeEventListener("hashchange", handleScrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-20 transition-colors">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-red-200 dark:border-red-900">
          <LuLayers className="text-sm" />
          <span>{t.badge}</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
          {t.title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="mailto:business@lexentify.com"
            className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-medium text-sm transition-colors shadow-lg shadow-red-700/20 flex items-center gap-2"
          >
            <span>{t.ctaPrimary}</span>
            <LuArrowRight />
          </Link>
          <Link
            href="/#portfolio"
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium text-sm transition-colors"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16 lg:space-y-24">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                id={service.id} // <-- ID PASTI ADA DI SINI
                className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:col-span-6 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/50 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {service.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight mt-1">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                      {lang === "id"
                        ? "Fitur Utama & Ruang Lingkup:"
                        : "Key Features & Scope:"}
                    </h3>
                    <ul className="space-y-2.5">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <LuCircleCheck className="text-red-600 dark:text-red-400 shrink-0 mt-0.5 text-base" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      {lang === "id"
                        ? "Teknologi & Stack Utama"
                        : "Core Tech & Stack"}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((techItem, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-sm sm:text-base text-red-900 dark:text-red-200 font-medium">
                    {service.target}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="mailto:business@lexentify.com"
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                    >
                      <span>
                        {lang === "id"
                          ? "Mulai Konsultasi Layanan Ini"
                          : "Consult This Service"}
                      </span>
                      <LuArrowRight className="text-xs" />
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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-slate-200 dark:border-slate-800"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight">
            {t.processTitle}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t.processSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-sans font-bold text-red-600 dark:text-red-400 opacity-80 mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold font-sans mb-2">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase">
                <LuShieldCheck className="text-red-600" />
                <span>Standardized Workflow</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
