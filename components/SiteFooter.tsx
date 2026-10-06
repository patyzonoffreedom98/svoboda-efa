import Link from "next/link";
import { site } from "@/lib/site";
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><strong>{site.name}</strong><p>Finanční poradenství v Jihlavě, na Vysočině i online.</p></div>
    <div className="footer-links"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/kontakt">Napsat zprávu</Link></div>
  </div></footer>;
}
