import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bc. Patrik Svoboda, EFA",
  description:
    "Hypotéky, investice, zajištění a firemní benefity s důrazem na dlouhodobý plán, srozumitelnost a osobní přístup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
