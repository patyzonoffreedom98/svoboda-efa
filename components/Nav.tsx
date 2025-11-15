"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          Bc. Patrik Svoboda, EFA
        </Link>

        <nav className="nav-links">
          {/* „O mně“ vede na úvodní sekci na homepage */}
          <Link
            href="/#o-mne"
            className="nav-link"
          >
            O mně
          </Link>

          <Link
            href="/efa"
            className={`nav-link ${isActive(pathname, "/efa") ? "nav-link--active" : ""}`}
          >
            EFA
          </Link>

          {/* Dropdown Služby – bez JS, jen <details> */}
          <details className="nav-details">
            <summary>Služby</summary>
            <div className="nav-details-menu">
              <Link href="/sluzby/hypoteky-a-financovani">
                Hypotéky a financování
              </Link>
              <Link href="/sluzby/investice-a-renta">
                Investice a renta
              </Link>
              <Link href="/sluzby/renta">
                Renta
              </Link>
              <Link href="/sluzby/zajisteni">
                Zajištění
              </Link>
            </div>
          </details>

          <Link
            href="/kontakt"
            className={`nav-link ${isActive(pathname, "/kontakt") ? "nav-link--active" : ""}`}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
