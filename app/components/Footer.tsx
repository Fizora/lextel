"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangaugeContext";
import { contactInfo, landingContentByLang } from "@/app/const/data";
import { LuMail, LuPhone, LuClock, LuArrowUpRight } from "react-icons/lu";

export default function Footer() {
  const { lang } = useLanguage();
  const content = landingContentByLang[lang].footer;

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-red-700">
                <Image
                  src="/img/logo/lextel.png"
                  alt="Lextel Logo"
                  width={60}
                  height={60}
                />
              </div>
              <span className="font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                LEXTEL
              </span>
            </Link>

            <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {content.description}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-xs font-sans text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/70 border border-red-200 dark:border-red-900/70 px-3 py-1.5 rounded-lg">
                {content.license}
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white mb-4">
              {content.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white mb-4">
              {content.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {content.serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors group"
                  >
                    <span>{service.label}</span>
                    <LuArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak & Jam Operasional */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white mb-4">
              {content.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LuMail className="size-4 text-red-600 dark:text-red-500 shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LuPhone className="size-4 text-red-600 dark:text-red-500 shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneTwo}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LuPhone className="size-4 text-red-600 dark:text-red-500 shrink-0" />
                  <span>{contactInfo.phoneTwo}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 pt-1">
                <LuClock className="size-4 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                <span>{contactInfo.operationalHours[lang]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>{content.copyright}</p>
          <div className="flex items-center gap-6">
            <Link
              href={content.privacyHref}
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              {content.privacyLabel}
            </Link>
            <Link
              href={content.termsHref}
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              {content.termsLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
