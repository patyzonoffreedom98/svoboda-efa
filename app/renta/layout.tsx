import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulačka finanční renty – kolik kapitálu potřebuji? | Patrik Svoboda",
  description:
    "Spočítejte si cílový kapitál pro měsíční rentu nebo možnou rentu ze stávajících úspor. Orientační výpočet a plán s poradcem EFA.",
  alternates: { canonical: "/renta" },
};

export default function RentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
