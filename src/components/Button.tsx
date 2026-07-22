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
  const varClass = {
    primary:   "btn btn-primary",
    secondary: "btn btn-secondary",
    ghost:     "btn btn-ghost",
  }[variant];

  const inner = (
    <>
      {isLoading && (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2Z" />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${varClass} ${className}`}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          const id = href.replace("#", "");
          const el = document.getElementById(id);
          if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
        }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${varClass} ${className} disabled:opacity-40 disabled:pointer-events-none`}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {inner}
    </motion.button>
  );
}