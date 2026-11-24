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
        title: "Sistem ERP Kustom",
        tagline:
          "Menyatukan proses bisnis inti ke dalam ERP yang dirancang sesuai alur kerja Anda.",
        description:
          "Kami merancang dan membangun sistem ERP kustom untuk menghubungkan proses bisnis inti—seperti pembelian, persediaan, penjualan, keuangan, dan operasional—dalam satu sumber data. Setiap implementasi dimulai dengan pemetaan proses dan kebutuhan, sehingga modul, alur persetujuan, laporan, serta hak akses mengikuti cara kerja bisnis Anda, bukan memaksa bisnis mengikuti sistem generik.",
        features: [
          "Modul ERP sesuai kebutuhan: persediaan, pembelian, penjualan, keuangan, atau SDM",
          "Alur kerja dan persetujuan lintas divisi yang terintegrasi",
          "Laporan serta dashboard operasional dari data terpusat",
          "Hak akses berbasis peran dan jejak aktivitas pengguna",
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "Docker"],
        target:
          "Cocok untuk: Bisnis dengan proses lintas divisi yang kompleks, seperti distribusi, manufaktur, pendidikan, dan organisasi multi-unit.",
      },
      {
        id: "web-app",
        icon: LuLayoutTemplate,
        title: "Aplikasi Web",
        tagline:
          "Membangun aplikasi yang berjalan di browser untuk kebutuhan pelanggan maupun tim internal.",
        description:
          "Kami mengembangkan aplikasi web sesuai kebutuhan spesifik Anda—mulai dari portal pelanggan dan dashboard hingga aplikasi internal berbasis alur kerja. Kami menangani perancangan antarmuka, backend dan basis data, integrasi layanan yang dibutuhkan, serta penerapan agar aplikasi mudah digunakan melalui browser di berbagai perangkat.",
        features: [
          "Portal pelanggan, dashboard, dan aplikasi internal berbasis browser",
          "Antarmuka responsif untuk desktop, tablet, dan ponsel",
          "Integrasi API, pembayaran, atau layanan pihak ketiga sesuai ruang lingkup",
          "Pengujian, optimasi performa, dan deployment aplikasi",
        ],
        tech: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "REST/GraphQL API",
        ],
        target:
          "Cocok untuk: Bisnis yang membutuhkan aplikasi web khusus untuk melayani pelanggan atau merapikan proses kerja internal.",
      },
      {
        id: "mobile-app",
        icon: LuSmartphone,
        tagline:
          "Membangun aplikasi mobile Android yang terintegrasi, responsif, dan siap mendukung kebutuhan operasional bisnis Anda.",
        title: "Aplikasi Mobile",
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
          "Monitoring uptime server otomatis 24/7",
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
        title: "Custom ERP Systems",
        tagline:
          "Unifying core business processes in an ERP tailored to your workflows.",
        description:
          "We design and build custom ERP systems that connect core business processes—such as purchasing, inventory, sales, finance, and operations—in one source of truth. Every implementation starts with process and requirements mapping, so modules, approvals, reports, and access controls fit the way your business works instead of forcing it into a generic system.",
        features: [
          "ERP modules tailored to your needs: inventory, purchasing, sales, finance, or HR",
          "Integrated workflows and approvals across departments",
          "Reports and operational dashboards from centralized data",
          "Role-based access controls and user activity logs",
        ],
        tech: ["Next.js", "TypeScript", "PostgreSQL", "NestJS", "Docker"],
        target:
          "Ideal for: Businesses with complex cross-department workflows, including distribution, manufacturing, education, and multi-unit organizations.",
      },
      {
        id: "web-app",
        icon: LuLayoutTemplate,
        title: "Web Applications",
        tagline:
          "Building browser-based applications for your customers and internal teams.",
        description:
          "We build web applications for your specific needs—from customer portals and dashboards to workflow-driven internal tools. We handle the interface, backend and database, required integrations, and deployment so your application is easy to use in a browser across devices.",
        features: [
          "Customer portals, dashboards, and browser-based internal applications",
          "Responsive interfaces for desktop, tablet, and mobile",
          "API, payment, or third-party service integrations as scoped",
          "Application testing, performance optimization, and deployment",
        ],
        tech: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "REST/GraphQL API",
        ],
        target:
          "Ideal for: Businesses that need a purpose-built web application for their customers or internal workflows.",
      },
      {
        id: "mobile-app",
        icon: LuSmartphone,
        tagline:
          "Building integrated, responsive Android mobile applications ready to support your business operational needs.",
        title: "Aplikasi Mobile",
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
