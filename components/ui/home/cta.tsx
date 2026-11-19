"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Magnetic from "@/components/magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const EMAIL = "hello@lumen.dev";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const lineReveal = {
  hidden: { y: "118%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

const dotMask =
  "radial-gradient(ellipse 70% 80% at 50% 100%, #000 0%, transparent 72%)";

export default function CtaSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full scroll-mt-20 bg-[#050505] px-6 pb-16 pt-8 md:px-10 md:pb-24"
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-4xl border border-white/8 bg-[#0A0A0A]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,170,90,0.45) 1px, transparent 1px)",
            backgroundSize: "17px 17px",
            maskImage: dotMask,
            WebkitMaskImage: dotMask,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(255,122,26,0.22),transparent_60%)]"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 flex flex-col items-center px-6 pb-20 pt-20 text-center md:px-10 md:pb-28 md:pt-28"
        >
          <motion.span
            variants={fadeUp}
            className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50"
          >
            Start a project
          </motion.span>

          <h2 className="mt-6 flex flex-col items-center text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.09em]">
              <motion.span
                variants={lineReveal}
                className="block text-white/40"
              >
                Have a system in mind?
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.09em]">
              <motion.span variants={lineReveal} className="block text-white">
                Let&apos;s build it together.
              </motion.span>
            </span>
          </h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[46ch] text-[14.5px] leading-relaxed text-white/45 md:text-[15px]"
          >
            Tell us what you&apos;re working on. We&apos;ll reply with honest
            questions and a clear idea of what the first step looks like.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Magnetic strength={0.22}>
              <a
                href={`mailto:${EMAIL}?subject=New%20project`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-medium leading-none text-[#050505] outline-none transition-colors duration-300 hover:bg-[#EDEDED] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                Start a Project
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </Magnetic>

            <Magnetic strength={0.18}>
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2A] bg-white/3 px-6 py-3.5 text-[13px] font-medium leading-none text-white/75 outline-none backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <span aria-live="polite">
                  {copied ? "Email copied" : EMAIL}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-150" />
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
