import type { Metadata } from "next";
import Link from "next/link";
import ContactActions from "@/components/ContactActions";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Investiční poradenství Jihlava | Bc. Patrik Svoboda, EFA",
  description: "Dlouhodobý investiční plán podle vašich cílů, horizontu a rizika. Konzultace s poradcem EFA v Jihlavě, na Vysočině nebo online.",
  alternates: { canonical: "/sluzby/investice" },
};

export default function InvesticniPoradenstviPage() {
  return <main id="main-content" className="section"><div className="container">
    <div className="page-heading">
      <p className="section-label">Investiční poradenství · Jihlava a online</p>
      <h1>Investice mají sloužit vašemu plánu. Ne naopak.</h1>
      <p className="section-intro">Rezerva, peníze pro děti, budoucí bydlení nebo dlouhodobá renta. Nejdříve si ujasníme, proč chcete investovat a kdy budete peníze potřebovat. Teprve potom dává smysl vybírat konkrétní řešení a jeho náklady.</p>
      <ContactActions topic="Investiční poradenství" />
      <p className="hero-reassurance">Úvodní konzultace 30–60 minut · bezplatně · osobně či online</p>
    </div>
    <section className="section">
      <p className="section-label">Co společně řešíme</p><h2>Investiční strategie začíná u vaší situace.</h2>
      <div className="cards-grid three-up cards-top-gap">
        <article className="info-card"><h3>Cíle a investiční horizont</h3><p>Krátkodobé potřeby oddělíme od dlouhodobých investic. Stanovíme přiměřenou finanční rezervu i to, kolik můžete pravidelně odkládat.</p></article>
        <article className="info-card"><h3>Riziko, volatilita a rozložení investic</h3><p>Vysvětlím vztah rizika, výnosu a času. Probereme vhodné rozložení majetku, měnové riziko a důvody, proč je důležité rozumět volatilitě.</p></article>
        <article className="info-card"><h3>Náklady a dlouhodobá péče</h3><p>Porovnáme průběžné náklady, dostupnost peněz a podmínky. Strategii pak průběžně vyhodnocujeme při změnách vaší životní situace.</p></article>
      </div>
    </section>
    <section className="section two-column-block">
      <div><p className="section-label">Začít můžete i orientačním výpočtem</p><h2>Co může znamenat pravidelné investování v čase?</h2><p>V <Link href="/investice">investiční kalkulačce</Link> si vyzkoušíte různé částky, horizonty a scénáře. Kalkulačka slouží pro orientaci, není příslibem výnosu. Podívat se můžete i na <Link href="/investice/historicke-vynosy">historické výsledky trhu</Link>; ty nezaručují budoucí vývoj.</p><p>Pokud investujete kvůli budoucímu příjmu, navazuje na tento plán také <Link href="/sluzby/renta">plánování finanční renty</Link>.</p></div>
      <div><p className="section-label">Odbornost a zázemí</p><h2>V Jihlavě i na dálku.</h2><p>Jsem Bc. Patrik Svoboda, EFA. Kvalifikace <Link href="/efa">European Financial Advisor</Link> se věnuje financím v souvislostech. Schůzky si můžeme domluvit v Jihlavě na Žižkově 1683/13 nebo online. Vysvětlím i náklady produktů a způsob odměňování poradce.</p></div>
    </section>
    <section className="section contact-grid"><div><p className="section-label">První krok</p><h2>Co od svých investic očekáváte?</h2><p className="section-intro">Napište mi, co chcete řešit. Ozvu se do dvou pracovních dnů.</p></div><div className="contact-card"><ContactForm topic="Investiční poradenství" /></div></section>
  </div></main>;
}
