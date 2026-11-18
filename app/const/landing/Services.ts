import { LangCode } from "@/app/context/LangaugeContext";

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  href: string;
}

export interface ServicesContent {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  items: ServiceItem[];
  bottomNote: string;
  bottomCta: {
    label: string;
    href: string;
  };
}

export const servicesContentByLang: Record<LangCode, ServicesContent> = {
  en: {
    badge: "What We Build",
    titleMain: "Operational systems tailored to",
    titleHighlight: "your real workflow.",
    description:
      "No bloated off-the-shelf templates. Every system is engineered from scratch around how your team actually operates.",
    items: [
      {
        id: "ops-system",
        tag: "01 / CORE SYSTEM",
        title: "Custom Operational Systems",
        description:
          "End-to-end internal platforms for schools, Islamic boarding schools, agencies, and businesses—replacing scattered spreadsheets and manual approvals.",
        deliverables: [
          "Role-based access & multi-level approvals",
          "Automated billing, attendance & scheduling",
          "Real-time audit logs & executive dashboards",
        ],
        ctaLabel: "Discuss Your System",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "web-app",
        tag: "02 / WEB & SAAS",
        title: "High-Performance Web Applications",
        description:
          "Fast, reliable web applications built with modern architecture so your staff and clients can work smoothly from any device.",
        deliverables: [
          "Responsive interface for desktop & mobile",
          "API integrations & automated notifications",
          "Scalable database & cloud deployment",
        ],
        ctaLabel: "Consult Web App",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "company-profile",
        tag: "03 / DIGITAL PRESENCE",
        title: "High-Converting Institutional Websites",
        description:
          "Clean, authoritative websites designed to build immediate trust, clarify your offerings, and turn visitors into qualified inquiries.",
        deliverables: [
          "Bilingual (EN / ID) content architecture",
          "SEO-ready & sub-second page load",
          "Direct lead capture & WhatsApp routing",
        ],
        ctaLabel: "Build Your Website",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "maintenance",
        tag: "04 / LONG-TERM CARE",
        title: "System Maintenance & Iteration",
        description:
          "Software should evolve as your institution grows. We provide ongoing monitoring, security updates, and feature iterations directly with the builders.",
        deliverables: [
          "24/7 uptime & automated backup checks",
          "Priority bug fixes & security patches",
          "Monthly feature improvements",
        ],
        ctaLabel: "See Care Plans",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
    ],
    bottomNote: "Have a specific workflow problem that doesn't fit a box?",
    bottomCta: {
      label: "Talk Directly With Us",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
  },
  id: {
    badge: "Layanan Kami",
    titleMain: "Sistem operasional yang dirancang sesuai",
    titleHighlight: "alur kerja nyata Anda.",
    description:
      "Bukan template kaku yang memaksa Anda beradaptasi. Setiap sistem dibangun dari nol mengikuti cara tim dan institusi Anda bekerja.",
    items: [
      {
        id: "ops-system",
        tag: "01 / SISTEM INTI",
        title: "Sistem Operasional Kustom",
        description:
          "Platform internal terpadu untuk sekolah, pesantren, instansi, dan perusahaan—menggantikan tumpukan spreadsheet dan persetujuan manual.",
        deliverables: [
          "Hak akses berbasis peran & persetujuan berjenjang",
          "Otomatisasi administrasi, presensi & jadwal",
          "Log aktivitas real-time & dashboard pimpinan",
        ],
        ctaLabel: "Diskusikan Sistem Anda",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "web-app",
        tag: "02 / WEB & SAAS",
        title: "Aplikasi Web Berperforma Tinggi",
        description:
          "Aplikasi web cepat dan stabil dengan arsitektur modern agar staf maupun pengguna dapat bekerja lancar dari perangkat apa pun.",
        deliverables: [
          "Antarmuka responsif untuk desktop & ponsel",
          "Integrasi API & notifikasi otomatis",
          "Database terukur & deployment cloud aman",
        ],
        ctaLabel: "Konsultasi Aplikasi",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "company-profile",
        tag: "03 / IDENTITAS DIGITAL",
        title: "Website Institusi & Konversi Tinggi",
        description:
          "Website bersih dan berwibawa yang dirancang membangun kepercayaan sejak detik pertama serta mengubah pengunjung menjadi calon klien.",
        deliverables: [
          "Arsitektur konten dwibahasa (ID / EN)",
          "Struktur ramah SEO & waktu muat super cepat",
          "Formulir prospek & integrasi langsung ke WhatsApp",
        ],
        ctaLabel: "Buat Website Anda",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
      {
        id: "maintenance",
        tag: "04 / PENDAMPINGAN",
        title: "Pemeliharaan & Pengembangan Berkelanjutan",
        description:
          "Perangkat lunak harus ikut tumbuh bersama institusi Anda. Kami menangani pemantauan, keamanan, dan penambahan fitur langsung bersama tim pembuatnya.",
        deliverables: [
          "Pemantauan server & cadangan data otomatis",
          "Perbaikan cepat & pembaruan keamanan berkala",
          "Penyesuaian fitur seiring perkembangan alur kerja",
        ],
        ctaLabel: "Lihat Paket Dukungan",
        href: "mailto:business@lexentify.com", // <-- Diubah
      },
    ],
    bottomNote:
      "Punya kebutuhan alur kerja spesifik yang belum tercantum di atas?",
    bottomCta: {
      label: "Ceritakan Langsung ke Kami",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
  },
};
