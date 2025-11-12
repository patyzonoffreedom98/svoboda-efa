import "./globals.css";
import Link from "next/link";
import PreFooter from "@/components/PreFooter";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Svoboda EFA",
  description:
    "Hypotéky, investice a renta. Kalkulačky a konzultace s certifikovaným poradcem EFA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {/* HEADER */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <strong className="brand-gold">Bc. Patrik Svoboda, EFA</strong>
            </Link>
            <Nav />
          </div>
        </header>

        <main>{children}</main>

        {/* PRE-FOOTER */}
        <PreFooter />

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Patrik Svoboda, EFA</span>
            <a href="/kalkulacky" className="footer-link">
              Kalkulačky
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
