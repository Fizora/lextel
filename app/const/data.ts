import { LangCode } from "@/app/context/LangaugeContext";

export interface NavGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  groups?: NavGroup[];
}

export const languagesList: { code: LangCode; label: string; name: string }[] =
  [
    { code: "en", label: "EN", name: "English" },
    { code: "id", label: "ID", name: "Indonesia" },
  ];

export const navLinksByLang: Record<LangCode, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      groups: [
        {
          title: "Support",
          links: [{ label: "Support", href: "/support" }],
        },
        {
          title: "Services",
          links: [
            {
              label: "Custom Operational Systems",
              href: "/services#ops-system",
            },
            { label: "Web Applications & SaaS", href: "/services#web-app" },
            {
              label: "Mobile Apps",
              href: "/services#mobile-app",
            },
            { label: "System Maintenance", href: "/services#maintenance" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
          ],
        },
      ],
    },
    { label: "Projects", href: "/projects" },
  ],
  id: [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    {
      label: "Layanan",
      href: "/services",
      groups: [
        {
          title: "Dukungan",
          links: [{ label: "Dukungan", href: "/support" }],
        },
        {
          title: "Layanan",
          links: [
            {
              label: "Sistem Operasional Kustom",
              href: "/services#ops-system",
            },
            { label: "Aplikasi Web & SaaS", href: "/services#web-app" },
            { label: "Aplikasi Mobile", href: "/services#mobile-app" },
            { label: "Pemeliharaan Sistem", href: "/services#maintenance" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Syarat & Ketentuan", href: "/terms" },
            { label: "Kebijakan Privasi", href: "/privacy" },
          ],
        },
      ],
    },
    { label: "Proyek", href: "/projects" },
  ],
};

export const contactInfo = {
  phone: "+62 821-3171-0601",
  phoneTwo: "+62 852-3508-6814",
  email: "info@lexentify.com",
  operationalHours: {
    en: "Mon - Fri: 09:00 AM - 05:00 PM",
    id: "Senin - Jum'at: 09:00 - 17:00 WIB",
  } as Record<LangCode, string>,
};

const enContent = {
  footer: {
    description:
      "Digital engineering studio building custom operational systems, high-performance applications, and reliable software tailored to real workflows.",
    license: "Lextel by Lexentify • Engineered for Real Operations",
    ctaTitle: "Start a project or stay updated",
    ctaPlaceholder: "Enter your work email",
    ctaDisclaimer: "BY SUBMITTING YOU AGREE TO OUR TERMS.",
    navTitle: "NAVIGATION",
    servicesTitle: "SERVICES",
    contactTitle: "GET IN TOUCH",
    hoursTitle: "OPERATIONAL",
    privacyLabel: "PRIVACY POLICY",
    privacyHref: "/privacy",
    termsLabel: "TERMS OF SERVICE",
    termsHref: "/terms",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
    ],
    serviceLinks: [
      { label: "Custom Operational Systems", href: "/services#ops-system" },
      { label: "Web Applications & SaaS", href: "/services#web-app" },
      { label: "Institutional Websites", href: "/services#company-profile" },
      { label: "System Maintenance", href: "/services#maintenance" },
    ],
    copyright: "© 2026 LEXTEL BY LEXENTIFY. ALL RIGHTS RESERVED.",
  },
};

export type LandingContentType = typeof enContent;

export const landingContentByLang: Record<LangCode, LandingContentType> = {
  en: enContent,
  id: {
    footer: {
      description:
        "Studio rekayasa digital yang membangun sistem operasional kustom, aplikasi berperforma tinggi, dan perangkat lunak yang disesuaikan dengan alur kerja nyata.",
      license: "Lextel oleh Lexentify • Dirancang untuk Operasional Nyata",
      ctaTitle: "Diskusikan kebutuhan sistem Anda",
      ctaPlaceholder: "Masukkan email institusi / kerja",
      ctaDisclaimer: "DENGAN MENGIRIM ANDA MENYETUJUI SYARAT & KETENTUAN.",
      navTitle: "NAVIGASI",
      servicesTitle: "LAYANAN",
      contactTitle: "HUBUNGI KAMI",
      hoursTitle: "JAM OPERASIONAL",
      privacyLabel: "KEBIJAKAN PRIVASI",
      privacyHref: "/privacy",
      termsLabel: "SYARAT & KETENTUAN",
      termsHref: "/terms",
      quickLinks: [
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "/services" },
        { label: "Proyek", href: "/projects" },
        { label: "Tentang Kami", href: "/about" },
      ],
      serviceLinks: [
        { label: "Sistem Operasional Kustom", href: "/services#ops-system" },
        { label: "Aplikasi Web & SaaS", href: "/services#web-app" },
        { label: "Website Institusi", href: "/services#company-profile" },
        { label: "Pemeliharaan Sistem", href: "/services#maintenance" },
      ],
      copyright:
        "© 2026 LEXTEL BY LEXENTIFY. HAK CIPTA DILINDUNGI UNDANG-UNDANG.",
    },
  },
};
