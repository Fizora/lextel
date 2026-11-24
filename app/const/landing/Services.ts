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
    badge: "Lextel Comprehensive Services",
    titleMain: "Software Solutions for",
    titleHighlight: "Real-World Operations.",
    description:
      "We do not just build passive visual websites. We engineer operational systems, high-performance web applications, and digital infrastructure built directly to optimize your business workflows.",
    items: [
      {
        id: "ops-system",
        tag: "01 / CUSTOM ERP",
        title: "Custom ERP Systems",
        description:
          "We design and build custom ERP systems that connect core business processes—such as purchasing, inventory, sales, finance, and operations—in one source of truth. Every implementation starts with process and requirements mapping, so modules, approvals, reports, and access controls fit the way your business works.",
        deliverables: [
          "ERP modules tailored to your needs: inventory, purchasing, sales, finance, or HR",
          "Integrated workflows and approvals across departments",
          "Reports and operational dashboards from centralized data",
          "Role-based access controls and user activity logs",
        ],
        ctaLabel: "Discuss Your System",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "web-app",
        tag: "02 / WEB APPLICATION",
        title: "Web Applications",
        description:
          "We build web applications for your specific needs—from customer portals and dashboards to workflow-driven internal tools. We handle the interface, backend and database, required integrations, and deployment so your application is easy to use in a browser across devices.",
        deliverables: [
          "Customer portals, dashboards, and browser-based internal applications",
          "Responsive interfaces for desktop, tablet, and mobile",
          "API, payment, or third-party service integrations as scoped",
          "Application testing, performance optimization, and deployment",
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
        tag: "01 / ERP KUSTOM",
        title: "Sistem ERP Kustom",
        description:
          "Kami merancang dan membangun sistem ERP kustom untuk menghubungkan proses bisnis inti—seperti pembelian, persediaan, penjualan, keuangan, dan operasional—dalam satu sumber data. Setiap implementasi dimulai dengan pemetaan proses dan kebutuhan, sehingga modul, alur persetujuan, laporan, serta hak akses mengikuti cara kerja bisnis Anda.",
        deliverables: [
          "Modul ERP sesuai kebutuhan: persediaan, pembelian, penjualan, keuangan, atau SDM",
          "Alur kerja dan persetujuan lintas divisi yang terintegrasi",
          "Laporan serta dashboard operasional dari data terpusat",
          "Hak akses berbasis peran dan jejak aktivitas pengguna",
        ],
        ctaLabel: "Diskusikan Sistem Anda",
        href: "mailto:info@lexentify.com",
      },
      {
        id: "web-app",
        tag: "02 / APLIKASI WEB",
        title: "Aplikasi Web",
        description:
          "Kami mengembangkan aplikasi web sesuai kebutuhan spesifik Anda—mulai dari portal pelanggan dan dashboard hingga aplikasi internal berbasis alur kerja. Kami menangani antarmuka, backend dan basis data, integrasi layanan yang dibutuhkan, serta deployment agar aplikasi mudah digunakan melalui browser di berbagai perangkat.",
        deliverables: [
          "Portal pelanggan, dashboard, dan aplikasi internal berbasis browser",
          "Antarmuka responsif untuk desktop, tablet, dan ponsel",
          "Integrasi API, pembayaran, atau layanan pihak ketiga sesuai ruang lingkup",
          "Pengujian, optimasi performa, dan deployment aplikasi",
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
          "Monitoring uptime server otomatis 24/7",
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
