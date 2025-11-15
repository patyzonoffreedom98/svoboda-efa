// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900 bg-neutral-950/85 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        {/* Logo / jméno */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-gold md:text-base"
        >
          Bc. Patrik Svoboda, EFA
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-200 md:flex">
          <Link
            href="/o-mne"
            className={
              "hover:text-gold transition-colors " +
              (isActive("/o-mne") ? "text-gold" : "")
            }
          >
            O mně
          </Link>

          <Link
            href="/efa"
            className={
              "hover:text-gold transition-colors " +
              (isActive("/efa") ? "text-gold" : "")
            }
          >
            EFA
          </Link>

          {/* Služby – rozbalovací menu */}
          <div className="relative group">
            <button
              type="button"
              className={
                "inline-flex items-center gap-1 hover:text-gold transition-colors " +
                (pathname.startsWith("/sluzby") ? "text-gold" : "")
              }
            >
              Služby
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 py-2 text-sm opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <Link
                href="/sluzby/hypoteky-a-financovani"
                className="block px-4 py-2 hover:bg-neutral-900 hover:text-gold"
              >
                Hypotéky a financování
              </Link>
              <Link
                href="/sluzby/investice-a-renta"
                className="block px-4 py-2 hover:bg-neutral-900 hover:text-gold"
              >
                Investice a renta
              </Link>
              <Link
                href="/sluzby/renta"
                className="block px-4 py-2 hover:bg-neutral-900 hover:text-gold"
              >
                Renta
              </Link>
              <Link
                href="/sluzby/zajisteni"
                className="block px-4 py-2 hover:bg-neutral-900 hover:text-gold"
              >
                Zajištění
              </Link>
            </div>
          </div>

          <Link
            href="/kontakt"
            className={
              "hover:text-gold transition-colors " +
              (isActive("/kontakt") ? "text-gold" : "")
            }
          >
            Kontakt
          </Link>
        </nav>

        {/* Mobilní hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-neutral-800 p-2 text-gray-200 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Otevřít navigaci"
        >
          <span className="text-lg">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobilní menu */}
      {mobileOpen && (
        <nav className="border-t border-neutral-900 bg-neutral-950 pb-4 md:hidden">
          <div className="container flex flex-col gap-2 pt-3 text-sm font-medium text-gray-200">
            <Link
              href="/o-mne"
              className={
                "py-1 hover:text-gold transition-colors " +
                (isActive("/o-mne") ? "text-gold" : "")
              }
              onClick={() => setMobileOpen(false)}
            >
              O mně
            </Link>
            <Link
              href="/efa"
              className={
                "py-1 hover:text-gold transition-colors " +
                (isActive("/efa") ? "text-gold" : "")
              }
              onClick={() => setMobileOpen(false)}
            >
              EFA
            </Link>

            <div className="pt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Služby
            </div>
            <Link
              href="/sluzby/hypoteky-a-financovani"
              className="py-1 pl-3 text-gray-200 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Hypotéky a financování
            </Link>
            <Link
              href="/sluzby/investice-a-renta"
              className="py-1 pl-3 text-gray-200 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Investice a renta
            </Link>
            <Link
              href="/sluzby/renta"
              className="py-1 pl-3 text-gray-200 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Renta
            </Link>
            <Link
              href="/sluzby/zajisteni"
              className="py-1 pl-3 text-gray-200 hover:text-gold"
              onClick={() => setMobileOpen(false)}
            >
              Zajištění
            </Link>

            <Link
              href="/kontakt"
              className={
                "mt-2 py-1 hover:text-gold transition-colors " +
                (isActive("/kontakt") ? "text-gold" : "")
              }
              onClick={() => setMobileOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
