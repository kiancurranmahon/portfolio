"use client";

import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useColorScheme } from "@/providers/colorSchemeProvider"; 
import { setCurrentColorScheme } from "./colorStore"; 
import clsx from "clsx";

export default function ColorToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    toggleColorScheme();
    setRotation((prev) => prev + 360);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const isDark = colorScheme === "dark";

  useEffect(() => {
    setCurrentColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <button
      onClick={handleClick}
      className={clsx("icon-button", { "color-toggle-shadow": !isAnimating })}
      aria-label="Toggle color scheme"
      type="button"
    >
      <span
        style={{
          display: "inline-flex",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.3s ease",
          opacity: isAnimating ? 0.5 : 1,
        }}
      >
        {isDark ? (
          <RiMoonClearFill style={{ width: 20, height: 20, color: "white" }} />
        ) : (
          <RiSunFill style={{ width: 20, height: 20, color: "#f59e0b" }} />
        )}
      </span>
    </button>
  );
}
