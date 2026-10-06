import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portraitImage from "../public/portrait.webp";
import efaRegistryImage from "../efa-registr.png";
import ContactForm from "@/components/ContactForm";
import ContactActions from "@/components/ContactActions";
import ConsultationFaq from "@/components/ConsultationFaq";
import StoryCarousel from "@/components/StoryCarousel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finanční poradce Jihlava | Bc. Patrik Svoboda, EFA",
  description: "Hypotéky, investice a ochrana příjmu. Zázemí v Jihlavě, osobní schůzky po domluvě po celé ČR i online. Osobní přístup a dlouhodobá péče. Úvodní konzultace 30–60 minut bezplatně.",
  alternates: { canonical: "/" },
};
const services = [
  { title: "Chci řešit bydlení", text: "Koupě bytu, stavba, rekonstrukce nebo konec fixace. Projdeme rozpočet, možnosti financování a pomohu s vyřízením.", href: "/sluzby/hypoteky", cta: "Hypotéky a financování" },
  { title: "Chci dát penězům směr", text: "Začneme cílem, rezervou a tím, jaké riziko je pro vás přijatelné. Vytvoříme investiční plán a průběžně se k němu budeme vracet.", href: "/pribehy/duvera-v-investicni-plan", cta: "Jak může vypadat spolupráce" },
  { title: "Chci ochránit rodinu a příjem", text: "Spočítáme, jak by výpadek příjmu zasáhl váš rozpočet. Projdeme stávající pojištění a důležitá rizika. Pomohu i při pojistné události.", href: "/pribehy/pomoc-pri-pojistne-udalosti", cta: "Příklad pomoci při plnění" },
  { title: "Řeším finance ve firmě", text: "Podnikatelská rizika, pojištění i zaměstnanecké benefity. Probereme, co vaše firma potřebuje a co má smysl pro její zaměstnance.", href: "/pribehy/finance-stavebni-firmy", cta: "Příběh firmy se 30 zaměstnanci" },
];
const steps = [
  { title: "Nejdřív se poznáme", text: "Během 30–60 minut probereme vaši situaci a očekávání. Bezplatně, bez podpisů a bez výpovědí smluv." },
  { title: "Připravím srozumitelný plán", text: "Propojím cíle s vaším rozpočtem. Vysvětlím možnosti, náklady i rizika, abyste se mohli rozhodnout." },
  { title: "Pomohu s vyřízením", text: "Po domluvě provedu dalšími kroky, přípravou podkladů a komunikací s finančními institucemi." },
  { title: "Zůstaneme v kontaktu", text: "Plán průběžně aktualizujeme. Řeším za vás komunikaci s institucemi, výpovědi i hlášení pojistných událostí. Stačí dodat potřebné podklady; když je potřeba váš podpis či rozhodnutí, provedu vás dalším krokem." },
];

export default function HomePage() {
  return <main id="main-content" className="site-shell editorial-home">
    <section className="hero marketing-hero">
      <div className="container hero-grid">
        <div className="hero-copy fade-up">
          <p className="eyebrow">Zázemí v Jihlavě · za klienty po celé ČR</p>
          <h1>Vaše finance.<br />Jasný plán.<br /><span className="gold-text">Dlouhodobá péče.</span></h1>
          <p className="hero-text">Pomohu vám s hypotékou, investicemi i ochranou příjmu. Začneme tím, co právě řešíte, a společně nastavíme další kroky tak, aby dávaly smysl vašemu životu i rozpočtu.</p>
          <ContactActions />
          <p className="hero-reassurance">První konzultace 30–60 minut · bezplatně · osobně i online</p>
        </div>
        <div className="hero-visual fade-up delay-1"><span className="portrait-caption">Osobně. Srozumitelně.<br />Dlouhodobě.</span><div className="portrait-wrap"><Image src={portraitImage} alt="Bc. Patrik Svoboda, EFA — finanční poradce" priority sizes="(max-width: 1100px) 90vw, 480px" className="portrait-image" /></div></div>
      </div>
    </section>

    <section id="sluzby" className="section paper-section"><div className="container">
      <p className="section-label">S čím vám pomohu</p><h2>Začneme tím, co právě potřebujete.</h2>
      <p className="section-intro">Můžeme řešit jednu konkrétní věc i dlouhodobý plán. Rozsah spolupráce domluvíme společně.</p>
      <div className="cards-grid services-grid">{services.map((service, index) => <article key={service.title} className="service-card"><span className="service-index" aria-hidden="true">0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><Link href={service.href} className="text-link">{service.cta} →</Link></article>)}</div>
    </div></section>

    <section id="pribehy" className="section section-tinted"><div className="container">
      <p className="section-label">Příběhy z praxe</p><h2>Konkrétní situace. Konkrétní pomoc.</h2>
      <p className="section-intro">Čtyři anonymizované případy z mé praxe. Od prvního rozhovoru až po péči v dalších letech.</p>
      <StoryCarousel />
    </div></section>

    <section id="spoluprace" className="section"><div className="container">
      <p className="section-label">Jak spolupráce probíhá</p><h2>Víte, co bude následovat.</h2>
      <ol className="cards-grid four-up steps-list">{steps.map((step, index) => <li className="info-card" key={step.title}><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      <div className="consultation-panel"><div><h3>Na první schůzku můžete přijít i bez podkladů.</h3><p>Projdeme příjmy, výdaje, rodinnou situaci a to, čeho chcete dosáhnout. Podklady mohou pomoci, ale jejich shánění nemusí prvnímu rozhovoru předcházet.</p></div><a className="btn btn-gold" href={site.booking} target="_blank" rel="noreferrer">Vybrat termín</a></div>
    </div></section>

    <section id="o-mne" className="section paper-section"><div className="container two-column-block">
      <div><p className="section-label">Váš poradce</p><h2>Zkušenosti z praxe. Odbornost nad rámec běžných zkoušek.</h2><div className="text-stack">
        <p>Jsem Patrik Svoboda, rodilý Jihlavák. Více než šest let pomáhám rodinám a podnikatelům s financemi. Zázemí mám v Jihlavě, ale za klienty pravidelně cestuji — často do Brna, Prahy nebo Jihočeského či Olomouckého kraje.</p>
        <p>Jsem držitelem evropské certifikace EFA (European Financial Advisor). Její získání zahrnuje písemnou zkoušku i praktickou obhajobu případové studie před komisí. Propojuje investice, financování, pojištění a další oblasti finančního plánování — přesně tak, jak se potkávají ve vašem životě.</p>
        <p>Udržením certifikace se zavazuji k průběžnému odbornému vzdělávání a dodržování etického kodexu EFPA. Každý rok věnuji dalšímu rozvoji čas i prostředky, abych vám dokázal srozumitelně vysvětlit možnosti, náklady a rizika a pomoci rozhodovat se s přehledem.</p>
      </div></div>
      <div id="efa" className="image-card"><Image src={efaRegistryImage} alt="Profesní certifikace a registr EFA — Patrik Svoboda" className="efa-image" sizes="(max-width: 1100px) 90vw, 460px" /><p className="form-note">EFA — European Financial Advisor. Evropská certifikace ověřující znalosti i jejich praktické využití při finančním plánování.</p><a href="https://efpa.cz/poradci" target="_blank" rel="noreferrer" className="text-link">Více o certifikaci EFPA →</a></div>
    </div></section>

    <section id="kalkulacky" className="section"><div className="container"><p className="section-label">Pro první představu</p><h2>Spočítejte si svůj další krok.</h2>
      <div className="cards-grid three-up cards-top-gap">{[
        { title: "Hypoteční kalkulačka", text: "Jaká může být měsíční splátka vašeho bydlení?", href: "/hypoteka" },
        { title: "Investiční kalkulačka", text: "Co pro váš cíl znamená čas a pravidelná investice?", href: "/investice" },
        { title: "Kalkulačka renty", text: "Kolik kapitálu byste potřebovali pro budoucí rentu?", href: "/renta" },
      ].map(item => <article className="utility-card" key={item.href}><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>Otevřít kalkulačku →</Link></article>)}</div>
    </div></section>

    <section className="section section-tinted"><div className="container faq-layout"><div><p className="section-label">Před první schůzkou</p><h2>Na co se často ptáte.</h2></div><ConsultationFaq /></div></section>

    <section id="kontakt" className="section section-last"><div className="container contact-grid">
      <div className="contact-card"><p className="section-label">První krok</p><h2>Co právě řešíte vy?</h2><div className="text-stack"><p>Napište mi pár slov, nebo si rovnou vyberte termín. Ozvu se do dvou pracovních dnů.</p><p>Úvodní konzultace je bezplatná. Nejprve se poznáme a projdeme vaši situaci — bez podpisů a výpovědí smluv.</p></div>
        <div className="contact-lines"><p><a href={site.phoneHref}>{site.phone}</a></p><p><a href={`mailto:${site.email}`}>{site.email}</a></p><p><a href={site.whatsapp} target="_blank" rel="noreferrer">Napsat na WhatsApp →</a></p></div>
        <div id="rezervace" className="hero-actions"><a className="btn btn-outline" href={site.booking} target="_blank" rel="noreferrer">Vybrat termín konzultace</a></div>
      </div>
      <div className="contact-card"><h3>Stačí zanechat kontakt.</h3><ContactForm /></div>
    </div></section>
  </main>;
}
