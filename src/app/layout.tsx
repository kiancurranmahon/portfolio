import { Josefin_Sans, Josefin_Slab } from "next/font/google";
import "./globals.css";
import { ColorSchemeProvider } from "../providers/colorSchemeProvider";
import InnerLayout from "./layouts/mainLayoutClient"; 

const josefinSans = Josefin_Sans({ 
  variable: "--font-josefin-sans", 
  weight: ['300', '400', '700'], 
  subsets: ["latin"], 
  display: "swap" 
});

const josefinSlab = Josefin_Slab({ 
  variable: "--font-josefin-slab", 
  weight: ['300', '400', '700'], 
  subsets: ["latin"], 
  display: "swap" 
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${josefinSlab.variable} antialiased`}>
      <body>
        <ColorSchemeProvider>
          <InnerLayout>{children}</InnerLayout>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
