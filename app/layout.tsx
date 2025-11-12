import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Svoboda EFA",
  description: "Hypotéky, investice a renta. Kalkulačky a konzultace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <header style={{ borderBottom: "1px solid #2a2a2f", background: "#0d0d10" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/"><strong>Svoboda&nbsp;EFA</strong></Link>
            <nav style={{ display: "flex", gap: 16 }}>
              <Link href="/#omne">O mně</Link>
              <Link href="/kalkulacky">Kalkulačky</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
