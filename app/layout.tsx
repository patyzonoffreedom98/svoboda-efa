// components/Nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="border-b border-neutral-900 bg-neutral-950">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        {/* Logo / jméno vlevo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-gold md:text-base"
        >
          Bc. Patrik Svoboda, EFA
        </Link>

        {/* Menu vpravo */}
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-200">
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

          {/* Služby s rozbalovacím menu */}
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

            <div className="absolute right-0 top-full z-30 mt-2 hidden min-w-[230px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 py-2 text-sm shadow-xl group-hover:block">
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
      </div>
    </header>
  );
}
