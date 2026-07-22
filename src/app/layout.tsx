import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import AmbientBackground from "@/components/AmbientBackground";
import CommandPalette from "@/components/CommandPalette";
import AIChatbot from "@/components/AIChatbot";
import AdminHide from "@/components/AdminHide";
import { CursorProvider } from "@/context/CursorContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurevia — Engineering Digital Experiences That Convert",
    template: "%s | Aurevia",
  },
  description:
    "Aurevia is an elite digital engineering studio. We build ultra-performance Next.js 15 platforms, 3D WebGL experiences, autonomous AI agents, and enterprise-grade SaaS products.",
  keywords: [
    "Aurevia", "Digital Agency", "Next.js 15", "WebGL", "Three.js",
    "Framer Motion", "AI Chatbots", "Enterprise SaaS"
  ],
  openGraph: {
    title: "Aurevia — Engineering Digital Experiences That Convert",
    description: "Ultra-premium Next.js 15, WebGL & AI engineering studio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased overflow-x-hidden" style={{ background: "var(--surface-0)", color: "var(--text-primary)" }}>
        <div className="noise" aria-hidden="true" />
        <AdminHide>
          <AmbientBackground />
        </AdminHide>
        <CursorProvider>
          <SmoothScroll>
            <CustomCursor />
            <AdminHide>
              <Navigation />
              <CommandPalette />
              <AIChatbot />
            </AdminHide>
            <main>{children}</main>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}