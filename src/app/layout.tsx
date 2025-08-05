"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import Navbar from "../components/navigation/navbar";
import ColorToggle from "../components/navigation/colorToggle";
import HomeButton from "../components/navigation/homeButton";
import { ColorSchemeProvider, useColorScheme } from "../providers/colorSchemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


function LayoutContent({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme();

  return (
    <html lang="en" className={colorScheme === "dark" ? "dark" : ""}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <MantineProvider>
          {/* Top Navbar */}
          <div className="fixed top-0 left-0 z-50 w-full pt-[15px]">
            <div className="flex items-center justify-between px-6 relative max-w-7xl mx-auto">
              {/* Left-aligned HomeButton */}
              <div>
                <HomeButton />
              </div>

              {/* Centered Navbar */}
              <div className="flex-1 flex justify-center">
                <Navbar />
              </div>

              {/* Right-aligned ColorToggle */}
              <div>
                <ColorToggle />
              </div>
            </div>
          </div>

          <div className="min-h-screen flex flex-col pt-[70px]">
            <main className="flex-1">{children}</main>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ColorSchemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ColorSchemeProvider>
  );
}
