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
    <Component className={cn("w-full max-w-[1440px] mx-auto px-5 md:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}
