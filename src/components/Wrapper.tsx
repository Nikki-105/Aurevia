import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-5 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
