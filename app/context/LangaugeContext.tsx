"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type LangCode = "en" | "id";

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "lextel_lang";

function detectIndonesiaRegion(): boolean {
  if (typeof window === "undefined") return false;

  // 1. Cek Timezone Indonesia (WIB, WITA, WIT)
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const indoTimezones = [
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Ujung_Pandang",
    "Asia/Jayapura",
  ];
  if (indoTimezones.includes(timeZone)) return true;

  // 2. Cek Locale Browser (id, id-ID, jv, su, dll.)
  const locales = [
    ...(navigator.languages || []),
    navigator.language || "",
  ].map((l) => l.toLowerCase());

  if (
    locales.some((l) => l === "id" || l.startsWith("id-") || l.endsWith("-id"))
  ) {
    return true;
  }

  return false;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Default SSR tetap "en" agar tidak terjadi hydration mismatch
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (saved === "en" || saved === "id") {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }

    const detected: LangCode = detectIndonesiaRegion() ? "id" : "en";
    setLangState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLang = (newLang: LangCode) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
