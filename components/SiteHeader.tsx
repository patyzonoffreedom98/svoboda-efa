"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
const links = [["/#sluzby", "Služby"], ["/#pribehy", "Příběhy z praxe"], ["/#spoluprace", "Spolupráce"], ["/#o-mne", "O mně"], ["/kontakt", "Kontakt"]];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>{site.name}</Link>
      <nav className="desktop-nav" aria-label="Hlavní navigace">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <a href={site.booking} className="header-cta" target="_blank" rel="noreferrer">Vybrat termín</a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Zavřít" : "Menu"}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilní navigace" hidden={!open}>
      {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href={site.booking} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Vybrat termín konzultace</a>
    </nav>
  </header>;
}
