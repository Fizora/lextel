import { LangCode } from "@/app/context/LangaugeContext";

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

export interface TermsContent {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactText: string;
  contactCta: string;
}

export const termsContentByLang: Record<LangCode, TermsContent> = {
  en: {
    badge: "Legal",
    title: "Terms of Service",
    lastUpdated: "Last updated: November 2026",
    intro:
      "These Terms of Service govern your engagement with Lexentify (including our sub-brand Lextel) for the design, development, and maintenance of custom operational software, web applications, and institutional websites.",
    sections: [
      {
        id: "agreement",
        title: "1. Agreement to Terms",
        content: [
          "By engaging our services, signing a proposal, or making an initial payment, you agree to be bound by these Terms. If you are entering into this agreement on behalf of a company or institution, you represent that you have the authority to bind such entity.",
        ],
      },
      {
        id: "scope",
        title: "2. Scope of Services",
        content: [
          "We provide custom software engineering services. The specific deliverables, features, and timelines will be outlined in a separate Statement of Work (SoW) or project proposal agreed upon by both parties.",
          "Any features or requirements not explicitly mentioned in the agreed proposal are considered 'out of scope' and may require a separate agreement or additional fees.",
        ],
      },
      {
        id: "ip",
        title: "3. Intellectual Property & Ownership",
        content: [
          "Upon full payment of the agreed project fees, 100% of the custom source code, database schemas, and project documentation will be handed over to you.",
          "You retain full ownership of the infrastructure and cloud accounts required to run the system. We do not claim any vendor lock-in, hidden licensing fees, or perpetual royalties on the custom code we write for you.",
        ],
      },
      {
        id: "payment",
        title: "4. Payment & Billing",
        content: [
          "Projects are billed on a fixed-scope, milestone basis as outlined in the proposal. A non-refundable deposit is typically required to secure development time and begin the discovery phase.",
          "Failure to fulfill milestone payments may result in the suspension of development and withholding of final deliverables.",
        ],
      },
      {
        id: "client-responsibilities",
        title: "5. Client Responsibilities",
        content: [
          "To ensure timely delivery, you agree to provide necessary feedback, approvals, and access to required stakeholders within a reasonable timeframe. Delays in communication or feedback may shift the agreed project timeline.",
        ],
      },
      {
        id: "liability",
        title: "6. Limitation of Liability",
        content: [
          "Lexentify/Lextel will not be liable for any indirect, incidental, or consequential damages arising from the use of the delivered software. Our total liability is limited to the total amount paid for the specific project.",
        ],
      },
    ],
    contactText:
      "If you have any questions regarding these Terms, please contact us at",
    contactCta: "info@lexentify.com",
  },
  id: {
    badge: "Legal",
    title: "Syarat & Ketentuan",
    lastUpdated: "Terakhir diperbarui: November 2026",
    intro:
      "Syarat & Ketentuan ini mengatur keterlibatan Anda dengan Lexentify (termasuk sub-brand kami, Lextel) untuk desain, pengembangan, dan pemeliharaan perangkat lunak operasional kustom, aplikasi web, dan website institusi.",
    sections: [
      {
        id: "agreement",
        title: "1. Persetujuan Ketentuan",
        content: [
          "Dengan menggunakan layanan kami, menandatangani proposal, atau melakukan pembayaran awal, Anda setuju untuk terikat pada Ketentuan ini. Jika Anda menyetujui perjanjian ini atas nama perusahaan atau institusi, Anda menyatakan memiliki wewenang untuk mengikat entitas tersebut.",
        ],
      },
      {
        id: "scope",
        title: "2. Ruang Lingkup Layanan",
        content: [
          "Kami menyediakan layanan rekayasa perangkat lunak kustom. Deliverables, fitur, dan jadwal spesifik akan diuraikan dalam Statement of Work (SoW) atau proposal proyek terpisah yang disepakati oleh kedua belah pihak.",
          "Fitur atau kebutuhan apa pun yang tidak disebutkan secara eksplisit dalam proposal yang disepakati dianggap 'di luar ruang lingkup' (out of scope) dan mungkin memerlukan perjanjian terpisah atau biaya tambahan.",
        ],
      },
      {
        id: "ip",
        title: "3. Hak Kekayaan Intelektual & Kepemilikan",
        content: [
          "Setelah pelunasan biaya proyek yang disepakati, 100% kode sumber (source code) kustom, skema database, dan dokumentasi proyek akan diserahkan sepenuhnya kepada Anda.",
          "Anda memegang kepemilikan penuh atas infrastruktur dan akun cloud yang diperlukan untuk menjalankan sistem. Kami tidak menerapkan penguncian vendor (vendor lock-in), biaya lisensi tersembunyi, atau royalti berkelanjutan atas kode kustom yang kami buat untuk Anda.",
        ],
      },
      {
        id: "payment",
        title: "4. Pembayaran & Penagihan",
        content: [
          "Proyek ditagih berdasarkan ruang lingkup tetap (fixed-scope) dan bertahap (milestone) seperti yang diuraikan dalam proposal. Uang muka (deposit) umumnya diperlukan untuk mengamankan waktu pengembangan dan memulai fase penemuan (discovery).",
          "Kegagalan dalam memenuhi pembayaran tahapan dapat mengakibatkan penangguhan pengembangan dan penahanan hasil akhir (deliverables).",
        ],
      },
      {
        id: "client-responsibilities",
        title: "5. Tanggung Jawab Klien",
        content: [
          "Untuk memastikan pengiriman tepat waktu, Anda setuju untuk memberikan umpan balik, persetujuan, dan akses kepada pemangku kepentingan yang diperlukan dalam jangka waktu yang wajar. Keterlambatan dalam komunikasi atau umpan balik dapat menggeser jadwal proyek yang disepakati.",
        ],
      },
      {
        id: "liability",
        title: "6. Batasan Tanggung Jawab",
        content: [
          "Lexentify/Lextel tidak akan bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan perangkat lunak yang diserahkan. Total tanggung jawab kami terbatas pada jumlah total yang dibayarkan untuk proyek tersebut.",
        ],
      },
    ],
    contactText:
      "Jika Anda memiliki pertanyaan mengenai Ketentuan ini, silakan hubungi kami",
    contactCta: "info@lexentify.com",
  },
};
