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
    <footer className="relative overflow-hidden bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 text-black dark:text-white transition-colors duration-200">
      <div className="mx-auto max-w-360 px-6 md:px-10 pt-20">
        {/* 1. TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-16">
          <div className="max-w-lg space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/img/logo/lextel.svg"
                alt="Lextel Logo"
                width={80}
                height={80}
                className="dark:invert"
              />
            </Link>
            <p className="text-[14px] leading-relaxed text-black/60 dark:text-white/60">
              {content.description}
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest">
              {content.ctaTitle}
            </p>
            <form
              onSubmit={handleQuickContact}
              className="flex items-center border border-black/20 dark:border-white/20 bg-transparent focus-within:border-black dark:focus-within:border-white transition-colors rounded-none"
            >
              <div className="pl-4 pr-3 shrink-0">
                <LuMail className="size-4 text-black/40 dark:text-white/40" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.ctaPlaceholder}
                className="w-full bg-transparent py-3 text-[13px] placeholder:text-black/30 dark:placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11.5 px-5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 flex items-center justify-center shrink-0 transition-colors cursor-pointer rounded-none"
              >
                <LuArrowRight className="size-4" />
              </button>
            </form>
            <p className="text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40">
              {content.ctaDisclaimer}
            </p>
          </div>
        </div>

        {/* 2. MIDDLE SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-t border-black/10 dark:border-white/10">
          {/* Kolom 1 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              {content.navTitle}
            </h3>
            <ul className="space-y-3 text-[13px]">
              {content.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              {content.servicesTitle}
            </h3>
            <ul className="space-y-3 text-[13px]">
              {content.serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              {content.contactTitle}
            </h3>
            <ul className="space-y-3 text-[13px] font-mono">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneTwo}`}
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                >
                  {contactInfo.phoneTwo}
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-6">
              {content.hoursTitle}
            </h3>
            <ul className="space-y-3 text-[13px] text-black/60 dark:text-white/60">
              <li>{contactInfo.operationalHours[currentLang]}</li>
              <li className="leading-relaxed">{content.license}</li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="py-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40">
          <p>{content.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={content.termsHref}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {content.termsLabel}
            </Link>
            <Link
              href={content.privacyHref}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {content.privacyLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* 4. GIANT WATERMARK */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden mx-auto max-w-360 px-6 md:px-10 pt-4"
      >
        <svg
          viewBox="0 0 1000 175"
          className="w-full h-auto block translate-y-[16%] text-black/3 dark:text-white/3"
          fill="currentColor"
        >
          <text
            x="50%"
            y="165"
            textAnchor="middle"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="font-mono font-black tracking-wider"
            style={{ fontSize: "215px" }}
          >
            LEXTEL
          </text>
        </svg>
      </div>
    </footer>
  );
}
