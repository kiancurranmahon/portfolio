import Image from "next/image";
import { ColorSchemeScript } from "@mantine/core";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <main className="flex items-center justify-center min-h-screen">
        </main>
      </body>
    </html>
  );
}
