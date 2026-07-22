"use client";

import { ReactNode, useEffect, useState } from "react";

// For a lightweight, robust smooth scroll, we can just use native CSS smooth scroll,
// but since the original implementation used Lenis, I'll provide a lightweight wrapper
// that uses lenis if available or falls back cleanly.
// Note: We use dynamic import for @studio-freight/lenis to avoid SSR issues.

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsClient(true);
    
    // Import Lenis dynamically on the client
    const initLenis = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
          lenis.destroy();
        };
      } catch (error) {
        console.warn("Failed to load Lenis smooth scroll:", error);
      }
    };

    initLenis();
  }, []);

  if (!isClient) return <>{children}</>;

  return <>{children}</>;
}
