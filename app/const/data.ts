import { LangCode } from "@/app/context/LangaugeContext";

export interface NavItem {
  label: string;
  href: string;
}

export const languagesList: { code: LangCode; label: string; name: string }[] =
  [
    { code: "en", label: "EN", name: "English" },
    { code: "id", label: "ID", name: "Indonesia" },
  ];

export const navLinksByLang: Record<LangCode, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ],
  id: [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/services" },
    { label: "Proyek", href: "/projects" },
    { label: "Portofolio", href: "/#portfolio" },
    { label: "Tentang", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ],
};

export const contactInfo = {
  phone: "+62 821-3171-0601",
  phoneTwo: "+62 852-3508-6814",
  email: "business@lexentify.com",
  operationalHours: {
    en: "Mon - Fri: 09:00 AM - 05:00 PM",
    id: "Senin - Jum'at: 09:00 - 17:00 WIB",
  } as Record<LangCode, string>,
};

const enContent = {
  footer: {
    description:
      "Digital engineering studio building custom operational systems, high-performance web applications, and reliable software tailored to real workflows.",
    license: "Lextel by Lexentify • Engineered for Real Operations",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Get in Touch",
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy",
    termsLabel: "Terms of Service",
    termsHref: "/terms",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/#faq" },
    ],
    serviceLinks: [
      // PERBAIKAN: Menambahkan ID anchor sesuai halaman services
      { label: "Custom Operational Systems", href: "/services#ops-system" },
      { label: "Web Applications & SaaS", href: "/services#web-app" },
      { label: "Institutional Websites", href: "/services#company-profile" },
      { label: "System Maintenance", href: "/services#maintenance" },
    ],
    copyright: "© 2026 Lextel. All rights reserved.",
  },
};

export type LandingContentType = typeof enContent;

export const landingContentByLang: Record<LangCode, LandingContentType> = {
  en: enContent,
  id: {
    footer: {
      description:
        "Studio rekayasa digital yang membangun sistem operasional kustom, aplikasi web berperforma tinggi, dan perangkat lunak yang disesuaikan dengan alur kerja nyata.",
      license: "Lextel oleh Lexentify • Dirancang untuk Operasional Nyata",
      navTitle: "Navigasi",
      servicesTitle: "Layanan",
      contactTitle: "Hubungi Kami",
      privacyLabel: "Kebijakan Privasi",
      privacyHref: "/privacy",
      termsLabel: "Syarat & Ketentuan",
      termsHref: "/terms",
      quickLinks: [
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/services" },
        { label: "Proyek", href: "/projects" },
        { label: "Portofolio", href: "/#portfolio" },
        { label: "Tentang Kami", href: "/about" },
        { label: "FAQ", href: "/#faq" },
      ],
      serviceLinks: [
        // PERBAIKAN: Menambahkan ID anchor sesuai halaman services
        { label: "Sistem Operasional Kustom", href: "/services#ops-system" },
        { label: "Aplikasi Web & SaaS", href: "/services#web-app" },
        { label: "Website Institusi", href: "/services#company-profile" },
        { label: "Pemeliharaan Sistem", href: "/services#maintenance" },
      ],
      copyright: "© 2026 Lextel. Hak cipta dilindungi undang-undang.",
    },
  },
};
