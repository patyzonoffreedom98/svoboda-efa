import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renta a dlouhodobý plán | Bc. Patrik Svoboda, EFA",
  description:
    "Cesta k rentě nezačíná produktem, ale plánem. Pomohu Vám nastavit dlouhodobou strategii pro budoucí finanční klid.",
};

export default function RentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
