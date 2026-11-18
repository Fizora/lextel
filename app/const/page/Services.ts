import { LangCode } from "@/app/context/LangaugeContext";
import { LuCpu, LuLayoutTemplate, LuBuilding2, LuWrench } from "react-icons/lu";

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
        id: "ops-system", // <-- Disesuaikan dengan Footer
        icon: LuCpu,
        title: "Sistem Operasional Kustom", // <-- Disesuaikan dengan Footer
        tagline:
          "Mengganti spreadsheet manual & birokrasi rumit dengan sistem terpadu.",
        description:
          "Setiap bisnis memiliki standar operasional yang unik. Memaksa bisnis Anda beradaptasi dengan perangkat lunak 'one-size-fits-all' justru memperlambat pertumbuhan. Kami membangun sistem operasional kustom yang memetakan persis alur kerja harian tim Anda.",
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
        id: "web-app", // <-- Disesuaikan dengan Footer
        icon: LuLayoutTemplate,
        title: "Aplikasi Web & SaaS", // <-- Disesuaikan dengan Footer
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
        id: "company-profile", // <-- Disesuaikan dengan Footer
        icon: LuBuilding2,
        title: "Website Institusi", // <-- Disesuaikan dengan Footer
        tagline: "Membangun kredibilitas digital yang kokoh dan berwibawa.",
        description:
          "Website institusi harus mencerminkan profesionalisme mutlak. Kami merancang situs web korporat, instansi, dan penyedia jasa profesional yang cepat, mudah dikelola, elegan, dan dirancang untuk mengonversi pengunjung menjadi klien nyata.",
        features: [
          "Desain UI/UX eksklusif, bersih, dan berorientasi konversi",
          "Sistem Manajemen Konten (CMS) yang mudah digunakan mandiri",
          "Optimasi kecepatan muat halaman di bawah 1 detik",
          "Struktur SEO teknis mendalam untuk dominasi mesin pencari",
        ],
        tech: ["Next.js", "Headless CMS", "Vercel Cloud", "Tailwind CSS"],
        target:
          "Cocok untuk: Firma hukum, lembaga pendidikan, kontraktor, dan perusahaan jasa B2B.",
      },
      {
        id: "maintenance", // <-- Disesuaikan dengan Footer
        icon: LuWrench,
        title: "Pemeliharaan Sistem", // <-- Disesuaikan dengan Footer
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
        id: "ops-system", // <-- Disesuaikan dengan Footer
        icon: LuCpu,
        title: "Custom Operational Systems", // <-- Disesuaikan dengan Footer
        tagline:
          "Replacing manual spreadsheets & complex bureaucracy with unified systems.",
        description:
          "Every business has unique operational standards. Forcing your business to adapt to 'one-size-fits-all' software slows down growth. We build custom operational systems mapped precisely to your team's daily workflows.",
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
        id: "web-app", // <-- Disesuaikan dengan Footer
        icon: LuLayoutTemplate,
        title: "Web Applications & SaaS", // <-- Disesuaikan dengan Footer
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
        id: "company-profile", // <-- Disesuaikan dengan Footer
        icon: LuBuilding2,
        title: "Institutional Websites", // <-- Disesuaikan dengan Footer
        tagline:
          "Establishing a rock-solid, authoritative digital credibility.",
        description:
          "Institutional websites must project absolute professionalism. We design corporate sites, government bodies, and professional service providers that are fast, easy to manage, elegant, and engineered to convert visitors into real clients.",
        features: [
          "Exclusive, clean, and conversion-oriented UI/UX design",
          "Intuitive Content Management System (CMS) for independent updates",
          "Page load speed optimization under 1 second",
          "In-depth technical SEO architecture for search engine dominance",
        ],
        tech: ["Next.js", "Headless CMS", "Vercel Cloud", "Tailwind CSS"],
        target:
          "Ideal for: Law firms, educational institutions, contractors, and B2B service providers.",
      },
      {
        id: "maintenance", // <-- Disesuaikan dengan Footer
        icon: LuWrench,
        title: "System Maintenance", // <-- Disesuaikan dengan Footer
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
