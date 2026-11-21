import {
  LuCpu,
  LuLayoutTemplate,
  LuWrench,
  LuSmartphone,
} from "react-icons/lu";

export const servicesContentByLang = {
  id: {
    badge: "Layanan Komprehensif Lextel",
    title: "Solusi Perangkat Lunak untuk Operasional Nyata.",
    subtitle:
      "Kami tidak sekadar membuat website visual yang pasif. Kami merekayasa sistem operasional, aplikasi web berperforma tinggi, dan infrastruktur digital yang dirancang langsung untuk mengoptimalkan alur kerja bisnis Anda.",
    ctaPrimary: "Diskusikan Kebutuhan Anda",
    ctaSecondary: "Lihat Portofolio",
    services: [
      {
        id: "ops-system",
        icon: LuCpu,
        title: "Sistem Operasional Kustom",
        tagline:
          "Mengganti spreadsheet manual & birokrasi rumit dengan sistem terpadu.",
        description:
          "Banyak instansi dan perusahaan masih terjebak dalam alur kerja yang terpecah, mulai dari spreadsheet, grup chat, hingga formulir kertas. Kami menyatukannya ke dalam satu sistem terpadu agar seluruh data terpusat dan setiap tahapan kerja memiliki penanggung jawab yang jelas. Prosesnya kami mulai dengan memetakan alur kerja Anda saat ini, lalu membangun sistem yang benar-benar sesuai kebutuhan.",
        features: [
          "Otomatisasi alur persetujuan & birokrasi internal",
          "Manajemen inventaris, database, dan rekap data real-time",
          "Dashboard analitik performa operasional harian",
          "Hak akses multi-level (Admin, Klien, Staf, Manajemen)",
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "Docker"],
        target:
          "Cocok untuk: Perusahaan distribusi, lembaga pendidikan, yayasan/pesantren, dan pabrik.",
      },
      {
        id: "web-app",
        icon: LuLayoutTemplate,
        title: "Aplikasi Web & SaaS",
        tagline:
          "Membangun produk digital berskala tinggi yang cepat dan siap diluncurkan.",
        description:
          "Punya ide produk software-as-a-service (SaaS) atau platform portal pelanggan? Kami membantu Anda mengeksekusi dari tahap arsitektur database, pengembangan frontend reaktif berkecepatan tinggi, hingga integrasi sistem pembayaran internasional.",
        features: [
          "Arsitektur frontend modern dengan Next.js & Tailwind CSS",
          "Integrasi payment gateway (Midtrans, Stripe, PayPal, dll)",
          "Optimasi performa tinggi (Core Web Vitals & SEO-ready)",
          "Keamanan data tingkat lanjut & enkripsi end-to-end",
        ],
        tech: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "REST/GraphQL API",
        ],
        target:
          "Cocok untuk: Startup teknologi, founder produk digital, dan agensi berkembang.",
      },
      {
        id: "mobile-app",
        icon: LuSmartphone,
        tagline:
          "Membangun aplikasi mobile Android yang terintegrasi, responsif, dan siap mendukung kebutuhan operasional bisnis Anda.",
        title: "Mobile Apps",
        description:
          "Untuk mereka yang bekerja di lapangan atau lebih sering memakai ponsel: guru, wali murid, kurir, tim sales, pelanggan. Aplikasi mobile terhubung ke backend yang sama dengan sistem web Anda, jadi datanya selalu sama di keduanya.",
        features: [
          "Notifikasi push untuk persetujuan, pengingat, dan pengumuman",
          "Kamera, scan QR, GPS, dan unggah file",
          "Mode offline yang tersinkron saat koneksi kembali",
          "Rilis ke Google Play",
        ],
        tech: [
          "Flutter",
          "React Native",
          "Expo",
          "TypeScript",
          "Firebase Cloud Messaging",
          "REST API",
        ],
        target:
          "Cocok untuk: presensi, laporan lapangan, aplikasi wali murid atau pelanggan, dan apa pun yang perlu ada di saku pengguna.",
      },

      {
        id: "maintenance",
        icon: LuWrench,
        title: "Pemeliharaan Sistem",
        tagline:
          "Memastikan infrastruktur digital Anda aman, stabil, dan selalu aktif 24/7.",
        description:
          "Perangkat lunak membutuhkan pemantauan, pembaruan keamanan, dan optimasi berkala. Melalui paket pemeliharaan bulanan kami, Anda tidak perlu cemas tentang *downtime*, kerentanan keamanan, atau lambatnya performa server.",
        features: [
          "Monitoring uptime server otomatis 24 jam sehari",
          "Pencadangan (backup) data berkala yang aman",
          "Pembaruan patch keamanan dan dependensi pustaka",
          "Alokasi jam pengembangan prioritas untuk fitur baru",
        ],
        tech: ["DevOps", "Docker", "Vercel/AWS", "CI/CD Pipeline"],
        target:
          "Cocok untuk: Pemilik bisnis yang ingin fokus pada pertumbuhan tanpa pusing urusan teknis.",
      },
    ],
    processTitle: "Metodologi Kerja Kami",
    processSubtitle:
      "Transparan, terukur, dan langsung berfokus pada hasil akhir yang fungsional.",
    steps: [
      {
        num: "01",
        title: "Analisis & Pemetaan Alur",
        desc: "Kami membedah alur kerja operasional Anda secara mendalam untuk menemukan titik hambatan (bottleneck) yang harus diselesaikan.",
      },
      {
        num: "02",
        title: "Arsitektur & Desain Sistem",
        desc: "Merancang kerangka teknis, skema database, dan purwarupa (prototype) antarmuka sebelum satu baris kode ditulis.",
      },
      {
        num: "03",
        title: "Pengembangan Agresif",
        desc: "Eksekusi kode berkualitas tinggi dengan standar rekayasa perangkat lunak modern yang bersih dan terdokumentasi.",
      },
      {
        num: "04",
        title: "Pengujian & Peluncuran",
        desc: "Uji coba menyeluruh terhadap beban data, keamanan, dan responsivitas, diikuti peluncuran mulus ke server produksi.",
      },
    ],
  },
  en: {
    badge: "Lextel Comprehensive Services",
    title: "Software Solutions for Real-World Operations.",
    subtitle:
      "We do not just build passive visual websites. We engineer operational systems, high-performance web applications, and digital infrastructure built directly to optimize your business workflows.",
    ctaPrimary: "Discuss Your Requirements",
    ctaSecondary: "View Portfolio",
    services: [
      {
        id: "ops-system",
        icon: LuCpu,
        title: "Custom Operational Systems",
        tagline:
          "Replacing manual spreadsheets & complex bureaucracy with unified systems.",
        description:
          "Many institutions and businesses are still stuck with fragmented workflows, juggling spreadsheets, group chats, and paper forms. We bring everything together into a single unified system, keeping all your data centralized with clear ownership at every stage. We start by mapping out your current workflow, then build a system tailored to what you truly need.",
        features: [
          "Automation of internal approval workflows & bureaucracy",
          "Real-time inventory management, databases, and data summaries",
          "Daily operational performance analytics dashboards",
          "Multi-level permission controls (Admin, Client, Staff, Management)",
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "Docker"],
        target:
          "Ideal for: Distribution companies, educational institutions, foundations, and manufacturing plants.",
      },
      {
        id: "web-app",
        icon: LuLayoutTemplate,
        title: "Web Applications & SaaS",
        tagline:
          "Building high-scale digital products that are fast and ready to launch.",
        description:
          "Have a software-as-a-service (SaaS) product idea or customer portal platform? We help you execute from database architecture and high-speed reactive frontend development to international payment gateway integrations.",
        features: [
          "Modern frontend architecture with Next.js & Tailwind CSS",
          "Payment gateway integration (Midtrans, Stripe, PayPal, etc.)",
          "High-performance optimization (Core Web Vitals & SEO-ready)",
          "Advanced data security & end-to-end encryption",
        ],
        tech: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "REST/GraphQL API",
        ],
        target:
          "Ideal for: Tech startups, digital product founders, and scaling agencies.",
      },
      {
        id: "mobile-app",
        icon: LuSmartphone,
        tagline:
          "Building integrated, responsive Android mobile applications ready to support your business operational needs.",
        title: "Mobile Apps",
        description:
          "For people who work in the field or mostly use their phones: teachers, parents, couriers, sales teams, customers. The mobile app connects to the same backend as your web system, so the data stays consistent on both.",
        features: [
          "Push notifications for approvals, reminders, and announcements",
          "Camera, QR scanning, GPS, and file upload",
          "Offline mode that syncs once the connection returns",
          "Publishing to Google Play",
        ],
        tech: [
          "Flutter",
          "React Native",
          "Expo",
          "TypeScript",
          "Firebase Cloud Messaging",
          "REST API",
        ],
        target:
          "Best for: attendance, field reporting, parent or customer apps, and anything people need in their pocket.",
      },
      {
        id: "maintenance",
        icon: LuWrench,
        title: "System Maintenance",
        tagline:
          "Ensuring your digital infrastructure remains secure, stable, and active 24/7.",
        description:
          "Software requires ongoing monitoring, security patching, and regular optimization. Through our monthly maintenance packages, you never have to worry about downtime, security vulnerabilities, or sluggish server performance.",
        features: [
          "Automated 24/7 server uptime monitoring",
          "Secure automated regular data backups",
          "Security patch updates and library dependency upkeep",
          "Dedicated development hour allocations for new features",
        ],
        tech: ["DevOps", "Docker", "Vercel/AWS", "CI/CD Pipeline"],
        target:
          "Ideal for: Business owners who want to focus on growth without technical hassles.",
      },
    ],
    processTitle: "Our Working Methodology",
    processSubtitle:
      "Transparent, measurable, and focused directly on functional end results.",
    steps: [
      {
        num: "01",
        title: "Analysis & Workflow Mapping",
        desc: "We deeply dissect your operational workflows to identify bottlenecks that need immediate resolution.",
      },
      {
        num: "02",
        title: "Architecture & System Design",
        desc: "Designing technical frameworks, database schemas, and interface prototypes before a single line of code is written.",
      },
      {
        num: "03",
        title: "Aggressive Development",
        desc: "Executing high-quality code adhering to clean, modern, and well-documented software engineering standards.",
      },
      {
        num: "04",
        title: "Testing & Deployment",
        desc: "Rigorous testing for data load, security, and responsiveness, followed by smooth deployment to production servers.",
      },
    ],
  },
};
