import "./globals.css";
import Link from "next/link";

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

            <nav className="nav">
              <Link href="/omne" className="nav-link">O mně</Link>
              <Link href="/efa" className="nav-link">EFA</Link>

              {/* Dropdown Služby (CSS-only :hover) */}
              <div className="dropdown">
                <span className="nav-link">Služby ▾</span>
                <div className="dropdown-menu">
                  <Link href="/sluzby/hypoteky" className="dropdown-item">Hypotéky</Link>
                  <Link href="/sluzby/investice" className="dropdown-item">Investice</Link>
                  <Link href="/sluzby/renta" className="dropdown-item">Renta</Link>
                </div>
              </div>

              <Link href="/kontakt" className="nav-link">Kontakt</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Patrik Svoboda, EFA</span>
            <a href="/kalkulacky" className="footer-link">Kalkulačky</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
