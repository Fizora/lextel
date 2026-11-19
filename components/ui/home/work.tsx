"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentType } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

function DashboardMock() {
  const bars = [40, 62, 48, 75, 58, 88, 70, 95, 80, 64, 90, 100];
  const kpis = [
    { k: "Orders", v: "2,481" },
    { k: "Revenue", v: "$318k" },
    { k: "Backlog", v: "42" },
  ];

  return (
    <div className="flex h-full min-h-80 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-white/15" />
        ))}
        <span className="ml-3 h-2 w-28 rounded bg-white/10" />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {kpis.map((item) => (
          <div
            key={item.k}
            className="rounded-xl border border-white/[0.07] bg-white/3 p-3"
          >
            <p className="font-tech text-[9px] uppercase tracking-widest text-white/35">
              {item.k}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-white md:text-xl">
              {item.v}
            </p>
          </div>
        ))}
      </div>

      <div className="flex h-28 items-end gap-1.5 rounded-xl border border-white/[0.07] bg-white/2 p-3">
        {bars.map((b, i) => (
          <div
            key={i}
            style={{ height: `${b}%` }}
            className={`flex-1 rounded-sm ${
              i === 7 ? "bg-[#FF5A1F]" : "bg-white/15"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {[72, 56, 64].map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span
              style={{ width: `${w}%` }}
              className="h-2 rounded bg-white/8"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Phone({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex h-67.5 w-37.5 flex-col gap-2 rounded-[1.6rem] border border-white/15 bg-black p-3 ${className}`}
    >
      <span className="mx-auto h-1 w-10 rounded-full bg-white/15" />
      {children}
    </div>
  );
}

function MobileMock() {
  return (
    <div
      aria-hidden
      className="flex h-full min-h-80 items-center justify-center gap-5 p-6"
    >
      <Phone className="translate-y-4">
        <p className="mt-1 font-tech text-[9px] uppercase tracking-widest text-white/35">
          Today
        </p>
        {[true, false, false, false].map((active, i) => (
          <div
            key={i}
            className={`flex h-11 items-center gap-2 rounded-lg px-2.5 ${
              active
                ? "border border-[#FF5A1F]/60 bg-[#FF5A1F]/10"
                : "bg-white/5"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                active ? "bg-[#FF5A1F]" : "bg-white/20"
              }`}
            />
            <span className="flex flex-1 flex-col gap-1">
              <span className="h-1.5 w-3/4 rounded bg-white/25" />
              <span className="h-1.5 w-1/2 rounded bg-white/10" />
            </span>
          </div>
        ))}
      </Phone>

      <Phone className="hidden -translate-y-4 sm:flex">
        <div
          className="relative flex-1 overflow-hidden rounded-lg bg-white/4"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        >
          <span className="absolute left-[38%] top-[34%] h-3 w-3 rounded-full bg-[#FF5A1F] ring-4 ring-[#FF5A1F]/25" />
          <span className="absolute left-[62%] top-[58%] h-2 w-2 rounded-full bg-white/50" />
        </div>
        <div className="flex h-14 flex-col justify-center gap-1.5 rounded-lg bg-white/6 px-3">
          <span className="h-1.5 w-2/3 rounded bg-white/30" />
          <span className="h-1.5 w-1/3 rounded bg-white/10" />
        </div>
      </Phone>
    </div>
  );
}

function ChartMock() {
  const line =
    "M0,60 C40,55 70,70 100,64 S160,80 190,92 S250,120 290,138 S350,160 400,168";

  return (
    <div
      aria-hidden
      className="relative flex h-full min-h-80 items-center p-4 md:p-6"
    >
      <svg viewBox="0 0 400 220" className="h-auto w-full" fill="none">
        <defs>
          <linearGradient id="cost-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5A1F" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#FF5A1F" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[40, 90, 140, 190].map((y) => (
          <line
            key={y}
            x1="0"
            x2="400"
            y1={y}
            y2={y}
            stroke="rgba(255,255,255,0.07)"
            strokeDasharray="3 5"
          />
        ))}

        <path d={`${line} L400,220 L0,220 Z`} fill="url(#cost-fill)" />
        <motion.path
          d={line}
          stroke="#FF5A1F"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        />

        <line
          x1="190"
          x2="190"
          y1="20"
          y2="210"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1"
        />
        <circle cx="190" cy="92" r="4" fill="#fff" />
        <text
          x="198"
          y="30"
          className="font-tech fill-white/60"
          fontSize="9"
          letterSpacing="1"
        >
          OPTIMIZED
        </text>
      </svg>
    </div>
  );
}

type Project = {
  slug: string;
  kind: string;
  title: string;
  desc: string;
  metric: { value: string; label: string };
  tags: string[];
  Visual: ComponentType;
};

const PROJECTS: Project[] = [
  {
    slug: "arunika-erp",
    kind: "CUSTOM ERP",
    title: "Arunika ERP",
    desc: "One system for orders, inventory and invoicing, replacing five spreadsheets and two legacy tools at a regional distributor.",
    metric: { value: "38%", label: "faster order processing" },
    tags: ["Next.js", "PostgreSQL", "NestJS"],
    Visual: DashboardMock,
  },
  {
    slug: "kala",
    kind: "MOBILE APP",
    title: "Kala Field",
    desc: "An offline-first app that gives field technicians their daily jobs, routes and reports, even without signal.",
    metric: { value: "1,200", label: "technicians onboarded" },
    tags: ["React Native", "TypeScript", "SQLite"],
    Visual: MobileMock,
  },
  {
    slug: "meridian",
    kind: "CLOUD PLATFORM",
    title: "Meridian Console",
    desc: "Monitoring and cost visibility for a multi-account cloud setup, built so engineers see waste before the invoice does.",
    metric: { value: "27%", label: "lower monthly cloud spend" },
    tags: ["AWS", "Terraform", "Go"],
    Visual: ChartMock,
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative z-10 w-full scroll-mt-20 bg-[#050505] px-6 pb-24 pt-8 md:px-10 md:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
              <span className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                Selected Work
              </span>
            </div>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
              Systems we built for teams that outgrew their tools.
            </h2>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-[#2A2A2A] bg-white/3 px-6 py-3.5 text-[13px] font-medium leading-none text-white/75 outline-none transition-all duration-300 hover:border-white/25 hover:bg-white/6 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Discuss your project
            <span className="h-1 w-1 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-150" />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={p.slug}
              style={{ top: `calc(5.5rem + ${i * 14}px)` }}
              className="grid grid-cols-1 gap-8 rounded-4xl border border-white/8 bg-[#0C0C0C] p-6 shadow-2xl shadow-black/60 md:p-8 lg:sticky lg:min-h-120 lg:grid-cols-12 lg:gap-10 lg:p-10"
            >
              <div className="flex flex-col justify-between gap-10 lg:col-span-5">
                <div>
                  <span className="inline-block bg-[#FF5A1F]/15 px-2 py-1 font-tech text-[11px] uppercase tracking-[0.08em] text-[#FF5A1F]">
                    {p.kind}
                  </span>
                  <h3 className="mt-6 text-[32px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[44px]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/45">
                    {p.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-end gap-4">
                    <span className="text-[56px] font-semibold leading-[0.85] tracking-tighter text-white md:text-[72px]">
                      {p.metric.value}
                    </span>
                    <span className="pb-1 text-[13px] leading-snug text-white/50">
                      {p.metric.label}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-5">
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[11.5px] text-white/55"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-2 text-[13px] font-medium text-white outline-none transition-colors hover:text-[#FF5A1F] focus-visible:text-[#FF5A1F]"
                    >
                      View case study
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <path
                          d="M3 11L11 3M11 3H5M11 3V9"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="square"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#080808] lg:col-span-7">
                <p.Visual />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
