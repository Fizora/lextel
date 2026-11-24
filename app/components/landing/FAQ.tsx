"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { faqContentByLang } from "@/app/const/landing/FAQ";
import { LuPlus, LuArrowUpRight } from "react-icons/lu";

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
      className="border-t border-black/10 bg-[#fafafa] py-20 text-black transition-colors duration-200 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white md:py-28"
    >
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex min-w-0 flex-col items-start lg:col-span-5">
          <div className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
            <span className="size-2 bg-black dark:bg-white" />
            <span>{content.badge}</span>
          </div>

          <h2 className="w-full max-w-full text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[0.94] tracking-[-0.06em]">
            {content.titleMain}
            <span className="mt-2 block text-black/30 dark:text-white/30">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mt-8 max-w-md text-base leading-relaxed text-black/65 dark:text-white/65 md:text-lg">
            {content.description}
          </p>

          <div className="mt-12 w-full border-t border-black/15 pt-6 dark:border-white/15">
            <p className="max-w-sm text-base leading-relaxed text-black/65 dark:text-white/65">
              {content.contactPrompt}
            </p>
            <Link
              href={content.contactCta.href}
              className="mt-6 inline-flex min-h-12 items-center gap-3 border border-black px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <span>{content.contactCta.label}</span>
              <LuArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7">
          {content.items.map((item, index) => {
            const isOpen = openId === item.id;
            const triggerId = `faq-trigger-${item.id}`;
            const answerId = `faq-answer-${item.id}`;

            return (
              <article
                key={item.id}
                className="border-t border-black/15 last:border-b dark:border-white/15"
              >
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-6 md:py-8">
                  <span className="pt-1 text-sm font-semibold tabular-nums text-black/40 dark:text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        className="group flex w-full items-start justify-between gap-6 text-left"
                      >
                        <span className="text-xl font-semibold leading-tight tracking-[-0.03em] transition-colors group-hover:text-black/60 dark:group-hover:text-white/60 md:text-2xl lg:text-3xl">
                          {item.question}
                        </span>
                        <span className="flex size-10 shrink-0 items-center justify-center border border-black/20 transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white dark:border-white/20 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-black">
                          <LuPlus
                            aria-hidden="true"
                            className={`size-5 transition-transform duration-200 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!isOpen}
                      className="max-w-2xl pb-2 pr-4 pt-5 md:pr-12"
                    >
                      <p className="text-base leading-relaxed text-black/65 dark:text-white/65 md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
