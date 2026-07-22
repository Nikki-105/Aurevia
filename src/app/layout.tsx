import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components to be implemented in Phase 2
import Wrapper from "@/components/Wrapper";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurevia Studio — Engineering Digital Experiences That Convert.",
  description: "A flagship digital agency crafting timeless visual languages and enterprise trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        <SmoothScroll>
          <CustomCursor />
          {/* <Navigation /> - Will be added later */}
          <main className="flex-1 flex flex-col">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
