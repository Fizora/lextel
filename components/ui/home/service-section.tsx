"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    title: "Web & Mobile Apps",
    desc: "Products built from scratch around your users and workflows, not adapted from a template.",
    builds: [
      "Customer-facing web applications",
      "iOS and Android apps",
      "Internal tools and portals",
      "Progressive web apps",
    ],
    stack: ["Next.js", "React Native", "TypeScript", "Node.js"],
  },
  {
    title: "Custom ERP & Systems",
    desc: "Operations software shaped to your processes. Inventory, finance, HR and logistics in one system that you own.",
    builds: [
      "Inventory and procurement",
      "Finance and invoicing",
      "Role-based approval workflows",
      "Integrations with your existing tools",
    ],
    stack: ["PostgreSQL", "NestJS", "Redis", "GraphQL"],
  },
  {
    title: "UI/UX Engineering",
    desc: "Interfaces designed and engineered together, so what gets approved in design is exactly what ships.",
    builds: [
      "Design systems",
      "Product and dashboard interfaces",
      "Interactive prototypes",
      "Accessibility reviews",
    ],
    stack: ["Figma", "Tailwind", "Motion", "Storybook"],
  },
  {
    title: "Cloud Architecture",
    desc: "Infrastructure that scales with demand and stays understandable to the team that runs it.",
    builds: [
      "Cloud migration",
      "CI/CD pipelines",
      "Monitoring and observability",
      "Security and cost reviews",
    ],
    stack: ["AWS", "Docker", "Terraform", "GitHub Actions"],
  },
];

const PROMISES = [
  {
    title: "No templates",
    desc: "Every system starts from your requirements, never from a theme.",
  },
  {
    title: "You own the code",
    desc: "Full source, documentation and infrastructure are handed over.",
  },
  {
    title: "Built around your workflow",
    desc: "We adapt the software to your team, not the other way around.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      className="relative z-10 w-full scroll-mt-20 bg-[#050505] px-6 pb-24 pt-8 md:px-10 md:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-[auto_1fr] md:items-start md:gap-x-20 lg:gap-x-28"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
              <span className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                Our Services
              </span>
            </div>
            <h2 className="mt-2 text-[110px] font-semibold leading-[0.8] tracking-[-0.06em] text-[#FF5A1F] md:text-[140px]">
              02
            </h2>
          </div>

          <h3 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white md:-mt-1">
            Custom-built for how <br className="hidden md:block" /> your
            business actually works.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="overflow-hidden rounded-4xl border border-white/8 bg-[#0A0A0A] shadow-2xl shadow-black/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Daftar layanan */}
            <div
              role="tablist"
              aria-label="Services"
              aria-orientation="vertical"
              className="flex flex-col divide-y divide-white/6 border-b border-white/6 lg:col-span-5 lg:border-b-0 lg:border-r"
            >
              {SERVICES.map((service, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={service.title}
                    role="tab"
                    id={`service-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="service-panel"
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group relative flex items-center justify-between gap-4 px-6 py-6 text-left outline-none transition-colors duration-300 focus-visible:bg-white/4 md:px-10 md:py-8"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="service-indicator"
                        transition={{ duration: 0.5, ease: EASE }}
                        className="absolute inset-y-0 left-0 w-0.5 bg-[#FF5A1F]"
                      />
                    )}
                    <span
                      className={`text-[22px] font-medium tracking-[-0.02em] transition-colors duration-300 md:text-[28px] ${
                        isActive
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/70"
                      }`}
                    >
                      {service.title}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-[#FF5A1F] opacity-100"
                          : "-translate-x-1 text-white/40 opacity-0"
                      }`}
                    >
                      <path
                        d="M3 11L11 3M11 3H5M11 3V9"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="square"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Panel detail */}
            <div
              role="tabpanel"
              id="service-panel"
              aria-labelledby={`service-tab-${active}`}
              className="bg-[#0C0C0C] p-6 md:p-10 lg:col-span-7 lg:p-14"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-full flex-col justify-between gap-10"
                >
                  <p className="max-w-xl text-[20px] font-medium leading-[1.35] tracking-[-0.01em] text-white md:text-[26px]">
                    {current.desc}
                  </p>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                        What we build
                      </h4>
                      <ul className="mt-4 flex flex-col gap-2.5">
                        {current.builds.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[13.5px] leading-snug text-white/70"
                          >
                            <span className="mt-1.75 h-1 w-1 shrink-0 bg-[#FF5A1F]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Typical stack
                      </h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {current.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-[12px] text-white/65"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Janji "custom" */}
          <div className="grid grid-cols-1 divide-y divide-white/6 border-t border-white/6 md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROMISES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 p-6 md:p-8 lg:p-10"
              >
                <h5 className="text-[13px] font-medium text-white">
                  {item.title}
                </h5>
                <p className="max-w-[34ch] text-[12.5px] leading-relaxed text-white/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
