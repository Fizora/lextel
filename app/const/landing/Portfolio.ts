import { LangCode } from "@/app/context/LangaugeContext";

export type ProjectCategory =
  | "all"
  | "operational"
  | "web-app"
  | "mobile-app"
  | "institutional";

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  category: Exclude<ProjectCategory, "all">;
  categoryLabel: string;
  client: string;
  title: string;
  /** Satu atau lebih screenshot. Gambar pertama jadi gambar utama. */
  images: PortfolioImage[];
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  liveUrl?: string;
  /** Link Google Play Store (opsional). Jika kosong, tombolnya tidak ditampilkan. */
  playStoreUrl?: string;
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
    viewPlayStore: string;
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
      "Beberapa contoh sistem yang kami rancang untuk dunia pendidikan: memangkas pekerjaan manual, mempercepat komunikasi, dan membuat setiap aspirasi tersampaikan dengan jelas.",
    filters: [
      { key: "all", label: "Semua Proyek" },
      { key: "operational", label: "Sistem Operasional" },
      { key: "web-app", label: "Aplikasi Web" },
      { key: "mobile-app", label: "Aplikasi Mobile" },
      { key: "institutional", label: "Website Institusi" },
    ],
    labels: {
      problem: "Tantangan Awal",
      solution: "Solusi Rekayasa",
      impact: "Dampak",
      viewDemo: "Pratinjau Live",
      viewPlayStore: "Dapatkan Aplikasi",
      viewDetail: "Detail Sistem",
      requestCaseStudy: "Diskusikan Sistem Serupa",
    },
    bottomCta: {
      note: "Ingin melihat alur pengguna dan tampilan lengkap setiap sistem?",
      label: "Lihat Semua Proyek & Detail Sistem",
      href: "/projects",
    },
    items: [
      {
        id: "aspirasi-siswa",
        slug: "aspirasi-sistem-kritik-saran-sekolah",
        category: "operational",
        categoryLabel: "Sistem Operasional",
        client: "SMKN 8 Malang",
        title: "Aspirasi: Sistem Pengaduan, Kritik & Saran Sekolah",
        images: [
          {
            src: "/img/content/aspirasi-1.jpeg",
            alt: "Dashboard admin Aspirasi berisi ringkasan siswa, guru, dan pengaduan terbaru",
          },
          {
            src: "/img/content/aspirasi-2.jpeg",
            alt: "Form pengaduan siswa dengan pilihan jenis pengaduan, mata pelajaran, dan guru",
          },
          {
            src: "/img/content/aspirasi-3.jpeg",
            alt: "Halaman admin untuk memantau dan melihat detail pengaduan",
          },
        ],
        problem:
          "Kritik, saran, dan keluhan terhadap guru maupun wali kelas tidak punya jalur resmi. Aspirasi siswa dan orang tua sulit disampaikan, tidak terdokumentasi, dan tidak terpantau oleh pihak sekolah.",
        solution:
          "Membangun platform pengaduan terpusat dengan tiga jenis laporan (Kritik & Saran, Pengaduan Guru, Pengaduan Wali Kelas), panel khusus siswa dan admin, riwayat status pengaduan, serta pengelolaan data siswa, guru, mapel, kelas, dan pengguna.",
        impact:
          "Semua aspirasi masuk ke satu tempat, tercatat rapi, dan dapat dipantau admin sekolah kapan saja.",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "parenting-chat",
        slug: "parenting-komunikasi-wali-kelas-orang-tua",
        category: "web-app",
        categoryLabel: "Aplikasi Web",
        client: "Sekolah (Wali Kelas, Orang Tua & Siswa)",
        title: "Parenting: Platform Komunikasi Wali Kelas & Orang Tua",
        images: [
          {
            src: "/img/content/parenting-1.jpeg",
            alt: "Halaman chat Parenting dengan percakapan dan lampiran dokumen PDF",
          },
          {
            src: "/img/content/parenting-2.jpeg",
            alt: "Dashboard wali kelas Parenting berisi thread terbaru dan statistik kelas",
          },
          {
            src: "/img/content/parenting-3.jpg",
            alt: "Tampilan responsif Parenting di ponsel dengan daftar percakapan wali kelas, orang tua, dan siswa",
          },
        ],
        problem:
          "Komunikasi wali kelas dengan orang tua dan siswa tersebar di grup chat pribadi. Informasi akademik, izin, dan perkembangan siswa mudah tenggelam dan tidak punya ruang koordinasi resmi.",
        solution:
          "Membangun platform web berbasis percakapan seperti WhatsApp, dengan thread per topik, kirim berkas lampiran, dan dashboard wali kelas yang menampilkan thread aktif serta pesan belum dibaca.",
        impact:
          "Informasi tersampaikan lebih jelas, cepat, dan terorganisir dalam satu ruang koordinasi resmi.",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "parkir-management",
        slug: "parkir-sistem-manajemen-transaksi-parkir",
        category: "operational",
        categoryLabel: "Sistem Operasional",
        client: "Pengelola Area Parkir",
        title: "Parkir: Sistem Manajemen & Transaksi Parkir",
        images: [
          {
            src: "/img/content/parkir-1.png",
            alt: "Halaman manajemen area parkir dengan daftar area dan kapasitas",
          },
          {
            src: "/img/content/parkir-2.png",
            alt: "Halaman manajemen kendaraan berisi plat nomor, jenis, warna, dan pemilik",
          },
          {
            src: "/img/content/parkir-3.png",
            alt: "Halaman transaksi parkir dengan struk parkir berisi durasi dan total biaya",
          },
          {
            src: "/img/content/parkir-4.png",
            alt: "Halaman manajemen tarif parkir per jam untuk setiap jenis kendaraan",
          },
        ],
        problem:
          "Pencatatan kendaraan masuk dan keluar, perhitungan biaya, serta pembagian area parkir dilakukan manual. Hasilnya rawan salah hitung, sulit dilacak, dan tidak ada jejak aktivitas petugas.",
        solution:
          "Membangun sistem parkir terpusat dengan manajemen user berbasis peran, area parkir beserta kapasitas, tarif per jam untuk tiap jenis kendaraan, data kendaraan dan pemilik, transaksi masuk/keluar dengan biaya otomatis, cetak struk, dan log aktivitas pengguna.",
        impact:
          "Biaya parkir dihitung otomatis dari durasi dan tarif, setiap transaksi punya struk, dan semua aktivitas petugas tercatat.",
        tech: [
          "Next.js",
          "Javascript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "quran-prima",
        slug: "quran-prima-aplikasi-al-quran-sekolah",
        category: "mobile-app",
        categoryLabel: "Aplikasi Mobile",
        client: "SMK PGRI 5 Jember",
        title: "Qur'an Prima: Aplikasi Al-Qur'an Mobile",
        images: [
          {
            src: "/img/content/quran-prima-1.jpg",
            alt: "Aplikasi Qur'an Prima dengan splash screen logo sekolah dan halaman Daftar Surah",
          },
        ],
        problem:
          "Siswa dan warga sekolah membutuhkan akses membaca Al-Qur'an yang praktis kapan saja, langsung dari ponsel, dengan identitas dan nuansa sekolah sendiri.",
        solution:
          "Membangun aplikasi mobile Qur'an Prima dengan daftar surah lengkap berisi nama latin dan Arab, jenis Makkiyah atau Madaniyah, serta jumlah ayat, dibalut branding SMK PGRI 5 Jember dan sudah dirilis di Google Play Store.",
        impact:
          "Al-Qur'an dapat diakses dari genggaman, dan aplikasi sudah tersedia untuk diunduh publik lewat Google Play Store.",
        tech: ["Flutter", "Dart"],
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=id.sch.smkpgri5.quranprima",
      },
    ],
  },
  en: {
    badge: "Portfolio & Case Studies",
    titleMain: "Real systems already",
    titleHighlight: "operating in the field.",
    description:
      "Selected systems built for education: cutting manual work, speeding up communication, and making sure every voice is heard clearly.",
    filters: [
      { key: "all", label: "All Projects" },
      { key: "operational", label: "Operational Systems" },
      { key: "web-app", label: "Web Applications" },
      { key: "mobile-app", label: "Mobile Apps" },
      { key: "institutional", label: "Institutional Websites" },
    ],
    labels: {
      problem: "Initial Bottleneck",
      solution: "Engineered Solution",
      impact: "Impact",
      viewDemo: "Live Preview",
      viewPlayStore: "Get the App",
      viewDetail: "System Details",
      requestCaseStudy: "Build Similar System",
    },
    bottomCta: {
      note: "Want to inspect the user flows and full system breakdown?",
      label: "Explore All Projects & System Details",
      href: "/projects",
    },
    items: [
      {
        id: "aspirasi-siswa",
        slug: "aspirasi-sistem-kritik-saran-sekolah",
        category: "operational",
        categoryLabel: "Operational System",
        client: "SMKN 8 Malang",
        title: "Aspirasi: School Complaint, Feedback & Suggestion System",
        images: [
          {
            src: "/img/content/aspirasi-1.jpeg",
            alt: "Aspirasi admin dashboard with student, teacher, and latest complaint summaries",
          },
          {
            src: "/img/content/aspirasi-2.jpeg",
            alt: "Student complaint form with complaint type, subject, and teacher selection",
          },
          {
            src: "/img/content/aspirasi-3.jpeg",
            alt: "Admin page for monitoring and viewing complaint details",
          },
        ],
        problem:
          "Feedback and complaints about teachers and homeroom teachers had no official channel. Student and parent voices were hard to raise, undocumented, and invisible to school management.",
        solution:
          "Built a centralized complaint platform with three report types (Feedback & Suggestions, Teacher Complaint, Homeroom Teacher Complaint), dedicated student and admin panels, complaint status history, and management of students, teachers, subjects, classes, and users.",
        impact:
          "Every submission lands in one place, is neatly recorded, and can be monitored by school admins at any time.",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "parenting-chat",
        slug: "parenting-komunikasi-wali-kelas-orang-tua",
        category: "web-app",
        categoryLabel: "Web Application",
        client: "School (Homeroom Teachers, Parents & Students)",
        title: "Parenting: Homeroom Teacher & Parent Communication Platform",
        images: [
          {
            src: "/img/content/parenting-1.jpeg",
            alt: "Parenting chat page with a conversation and a PDF attachment",
          },
          {
            src: "/img/content/parenting-2.jpeg",
            alt: "Parenting homeroom teacher dashboard with latest threads and class stats",
          },
          {
            src: "/img/content/parenting-4.jpg",
            alt: "Responsive Parenting interface on a phone showing the chat list between homeroom teachers, parents, and students",
          },
        ],
        problem:
          "Communication between homeroom teachers, parents, and students was scattered across personal group chats. Academic updates, leave requests, and progress notes got buried with no official coordination space.",
        solution:
          "Built a WhatsApp-like web platform with topic-based threads, file attachments, and a homeroom teacher dashboard showing active threads and unread messages.",
        impact:
          "Information reaches everyone more clearly, faster, and in an organized way, inside one official coordination space.",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "parkir-management",
        slug: "parkir-sistem-manajemen-transaksi-parkir",
        category: "operational",
        categoryLabel: "Operational System",
        client: "Parking Area Operator",
        title: "Parkir: Parking Management & Transaction System",
        images: [
          {
            src: "/img/content/parkir-1.png",
            alt: "Parking area management page listing areas and their capacity",
          },
          {
            src: "/img/content/parkir-2.png",
            alt: "Vehicle management page with plate number, type, color, and owner",
          },
          {
            src: "/img/content/parkir-3.png",
            alt: "Parking transaction page with a receipt showing duration and total fee",
          },
          {
            src: "/img/content/parkir-4.png",
            alt: "Parking rate management page with hourly rates per vehicle type",
          },
        ],
        problem:
          "Recording vehicle entries and exits, calculating fees, and assigning parking areas were done by hand. That meant calculation errors, poor traceability, and no audit trail of staff activity.",
        solution:
          "Built a centralized parking system with role-based user management, parking areas with capacity, hourly rates per vehicle type, vehicle and owner records, entry/exit transactions with automatic fees, receipt printing, and a user activity log.",
        impact:
          "Fees are calculated automatically from duration and rate, every transaction gets a receipt, and all staff activity is logged.",
        tech: [
          "Next.js",
          "Javascript",
          "Tailwind CSS",
          "Shadcn",
          "Prisma",
          "PostgreSql",
        ],
      },
      {
        id: "quran-prima",
        slug: "quran-prima-aplikasi-al-quran-sekolah",
        category: "mobile-app",
        categoryLabel: "Mobile App",
        client: "SMK PGRI 5 Jember",
        title: "Qur'an Prima: Mobile Qur'an App",
        images: [
          {
            src: "/img/content/quran-prima-1.jpg",
            alt: "Qur'an Prima app showing the school-logo splash screen and the Surah list page",
          },
        ],
        problem:
          "Students and school members needed practical access to read the Qur'an anytime from their phones, with the school's own identity and look.",
        solution:
          "Built the Qur'an Prima mobile app with a full surah list showing Latin and Arabic names, Makkiyah or Madaniyah classification, and verse counts, wrapped in SMK PGRI 5 Jember branding and published on Google Play Store.",
        impact:
          "The Qur'an is accessible from the palm of the hand, and the app is publicly available for download on Google Play Store.",
        tech: ["Flutter", "Dart"],
        playStoreUrl:
          "https://play.google.com/store/apps/details?id=id.sch.smkpgri5.quranprima",
      },
    ],
  },
};
