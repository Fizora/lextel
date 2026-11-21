"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  LuMenu,
  LuX,
  LuPhone,
  LuMail,
  LuClock,
  LuGlobe,
  LuChevronDown,
  LuCheck,
  LuSun,
  LuMoon,
} from "react-icons/lu";
import {
  navLinksByLang,
  contactInfo,
  languagesList,
  NavItem,
} from "@/app/const/data";
import { useLanguage } from "@/app/context/LangaugeContext";
import { useTheme } from "@/app/context/ThemeContext";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false); // desktop mega menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  const navLinks: NavItem[] = navLinksByLang[lang];
  const currentLangObj = languagesList.find((l) => l.code === lang);
  const servicesItem = navLinks.find((l) => l.groups);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setIsOpen(false);
        setLangDropdownOpen(false);
        setMegaOpen(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ease-[0.16,1,0.3,1] ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Banner - Minimalist Contact Info */}
        <div className="bg-[#f5f5f5] dark:bg-[#0a0a0a] text-[#050505] dark:text-white text-[10px] uppercase tracking-widest font-medium border-b border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-360 px-6 md:px-10 h-8 flex items-center justify-between overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-6 shrink-0">
              <span className="hidden md:flex items-center gap-2 text-black/60 dark:text-white/60">
                <LuClock className="size-3" />
                {contactInfo.operationalHours[lang]}
              </span>
            </div>
            <div className="flex items-center gap-6 shrink-0 ml-auto">
              <a
                href={`mailto:${contactInfo.email}`}
                className="hidden sm:flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
              >
                <LuMail className="size-3 text-black/40 dark:text-white/40" />
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
                >
                  <LuPhone className="size-3 text-black/40 dark:text-white/40" />
                  {contactInfo.phone}
                </a>
                <span className="text-black/20 dark:text-white/20">/</span>
                <a
                  href={`tel:${contactInfo.phoneTwo}`}
                  className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
                >
                  {contactInfo.phoneTwo}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          ref={megaRef}
          onMouseLeave={() => setMegaOpen(false)}
          className="relative bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md text-[#050505] dark:text-white border-b border-black/10 dark:border-white/10 transition-colors duration-300"
        >
          <div className="mx-auto max-w-360 px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
            {/* Logo - Strict & Geometric */}
            <Link href="/" className="flex items-center focus:outline-none">
              <span className="font-sans text-xl font-bold uppercase tracking-[0.2em]">
                LEXTEL
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link, index) =>
                link.groups ? (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setMegaOpen((v) => !v)}
                    onMouseEnter={() => setMegaOpen(true)}
                    aria-expanded={megaOpen}
                    className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                    <LuChevronDown
                      className={`size-3 transition-transform duration-300 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    onMouseEnter={() => setMegaOpen(false)}
                    className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Right Group: Theme, Lang, Mobile Toggle */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle - Sharp Square */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center size-9 md:size-10 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors text-black dark:text-white cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? (
                  <LuMoon className="size-4" />
                ) : (
                  <LuSun className="size-4" />
                )}
              </button>

              {/* Language Switcher - Minimal Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 h-9 md:h-10 px-3 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors text-[10px] font-bold uppercase tracking-widest cursor-pointer"
                  aria-label="Select Language"
                >
                  <LuGlobe className="size-3.5 text-black/60 dark:text-white/60" />
                  <span>{currentLangObj?.label}</span>
                  <LuChevronDown
                    className={`size-3 transition-transform duration-300 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 shadow-xl z-50">
                    <div className="p-1">
                      {languagesList.map((item) => (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            setLang(item.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2.5 text-left text-[11px] font-bold uppercase tracking-widest flex items-center justify-between transition-colors cursor-pointer ${
                            lang === item.code
                              ? "bg-black/5 dark:bg-white/10 text-black dark:text-white"
                              : "text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                          }`}
                        >
                          <span>{item.name}</span>
                          {lang === item.code && <LuCheck className="size-3" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle - Sharp Square */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center size-9 md:size-10 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <LuX className="size-5" />
                ) : (
                  <LuMenu className="size-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mega Menu (Desktop) */}
          {servicesItem?.groups && (
            <div
              className={`hidden lg:block absolute left-0 top-full w-full bg-white dark:bg-[#050505] border-b border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 ${
                megaOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="mx-auto max-w-360 px-6 md:px-10 py-10 grid grid-cols-3 gap-12">
                {servicesItem.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] pb-3 mb-3 border-b border-black/10 dark:border-white/10">
                      {group.title}
                    </h4>
                    <ul className="flex flex-col">
                      {group.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMegaOpen(false)}
                            className="block px-3 py-2.5 text-sm text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-60 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer - Typography Focused */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-[#050505] text-black dark:text-white shadow-2xl z-70 flex flex-col justify-between transition-transform duration-500 ease-[0.16,1,0.3,1] border-l border-black/10 dark:border-white/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
            <span className="font-sans text-xl font-bold uppercase tracking-[0.2em]">
              LEXTEL
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <LuX className="size-5" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-6">
            {navLinks.map((link, index) =>
              link.groups ? (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full flex items-center justify-between text-2xl font-bold uppercase tracking-tight cursor-pointer"
                  >
                    {link.label}
                    <LuChevronDown
                      className={`size-5 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col gap-4 pl-2">
                      {link.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 dark:text-white/40 mb-2">
                            {group.title}
                          </p>
                          <div className="flex flex-col gap-1">
                            {group.links.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="py-1.5 pl-3 text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold uppercase tracking-tight hover:text-black/50 dark:hover:text-white/50 transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Mobile Footer - Language Grid */}
        <div className="p-6 border-t border-black/10 dark:border-white/10 bg-[#fafafa] dark:bg-[#0a0a0a]">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 dark:text-white/40 mb-4">
            <LuGlobe className="size-3.5" />
            <span>Language</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languagesList.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setIsOpen(false);
                }}
                className={`py-3 px-2 border text-[11px] font-bold uppercase tracking-widest text-center transition-colors cursor-pointer ${
                  lang === item.code
                    ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                    : "border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 hover:border-black/30 dark:hover:border-white/30"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
