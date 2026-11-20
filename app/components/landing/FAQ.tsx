"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { faqContentByLang } from "@/app/const/landing/FAQ";
import { LuPlus, LuMinus, LuArrowRight } from "react-icons/lu";

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
      className="py-24 md:py-32 bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 text-black dark:text-white transition-colors duration-200"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="size-1.5 bg-black dark:bg-white" />
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

        {/* Accordion List */}
        <div className="border-t border-black/10 dark:border-white/10">
          {content.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-black/10 dark:border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 flex items-start justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-lg md:text-xl font-bold tracking-wide group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                    {item.question}
                  </span>
                  <span className="shrink-0 mt-1">
                    {isOpen ? (
                      <LuMinus className="size-5" />
                    ) : (
                      <LuPlus className="size-5 text-black/40 dark:text-white/40" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 pr-12">
                    <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Prompt */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[13px] font-medium text-black/60 dark:text-white/60">
            {content.contactPrompt}
          </p>
          <Link
            href={content.contactCta.href}
            className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shrink-0"
          >
            <span>{content.contactCta.label}</span>
            <LuArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
