import type { Metadata } from "next";
import { Bruno_Ace_SC, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
