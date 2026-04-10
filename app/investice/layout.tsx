import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investice | Bc. Patrik Svoboda, EFA",
  description:
    "Investiční strategie s důrazem na systém, klid a dlouhodobý plán. Pomohu Vám nastavit investice podle Vašich cílů.",
};

export default function InvesticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
