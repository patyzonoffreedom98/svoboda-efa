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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-3">
        {/* Logo / jméno vlevo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-gold md:text-base"
        >
          Bc. Patrik Svoboda, EFA
        </Link>

        {/* Menu vpravo */}
        <nav className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-200">
          <Link
            href="/o-mne"
            className={
              "nav-link " + (isActive("/o-mne") ? "nav-link-active" : "")
            }
          >
            O mně
          </Link>

          <Link
            href="/efa"
            className={"nav-link " + (isActive("/efa") ? "nav-link-active" : "")}
          >
            EFA
          </Link>

          {/* Služby s rozbalovacím menu */}
          <div className="relative group">
            <button
              type="button"
              className={
                "nav-link inline-flex items-center gap-1 " +
                (pathname.startsWith("/sluzby") ? "nav-link-active" : "")
              }
            >
              Služby
              <span className="text-[0.65rem]">▾</span>
            </button>

            <div className="absolute right-0 top-full z-30 mt-2 hidden min-w-[230px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 py-2 text-sm shadow-xl group-hover:block">
              <Link
                href="/sluzby/hypoteky-a-financovani"
                className="block px-4 py-2 text-gray-100 hover:bg-neutral-900 hover:text-gold"
              >
                Hypotéky a financování
              </Link>
              <Link
                href="/sluzby/investice-a-renta"
                className="block px-4 py-2 text-gray-100 hover:bg-neutral-900 hover:text-gold"
              >
                Investice a renta
              </Link>
              <Link
                href="/sluzby/renta"
                className="block px-4 py-2 text-gray-100 hover:bg-neutral-900 hover:text-gold"
              >
                Renta
              </Link>
              <Link
                href="/sluzby/zajisteni"
                className="block px-4 py-2 text-gray-100 hover:bg-neutral-900 hover:text-gold"
              >
                Zajištění
              </Link>
            </div>
          </div>

          <Link
            href="/kontakt"
            className={
              "nav-link " + (isActive("/kontakt") ? "nav-link-active" : "")
            }
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
