"use client";

import React from "react";

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        "px-5 sm:px-6 md:px-8 lg:px-10",
        "max-w-[1400px]",
        className
      )}
    >
      <div className="w-full max-w-[1320px] mx-auto">
        {children}
      </div>
    </div>
  );
}
