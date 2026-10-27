import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investiční kalkulačka a dlouhodobý plán | Patrik Svoboda",
  description:
    "Orientační investiční kalkulačka, historické výnosy a plán pravidelného investování. Srozumitelně s poradcem EFA z Jihlavy.",
  alternates: { canonical: "/investice" },
};

export default function InvesticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
