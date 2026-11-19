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
  LuArrowRight,
  LuArrowUpRight,
  LuCircleCheck,
  LuFolderGit2,
  LuLayers,
} from "react-icons/lu";

export default function Portfolio() {
  const { lang } = useLanguage();
  const content = portfolioContentByLang[lang];

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredItems =
    activeFilter === "all"
      ? content.items
      : content.items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-base font-medium mb-5">
              <LuFolderGit2 className="text-red-600 dark:text-red-400 shrink-0" />
              <span>{content.badge}</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-4">
              {content.titleMain}{" "}
              <span className="text-red-600 dark:text-red-500">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {content.filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-base font-semibold transition-all cursor-pointer ${
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

        {/* Grid Studi Kasus Portofolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800 overflow-hidden transition-all duration-200"
            >
              <div>
                {/* Preview Image Frame */}
                <Link
                  href={`/projects#${item.slug}`}
                  className="block border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden"
                >
                  {/* Browser Window Top Bar */}
                  <div className="px-3.5 py-2 bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-400" />
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="size-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-sans text-slate-400 truncate max-w-48">
                      {item.liveUrl
                        ? item.liveUrl.replace("https://", "")
                        : `lextel.app/${item.slug}`}
                    </span>
                    <span className="text-[10px] font-sans text-red-600 dark:text-red-400 font-medium">
                      PREVIEW
                    </span>
                  </div>

                  {/* Screenshot Container */}
                  <div className="relative aspect-video w-full bg-slate-200 dark:bg-slate-900 overflow-hidden">
                    <Image
                      src={item.previewImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-8 pb-0">
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-900/70 px-2.5 py-1 rounded-lg">
                      <LuLayers className="size-3.5" />
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs font-sans text-slate-500 dark:text-slate-400">
                      {item.client}
                    </span>
                  </div>

                  {/* Project Title (Georgia) */}
                  <h3 className="font-sans text-2xl font-bold text-slate-900 dark:text-white mb-5">
                    <Link
                      href={`/projects#${item.slug}`}
                      className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  {/* Structured Case Study Breakdown */}
                  <div className="space-y-4 font-sans text-base leading-relaxed mb-6">
                    <div>
                      <span className="block text-[11px] font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                        {content.labels.problem}
                      </span>
                      <p className="text-slate-600 dark:text-slate-300">
                        {item.problem}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-sans uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                        {content.labels.solution}
                      </span>
                      <p className="text-slate-700 dark:text-slate-200">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5 mb-6">
                    <LuCircleCheck className="text-red-600 dark:text-red-500 size-4 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-base">
                      <span className="font-semibold text-slate-900 dark:text-white mr-1.5">
                        {content.labels.impact}:
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: Tech Stack & Action Links */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="pt-5 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((techName, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-sans text-slate-600 dark:text-slate-400"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 shrink-0">
                    <Link
                      href={`/projects#${item.slug}`}
                      className="inline-flex items-center gap-1 text-xs sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      <span>{content.labels.viewDetail}</span>
                      <LuArrowRight className="size-3.5" />
                    </Link>

                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs sm:text-base font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      >
                        <span>{content.labels.viewDemo}</span>
                        <LuArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA ke Halaman /projects */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-base sm:text-base font-medium text-slate-700 dark:text-slate-200">
            {content.bottomCta.note}
          </p>
          <Link
            href={content.bottomCta.href}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-base font-semibold px-5 py-3 rounded-xl shadow-sm transition-colors shrink-0"
          >
            <span>{content.bottomCta.label}</span>
            <LuArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
