import type { Metadata } from "next";
import { Bruno_Ace_SC, Geist, Inter } from "next/font/google";
import { LanguageProvider } from "@/app/context/LangaugeContext";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Bruno_Ace_SC({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lextel - Custom Operational System for Business",
  description:
    "Create Your Own Operational System for Your Business | Automate Your Business with Lextel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 selection:bg-red-600 selection:text-white text-base lg:text-lg">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 pt-24 sm:pt-28">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
