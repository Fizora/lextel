import { LangCode } from "@/app/context/LangaugeContext";
import {
  LuCpu,
  LuLayoutTemplate,
  LuWrench,
  LuSmartphone,
} from "react-icons/lu";

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
    badge: "Lextel Comprehensive Services",
    titleMain: "Software Solutions for",
    titleHighlight: "Real-World Operations.",
    description:
      "We do not just build passive visual websites. We engineer operational systems, high-performance web applications, and digital infrastructure built directly to optimize your business workflows.",
    items: [
      {
        id: "ops-system",
        tag: "01 / CORE SYSTEM",
        title: "Custom Operational Systems",
        description:
          "Many institutions and businesses are still stuck with fragmented workflows, juggling spreadsheets, group chats, and paper forms. We bring everything together into a single unified system, keeping all your data centralized with clear ownership at every stage. We start by mapping out your current workflow, then build a system tailored to what you truly need.",
        deliverables: [
          "Automation of internal approval workflows & bureaucracy",
          "Real-time inventory management, databases, and data summaries",
          "Daily operational performance analytics dashboards",
          "Multi-level permission controls (Admin, Client, Staff, Management)",
        ],
        ctaLabel: "Discuss Your System",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "web-app",
        tag: "02 / WEB & SAAS",
        title: "Web Applications & SaaS",
        description:
          "Have a software-as-a-service (SaaS) product idea or customer portal platform? We help you execute from database architecture and high-speed reactive frontend development to international payment gateway integrations.",
        deliverables: [
          "Modern frontend architecture with Next.js & Tailwind CSS",
          "Payment gateway integration (Midtrans, Stripe, PayPal, etc.)",
          "High-performance optimization (Core Web Vitals & SEO-ready)",
          "Advanced data security & end-to-end encryption",
        ],
        ctaLabel: "Consult Web App",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "mobile-app",
        tag: "03 / MOBILE APPS",
        title: "Mobile Apps",
        description:
          "For people who work in the field or mostly use their phones: teachers, parents, couriers, sales teams, customers. The mobile app connects to the same backend as your web system, so the data stays consistent on both.",
        deliverables: [
          "Push notifications for approvals, reminders, and announcements",
          "Camera, QR scanning, GPS, and file upload",
          "Offline mode that syncs once the connection returns",
          "Publishing to Google Play",
        ],
        ctaLabel: "Consult Mobile App",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "maintenance",
        tag: "04 / LONG-TERM CARE",
        title: "System Maintenance",
        description:
          "Software requires ongoing monitoring, security patching, and regular optimization. Through our monthly maintenance packages, you never have to worry about downtime, security vulnerabilities, or sluggish server performance.",
        deliverables: [
          "Automated 24/7 server uptime monitoring",
          "Secure automated regular data backups",
          "Security patch updates and library dependency upkeep",
          "Dedicated development hour allocations for new features",
        ],
        ctaLabel: "See Care Plans",
        href: "mailto:info@lexentify.com",
      },
    ],
    bottomNote: "Have a specific workflow problem that doesn't fit a box?",
    bottomCta: {
      label: "Discuss Your Requirements",
      href: "mailto:info@lexentify.com",
    },
  },
  id: {
    badge: "Layanan Komprehensif Lextel",
    titleMain: "Solusi Perangkat Lunak untuk",
    titleHighlight: "Operasional Nyata.",
    description:
      "Kami tidak sekadar membuat website visual yang pasif. Kami merekayasa sistem operasional, aplikasi web berperforma tinggi, dan infrastruktur digital yang dirancang langsung untuk mengoptimalkan alur kerja bisnis Anda.",
    items: [
      {
        id: "ops-system",
        tag: "01 / SISTEM INTI",
        title: "Sistem Operasional Kustom",
        description:
          "Banyak instansi dan perusahaan masih terjebak dalam alur kerja yang terpecah, mulai dari spreadsheet, grup chat, hingga formulir kertas. Kami menyatukannya ke dalam satu sistem terpadu agar seluruh data terpusat dan setiap tahapan kerja memiliki penanggung jawab yang jelas. Prosesnya kami mulai dengan memetakan alur kerja Anda saat ini, lalu membangun sistem yang benar-benar sesuai kebutuhan.",
        deliverables: [
          "Otomatisasi alur persetujuan & birokrasi internal",
          "Manajemen inventaris, database, dan rekap data real-time",
          "Dashboard analitik performa operasional harian",
          "Hak akses multi-level (Admin, Klien, Staf, Manajemen)",
        ],
        ctaLabel: "Diskusikan Sistem Anda",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "web-app",
        tag: "02 / WEB & SAAS",
        title: "Aplikasi Web & SaaS",
        description:
          "Punya ide produk software-as-a-service (SaaS) atau platform portal pelanggan? Kami membantu Anda mengeksekusi dari tahap arsitektur database, pengembangan frontend reaktif berkecepatan tinggi, hingga integrasi sistem pembayaran internasional.",
        deliverables: [
          "Arsitektur frontend modern dengan Next.js & Tailwind CSS",
          "Integrasi payment gateway (Midtrans, Stripe, PayPal, dll)",
          "Optimasi performa tinggi (Core Web Vitals & SEO-ready)",
          "Keamanan data tingkat lanjut & enkripsi end-to-end",
        ],
        ctaLabel: "Konsultasi Aplikasi",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "mobile-app",
        tag: "03 / APLIKASI MOBILE",
        title: "Mobile Apps",
        description:
          "Untuk mereka yang bekerja di lapangan atau lebih sering memakai ponsel: guru, wali murid, kurir, tim sales, pelanggan. Aplikasi mobile terhubung ke backend yang sama dengan sistem web Anda, jadi datanya selalu sama di keduanya.",
        deliverables: [
          "Notifikasi push untuk persetujuan, pengingat, dan pengumuman",
          "Kamera, scan QR, GPS, dan unggah file",
          "Mode offline yang tersinkron saat koneksi kembali",
          "Rilis ke Google Play",
        ],
        ctaLabel: "Konsultasi Aplikasi Mobile",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "maintenance",
        tag: "04 / PENDAMPINGAN",
        title: "Pemeliharaan Sistem",
        description:
          "Perangkat lunak membutuhkan pemantauan, pembaruan keamanan, dan optimasi berkala. Melalui paket pemeliharaan bulanan kami, Anda tidak perlu cemas tentang downtime, kerentanan keamanan, atau lambatnya performa server.",
        deliverables: [
          "Monitoring uptime server otomatis 24 jam sehari",
          "Pencadangan (backup) data berkala yang aman",
          "Pembaruan patch keamanan dan dependensi pustaka",
          "Alokasi jam pengembangan prioritas untuk fitur baru",
        ],
        ctaLabel: "Lihat Paket Dukungan",
        href: "mailto:info@lexentify.com",
      },
    ],
    bottomNote:
      "Punya kebutuhan alur kerja spesifik yang belum tercantum di atas?",
    bottomCta: {
      label: "Diskusikan Kebutuhan Anda",
      href: "mailto:info@lexentify.com",
    },
  },
};
