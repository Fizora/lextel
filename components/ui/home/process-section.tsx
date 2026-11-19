"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-[#FF5A1F]/15 px-2 py-1 font-tech text-[11px] uppercase tracking-[0.08em] text-[#FF5A1F]">
      {children}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <div className="text-[44px] font-semibold leading-none tracking-tighter text-white md:text-[60px]">
        {value}
      </div>
      <p className="mt-2 font-tech text-[10px] uppercase tracking-[0.15em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function Card({
  step,
  tags,
  desc,
  aside,
  className = "",
  delay = 0,
  children,
}: {
  step: number;
  tags: string[];
  desc: string;
  aside?: ReactNode;
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={`flex flex-col rounded-[1.75rem] border border-white/8 bg-[#0C0C0C] p-6 md:p-8 ${className}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col items-start gap-1">
          <span className="mb-3 font-tech text-[10px] uppercase tracking-[0.2em] text-white/35">
            Step {step} of 4
          </span>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {aside}
      </div>

      <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/45">
        {desc}
      </p>

      <div className="mt-10 flex flex-1 flex-col justify-end">{children}</div>
    </motion.article>
  );
}

const MODULES = [
  "AUTH",
  "API",
  "DB",
  "UI",
  "CRM",
  "ERP",
  "PAY",
  "BI",
  "CHAT",
  "MAP",
  "PDF",
  "SSO",
  "CMS",
  "LOG",
  "MAIL",
  "SMS",
  "QR",
  "POS",
  "HR",
  "TAX",
  "KPI",
  "WEB",
  "APP",
  "OPS",
];

function Discovery() {
  const [selected, setSelected] = useState<Set<number>>(
    () => new Set([0, 1, 2, 3, 5, 8, 10, 14]),
  );

  const toggle = (i: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
        {MODULES.map((m, i) => {
          const on = selected.has(i);
          return (
            <button
              key={m}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(i)}
              className={`h-10 rounded-lg border font-tech text-[10px] tracking-wide outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white/50 ${
                on
                  ? "border-[#FF5A1F]/70 bg-[#FF5A1F]/10 text-[#FF5A1F]"
                  : "border-white/8 text-white/30 hover:border-white/20 hover:text-white/60"
              }`}
            >
              {m}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex items-end gap-5">
        <span className="text-[96px] font-semibold leading-[0.8] tracking-[-0.06em] tabular-nums text-white md:text-[140px]">
          {selected.size}
        </span>
        <div className="pb-1">
          <p className="text-[14px] font-medium text-white/80">
            modules in scope
          </p>
          <p className="mt-1 font-tech text-[10px] uppercase tracking-[0.15em] text-white/35">
            Tap a module to add or remove it
          </p>
        </div>
      </div>
    </>
  );
}

function Block({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.3 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      style={{ transformOrigin: "left" }}
      className={className}
    />
  );
}

function Wireframe() {
  return (
    <div
      aria-hidden
      className="flex h-44 gap-3 rounded-xl border border-white/8 bg-[#080808] p-3"
    >
      <div className="flex w-1/5 flex-col gap-2">
        {[0, 1, 2, 3].map((i) => (
          <Block
            key={i}
            delay={0.2 + i * 0.08}
            className="h-3 rounded bg-white/10"
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Block delay={0.3} className="h-5 w-2/3 rounded bg-white/15" />
        <div className="grid flex-1 grid-cols-3 gap-3">
          <Block delay={0.45} className="rounded-lg bg-white/6" />
          <Block
            delay={0.6}
            className="rounded-lg border border-[#FF5A1F] bg-[#FF5A1F]/10"
          />
          <Block delay={0.75} className="rounded-lg bg-white/6" />
        </div>
      </div>
    </div>
  );
}

const VELOCITY = [28, 42, 51, 63, 78, 92];

function Sprints() {
  return (
    <div className="flex gap-2 sm:gap-3" aria-hidden>
      {VELOCITY.map((v, i) => {
        const last = i === VELOCITY.length - 1;
        return (
          <div key={i} className="flex flex-1 flex-col gap-2">
            <div className="flex h-32 items-end">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${v}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 + i * 0.1 }}
                className={`w-full rounded-t-md ${
                  last ? "bg-[#FF5A1F]" : "bg-white/20"
                }`}
              />
            </div>
            <span
              className={`text-center font-tech text-[9px] tracking-widest ${
                last ? "text-white/80" : "text-white/30"
              }`}
            >
              S{i + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const PIPELINE = [
  { label: "Automated tests", status: "Passed" },
  { label: "Staging review", status: "Approved" },
  { label: "Production release", status: "Live" },
];

const UPTIME = ["9", "9", ".", "9", "9"];

function Uptime() {
  return (
    <div className="text-right">
      <div className="flex items-center justify-end gap-1.5">
        {UPTIME.map((c, i) =>
          c === "." ? (
            <span key={i} className="px-0.5 font-tech text-xl text-white/40">
              .
            </span>
          ) : (
            <span
              key={i}
              className={`flex h-12 w-9 items-center justify-center rounded-lg border border-white/10 bg-black text-[26px] font-medium md:h-14 md:w-10 md:text-3xl ${
                i === UPTIME.length - 1 ? "text-[#FF5A1F]" : "text-white"
              }`}
            >
              {c}
            </span>
          ),
        )}
      </div>
      <p className="mt-2 font-tech text-[10px] uppercase tracking-[0.15em] text-white/40">
        % uptime target
      </p>
    </div>
  );
}

function Pipeline() {
  return (
    <ul>
      {PIPELINE.map((row, i) => (
        <li
          key={row.label}
          className="flex items-center justify-between gap-4 border-t border-white/6 py-4 last:pb-0"
        >
          <span className="flex items-center gap-3 text-[14px] text-white/75">
            <motion.span
              initial={{ backgroundColor: "rgba(255,255,255,0.18)" }}
              whileInView={{ backgroundColor: "#FF5A1F" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.35 }}
              className="h-2 w-2 rounded-full"
            />
            {row.label}
          </span>
          <span className="font-tech text-[10px] uppercase tracking-[0.15em] text-white/40">
            {row.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="process"
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
                How It Works
              </span>
            </div>
            <h2 className="mt-2 text-[110px] font-semibold leading-[0.8] tracking-[-0.06em] text-[#FF5A1F] md:text-[140px]">
              03
            </h2>
          </div>

          <h3 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white md:-mt-1">
            From first call to live <br className="hidden md:block" /> system in
            four steps.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Card
            step={1}
            tags={["WE MAP YOUR WORKFLOW", "AND LOCK THE SCOPE"]}
            desc="We learn how your team really works, then agree on exactly what gets built and what doesn't."
            className="lg:col-span-7"
          >
            <Discovery />
          </Card>

          <Card
            step={2}
            tags={["WE PROTOTYPE FIRST", "BEFORE ANY CODE"]}
            desc="Clickable prototypes come before code, so every screen is approved while changes are still cheap."
            aside={<Stat value="5 days" label="to first prototype" />}
            className="lg:col-span-5"
            delay={0.1}
          >
            <Wireframe />
          </Card>

          <Card
            step={3}
            tags={["WE SHIP IN", "TWO-WEEK SPRINTS"]}
            desc="Every sprint ends with a working demo. You see real progress, not status reports."
            aside={<Stat value="2 wks" label="per sprint" />}
            className="lg:col-span-5"
          >
            <Sprints />
          </Card>

          <Card
            step={4}
            tags={["WE GO LIVE", "AND STAY ON"]}
            desc="Releases pass automated tests and staging review. After launch we stay for fixes, monitoring and iteration."
            aside={<Uptime />}
            className="lg:col-span-7"
            delay={0.1}
          >
            <Pipeline />
          </Card>
        </div>
      </div>
    </section>
  );
}
