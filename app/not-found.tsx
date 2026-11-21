"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LangaugeContext";
import { LuMail, LuTerminal, LuTriangleAlert, LuHouse } from "react-icons/lu";

export default function NotFound() {
  const { lang } = useLanguage();

  const content = {
    en: {
      tag: "Error 404",
      title: "System Route Not Found.",
      description:
        "The page or system module you are looking for doesn't exist, has been moved, or is currently undergoing maintenance.",
      backHome: "Return to Homepage",
      contact: "Report an Issue",
    },
    id: {
      tag: "Error 404",
      title: "Rute Sistem Tidak Ditemukan.",
      description:
        "Halaman atau modul sistem yang Anda cari tidak ada, telah dipindahkan, atau sedang dalam pemeliharaan.",
      backHome: "Kembali ke Beranda",
      contact: "Laporkan Masalah",
    },
  };

  const t = content[lang] || content.en;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050505] text-black dark:text-white px-6 py-24 transition-colors duration-200">
      <div className="max-w-2xl w-full text-left border border-black/10 dark:border-white/10 p-10 md:p-16">
        {/* Graphic */}
        <div className="mb-12 border-b border-black/10 dark:border-white/10 pb-12 flex items-end justify-between">
          <div className="size-24 border border-black dark:border-white flex flex-col items-center justify-center">
            <LuTerminal className="size-6 mb-1" />
            <span className="font-mono text-xs font-bold tracking-widest">
              404
            </span>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">
              <LuTriangleAlert className="size-3" />
              <span>{t.tag}</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95]">
            {t.title}
          </h1>
          <p className="text-[14px] text-black/60 dark:text-white/60 leading-relaxed max-w-md">
            {t.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-12 mt-12 border-t border-black/10 dark:border-white/10">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white border border-black dark:border-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-none"
          >
            <LuHouse className="size-4" />
            <span>{t.backHome}</span>
          </Link>
          <a
            href="mailto:info@lexentify.com"
            className="flex items-center justify-center gap-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white px-6 py-4 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-none"
          >
            <LuMail className="size-4" />
            <span>{t.contact}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
