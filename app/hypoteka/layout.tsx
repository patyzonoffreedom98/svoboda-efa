import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypotéka | Bc. Patrik Svoboda, EFA",
  description:
    "Pomohu Vám s novou hypotékou, refinancováním i nastavením financování tak, aby dávalo smysl dnes i do budoucna.",
};

export default function HypotekaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
