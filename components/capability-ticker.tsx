"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  "Web & Mobile Apps",
  "Custom ERP & Systems",
  "UI/UX Engineering",
  "Cloud Architecture",
];

export default function CapabilityTicker() {
  return (
    <section
      aria-label="Core capabilities"
      className="relative z-10 bg-white text-[#050505]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.07 }}
            className="group flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5 last:border-b-0 md:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <span className="text-[13px] font-medium leading-none tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#FF7A1A]">
              {item}
            </span>
            <span className="font-tech text-[9.5px] tabular-nums leading-none text-black/30 transition-colors duration-300 group-hover:text-black/60">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
