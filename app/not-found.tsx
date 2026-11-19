import type { Metadata } from "next";
import Link from "next/link";
import DotMatrix from "@/components/dot-matrix";
import Magnetic from "@/components/magnetic";

export const metadata: Metadata = {
  title: "Page not found | Lumen",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 pb-20 pt-28 text-center md:px-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <DotMatrix />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_62%_18%,rgba(255,122,26,0.11),transparent_62%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(5,5,5,0.82),transparent_62%)]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-[#FF5A1F]" />
          <span className="font-tech text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
            Error 404
          </span>
        </div>

        <p
          aria-hidden
          className="mt-4 select-none text-[clamp(7rem,26vw,16rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-[#FF5A1F]"
        >
          404
        </p>

        <h1 className="mt-8 text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          We couldn&apos;t find that page.
        </h1>

        <p className="mt-5 max-w-[46ch] text-[14.5px] leading-relaxed text-white/45 md:text-[15px]">
          The link may be broken, or the page may have moved. Head back home, or
          get in touch if something looks wrong.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Magnetic strength={0.22}>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-medium leading-none text-[#050505] outline-none transition-colors duration-300 hover:bg-[#EDEDED] focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              Back to Home
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
            </Link>
          </Magnetic>

          <Magnetic strength={0.18}>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2A] bg-white/[0.03] px-6 py-3.5 text-[13px] font-medium leading-none text-white/75 outline-none backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Contact Us
              <span className="h-1 w-1 rounded-full bg-[#FF7A1A] transition-transform duration-300 group-hover:scale-150" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </main>
  );
}
