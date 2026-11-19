"use client";

import { motion } from "motion/react";
import Magnetic from "../../magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

const HEADLINE_LINE_1 = "Engineering digital systems";
const HEADLINE_LINE_2 = "that scale with clarity.";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const lineReveal = {
  hidden: { y: "118%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[75svh] flex-col items-center justify-center px-6 py-20 text-center md:px-10 md:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <h1 className="mt-8 flex flex-col items-center text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] md:mt-10">
          <span className="block overflow-hidden pb-[0.09em]">
            <motion.span variants={lineReveal} className="block text-white/40">
              {HEADLINE_LINE_1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.09em]">
            <motion.span variants={lineReveal} className="block text-white">
              {HEADLINE_LINE_2}
            </motion.span>
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-[48ch] text-[14.5px] leading-relaxed text-white/45 md:text-[15px]"
        >
          Lumen is a software engineering studio building resilient web, mobile
          and enterprise systems for teams that care about craft, clarity and
          long-term scale.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={0.22}>
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-medium leading-none text-[#050505] transition-colors duration-300 hover:bg-[#EDEDED]"
            >
              Start a Project
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2A] bg-white/3 px-6 py-3.5 text-[13px] font-medium leading-none text-white/75 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/6 hover:text-white"
            >
              Explore Selected Work
              <span className="h-1 w-1 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-150" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
