"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { faqContentByLang } from "@/app/const/landing/FAQ";
import { LuChevronDown, LuArrowRight } from "react-icons/lu";

export default function FAQ() {
  const { lang } = useLanguage();
  const content = faqContentByLang[lang];

  const [openId, setOpenId] = useState<string | null>(
    content.items[0]?.id ?? null,
  );

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      <div className="mx-auto max-w-4xl px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium mb-5">
            <span className="size-1.5 rounded-full bg-red-600 dark:bg-red-400" />
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

        {/* Accordion List */}
        <div className="space-y-3.5">
          {content.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "bg-slate-50/80 dark:bg-slate-900/80 border-red-300 dark:border-red-800/80"
                    : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-sans text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {item.question}
                  </span>
                  <span
                    className={`size-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? "bg-red-600 border-red-600 text-white rotate-180"
                        : "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <LuChevronDown className="size-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1">
                    <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/70 dark:border-slate-800 pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {content.contactPrompt}
          </p>
          <Link
            href={content.contactCta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors shrink-0"
          >
            <span>{content.contactCta.label}</span>
            <LuArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
