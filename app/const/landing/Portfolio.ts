import { LangCode } from "@/app/context/LangaugeContext";

export type ProjectCategory =
  | "all"
  | "operational"
  | "web-app"
  | "institutional";

export interface PortfolioItem {
  id: string;
  slug: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  client: string;
  title: string;
  previewImage: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  liveUrl?: string;
}

export interface PortfolioContent {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  filters: {
    key: ProjectCategory;
    label: string;
  }[];
  labels: {
    problem: string;
    solution: string;
    impact: string;
    viewDemo: string;
    viewDetail: string;
    requestCaseStudy: string;
  };
  bottomCta: {
    note: string;
    label: string;
    href: string;
  };
  items: PortfolioItem[];
}

export const portfolioContentByLang: Record<LangCode, PortfolioContent> = {
  id: {
    badge: "Portofolio & Studi Kasus",
    titleMain: "Sistem nyata yang sudah",
    titleHighlight: "bekerja di lapangan.",
    description:
      "Beberapa contoh sistem operasional, aplikasi web, dan situs institusi yang kami rancang untuk memotong pekerjaan manual dan mempercepat pengambilan keputusan.",
    filters: [
      { key: "all", label: "Semua Proyek" },
      { key: "operational", label: "Sistem Operasional" },
      { key: "web-app", label: "Aplikasi Web" },
      { key: "institutional", label: "Website Institusi" },
    ],
    labels: {
      problem: "Tantangan Awal",
      solution: "Solusi Rekayasa",
      impact: "Dampak Terukur",
      viewDemo: "Pratinjau Live",
      viewDetail: "Detail Sistem",
      requestCaseStudy: "Diskusikan Sistem Serupa",
    },
    bottomCta: {
      note: "Ingin melihat arsitektur database, alur pengguna, dan tampilan lengkap setiap sistem?",
      label: "Lihat Semua Proyek & Detail Sistem",
      href: "/projects",
    },
    items: [
      {
        id: "pesantren-erp",
        slug: "sistem-administrasi-keuangan-terpadu",
        category: "operational",
        categoryLabel: "Sistem Operasional",
        client: "Lembaga Pendidikan & Pesantren",
        title: "Sistem Administrasi & Keuangan Terpadu",
        previewImage: "/img/content/dashboard.jpg ",
        problem:
          "Pencatatan tagihan bulanan, perizinan santri, dan laporan kas tersebar di belasan file spreadsheet terpisah sehingga rekapitulasi akhir bulan memakan waktu berhari-hari.",
        solution:
          "Membangun platform terpusat dengan hak akses bertingkat (bendahara, pengurus asrama, pimpinan), notifikasi tagihan otomatis, dan log audit transaksi real-time.",
        impact:
          "Waktu rekapitulasi bulanan berkurang 85% dengan nol selisih pencatatan.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      },
      {
        id: "service-booking-platform",
        slug: "portal-penjadwalan-estimasi-layanan",
        category: "web-app",
        categoryLabel: "Aplikasi Web",
        client: "Perusahaan Jasa & Teknisi Lapangan",
        title: "Portal Penjadwalan & Estimasi Layanan",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Calon pelanggan kesulitan mendapatkan estimasi biaya cepat dan tim admin kewalahan mengatur jadwal kunjungan teknisi melalui pesan chat manual.",
        solution:
          "Merancang aplikasi web interaktif dengan kalkulator estimasi otomatis, pemetaan jadwal teknisi harian, dan konfirmasi instan ke sistem internal.",
        impact:
          "Peningkatan konversi permintaan layanan masuk hingga 2,4x lipat.",
        tech: ["React", "Next.js", "TypeScript", "REST API"],
        liveUrl: "https://wcaircon.lexentify.com",
      },
      {
        id: "institutional-portal",
        slug: "situs-korporat-pusat-dokumen-publik",
        category: "institutional",
        categoryLabel: "Website Institusi",
        client: "Instansi & Penyedia Jasa B2B",
        title: "Situs Korporat & Pusat Dokumen Publik",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Website lama lambat diakses dari ponsel, sulit diperbarui oleh staf non-teknis, dan gagal menampilkan kredibilitas institusi di hadapan mitra.",
        solution:
          "Membangun ulang arsitektur frontend berkecepatan tinggi (< 1 detik) dengan struktur konten dwibahasa, SEO teknis lengkap, dan panel pembaruan mandiri.",
        impact:
          "Skor performa halaman mencapai 99/100 dan lonjakan prospek B2B organik.",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "SEO Architecture"],
        liveUrl: "https://adpplumbing.lexentify.com",
      },
      {
        id: "inventory-approval",
        slug: "sistem-pengadaan-persetujuan-berjenjang",
        category: "operational",
        categoryLabel: "Sistem Operasional",
        client: "Perusahaan Distribusi & Logistik",
        title: "Sistem Pengadaan & Persetujuan Berjenjang",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Pengajuan pembelian barang dari cabang sering tertahan berhari-hari karena dokumen fisik harus ditandatangani manual di kantor pusat.",
        solution:
          "Mengotomatiskan alur pengajuan, verifikasi anggaran, dan persetujuan digital satu klik lengkap dengan rekap stok gudang real-time.",
        impact:
          "Siklus persetujuan pengadaan terpangkas dari 4 hari menjadi di bawah 3 jam.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
      },
    ],
  },
  en: {
    badge: "Portfolio & Case Studies",
    titleMain: "Real systems already",
    titleHighlight: "operating in the field.",
    description:
      "Selected operational systems, web applications, and institutional websites engineered to eliminate manual bottlenecks and accelerate daily execution.",
    filters: [
      { key: "all", label: "All Projects" },
      { key: "operational", label: "Operational Systems" },
      { key: "web-app", label: "Web Applications" },
      { key: "institutional", label: "Institutional Websites" },
    ],
    labels: {
      problem: "Initial Bottleneck",
      solution: "Engineered Solution",
      impact: "Measured Impact",
      viewDemo: "Live Preview",
      viewDetail: "System Details",
      requestCaseStudy: "Build Similar System",
    },
    bottomCta: {
      note: "Want to inspect the database architecture, user flows, and full system breakdown?",
      label: "Explore All Projects & System Details",
      href: "/projects",
    },
    items: [
      {
        id: "pesantren-erp",
        slug: "sistem-administrasi-keuangan-terpadu",
        category: "operational",
        categoryLabel: "Operational System",
        client: "Educational & Boarding Institution",
        title: "Unified Administration & Finance Platform",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Monthly billing, student leave approvals, and cash reports were scattered across dozens of spreadsheets, making end-of-month reconciliation take days.",
        solution:
          "Built a centralized platform with role-based permissions (treasury, dormitory staff, leadership), automated billing alerts, and real-time transaction audit logs.",
        impact:
          "Monthly reconciliation time cut by 85% with zero ledger discrepancies.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      },
      {
        id: "service-booking-platform",
        slug: "portal-penjadwalan-estimasi-layanan",
        category: "web-app",
        categoryLabel: "Web Application",
        client: "Field Service & Technical Operations",
        title: "Instant Dispatch & Quote Portal",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Prospective clients struggled to get fast service quotes while dispatchers were overwhelmed coordinating field technicians manually over chat.",
        solution:
          "Engineered an interactive web application with instant quote routing, technician dispatch scheduling, and automated inquiry capture.",
        impact: "2.4x increase in qualified inbound service bookings.",
        tech: ["React", "Next.js", "TypeScript", "REST API"],
        liveUrl: "https://wcaircon.lexentify.com",
      },
      {
        id: "institutional-portal",
        slug: "situs-korporat-pusat-dokumen-publik",
        category: "institutional",
        categoryLabel: "Institutional Website",
        client: "B2B Service & Institutional Provider",
        title: "High-Authority Corporate & Public Portal",
        previewImage: "/img/portfolio/adpplumbing-preview.png",
        problem:
          "The legacy site loaded slowly on mobile, required developer intervention for basic text edits, and failed to establish trust with enterprise partners.",
        solution:
          "Rebuilt the frontend architecture for sub-second load speeds with bilingual support, deep technical SEO, and an intuitive self-managed content workflow.",
        impact:
          "99/100 performance score and sustained growth in organic B2B inquiries.",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "SEO Architecture"],
        liveUrl: "https://adpplumbing.lexentify.com",
      },
      {
        id: "inventory-approval",
        slug: "sistem-pengadaan-persetujuan-berjenjang",
        category: "operational",
        categoryLabel: "Operational System",
        client: "Distribution & Supply Chain Company",
        title: "Multi-Level Procurement & Inventory System",
        previewImage: "/img/content/dashboard.jpg",
        problem:
          "Branch purchase requests stalled for days waiting for physical signatures and manual stock checks at headquarters.",
        solution:
          "Automated requisition routing, budget validation, and one-click digital approvals synced directly with real-time warehouse stock levels.",
        impact:
          "Procurement approval cycle reduced from 4 days to under 3 hours.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
      },
    ],
  },
};
