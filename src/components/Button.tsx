"use client";

import React from "react";
import { cn } from "./Wrapper";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "text";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  icon,
  iconPosition = "right",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-[600] tracking-[-0.02em] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2";
  
  const variants = {
    primary: "h-[52px] px-[28px] rounded-full text-[16px] bg-slate-900 text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]",
    secondary: "h-[52px] px-[28px] rounded-full text-[16px] bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-50 hover:-translate-y-[2px] hover:scale-[1.02]",
    ghost: "h-[52px] px-[28px] rounded-full text-[16px] bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    text: "h-auto p-0 text-[16px] text-slate-900 hover:text-[var(--color-accent)] group"
  };

  const gap = icon ? "gap-[10px]" : "";

  return (
    <button 
      className={cn(baseStyles, variants[variant], gap, className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : icon && iconPosition === "left" ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : null}

      <span>{children}</span>

      {!isLoading && icon && iconPosition === "right" && variant !== "text" ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : null}

      {/* Special animated arrow for Text button */}
      {variant === "text" && !icon && (
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="ml-[10px] transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
