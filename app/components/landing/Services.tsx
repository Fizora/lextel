"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { servicesContentByLang } from "@/app/const/landing/Services";
import {
  LuLayers,
  LuCode,
  LuShieldCheck,
  LuArrowUpRight,
  LuArrowRight,
  LuSmartphone,
} from "react-icons/lu";

const iconMap: Record<string, React.ReactNode> = {
  "ops-system": <LuLayers className="size-5" />,
  "web-app": <LuCode className="size-5" />,
  "mobile-app": <LuSmartphone className="size-5" />,
  maintenance: <LuShieldCheck className="size-5" />,
};

export default function Services() {
  const { lang } = useLanguage();
  const content = servicesContentByLang[lang];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 text-black dark:text-white transition-colors duration-200"
    >
      <div className="mx-auto max-w-360 px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
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

          <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60 max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/10 dark:border-white/10 divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
          {content.items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between p-8 md:p-10 hover:bg-black/2 dark:hover:bg-white/2 transition-colors"
            >
              <div>
                {/* Top: Tag + Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
                    {item.tag}
                  </span>
                  <div className="size-10 border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors rounded-none">
                    {iconMap[item.id]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-relaxed text-black/60 dark:text-white/60 mb-8">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-3 mb-10 border-t border-black/10 dark:border-white/10 pt-6">
                  {item.deliverables.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[12px] text-black/70 dark:text-white/70"
                    >
                      <span className="size-1 bg-black dark:bg-white shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:underline underline-offset-4"
                >
                  <span>{item.ctaLabel}</span>
                  <LuArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-8 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[13px] font-medium text-black/70 dark:text-white/70">
            {content.bottomNote}
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
