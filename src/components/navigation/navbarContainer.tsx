"use client";
import React from "react";
import { Paper, Group } from "@mantine/core";

interface NavbarContainerProps {
  children: React.ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <Paper withBorder className="navbar-pill">
      <Group gap="md">{children}</Group>
    </Paper>
  );
};

export default NavbarContainer;
