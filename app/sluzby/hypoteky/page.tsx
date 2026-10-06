import type { Metadata } from "next";
import Link from "next/link";
import ContactActions from "@/components/ContactActions";
import ContactForm from "@/components/ContactForm";
import ConsultationFaq from "@/components/ConsultationFaq";
import { stories } from "@/lib/stories";
export const metadata: Metadata = {
  title: "Hypotéky a refinancování v Jihlavě | Patrik Svoboda, EFA",
  description: "Plánujete koupi bydlení, rekonstrukci nebo konec fixace? Projdeme rozpočet a možnosti hypotéky. Osobně v Jihlavě i online, první konzultace zdarma.",
  alternates: { canonical: "/sluzby/hypoteky" },
};
export default function MortgagesPage() {
  const story = stories[0];
  return <main id="main-content" className="section"><div className="container">
    <div className="page-heading"><p className="section-label">Hypotéky · Jihlava a online</p><h1>Bydlení začíná plánem, který váš rozpočet unese.</h1><p className="section-intro">Projdeme vaše příjmy, výdaje a možnosti financování. Pomohu s přípravou podkladů, komunikací s bankou a vyřízením hypotéky. K plánu se budeme vracet i po nastěhování.</p><ContactActions topic="Hypotéka" /><p className="hero-reassurance">Úvodní konzultace 30–60 minut · bezplatně · bez podpisů</p></div>
    <section className="section"><p className="section-label">Vaše situace</p><h2>S čím můžeme začít.</h2><div className="cards-grid three-up cards-top-gap">
      <article className="info-card"><h3>Kupuji nebo rekonstruuji</h3><p>Ujasníme si rozpočet, vlastní prostředky a rezervu. Potom projdeme varianty financování a potřebné podklady.</p></article>
      <article className="info-card"><h3>Blíží se konec fixace</h3><p>Podíváme se na nabídku současné banky i další možnosti. Porovnáme splátku, náklady a podmínky v souvislostech.</p></article>
      <article className="info-card"><h3>Moje situace je složitější</h3><p>Podnikání, další úvěry nebo nedostatek vlastních prostředků? Nejdřív projdeme okolnosti a zjistíme, jaké možnosti připouští banka.</p></article>
    </div></section>
    <section className="section two-column-block"><div><p className="section-label">Co za vás řeším</p><h2>Od prvních otázek po následnou péči.</h2><div className="text-stack"><p>Nejdřív prověříme, jak splácení zapadne do života vaší domácnosti. Vysvětlím možnosti i jejich omezení, pomohu připravit podklady a budu s bankou komunikovat o konkrétním řešení.</p><p>Po sjednání můžeme při pravidelných schůzkách kontrolovat rozpočet a reagovat na změny rodinné situace. Pomoc může zahrnovat i řešení zajištění, pokud se podmínky v čase změní.</p></div><Link href="/hypoteka" className="text-link">Nejdřív si orientačně spočítat splátku →</Link></div><article className="story-card"><p className="section-label">Skutečný příklad z praxe</p><h3>{story.title}</h3><p>{story.summary}</p><Link className="text-link" href={`/pribehy/${story.slug}`}>Přečíst celý příběh →</Link></article></section>
    <section className="section faq-layout"><div><p className="section-label">Před první schůzkou</p><h2>Víte, do čeho jdete.</h2></div><ConsultationFaq /></section>
    <section className="section contact-grid"><div><p className="section-label">Probereme vaše bydlení</p><h2>Stačí první otázka.</h2><p className="section-intro">Popište mi, co plánujete. Ozvu se do dvou pracovních dnů a domluvíme další postup.</p></div><div className="contact-card"><ContactForm topic="Hypotéka" /></div></section>
  </div></main>;
}
