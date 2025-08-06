"use client";

import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/navigation/navbar";
import ColorToggle from "@/components/colorSchemeToggle/colorToggle";
import HomeButton from "@/components/navigation/homeButton";
import { useColorScheme } from "../../providers/colorSchemeProvider";

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  const { colorScheme, mounted } = useColorScheme();

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);

  if (!mounted) return null;

  return (
    <MantineProvider>
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-50 w-full pt-[15px]">
        <div className="flex items-center justify-between px-6 relative max-w-7xl mx-auto">
          <HomeButton />
          <div className="flex-1 flex justify-center">
            <Navbar />
          </div>
          <ColorToggle />
        </div>
      </div>

      <div className="min-h-screen flex flex-col pt-[70px]">
        <main className="flex-1">{children}</main>
      </div>
    </MantineProvider>
  );
}
