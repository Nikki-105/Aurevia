"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-semibold transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-0)] disabled:opacity-40 disabled:pointer-events-none";

  const variants = {
    primary:
      "h-[52px] px-7 rounded-[var(--r-full)] bg-[var(--cyan)] text-black text-sm font-bold tracking-[-0.01em] shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "h-[52px] px-7 rounded-[var(--r-full)] border border-[var(--border-strong)] text-[var(--text-primary)] text-sm font-semibold tracking-[-0.01em] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-0.5 active:scale-[0.98]",
    ghost:
      "h-[44px] px-5 rounded-[var(--r-full)] text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] hover:bg-white/5 active:scale-[0.98]",
  };

  const inner = (
    <>
      {isLoading ? (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2Z" />
        </svg>
      ) : null}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {inner}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${base} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
      style={{ transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" } as any}
    >
      {inner}
    </motion.button>
  );
}