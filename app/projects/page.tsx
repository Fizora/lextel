"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangaugeContext";
import {
  portfolioContentByLang,
  ProjectCategory,
} from "@/app/const/landing/Portfolio";
import {
  LuArrowUpRight,
  LuChevronLeft,
  LuCircleCheck,
  LuFolderGit2,
  LuLayers,
  LuSlidersHorizontal,
} from "react-icons/lu";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const content = portfolioContentByLang[lang];

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredItems =
    activeFilter === "all"
      ? content.items
      : content.items.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Bar / Navigation Back */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-4">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <LuChevronLeft className="size-4" />
            <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>
          <div className="text-xs font-mono text-slate-400">
            Lexentify Systems Directory
          </div>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-5">
              <LuFolderGit2 className="text-red-600 dark:text-red-400 shrink-0" />
              <span>
                {lang === "id"
                  ? "Direktori Sistem & Studi Kasus"
                  : "System Directory & Case Studies"}
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
              {lang === "id"
                ? "Eksplorasi Detail Arsitektur & Logika Sistem"
                : "Explore System Architecture & Engineering Logic"}
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {lang === "id"
                ? "Halaman arsip komprehensif dari sistem operasional, portal web, dan infrastruktur digital yang kami bangun untuk mengeliminasi inefisiensi operasional."
                : "Comprehensive archival page of operational systems, web portals, and digital infrastructure built to eliminate operational friction."}
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 mr-2">
                <LuSlidersHorizontal className="size-3.5" />
                <span>{lang === "id" ? "Filter Kategori:" : "Filter:"}</span>
              </div>
              {content.filters.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Detailed List */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                id={item.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800 transition-all duration-200"
              >
                {/* Left Column: Preview Image / Browser Mockup */}
                <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                  {/* Browser Window Bar */}
                  <div className="px-3.5 py-2.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <span className="size-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-xs">
                      {item.liveUrl
                        ? item.liveUrl.replace("https://", "")
                        : `lextel.app/${item.slug}`}
                    </span>
                    <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold px-2 py-0.5 rounded bg-red-50 dark:bg-red-950">
                      SYSTEM PREVIEW
                    </span>
                  </div>

                  {/* Image Viewport */}
                  <div className="relative aspect-16/10 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <Image
                      src={item.previewImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Right Column: Detailed Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-900/70 px-2.5 py-1 rounded-lg">
                        <LuLayers className="size-3.5" />
                        {item.categoryLabel}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Client: {item.client}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {item.title}
                    </h2>

                    {/* Problem & Solution Stack */}
                    <div className="space-y-5 font-sans text-sm leading-relaxed mb-6">
                      <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold mb-1">
                          {content.labels.problem}
                        </span>
                        <p className="text-slate-600 dark:text-slate-300">
                          {item.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                          {content.labels.solution}
                        </span>
                        <p className="text-slate-700 dark:text-slate-200">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact Result Box */}
                    <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/50 flex items-start gap-3 mb-6">
                      <LuCircleCheck className="text-red-600 dark:text-red-500 size-5 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-0.5">
                          {content.labels.impact}
                        </span>
                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack & Actions */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((techName, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400"
                        >
                          {techName}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                        >
                          <span>{content.labels.viewDemo}</span>
                          <LuArrowUpRight className="size-4" />
                        </a>
                      )}
                      <Link
                        href="mailto:business@lexentify.com" // <-- Diubah
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-xl shadow-sm transition-colors"
                      >
                        <span>{content.labels.requestCaseStudy}</span>
                        <LuArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === "id"
              ? "Punya Kebutuhan Sistem Operasional Khusus?"
              : "Have a Custom Operational System Requirement?"}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base mb-8 max-w-2xl mx-auto">
            {lang === "id"
              ? "Mari diskusikan hambatan alur kerja di perusahaan Anda. Kami rancang arsitektur perangkat lunak yang presisi dan cepat diterapkan."
              : "Let's discuss your workflow bottlenecks. We engineer precise, fast-to-deploy software architectures."}
          </p>
          <Link
            href="mailto:business@lexentify.com" // <-- Diubah
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-colors text-base"
          >
            <span>
              {lang === "id"
                ? "Jadwalkan Konsultasi Sistem"
                : "Schedule System Consultation"}
            </span>
            <LuArrowUpRight className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
