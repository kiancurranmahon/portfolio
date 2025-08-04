"use client";
import React from "react";
import NavbarContainer from "./navbarContainer";
import { Anchor } from "@mantine/core";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";


const links = [
  { label: "Home", href: "/" },
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavbarContainer>
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
            color: pathname === link.href ?  "#aa00ff": "#111",
          }}
        >
          {link.label}
        </Anchor>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
//