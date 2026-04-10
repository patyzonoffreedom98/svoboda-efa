import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Bc. Patrik Svoboda, EFA",
  description:
    "Spojme se. Hypotéky, investice, renta i komplexní finanční strategie. Kontaktujte mě a domluvíme další postup.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
