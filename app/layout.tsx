// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Bc. Patrik Svoboda, EFA – finanční plán, který obstojí v číslech i realitě",
  description:
    "Finanční plánování bez nátlaku – hypotéky, investice, zajištění a renta. Dlouhodobá spolupráce, srozumitelná čísla a osobní péče na Vysočině i po celé ČR.",
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
        <main className="min-h-screen">{children}</main>
        <PreFooter />
      </body>
    </html>
  );
}
