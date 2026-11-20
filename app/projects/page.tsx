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
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-200">
      {/* Header Section */}
      <section className="py-24 md:py-32 border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-360 px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
              <LuFolderGit2 className="size-3" />
              <span>
                {lang === "id"
                  ? "Direktori Sistem & Studi Kasus"
                  : "System Directory & Case Studies"}
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase tracking-tighter leading-[0.95] mb-8">
              {lang === "id"
                ? "Eksplorasi Detail Arsitektur & Logika Sistem"
                : "Explore System Architecture & Engineering Logic"}
            </h1>

            <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 mb-12">
              {lang === "id"
                ? "Halaman arsip komprehensif dari sistem operasional, portal web, dan infrastruktur digital yang kami bangun untuk mengeliminasi inefisiensi operasional."
                : "Comprehensive archival page of operational systems, web portals, and digital infrastructure built to eliminate operational friction."}
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mr-2">
                <LuSlidersHorizontal className="size-3" />
                <span>Filter:</span>
              </div>
              {content.filters.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer border rounded-none ${
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
        </div>
      </section>

      {/* Projects Detailed List */}
      <section className="py-24">
        <div className="mx-auto max-w-360 px-6 md:px-10 space-y-16">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              id={item.slug}
              className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black/10 dark:border-white/10 bg-white dark:bg-[#050505]"
            >
              {/* Left Column: Preview Image */}
              <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10">
                <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-black/2 dark:bg-white/2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
                    <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
                    <span className="size-2 bg-black/20 dark:bg-white/20 rounded-none" />
                  </div>
                  <span className="text-[9px] font-mono text-black/40 dark:text-white/40 truncate max-w-xs">
                    {item.liveUrl
                      ? item.liveUrl.replace("https://", "")
                      : `lextel.app/${item.slug}`}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest">
                    Preview
                  </span>
                </div>
                <div className="relative aspect-video w-full bg-black/5 dark:bg-white/5 overflow-hidden">
                  <Image
                    src={item.previewImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Detailed Breakdown */}
              <div className="lg:col-span-6 flex flex-col justify-between p-8 md:p-10">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-2 py-1">
                      <LuLayers className="size-3" />
                      {item.categoryLabel}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-black/40 dark:text-white/40">
                      CLIENT: {item.client}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">
                    {item.title}
                  </h2>

                  <div className="space-y-6 text-[13px] leading-relaxed mb-10">
                    <div className="border-l border-black/20 dark:border-white/20 pl-4">
                      <span className="block text-[9px] uppercase tracking-widest font-bold mb-2">
                        {content.labels.problem}
                      </span>
                      <p className="text-black/60 dark:text-white/60">
                        {item.problem}
                      </p>
                    </div>
                    <div className="border-l border-black/20 dark:border-white/20 pl-4">
                      <span className="block text-[9px] uppercase tracking-widest font-bold mb-2">
                        {content.labels.solution}
                      </span>
                      <p className="text-black/60 dark:text-white/60">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border border-black/20 dark:border-white/20 bg-black/2 dark:bg-white/2 flex items-start gap-3">
                    <LuCircleCheck className="size-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] font-bold uppercase tracking-widest mb-1">
                        {content.labels.impact}
                      </span>
                      <p className="text-[12px]">{item.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((techName, idx) => (
                      <span
                        key={idx}
                        className="border border-black/10 dark:border-white/10 px-2 py-1 text-[9px] font-mono tracking-widest uppercase"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-black/50 dark:hover:text-white/50 transition-colors"
                      >
                        <span>{content.labels.viewDemo}</span>
                        <LuArrowUpRight className="size-3" />
                      </a>
                    )}
                    <Link
                      href="mailto:business@lexentify.com"
                      className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-black/80 dark:hover:bg-white/80 transition-colors rounded-none"
                    >
                      <span>{content.labels.requestCaseStudy}</span>
                      <LuArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="py-24 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#050505]">
        <div className="mx-auto max-w-360 px-6 md:px-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 max-w-3xl">
            {lang === "id"
              ? "Punya Kebutuhan Sistem Operasional Khusus?"
              : "Have a Custom Operational System Requirement?"}
          </h2>
          <p className="text-[14px] text-black/60 dark:text-white/60 mb-10 max-w-xl">
            {lang === "id"
              ? "Mari diskusikan hambatan alur kerja di perusahaan Anda. Kami rancang arsitektur perangkat lunak yang presisi dan cepat diterapkan."
              : "Let's discuss your workflow bottlenecks. We engineer precise, fast-to-deploy software architectures."}
          </p>
          <Link
            href="mailto:business@lexentify.com"
            className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-black/80 dark:hover:bg-white/80 transition-colors rounded-none"
          >
            <span>
              {lang === "id"
                ? "Jadwalkan Konsultasi Sistem"
                : "Schedule System Consultation"}
            </span>
            <LuArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
