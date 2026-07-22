"use client";

import * as React from "react";
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
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center",
    "whitespace-nowrap shrink-0 select-none",
    "font-semibold tracking-[-0.02em]",
    "transition-all duration-300 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50"
  );

  const variants = {
    primary: cn(
      "min-h-[52px]",
      "px-7",
      "rounded-full",
      "bg-slate-900",
      "text-white",
      "shadow-lg",
      "hover:-translate-y-0.5",
      "hover:scale-[1.02]",
      "hover:shadow-xl",
      "active:translate-y-0"
    ),

    secondary: cn(
      "min-h-[52px]",
      "px-7",
      "rounded-full",
      "border border-slate-200",
      "bg-white",
      "text-slate-900",
      "shadow-sm",
      "hover:bg-slate-50",
      "hover:-translate-y-0.5",
      "hover:shadow-md"
    ),

    ghost: cn(
      "min-h-[52px]",
      "px-7",
      "rounded-full",
      "text-slate-700",
      "hover:bg-slate-100",
      "hover:text-slate-900"
    ),

    text: cn(
      "group",
      "gap-2",
      "p-0",
      "text-[16px]",
      "font-semibold",
      "text-slate-900",
      "hover:text-[var(--color-accent)]"
    ),
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {isLoading ? (
        <svg
          className="mr-2 h-5 w-5 animate-spin shrink-0"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-20"
          />
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2Z"
          />
        </svg>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="flex items-center justify-center shrink-0">
              {icon}
            </span>
          )}

          <span className="whitespace-nowrap">
            {children}
          </span>

          {icon && iconPosition === "right" && variant !== "text" && (
            <span className="flex items-center justify-center shrink-0">
              {icon}
            </span>
          )}

          {variant === "text" && !icon && (
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </>
      )}
    </button>
  );
}