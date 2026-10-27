import type { Metadata } from "next";
import Link from "next/link";
import ContactActions from "@/components/ContactActions";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Plánování finanční renty Jihlava | Patrik Svoboda, EFA",
  description: "Kolik kapitálu potřebujete pro budoucí rentu a jak nastavit čerpání? Osobní plán, inflace, rezerva a investiční rizika s poradcem EFA.",
  alternates: { canonical: "/sluzby/renta" },
};

export default function PlanovaniRentyPage() {
  return <main id="main-content" className="section"><div className="container">
    <div className="page-heading">
      <p className="section-label">Finanční renta · osobně po celé ČR</p>
      <h1>Finanční renta začíná plánem, nikoli jedním číslem.</h1>
      <p className="section-intro">Ať už chcete postupně vytvořit kapitál, nebo už úspory máte a uvažujete o jejich čerpání, plán má vycházet z vašich potřeb, investičního horizontu a míry rizika.</p>
      <ContactActions topic="Plánování finanční renty" />
      <p className="hero-reassurance">Úvodní konzultace 30–60 minut · bezplatně</p>
    </div>
    <section className="section"><p className="section-label">Dvě výchozí situace</p><h2>Kolik potřebuji a co už mám?</h2>
      <div className="cards-grid three-up cards-top-gap">
        <article className="info-card"><h3>Chci v budoucnu měsíční rentu</h3><p>Probereme cílovou částku v dnešních cenách, délku spoření, rezervy a předpokládanou inflaci. Ukážeme si, jak změny vstupů ovlivňují orientační výsledek.</p></article>
        <article className="info-card"><h3>Už mám vytvořený kapitál</h3><p>Budeme řešit, jak nastavit výběry, kolísání hodnoty investic a rezervu pro období vyšší volatility. Žádná míra čerpání sama o sobě nezaručí trvalou rentu.</p></article>
        <article className="info-card"><h3>Chci plán průběžně aktualizovat</h3><p>V čase se mění příjmy, rodinná situace i tržní podmínky. Renta proto vyžaduje pravidelné přehodnocení, nikoliv jednorázový výpočet.</p></article>
      </div>
    </section>
    <section className="section two-column-block"><div><p className="section-label">Orientační propočet</p><h2>Vyzkoušejte si kalkulačku renty.</h2><p>V <Link href="/renta">kalkulačce finanční renty</Link> můžete porovnat tvorbu kapitálu i možnosti čerpání. Výsledky jsou modelové a nejsou zárukou budoucího vývoje.</p></div>
    <div><p className="section-label">Péče a zkušenosti</p><h2>Renta patří do celkového finančního plánu.</h2><p>Vedle investic se podíváme na dostupnou rezervu, rizika a další závazky. Pro sestavení komplexního plánu za vámi rád přijedu osobně kamkoliv po ČR. Navazující konzultace můžeme vést online, ušetřit si cestu a zároveň zůstat v pravidelném kontaktu. Pokud dáváte přednost osobním schůzkám, můžeme pokračovat i tak. Další informace najdete v části <Link href="/kontakt">Kontakt</Link>.</p></div></section>
    <section className="section contact-grid"><div><p className="section-label">Začněme konkrétně</p><h2>Jakou rentu si přejete?</h2><p className="section-intro">Napište mi svou představu a domluvíme první konzultaci.</p></div><div className="contact-card"><ContactForm topic="Finanční renta" /></div></section>
  </div></main>;
}
