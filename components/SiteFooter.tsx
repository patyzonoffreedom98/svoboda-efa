import Link from "next/link";
import { site, offices, officeMapUrl } from "@/lib/site";
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><strong>{site.name}</strong><div className="footer-office"><span>Hlavní kancelář · Jihlava</span><a href={officeMapUrl(offices[0].address)} target="_blank" rel="noreferrer">{offices[0].address} ↗</a><p>Vedle Dělnického domu, budova bývalého Globusu.</p></div><p className="footer-other-offices">Po dohodě také Havlíčkův Brod · Žďár nad Sázavou · Světlá nad Sázavou.<br /><Link href="/kontakt#kancelare">Adresy všech kanceláří →</Link></p><p className="legal-details">Patrik Svoboda · IČO {site.ico}<br />Sídlo podnikání (není místem schůzek): {site.registeredAddress}<br />Zapsán v živnostenském rejstříku.<br /><a href="https://ares.gov.cz/ekonomicke-subjekty/res/09910263" target="_blank" rel="noreferrer">Údaje v ARES ↗</a></p></div>
    <div className="footer-links"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/kontakt">Napsat zprávu</Link></div>
  </div></footer>;
}
