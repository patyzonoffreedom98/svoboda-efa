// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Bc. Patrik Svoboda, EFA – finanční plánování",
  description:
    "Hypotéky, investice, zajištění a renta – bez nátlaku, srozumitelně a s důrazem na dlouhodobý plán, který obstojí v číslech i realitě.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-neutral-950 text-white">
        <Nav />
        {children}
        {/* Společný spodní panel na VŠECH stránkách */}
        <PreFooter />
      </body>
    </html>
  );
}
