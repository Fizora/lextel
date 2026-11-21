"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { LuArrowUpRight } from "react-icons/lu";

export default function CTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] text-black dark:text-white transition-colors">
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
          href="mailto:info@lexentify.com"
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
  );
}
