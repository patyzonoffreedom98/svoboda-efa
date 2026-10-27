"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BookingLink from "@/components/BookingLink";
import { site } from "@/lib/site";
const links = [["/#sluzby", "Služby"], ["/hypoteka", "Hypo kalkulačka"], ["/#pribehy", "Příběhy z praxe"], ["/#spoluprace", "Spolupráce"], ["/#o-mne", "O mně"], ["/#recenze", "Recenze"], ["/kontakt", "Kontakt"]];
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><Image src="/brand-monogram.png" alt="" width={32} height={52} className="brand-monogram" /><span>{site.name}</span></Link>
      <nav className="desktop-nav" aria-label="Hlavní navigace">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <BookingLink className="header-cta">Vybrat termín</BookingLink>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Zavřít" : "Menu"}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobilní navigace" hidden={!open}>
      {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <BookingLink onClick={() => setOpen(false)}>Vybrat termín konzultace</BookingLink>
    </nav>
  </header>;
}
