import { LangCode } from "@/app/context/LangaugeContext";

export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
}

export interface PrivacyContent {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PrivacySection[];
  contactText: string;
  contactCta: string;
}

export const privacyContentByLang: Record<LangCode, PrivacyContent> = {
  en: {
    badge: "Privacy",
    title: "Privacy Policy",
    lastUpdated: "Last updated: November 2026",
    intro:
      "At Lexentify (and Lextel), we take your privacy seriously. This policy explains how we collect, use, and protect your information when you visit our website or engage our software engineering services.",
    sections: [
      {
        id: "information-collect",
        title: "1. Information We Collect",
        content: [
          "We only collect information that is necessary to communicate with you and deliver our services. This may include your name, email address, phone number, company/institution name, and project requirements you share with us.",
          "We do not collect sensitive personal data or financial information directly through our website.",
        ],
      },
      {
        id: "how-we-use",
        title: "2. How We Use Your Information",
        content: [
          "The information we collect is used strictly to: respond to your inquiries, prepare project proposals, deliver and maintain the software systems we build for you, and communicate important updates regarding our services.",
          "We will never sell, rent, or lease your personal or institutional data to third parties.",
        ],
      },
      {
        id: "data-security",
        title: "3. Data Security",
        content: [
          "We implement industry-standard security measures to protect your data. Any database or cloud infrastructure we build for your project is secured using modern encryption and access control protocols.",
          "We also enforce strict internal policies to ensure your proprietary business logic and source code are kept confidential and never reused for other clients.",
        ],
      },
      {
        id: "third-party",
        title: "4. Third-Party Services",
        content: [
          "We may use trusted third-party tools (such as secure cloud hosting providers and email service providers) to facilitate our operations. These third parties are bound by confidentiality agreements and are not permitted to use your data for their own marketing.",
        ],
      },
      {
        id: "your-rights",
        title: "5. Your Rights",
        content: [
          "You have the right to request access to the personal information we hold about you, request corrections, or ask for deletion. If you wish to exercise these rights, please contact us.",
        ],
      },
    ],
    contactText: "For any privacy-related inquiries, please contact us at",
    contactCta: "business@lexentify.com",
  },
  id: {
    badge: "Privasi",
    title: "Kebijakan Privasi",
    lastUpdated: "Terakhir diperbarui: November 2026",
    intro:
      "Di Lexentify (dan Lextel), kami sangat menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda mengunjungi website kami atau menggunakan layanan rekayasa perangkat lunak kami.",
    sections: [
      {
        id: "information-collect",
        title: "1. Informasi yang Kami Kumpulkan",
        content: [
          "Kami hanya mengumpulkan informasi yang diperlukan untuk berkomunikasi dengan Anda dan memberikan layanan kami. Ini dapat mencakup nama, alamat email, nomor telepon, nama perusahaan/institusi, dan kebutuhan proyek yang Anda bagikan kepada kami.",
          "Kami tidak mengumpulkan data pribadi yang sensitif atau informasi keuangan secara langsung melalui website kami.",
        ],
      },
      {
        id: "how-we-use",
        title: "2. Cara Kami Menggunakan Informasi Anda",
        content: [
          "Informasi yang kami kumpulkan digunakan secara ketat untuk: menjawab pertanyaan Anda, menyiapkan proposal proyek, mengirimkan dan memelihara sistem perangkat lunak yang kami buat untuk Anda, serta mengomunikasikan pembaruan penting terkait layanan kami.",
          "Kami tidak akan pernah menjual, menyewakan, atau memberikan data pribadi maupun data institusi Anda kepada pihak ketiga.",
        ],
      },
      {
        id: "data-security",
        title: "3. Keamanan Data",
        content: [
          "Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi data Anda. Setiap database atau infrastruktur cloud yang kami bangun untuk proyek Anda diamankan menggunakan protokol enkripsi dan kontrol akses modern.",
          "Kami juga menerapkan kebijakan internal yang ketat untuk memastikan logika bisnis dan kode sumber eksklusif Anda tetap bersifat rahasia dan tidak pernah digunakan ulang untuk klien lain.",
        ],
      },
      {
        id: "third-party",
        title: "4. Layanan Pihak Ketiga",
        content: [
          "Kami mungkin menggunakan alat pihak ketiga tepercaya (seperti penyedia hosting cloud aman dan penyedia layanan email) untuk memfasilitasi operasional kami. Pihak ketiga ini terikat oleh perjanjian kerahasiaan dan tidak diizinkan menggunakan data Anda untuk pemasaran mereka sendiri.",
        ],
      },
      {
        id: "your-rights",
        title: "5. Hak Anda",
        content: [
          "Anda berhak untuk meminta akses ke informasi pribadi yang kami simpan tentang Anda, meminta koreksi, atau meminta penghapusan. Jika Anda ingin menggunakan hak-hak ini, silakan hubungi kami.",
        ],
      },
    ],
    contactText: "Untuk pertanyaan terkait privasi, silakan hubungi kami di",
    contactCta: "business@lexentify.com",
  },
};
