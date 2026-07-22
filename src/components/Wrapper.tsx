"use client";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Wrapper({ children, className, as: Component = "div" }: WrapperProps) {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] lg:px-[40px]", className)}>
      <div className="w-full max-w-[1280px] mx-auto">
        {children}
      </div>
    </div>
  );
}
