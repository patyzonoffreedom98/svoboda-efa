// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Bc. Patrik Svoboda, EFA – finanční plánování",
  description:
    "Finanční plánování bez nátlaku: hypotéky, investice, zajištění a dlouhodobý plán pro vás a vaši rodinu. Vysočina a celá ČR, osobně i online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="bg-neutral-950 text-white">
        {/* Horní navigace – fixní nahoře */}
        <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur border-b border-neutral-800">
          <Nav />
        </header>

        {/* Obsah stránek */}
        <main>{children}</main>

        {/* Společný spodní pruh – 3 rámečky, jen jednou a na všech stránkách */}
        <PreFooter />
      </body>
    </html>
  );
}
