import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypoteční kalkulačka – výpočet splátky | Patrik Svoboda",
  description:
    "Spočítejte si orientační měsíční splátku hypotéky, úroky a LTV. Kalkulačka zdarma a pomoc s financováním bydlení v Jihlavě i online.",
  alternates: { canonical: "/hypoteka" },
};

export default function HypotekaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
