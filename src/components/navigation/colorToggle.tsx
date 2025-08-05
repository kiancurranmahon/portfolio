"use client";

import { SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useColorScheme } from "@/providers/colorSchemeProvider"; // adjust path as needed

export default function ColorToggle() {
  const { toggleColorScheme } = useColorScheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleColorScheme();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className={`icon-button ${!isAnimating ? "color-toggle-shadow" : ""}`}
      style={{
        transform: isAnimating ? "rotate(180deg)" : "rotate(0deg)",
        opacity: isAnimating ? 0.5 : 1,
      }}
    >
      <SunIcon style={{ width: 20, height: 20 }} />
    </button>
  );
}
