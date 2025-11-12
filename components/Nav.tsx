"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="nav">
      <Link href="/omne" className={`nav-link ${isActive("/omne") ? "active" : ""}`}>
        O mně
      </Link>
      <Link href="/efa" className={`nav-link ${isActive("/efa") ? "active" : ""}`}>
        EFA
      </Link>

      <div className="dropdown">
        <span className={`nav-link ${pathname.startsWith("/sluzby") ? "active" : ""}`}>
          Služby ▾
        </span>
        <div className="dropdown-menu">
          <Link
            href="/sluzby/hypoteky"
            className={`dropdown-item ${isActive("/sluzby/hypoteky") ? "active" : ""}`}
          >
            Hypotéky
          </Link>
          <Link
            href="/sluzby/investice"
            className={`dropdown-item ${isActive("/sluzby/investice") ? "active" : ""}`}
          >
            Investice
          </Link>
          <Link
            href="/sluzby/renta"
            className={`dropdown-item ${isActive("/sluzby/renta") ? "active" : ""}`}
          >
            Renta
          </Link>
        </div>
      </div>

      <Link
        href="/kontakt"
        className={`nav-link ${isActive("/kontakt") ? "active" : ""}`}
      >
        Kontakt
      </Link>
    </nav>
  );
}
