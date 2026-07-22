import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aurevia.studio"),
  title: {
    default: "Aurevia Studio — Engineering Intelligent Digital Experiences",
    template: "%s — Aurevia Studio",
  },
  description: "Aurevia Studio builds award-winning websites, AI automation systems, SaaS platforms, and mobile applications for companies that demand engineering excellence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <main className="flex-1 flex flex-col">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
