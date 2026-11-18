import { LangCode } from "@/app/context/LangaugeContext";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent {
  badge: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  items: FAQItem[];
  contactPrompt: string;
  contactCta: {
    label: string;
    href: string;
  };
}

export const faqContentByLang: Record<LangCode, FAQContent> = {
  en: {
    badge: "Common Questions",
    titleMain: "Clear answers before",
    titleHighlight: "we build together.",
    description:
      "Everything you need to know about our engineering process, ownership, timelines, and ongoing support.",
    items: [
      {
        id: "timeline",
        question: "How long does it take to build a custom operational system?",
        answer:
          "A focused web application or institutional website typically takes 2 to 4 weeks. Full-scale operational platforms with multi-role approvals, automated billing, and custom reporting take 4 to 8 weeks with weekly working demos from week one.",
      },
      {
        id: "ownership",
        question: "Do we own the source code and database after completion?",
        answer:
          "Yes, 100%. Once the project is handed over, you own the full source code, database schema, and cloud infrastructure accounts—with zero vendor lock-in or hidden licensing fees.",
      },
      {
        id: "changes",
        question: "What if our workflow changes during or after development?",
        answer:
          "We build iteratively in weekly sprints so you can test real features early and request adjustments before launch. After launch, you can subscribe to our maintenance plan or request on-demand feature additions anytime.",
      },
      {
        id: "pricing",
        question: "How is pricing structured?",
        answer:
          "We work on transparent, fixed-scope milestones agreed upon before a single line of code is written. You pay in stages tied to clear deliverables—never open-ended hourly billing.",
      },
      {
        id: "training",
        question: "Will you train our staff to use the new system?",
        answer:
          "Every deployment includes hands-on onboarding sessions for your administrators and staff, complete with concise documentation and direct support channels during your transition period.",
      },
    ],
    contactPrompt:
      "Still have a specific question about your institution's workflow?",
    contactCta: {
      label: "Ask Us Directly",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
  },
  id: {
    badge: "Pertanyaan Umum",
    titleMain: "Jawaban jelas sebelum",
    titleHighlight: "kita mulai membangun.",
    description:
      "Semua hal yang perlu Anda ketahui tentang proses pengerjaan, kepemilikan sistem, estimasi waktu, dan dukungan jangka panjang.",
    items: [
      {
        id: "timeline",
        question: "Berapa lama waktu pengerjaan sistem operasional kustom?",
        answer:
          "Website institusi atau aplikasi web terfokus umumnya selesai dalam 2 hingga 4 minggu. Sistem operasional skala penuh dengan alur persetujuan bertingkat, otomatisasi administrasi, dan laporan khusus memakan waktu 4 hingga 8 minggu dengan demo progres setiap minggu.",
      },
      {
        id: "ownership",
        question:
          "Apakah kode sumber (source code) dan database sepenuhnya menjadi milik kami?",
        answer:
          "Ya, 100%. Setelah serah terima selesai, seluruh kode sumber, struktur database, dan akun server/cloud sepenuhnya menjadi milik institusi Anda tanpa biaya lisensi tersembunyi atau ketergantungan vendor.",
      },
      {
        id: "changes",
        question:
          "Bagaimana jika ada penyesuaian alur kerja saat atau setelah sistem dibuat?",
        answer:
          "Kami bekerja secara bertahap per minggu sehingga Anda bisa langsung menguji fitur sejak awal dan memberi masukan sebelum rilis. Setelah sistem berjalan, Anda bisa mengambil paket pemeliharaan atau mengajukan penambahan fitur kapan saja.",
      },
      {
        id: "pricing",
        question: "Bagaimana sistem perhitungan biayanya?",
        answer:
          "Kami menggunakan sistem harga tetap (fixed-price) yang transparan berdasarkan ruang lingkup yang disepakati di awal. Pembayaran dilakukan bertahap sesuai target penyelesaian fitur—bukan hitungan per jam yang tidak pasti.",
      },
      {
        id: "training",
        question:
          "Apakah staf kami akan dilatih untuk mengoperasikan sistemnya?",
        answer:
          "Setiap serah terima sudah termasuk sesi pelatihan langsung untuk admin dan staf operasional, panduan penggunaan ringkas, serta jalur dukungan langsung selama masa transisi.",
      },
    ],
    contactPrompt:
      "Masih ada pertanyaan spesifik seputar kebutuhan alur kerja Anda?",
    contactCta: {
      label: "Tanyakan Langsung",
      href: "mailto:business@lexentify.com", // <-- Diubah
    },
  },
};
