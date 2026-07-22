import type { Metadata } from "next";
import { Inter, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import AmbientBackground from "@/components/AmbientBackground";
import CommandPalette from "@/components/CommandPalette";
import AIChatbot from "@/components/AIChatbot";
import FloatingDock from "@/components/FloatingDock";

import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebAura Studio | Engineering Digital Experiences That Convert",
    template: "%s | WebAura Studio",
  },
  description:
    "WebAura is an elite digital engineering agency. Custom websites, WebGL experiences, AI Automation, SaaS, and Enterprise software solutions.",
  keywords: [
    "WebAura",
    "Digital Agency",
    "Next.js 15",
    "WebGL",
    "Three.js",
    "AI Automation",
    "SaaS Development",
    "UI UX Design",
    "Enterprise Software",
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
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#050505] text-white antialiased overflow-x-hidden">
        <AmbientBackground />
        <CursorProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navigation />
            <CommandPalette />
            <AIChatbot />
            <FloatingDock />

            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}