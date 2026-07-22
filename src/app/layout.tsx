import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import AmbientBackground from "@/components/AmbientBackground";

import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurevia Studio",
    template: "%s | Aurevia Studio",
  },
  description:
    "Engineering Digital Experiences That Convert. Premium websites, AI automation, SaaS, branding, and enterprise-grade digital solutions.",
  keywords: [
    "Digital Agency",
    "Next.js",
    "Web Development",
    "UI UX",
    "AI Automation",
    "Branding",
    "SEO",
    "SaaS Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased overflow-x-hidden">
        <AmbientBackground />
        <CursorProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navigation />

            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}