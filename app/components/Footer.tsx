"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangaugeContext";
import { contactInfo, landingContentByLang } from "@/app/const/data";
import { LuMail, LuArrowRight } from "react-icons/lu";

export default function Footer() {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLang = mounted ? lang : "en";
  const content = landingContentByLang[currentLang].footer;

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      "Konsultasi Sistem - Lextel",
    )}&body=${encodeURIComponent(`Halo tim Lextel, hubungi saya kembali di: ${email}`)}`;
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-slate-50 dark:bg-[#0D0D0D] border-t border-slate-200 dark:border-white/10 text-slate-800 dark:text-neutral-200 transition-colors duration-200 text-base">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        {/* 1. TOP SECTION: Brand & Deskripsi (Kiri) + Pill Input CTA (Kanan) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-14">
          {/* Kiri: Logo & Tagline */}
          <div className="max-w-lg space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="p-1.5">
                <Image
                  src="/img/logo/lextel.svg"
                  alt="Lextel Logo"
                  width={80}
                  height={80}
                />
              </div>
              {/* <span className="font-mono text-2xl font-bold tracking-wider text-slate-900 dark:text-white">
                LEXTEL
              </span> */}
            </Link>

            <p className="font-sans text-base lg:text-lg text-slate-700 dark:text-neutral-200 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Kanan: Form Input Pill seperti di gambar */}
          <div className="w-full max-w-md space-y-3">
            <p className="font-sans text-base font-semibold text-slate-900 dark:text-white">
              {content.ctaTitle}
            </p>

            <form
              onSubmit={handleQuickContact}
              className="flex items-center rounded-full bg-white dark:bg-[#161616] border border-slate-300 dark:border-white/20 pl-4 pr-1.5 py-1.5 focus-within:border-red-600 dark:focus-within:border-white/50 transition-colors"
            >
              <LuMail className="size-5 text-slate-500 dark:text-neutral-400 shrink-0 mr-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.ctaPlaceholder}
                className="w-full bg-transparent text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="size-10 rounded-full bg-slate-900 dark:bg-[#2A2A2A] hover:bg-red-700 dark:hover:bg-red-700 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <LuArrowRight className="size-5" />
              </button>
            </form>

            <p className="font-sans text-xs text-slate-600 dark:text-neutral-400">
              {content.ctaDisclaimer}
            </p>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: 4 Kolom Menu Sejajar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-slate-200 dark:border-white/10">
          {/* Kolom 1: Navigasi */}
          <div>
            <h3 className="font-sans text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-5">
              {content.navTitle}
            </h3>
            <ul className="space-y-3 font-sans text-base">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2: Layanan */}
          <div>
            <h3 className="font-sans text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-5">
              {content.servicesTitle}
            </h3>
            <ul className="space-y-3 font-sans text-base">
              {content.serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Hubungi Kami */}
          <div>
            <h3 className="font-sans text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-5">
              {content.contactTitle}
            </h3>
            <ul className="space-y-3 font-sans text-base">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-slate-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneTwo}`}
                  className="text-slate-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-white transition-colors"
                >
                  {contactInfo.phoneTwo}
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Jam Operasional & Lisensi */}
          <div>
            <h3 className="font-sans text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-5">
              {content.hoursTitle}
            </h3>
            <ul className="space-y-3 font-sans text-base text-slate-700 dark:text-neutral-300">
              <li>{contactInfo.operationalHours[currentLang]}</li>
              <li className="leading-relaxed text-slate-600 dark:text-neutral-400">
                {content.license}
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM BAR: Copyright & Legal Links */}
        <div className="py-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-base text-slate-600 dark:text-neutral-400">
          <p>{content.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={content.termsHref}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {content.termsLabel}
            </Link>
            <Link
              href={content.privacyHref}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {content.privacyLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* 4. GIANT WATERMARK BRAND TEXT (Terpotong setengah di bagian bawah) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4"
      >
        <svg
          viewBox="0 0 1000 175"
          className="w-full h-auto block translate-y-[16%] text-slate-200/80 dark:text-white/4"
          fill="currentColor"
        >
          <text
            x="50%"
            y="165"
            textAnchor="middle"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="font-mono font-black tracking-tighter"
            style={{ fontSize: "215px" }}
          >
            LEXTEL
          </text>
        </svg>
      </div>
    </footer>
  );
}
