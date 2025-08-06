"use client";

import React, { useEffect, useState } from "react";
import NavbarContainer from "./navbarContainer";
import { Anchor, Group } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useColorScheme } from "@/providers/colorSchemeProvider";

const links = [
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { colorScheme } = useColorScheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = colorScheme === "dark";

  if (!mounted) {
    return null;
  }

  return (
    <NavbarContainer>
      <Group justify="space-between" style={{ width: "100%" }}>
        <Group gap="sm">
          {links.map((link) => {
            const isActive = pathname === link.href;

            const textColor = isActive
              ? isDark
                ? "var(--text)" // black in dark mode
                : "var(--text-white)" // white in light mode
              : isDark
                ? "var(--text-white)" // white in dark mode
                : "var(--text)"; // black in light mode

            const backgroundColor = isActive
              ? isDark
                ? "var(--dark-highlight)"
                : "var(--light-highlight)"
              : "transparent";

            return (
              <Anchor
                key={link.href}
                href={link.href}
                underline="never"
                size="md"
                style={{
                  borderRadius: "999px",
                  padding: "8px 16px",
                  fontWeight: isActive ? "bold" : "normal",
                  color: textColor,
                  backgroundColor,
                }}
              >
                {link.label}
              </Anchor>
            );
          })}
        </Group>
      </Group>
    </NavbarContainer>
  );
};

export default Navbar;
