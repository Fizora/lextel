"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { navLinksByLang, contactInfo, languagesList } from "@/app/const/data";
import { useLanguage } from "@/app/context/LangaugeContext";
import { useTheme } from "@/app/context/ThemeContext";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = navLinksByLang[lang];
  const currentLangObj = languagesList.find((l) => l.code === lang);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setIsOpen(false);
        setLangDropdownOpen(false);
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
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Banner */}
        <div className="bg-red-950 text-red-100 text-[11px] sm:text-xs py-1.5 px-3 border-b border-red-900">
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden md:flex items-center gap-1.5">
                <LuClock className="text-red-400 shrink-0" />
                {contactInfo.operationalHours[lang]}
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 ml-auto">
              <a
                href={`mailto:${contactInfo.email}`}
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LuMail className="text-red-400 shrink-0" />
                {contactInfo.email}
              </a>

              {/* PERBAIKAN: Menambahkan Nomor HP Kedua */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors font-medium whitespace-nowrap"
                >
                  <LuPhone className="text-red-400 shrink-0" />
                  {contactInfo.phone}
                </a>
                <span className="text-red-800 hidden sm:inline">|</span>
                <a
                  href={`tel:${contactInfo.phoneTwo}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors font-medium whitespace-nowrap"
                >
                  <LuPhone className="text-red-400 shrink-0" />
                  {contactInfo.phoneTwo}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-red-700 dark:bg-red-900 text-white shadow-md transition-colors duration-200">
          <div className="py-3 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none"
            >
              <Image
                src="/img/logo/lextel.svg"
                alt="logo"
                width={34}
                height={34}
                className="sm:w-10 sm:h-10"
              />
            </Link>
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 font-sans text-sm font-medium">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg hover:bg-red-600 dark:hover:bg-red-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Right Group: Theme Toggle + Language Switcher + Menu Button */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Tombol Dark / Light Mode */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 bg-red-800/80 hover:bg-red-600 dark:bg-red-950/70 dark:hover:bg-red-800 text-white rounded-lg border border-red-600/75 dark:border-red-700/75 transition-colors cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? (
                  <LuMoon className="text-sm sm:text-base" />
                ) : (
                  <LuSun className="text-sm sm:text-base text-amber-300" />
                )}
              </button>

              {/* Language Switcher */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="inline-flex items-center gap-1 bg-red-800/80 hover:bg-red-600 dark:bg-red-950/70 dark:hover:bg-red-800 text-white text-xs sm:text-sm font-semibold px-2.5 py-2 rounded-lg border border-red-600/75 dark:border-red-700/75 transition-colors cursor-pointer"
                  aria-label="Select Language"
                >
                  <LuGlobe className="text-red-200 text-sm shrink-0" />
                  <span>{currentLangObj?.label}</span>
                  <LuChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 text-gray-800 dark:text-slate-100 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 py-1 z-50">
                    {languagesList.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          setLang(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-red-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
                          lang === item.code
                            ? "font-bold text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-slate-800/60"
                            : "font-medium text-gray-700 dark:text-slate-300"
                        }`}
                      >
                        <span>{item.name}</span>
                        {lang === item.code && (
                          <LuCheck className="text-red-600 dark:text-red-400 text-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button - Hanya tampil di bawah lg */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-xl sm:text-2xl focus:outline-none bg-red-800/80 hover:bg-red-600 dark:bg-red-950/70 dark:hover:bg-red-800 rounded-lg border border-red-600/75 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <LuX /> : <LuMenu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-60 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Sidebar untuk Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-red-800 dark:bg-red-950 text-white shadow-2xl z-70 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-red-700 dark:border-red-800">
            <div className="flex items-center gap-2">
              <Image
                src="/img/logo/lextel.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-xl hover:bg-red-700 dark:hover:bg-red-900 rounded-lg transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <LuX />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5 mt-6 font-sans">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-2.5 px-3 rounded-xl hover:bg-red-700/80 dark:hover:bg-red-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-red-700 dark:border-red-800">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-200 mb-3">
            <LuGlobe className="text-sm" />
            <span>Language / Bahasa</span>
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
                className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-colors cursor-pointer ${
                  lang === item.code
                    ? "bg-white text-red-800 shadow-xs"
                    : "bg-red-900/60 text-red-100 hover:bg-red-700"
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
