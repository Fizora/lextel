import { LangCode } from "@/app/context/LangaugeContext";

export interface SupportListItem {
  text: string;
  included: boolean;
}

export interface SupportSection {
  id: string;
  title: string;
  content: string[];
}

export interface SupportStep {
  title: string;
  text: string;
}

export interface SupportContent {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;

  /* Section: How we work */
  howWeWorkLabel: string;
  howWeWorkHeading: string;
  principles: SupportSection[];

  /* Section: Project flow */
  projectFlowLabel: string;
  projectFlowHeading: string;
  projectFlowSub: string;
  steps: SupportStep[];

  /* Section: Support scope */
  supportScopeLabel: string;
  supportScopeHeading: string;
  includedLabel: string;
  covered: string[];
  quotedLabel: string;
  notCovered: string[];
  quotedNote: string;

  /* Section: Request checklist */
  requestChecklistLabel: string;
  requestChecklist: string[];

  /* Section: Get in touch */
  getInTouchLabel: string;
  getInTouchHeading: string;
  existingClientsBadge: string;
  existingClientsText: string;
  includeLabel: string;
  prospectiveClientsBadge: string;
  prospectiveClientsText: string;

  /* Contact box */
  contactText: string;
  contactCta: string;
}

export const supportContentByLang: Record<LangCode, SupportContent> = {
  en: {
    badge: "Support",
    title: "Support",
    lastUpdated: "Last updated: November 2026",
    intro:
      "Learn how we communicate, review work with you, handle support after launch, and document the terms of every engagement.",

    /* How we work */
    howWeWorkLabel: "How we work with clients",
    howWeWorkHeading:
      "We make responsibilities, boundaries and expectations clear before any work begins.",
    principles: [
      {
        id: "reviewing",
        title: "Reviewing the work with you",
        content: [
          "We agree on review milestones before full development begins. How reviews work, how many revisions are included, how approval is given and any cancellation option are written in the project agreement.",
        ],
      },
      {
        id: "post-launch",
        title: "Defined post-launch support",
        content: [
          "Each project has a support period and scope in its written agreement. Support covers eligible issues within the agreed deliverables. New features, extra content and third-party service issues may need separate work.",
        ],
      },
      {
        id: "pricing",
        title: "Clear pricing and scope",
        content: [
          "The written proposal and project agreement set the agreed price and deliverables. Changes to scope, price or timeline need written approval before the extra work starts.",
        ],
      },
      {
        id: "terms",
        title: "Written project terms",
        content: [
          "Before work starts, both sides should have written terms covering scope, payment schedule, timeline, review process, ownership, support and cancellation.",
        ],
      },
    ],

    /* Project flow */
    projectFlowLabel: "How a project proceeds",
    projectFlowHeading: "Five steps, all in writing.",
    projectFlowSub:
      "Each step builds on what was agreed in the one before it, so nothing is a surprise.",
    steps: [
      {
        title: "Discuss and propose",
        text: "We discuss your requirements and send a written proposal with the intended scope, price and estimated timeline.",
      },
      {
        title: "Sign the agreement",
        text: "Before work begins, both sides review and sign the project agreement and Statement of Work (SOW), including payment milestones and cancellation terms.",
      },
      {
        title: "Review the design direction",
        text: "We share the agreed design direction for your review. Revision limits, approval deadlines and any cancellation or refund terms follow the signed agreement.",
      },
      {
        title: "Build and test",
        text: "After design approval, we build and test the system against the agreed deliverables. Requests outside the scope are quoted separately and need written approval.",
      },
      {
        title: "Hand over and launch",
        text: "We complete the agreed review and handover. Final payment, production launch, transfer of assets and post-launch support follow the terms agreed in writing.",
      },
    ],

    /* Support scope */
    supportScopeLabel: "What support covers",
    supportScopeHeading: "Know what's included before you need it.",
    includedLabel: "Included",
    covered: [
      "Bugs that come from the original scope",
      "Problems with agreed deliverables in the live system",
      "Fixes within the support period in your agreement",
    ],
    quotedLabel: "Quoted separately",
    notCovered: [
      "New features or extra content",
      "Changes requested after approval",
      "Issues caused by third-party services or integrations",
      "Changes made by anyone other than Lextel",
    ],
    quotedNote:
      "Need something on this list? We can quote it as separate work or as an ongoing maintenance plan.",

    /* Request checklist */
    requestChecklistLabel: "Please include",
    requestChecklist: [
      "Your business name and the project it relates to",
      "What happened, and what you expected to happen",
      "A screenshot or screen recording, if you can",
      "When it started and how urgent it is",
    ],

    /* Get in touch */
    getInTouchLabel: "Get in touch",
    getInTouchHeading:
      "Tell us who you are, and we'll point you the right way.",
    existingClientsBadge: "Existing clients",
    existingClientsText:
      "For a question or request about a project, message us with a clear description of the issue. We'll review it and reply as soon as reasonably practicable.",
    includeLabel: "Please include",
    prospectiveClientsBadge: "Prospective clients",
    prospectiveClientsText:
      "Have questions about pricing, deliverables, project timing, or whether Lextel fits your business? Talk to us before you commit to anything. You don't need to know the technical side.",

    /* Contact */
    contactText:
      "If you have any questions about our support process, please contact us at",
    contactCta: "info@lexentify.com",
  },

  id: {
    badge: "Dukungan",
    title: "Dukungan",
    lastUpdated: "Terakhir diperbarui: November 2026",
    intro:
      "Pelajari cara kami berkomunikasi, meninjau pekerjaan bersama Anda, menangani dukungan setelah peluncuran, dan mendokumentasikan ketentuan setiap keterlibatan.",

    /* How we work */
    howWeWorkLabel: "Cara kami bekerja dengan klien",
    howWeWorkHeading:
      "Kami membuat tanggung jawab, batasan, dan ekspektasi jelas sebelum pekerjaan apa pun dimulai.",
    principles: [
      {
        id: "reviewing",
        title: "Meninjau pekerjaan bersama Anda",
        content: [
          "Kami menyepakati milestone review sebelum pengembangan penuh dimulai. Cara review dilakukan, berapa banyak revisi yang disertakan, cara persetujuan diberikan, dan opsi pembatalan tertulis dalam perjanjian proyek.",
        ],
      },
      {
        id: "post-launch",
        title: "Dukungan pasca-peluncuran yang jelas",
        content: [
          "Setiap proyek memiliki periode dan ruang lingkup dukungan dalam perjanjian tertulisnya. Dukungan mencakup masalah yang memenuhi syarat dalam deliverables yang disepakati. Fitur baru, konten tambahan, dan masalah layanan pihak ketiga mungkin memerlukan pekerjaan terpisah.",
        ],
      },
      {
        id: "pricing",
        title: "Harga dan ruang lingkup yang jelas",
        content: [
          "Proposal tertulis dan perjanjian proyek menetapkan harga dan deliverables yang disepakati. Perubahan pada ruang lingkup, harga, atau jadwal memerlukan persetujuan tertulis sebelum pekerjaan tambahan dimulai.",
        ],
      },
      {
        id: "terms",
        title: "Ketentuan proyek tertulis",
        content: [
          "Sebelum pekerjaan dimulai, kedua belah pihak harus memiliki ketentuan tertulis yang mencakup ruang lingkup, jadwal pembayaran, jadwal waktu, proses review, kepemilikan, dukungan, dan pembatalan.",
        ],
      },
    ],

    /* Project flow */
    projectFlowLabel: "Bagaimana proyek berjalan",
    projectFlowHeading: "Lima langkah, semuanya tertulis.",
    projectFlowSub:
      "Setiap langkah dibangun di atas apa yang disepakati pada langkah sebelumnya, sehingga tidak ada kejutan.",
    steps: [
      {
        title: "Diskusi dan proposal",
        text: "Kami mendiskusikan kebutuhan Anda dan mengirimkan proposal tertulis dengan ruang lingkup, harga, dan perkiraan jadwal yang dimaksud.",
      },
      {
        title: "Tandatangani perjanjian",
        text: "Sebelum pekerjaan dimulai, kedua belah pihak meninjau dan menandatangani perjanjian proyek dan Statement of Work (SOW), termasuk milestone pembayaran dan ketentuan pembatalan.",
      },
      {
        title: "Tinjau arah desain",
        text: "Kami membagikan arah desain yang disepakati untuk Anda tinjau. Batas revisi, tenggat persetujuan, dan ketentuan pembatalan atau pengembalian dana mengikuti perjanjian yang ditandatangani.",
      },
      {
        title: "Bangun dan uji",
        text: "Setelah persetujuan desain, kami membangun dan menguji sistem sesuai deliverables yang disepakati. Permintaan di luar ruang lingkup dikutip secara terpisah dan memerlukan persetujuan tertulis.",
      },
      {
        title: "Serah terima dan peluncuran",
        text: "Kami menyelesaikan review dan serah terima yang disepakati. Pembayaran akhir, peluncuran produksi, transfer aset, dan dukungan pasca-peluncuran mengikuti ketentuan yang disepakati secara tertulis.",
      },
    ],

    /* Support scope */
    supportScopeLabel: "Apa yang dicakup dukungan",
    supportScopeHeading: "Ketahui apa yang termasuk sebelum Anda membutuhkannya.",
    includedLabel: "Termasuk",
    covered: [
      "Bug yang berasal dari ruang lingkup asli",
      "Masalah dengan deliverables yang disepakati pada sistem live",
      "Perbaikan dalam periode dukungan sesuai perjanjian Anda",
    ],
    quotedLabel: "Dikutip terpisah",
    notCovered: [
      "Fitur baru atau konten tambahan",
      "Perubahan yang diminta setelah persetujuan",
      "Masalah yang disebabkan oleh layanan atau integrasi pihak ketiga",
      "Perubahan yang dilakukan oleh pihak selain Lextel",
    ],
    quotedNote:
      "Butuh sesuatu dari daftar ini? Kami dapat mengutipnya sebagai pekerjaan terpisah atau sebagai paket pemeliharaan berkelanjutan.",

    /* Request checklist */
    requestChecklistLabel: "Harap sertakan",
    requestChecklist: [
      "Nama bisnis Anda dan proyek terkait",
      "Apa yang terjadi, dan apa yang Anda harapkan terjadi",
      "Tangkapan layar atau rekaman layar, jika memungkinkan",
      "Kapan masalah dimulai dan seberapa mendesak",
    ],

    /* Get in touch */
    getInTouchLabel: "Hubungi kami",
    getInTouchHeading:
      "Beri tahu kami siapa Anda, dan kami akan mengarahkan Anda ke tempat yang tepat.",
    existingClientsBadge: "Klien yang sudah ada",
    existingClientsText:
      "Untuk pertanyaan atau permintaan terkait proyek, hubungi kami dengan deskripsi masalah yang jelas. Kami akan meninjaunya dan membalas sesegera mungkin.",
    includeLabel: "Harap sertakan",
    prospectiveClientsBadge: "Calon klien",
    prospectiveClientsText:
      "Punya pertanyaan tentang harga, deliverables, jadwal proyek, atau apakah Lextel cocok untuk bisnis Anda? Hubungi kami sebelum Anda berkomitmen. Anda tidak perlu memahami sisi teknis.",

    /* Contact */
    contactText:
      "Jika Anda memiliki pertanyaan mengenai proses dukungan kami, silakan hubungi kami di",
    contactCta: "info@lexentify.com",
  },
};
