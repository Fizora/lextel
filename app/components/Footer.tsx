"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangaugeContext";
import { contactInfo, landingContentByLang } from "@/app/const/data";
import { LuArrowRight } from "react-icons/lu";
// import { useState } from "react";
// import { LuMail } from "react-icons/lu";

/* ───────────────────────── helpers ───────────────────────── */

// true hanya di browser, supaya bahasa dari localStorage tidak
// menyebabkan hydration mismatch (pengganti useState + useEffect)
const subscribe = () => () => {};
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

const tel = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

const linkClass =
  "text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white";

const headingClass = "mb-6 text-[10px] font-bold uppercase tracking-widest";

const mutedLabel =
  "text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40";

// mailto: dan tel: memakai <a>, selain itu memakai Link bawaan Next.js
function FooterLink({
  href,
  className = linkClass,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const native = href.startsWith("mailto:") || href.startsWith("tel:");
  return native ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function FooterColumn({
  title,
  links,
  mono = false,
}: {
  title: string;
  links: { label: string; href: string }[];
  mono?: boolean;
}) {
  return (
    <div>
      <h3 className={headingClass}>{title}</h3>
      <ul className={`space-y-3 text-[13px] `}>
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <FooterLink href={link.href} className={`${linkClass} break-all`}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────── footer ───────────────────────── */

export default function Footer() {
  const { lang } = useLanguage();
  const mounted = useMounted();

  const currentLang = mounted ? lang : "en";
  const content = landingContentByLang[currentLang].footer;

  const contactLinks = [
    { label: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { label: contactInfo.phone, href: tel(contactInfo.phone) },
    { label: contactInfo.phoneTwo, href: tel(contactInfo.phoneTwo) },
  ];

  /* Form dinonaktifkan. Kalau mau dipakai lagi, hapus tanda komentar di
     sini dan di blok JSX "Form" di bawah, lalu aktifkan lagi import
     useState dan LuMail di atas.

  const [email, setEmail] = useState("");

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      "Konsultasi Sistem - Lextel",
    )}&body=${encodeURIComponent(`Halo tim Lextel, hubungi saya kembali di: ${email}`)}`;
    setEmail("");
  };
  */

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white text-black transition-colors duration-200 dark:border-white/10 dark:bg-[#050505] dark:text-white">
      <div className="mx-auto max-w-360 px-6 pt-20 md:px-10">
        {/* 1. TOP SECTION */}
        <div className="flex flex-col gap-12 pb-16 lg:flex-row lg:items-start lg:justify-between">
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

          {/* Pengganti form: kartu kontak langsung (tanpa input) */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group block w-full max-w-md border border-black/15 p-6 transition-colors hover:border-black dark:border-white/15 dark:hover:border-white"
          >
            <p className={mutedLabel}>{content.ctaTitle}</p>

            <div className="mt-8 flex items-end justify-between gap-6">
              <span className="break-all text-[14px] md:text-[15px]">
                {contactInfo.email}
              </span>
              <span className="flex size-11.5 shrink-0 items-center justify-center bg-black text-white transition-colors group-hover:bg-black/80 dark:bg-white dark:text-black dark:group-hover:bg-white/80">
                <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>

          {/* Form
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
          */}
        </div>

        {/* 2. MIDDLE SECTION */}
        <div className="grid grid-cols-1 gap-10 border-t border-black/10 py-12 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          <FooterColumn title={content.navTitle} links={content.quickLinks} />
          <FooterColumn
            title={content.servicesTitle}
            links={content.serviceLinks}
          />
          <FooterColumn
            title={content.contactTitle}
            links={contactLinks}
            mono
          />

          <div>
            <h3 className={headingClass}>{content.hoursTitle}</h3>
            <ul className="space-y-3 text-[13px] text-black/60 dark:text-white/60">
              <li>{contactInfo.operationalHours[currentLang]}</li>
              <li className="leading-relaxed">{content.license}</li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div
          className={`flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 sm:flex-row dark:border-white/10 ${mutedLabel}`}
        >
          <p>{content.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={content.termsHref}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {content.termsLabel}
            </Link>
            <Link
              href={content.privacyHref}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {content.privacyLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* 4. GIANT WATERMARK */}
      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto max-w-360 select-none overflow-hidden px-6 pt-4 md:px-10"
      >
        <svg
          viewBox="0 0 1000 175"
          className="block h-auto w-full translate-y-[16%] text-black/3 dark:text-white/3"
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
