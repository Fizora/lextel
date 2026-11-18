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
    <main className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-20 transition-colors duration-200">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Graphic / Visual */}
        <div className="relative flex justify-center items-center">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-red-600/10 dark:bg-red-500/20 blur-3xl rounded-full scale-150" />

          <div className="relative flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl w-48 h-48 sm:w-56 sm:h-56">
            <LuTerminal className="size-12 text-red-600 dark:text-red-500 mb-2" />
            <span className="font-sans text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tighter">
              404
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <LuTriangleAlert className="size-3.5" />
            <span>{t.tag}</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-red-600/20 transition-all cursor-pointer"
          >
            <LuHouse className="size-4" />
            <span>{t.backHome}</span>
          </Link>
          <a
            href="mailto:business@lexentify.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            <LuMail className="size-4 text-red-600 dark:text-red-400" />
            <span>{t.contact}</span>
          </a>
        </div>
      </div>
    </main>
  );
}
