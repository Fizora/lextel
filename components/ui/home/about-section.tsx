"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    title: "Clarity in Architecture",
    desc: "We design systems that are easy to reason about, maintain, and scale over time.",
  },
  {
    title: "Craft in Execution",
    desc: "Every line of code and pixel is intentional, robust, and built for high performance.",
  },
  {
    title: "Partnership over Vendorship",
    desc: "We embed with your team, acting as an extension of your engineering org.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative z-10 w-full bg-[#050505] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-[auto_1fr] md:items-start md:gap-x-20 lg:gap-x-28"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
              <span className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                About Lumen
              </span>
            </div>
            <h2 className="mt-2 text-[110px] font-semibold leading-[0.8] tracking-[-0.06em] text-[#FF5A1F] md:text-[140px]">
              01
            </h2>
          </div>

          <h3 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white md:-mt-1">
            We are an independent <br className="hidden md:block" /> software
            engineering studio.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#0A0A0A] shadow-2xl shadow-black/50"
        >
          <div className="grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
            <h4 className="text-[22px] font-medium leading-[1.35] tracking-[-0.01em] text-white md:text-[32px] md:leading-tight lg:col-span-8">
              Lumen is a collective of engineers and designers building
              resilient digital infrastructure. We partner with ambitious teams
              to turn complex problems into elegant, high-performance systems.
            </h4>

            <p className="max-w-md text-[14.5px] leading-relaxed text-white/45 lg:col-span-4 lg:self-end">
              We don&apos;t just write code. We architect for longevity. Whether
              it&apos;s a custom ERP, a high-traffic web application, or a
              mobile platform, our approach is rooted in Swiss brutalism,
              stripping away the unnecessary to reveal absolute structural
              clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/6 border-t border-white/6 bg-[#0C0C0C] md:grid-cols-3 md:divide-x md:divide-y-0">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group flex flex-col gap-3 p-6 md:p-8 lg:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="font-tech text-[10px] text-[#FF5A1F]">
                    0{i + 1}
                  </span>
                  <h5 className="text-[13px] font-medium text-white transition-colors duration-300 group-hover:text-[#FF5A1F]">
                    {pillar.title}
                  </h5>
                </div>
                <p className="max-w-[34ch] pl-7 text-[12.5px] leading-relaxed text-white/40">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
