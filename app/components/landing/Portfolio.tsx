"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import {
  portfolioContentByLang,
  ProjectCategory,
} from "@/app/const/landing/Portfolio";
import ImageSlider from "@/app/components/ImageSlider";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuCircleCheck,
  LuFolderGit2,
  LuLayers,
} from "react-icons/lu";
import { FaGooglePlay } from "react-icons/fa";

export default function Portfolio() {
  const { lang } = useLanguage();
  const content = portfolioContentByLang[lang];
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  // Sembunyikan filter yang tidak punya proyek
  const visibleFilters = content.filters.filter(
    (f) =>
      f.key === "all" || content.items.some((item) => item.category === f.key),
  );

  const filteredItems =
    activeFilter === "all"
      ? content.items
      : content.items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 text-black dark:text-white transition-colors duration-200"
    >
      <div className="mx-auto max-w-360 px-6 md:px-10">
        {/* Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60 mb-6">
              <LuFolderGit2 className="size-3" />
              <span>{content.badge}</span>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-tight leading-[1.05] mb-6">
              {content.titleMain} <br />
              <span className="text-black/30 dark:text-white/30">
                {content.titleHighlight}
              </span>
            </h2>

            <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60">
              {content.description}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {visibleFilters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-colors cursor-pointer border rounded-none ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                      : "bg-transparent text-black/60 dark:text-white/60 border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between border border-black/10 dark:border-white/10 bg-transparent hover:border-black/30 dark:hover:border-white/30 transition-colors duration-200"
            >
              <div>
                {/* Preview: slider otomatis */}
                <div className="border-b border-black/10 dark:border-white/10 overflow-hidden">
                  <ImageSlider
                    images={item.images}
                    liveUrl={item.liveUrl}
                    href={`/projects#${item.slug}`}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-2 py-1">
                      <LuLayers className="size-3" />
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-black/50 dark:text-white/50 font-bold">
                      {item.client}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">
                    <Link
                      href={`/projects#${item.slug}`}
                      className="hover:text-black/60 dark:hover:text-white/60 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>

                  {/* Breakdown */}
                  <div className="space-y-5 text-[13px] leading-relaxed mb-6">
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1.5">
                        {content.labels.problem}
                      </span>
                      <p className="text-black/70 dark:text-white/70">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-1.5">
                        {content.labels.solution}
                      </span>
                      <p className="text-black/70 dark:text-white/70">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Box */}
                  <div className="p-4 border border-black/10 dark:border-white/10 flex items-start gap-3">
                    <LuCircleCheck className="text-black dark:text-white size-4 shrink-0 mt-0.5" />
                    <div className="text-[12px]">
                      <span className="font-bold uppercase tracking-wider mr-2">
                        {content.labels.impact}:
                      </span>
                      <span className="text-black/70 dark:text-white/70">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: Tech Stack & Action */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((techName) => (
                      <span
                        key={techName}
                        className="px-2.5 py-1 border border-black/10 dark:border-white/10 text-[9px] font-mono uppercase tracking-widest"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 shrink-0">
                    <Link
                      href={`/projects#${item.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-black/60 dark:hover:text-white/60 transition-colors"
                    >
                      <span>{content.labels.viewDetail}</span>
                      <LuArrowRight className="size-3" />
                    </Link>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-black/60 dark:hover:text-white/60 transition-colors"
                      >
                        <span>{content.labels.viewDemo}</span>
                        <LuArrowUpRight className="size-3" />
                      </a>
                    )}
                    {item.playStoreUrl && (
                      <a
                        href={item.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-colors rounded-none"
                      >
                        <FaGooglePlay className="size-3" />
                        <span>{content.labels.viewPlayStore}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[13px] font-medium text-black/70 dark:text-white/70 max-w-xl">
            {content.bottomCta.note}
          </p>
          <Link
            href={content.bottomCta.href}
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white border border-black dark:border-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors shrink-0 rounded-none"
          >
            <span>{content.bottomCta.label}</span>
            <LuArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
