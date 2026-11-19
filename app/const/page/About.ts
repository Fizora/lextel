import { LangCode } from "@/app/context/LangaugeContext";
import { IconType } from "react-icons";
import { LuTarget, LuZap, LuShieldCheck, LuCode } from "react-icons/lu";

export interface PrincipleItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface AboutPageContent {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  stats: StatItem[];
  principlesBadge: string;
  principlesTitle: string;
  principlesSubtitle: string;
  principles: PrincipleItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
}

export const aboutContentByLang: Record<LangCode, AboutPageContent> = {
  id: {
    badge: "Tentang LEXTEL",
    titleMain: "Membangun sistem yang",
    titleHighlight: "benar-benar dipakai.",
    subtitle:
      "Lextel adalah sub-brand rekayasa sistem operasional dari Lexentify. Kami hadir untuk menjembatani kesenjangan antara perangkat lunak generik yang kaku dengan kebutuhan operasional nyata institusi dan perusahaan di Indonesia.",
    storyTitle: "Mengapa Lextel Dibangun",
    storyParagraphs: [
      "Banyak institusi, sekolah, pesantren, maupun perusahaan berkembang terjebak di antara dua pilihan buruk: bertahan dengan tumpukan spreadsheet manual yang rawan kesalahan, atau membeli software siap pakai yang rumit dan memaksa tim mengubah cara kerja mereka.",
      "Lextel lahir untuk menghadirkan jalan ketiga: perangkat lunak operasional yang dirancang dari nol mengikuti alur kerja nyata Anda—tanpa lapisan birokrasi agensi yang lambat, tanpa fitur mubazir yang membingungkan pengguna.",
      "Anda berkomunikasi langsung dengan para insinyur yang merancang dan menulis kode sistem Anda, memastikan setiap keputusan teknis berdampak langsung pada kecepatan dan ketertiban operasional harian.",
    ],
    stats: [
      {
        value: "100%",
        label: "Kepemilikan Sistem",
        sublabel: "Kode sumber & database penuh milik klien",
      },
      {
        value: "< 1 dtk",
        label: "Target Waktu Muat",
        sublabel: "Arsitektur modern berkecepatan tinggi",
      },
      {
        value: "Langsung",
        label: "Tanpa Perantara",
        sublabel: "Diskusi teknis langsung dengan pembuatnya",
      },
    ],
    principlesBadge: "Prinsip Rekayasa",
    principlesTitle: "Cara kami merancang setiap baris kode.",
    principlesSubtitle:
      "Empat standar kerja yang selalu kami pegang dalam membangun perangkat lunak operasional.",
    principles: [
      {
        id: "real-workflow",
        icon: LuTarget,
        title: "Berangkat dari Alur Nyata",
        description:
          "Kami memetakan kebiasaan dan kebutuhan lapangan tim Anda terlebih dahulu sebelum menentukan struktur database maupun antarmuka.",
      },
      {
        id: "fast-clean",
        icon: LuZap,
        title: "Cepat, Bersih, dan Terarah",
        description:
          "Antarmuka dirancang bebas gangguan agar staf baru dapat mengoperasikannya dalam hitungan menit tanpa pelatihan berbelit.",
      },
      {
        id: "full-ownership",
        icon: LuShieldCheck,
        title: "Transparansi & Kepemilikan Penuh",
        description:
          "Tidak ada biaya lisensi per pengguna yang mencekik atau penguncian vendor. Infrastruktur dan kode sepenuhnya menjadi aset institusi Anda.",
      },
      {
        id: "modern-stack",
        icon: LuCode,
        title: "Arsitektur Modern & Terukur",
        description:
          "Dibangun menggunakan teknologi web mutakhir (Next.js, TypeScript, dan cloud modern) agar siap menangani pertumbuhan data bertahun-tahun ke depan.",
      },
    ],
    ctaTitle: "Siap merapikan operasional institusi Anda?",
    ctaDescription:
      "Ceritakan alur kerja yang ingin Anda otomatisasi. Kami akan membantu memetakan solusi sistem yang paling tepat dan masuk akal.",
    ctaPrimary: {
      label: "Mulai Diskusi",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
    ctaSecondary: {
      label: "Lihat Rincian Layanan",
      href: "/services",
    },
  },
  en: {
    badge: "About LEXTEL",
    titleMain: "Engineering systems that",
    titleHighlight: "actually get used.",
    subtitle:
      "Lextel is the operational systems engineering arm of Lexentify. We exist to bridge the gap between rigid off-the-shelf software and the real daily workflows of institutions and growing businesses.",
    storyTitle: "Why Lextel Exists",
    storyParagraphs: [
      "Too many institutions, schools, and growing companies are stuck between two bad options: surviving on fragile manual spreadsheets, or buying bloated off-the-shelf software that forces their staff to change how they work.",
      "Lextel was created to provide a third path: operational software engineered from scratch around your actual workflow—without slow agency bureaucracy or unnecessary feature bloat.",
      "You work directly with the engineers designing and writing your system, ensuring every technical decision translates directly into faster, cleaner daily operations.",
    ],
    stats: [
      {
        value: "100%",
        label: "System Ownership",
        sublabel: "Full source code & database handover",
      },
      {
        value: "< 1 sec",
        label: "Target Load Speed",
        sublabel: "High-speed modern web architecture",
      },
      {
        value: "Direct",
        label: "Zero Middlemen",
        sublabel: "Collaborate directly with the builders",
      },
    ],
    principlesBadge: "Engineering Principles",
    principlesTitle: "How we architect every line of code.",
    principlesSubtitle:
      "Four non-negotiable standards we uphold in every operational system we deliver.",
    principles: [
      {
        id: "real-workflow",
        icon: LuTarget,
        title: "Built Around Real Workflows",
        description:
          "We map your team's on-the-ground habits and bottlenecks first before designing database schemas or user interfaces.",
      },
      {
        id: "fast-clean",
        icon: LuZap,
        title: "Fast, Clean, and Directed",
        description:
          "Interfaces are stripped of visual clutter so new staff can master the system in minutes rather than weeks.",
      },
      {
        id: "full-ownership",
        icon: LuShieldCheck,
        title: "Transparency & Full Ownership",
        description:
          "No predatory per-seat licensing fees or vendor lock-in. Your codebase and cloud infrastructure belong 100% to your institution.",
      },
      {
        id: "modern-stack",
        icon: LuCode,
        title: "Modern, Scalable Architecture",
        description:
          "Engineered with proven modern web technologies (Next.js, TypeScript, and resilient cloud infrastructure) built to scale for years.",
      },
    ],
    ctaTitle: "Ready to streamline your operations?",
    ctaDescription:
      "Tell us about the workflow you want to automate. We will help map out a clear, practical system tailored to your team.",
    ctaPrimary: {
      label: "Start a Conversation",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
    ctaSecondary: {
      label: "Explore Services",
      href: "/services",
    },
  },
};
