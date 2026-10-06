import Link from "next/link";
import { site } from "@/lib/site";
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><strong>{site.name}</strong><p>Zázemí v Jihlavě. Osobně po domluvě po celé ČR i online.</p><p className="legal-details">Patrik Svoboda · IČO {site.ico}<br />Sídlo podnikání: {site.registeredAddress}<br />Zapsán v živnostenském rejstříku.<br /><a href="https://ares.gov.cz/ekonomicke-subjekty/res/09910263" target="_blank" rel="noreferrer">Údaje v ARES ↗</a></p></div>
    <div className="footer-links"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/kontakt">Napsat zprávu</Link></div>
  </div></footer>;
}
