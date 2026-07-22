"use client";

import React, { createContext, useContext, useState } from "react";

type CursorType = "default" | "pointer" | "text" | "magnetic" | "image";

interface CursorContextProps {
  cursorType: CursorType;
  cursorLabel: string;
  cursorImage: string | null;
  setCursorType: (type: CursorType) => void;
  setCursorLabel: (label: string) => void;
  setCursorImage: (image: string | null) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorImage, setCursorImage] = useState<string | null>(null);

  return (
    <CursorContext.Provider value={{ cursorType, cursorLabel, cursorImage, setCursorType, setCursorLabel, setCursorImage }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
