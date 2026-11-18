"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { servicesContentByLang } from "@/app/const/landing/Services";
import {
  LuLayers,
  LuCode,
  LuGlobe,
  LuShieldCheck,
  LuCircleCheck,
  LuArrowUpRight,
  LuArrowRight,
} from "react-icons/lu";

const iconMap: Record<string, React.ReactNode> = {
  "ops-system": <LuLayers className="size-5" />,
  "web-app": <LuCode className="size-5" />,
  "company-profile": <LuGlobe className="size-5" />,
  maintenance: <LuShieldCheck className="size-5" />,
};

export default function Services() {
  const { lang } = useLanguage();
  const content = servicesContentByLang[lang];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-5">
            <span className="size-1.5 rounded-full bg-red-600 dark:bg-red-400" />
            <span>{content.badge}</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-5">
            {content.titleMain}{" "}
            <span className="text-red-600 dark:text-red-500">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Grid Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-red-950/5 transition-all duration-200"
            >
              <div>
                {/* Top Row: Tag + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-sans font-semibold tracking-wider text-slate-400 dark:text-slate-500">
                    {item.tag}
                  </span>
                  <div className="size-10 rounded-xl bg-red-50 dark:bg-red-950/80 border border-red-100 dark:border-red-900/70 text-red-600 dark:text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-200">
                    {iconMap[item.id]}
                  </div>
                </div>

                {/* Title (Georgia) */}
                <h3 className="font-sans text-2xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Description (Geist) */}
                <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2.5 mb-8 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  {item.deliverables.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <LuCircleCheck className="text-red-600 dark:text-red-500 size-4 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  <span>{item.ctaLabel}</span>
                  <LuArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
            {content.bottomNote}
          </p>
          <Link
            href={content.bottomCta.href}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors shrink-0"
          >
            <span>{content.bottomCta.label}</span>
            <LuArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
