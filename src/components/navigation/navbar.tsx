"use client";

import React from "react";
import NavbarContainer from "./navbarContainer";
import { Anchor, Group } from "@mantine/core";
import { usePathname } from "next/navigation";

const links = [
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavbarContainer>
      <Group justify="space-between" style={{ width: "100%" }}>
        <Group gap="sm">
          {links.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              underline="never"
              size="md"
              style={{
                borderRadius: "999px",
                padding: "8px 16px",
                fontWeight: pathname === link.href ? "bold" : "normal",
                color: pathname === link.href ? "var(--primary)" : "var(--text)",
              }}
            >
              {link.label}
            </Anchor>
          ))}
        </Group>

      
      </Group>
    </NavbarContainer>
  );
};

export default Navbar;
