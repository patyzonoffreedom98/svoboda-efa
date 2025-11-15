import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import InstagramEmbed from "@/components/InstagramEmbed";
import ContactForm from "@/components/ContactForm";
import PreFooter from "@/components/PreFooter";

export const metadata: Metadata = {
  title: "Bc. Patrik Svoboda, EFA – finanční plán",
  description:
    "Hypotéky, investice a zajištění – bez nátlaku, srozumitelně a s důrazem na dlouhodobý plán, který obstojí v číslech i realitě.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO – úvod */}
      <section id="o-mne" className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Hypotéky · Investice · Zajištění</p>
          <h1 className="hero-title">
            Plán, který obstojí v číslech i realitě
          </h1>

          <p className="hero-lead">
            Hypotéka, investice i zajištění – bez nátlaku, srozumitelně a s
            důrazem na dlouhodobý plán. Postarám se o to, aby vaše rozhodnutí
            dávala smysl v číslech i ve vašem životě.
          </p>

          <ul className="hero-list">
            <li>Dlouhodobý plán a osobní péče, ne „rychlý prodej“.</li>
            <li>Hypotéka, investice a zajištění jsou navzájem provázané.</li>
            <li>Vysočina a celá ČR – osobně i online.</li>
            <li>Transparentně a s respektem k vašemu rozpočtu.</li>
          </ul>

          <div className="hero-ctas">
            <Link
              href="/sluzby/hypoteky-a-financovani"
              className="btn-primary"
            >
              Spočítat hypotéku
            </Link>
            <Link
              href="/sluzby/investice-a-renta"
              className="btn-secondary"
            >
              Investiční kalkulačka
            </Link>
            <Link href="/sluzby/renta" className="btn-tertiary">
              Spočítat rentu
            </Link>
          </div>
        </div>

        <div className="hero-photo-wrapper hero-photo-animate">
          <Image
            src="/ja-bile-pozadi.jpg"
            alt="Bc. Patrik Svoboda, EFA"
            width={520}
            height={680}
            className="hero-photo"
            priority
          />
        </div>
      </section>

      {/* PROČ ŘEŠIT FINANCE S ODBORNÍKEM */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Proč řešit finance s odborníkem</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Dlouhodobý plán</h3>
              <p>
                Hypotéka, investice i zajištění v jedné strategii místo
                nesourodých produktů od různých institucí.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Srozumitelná čísla</h3>
              <p>
                Rozhodnutí podložená čísly, scénáři a riziky – ne jen slibovaným
                „výnosem“ nebo tlakem na rychlé uzavření smlouvy.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Vysočina a celá ČR</h3>
              <p>
                Schůzky osobně na Vysočině nebo online. Přizpůsobíme se vašemu
                času i preferovanému způsobu komunikace.
              </p>
            </div>
            <div className="benefit-card">
              <h3>EFA certifikace</h3>
              <p>
                Evropský standard odbornosti a etiky (EFPA). Pravidelné
                vzdělávání a dohled nad kvalitou poradenství.
              </p>
            </div>
          </div>

          <div className="section-text">
            <p>
              Kvalitní finanční plán není o jedné schůzce ani o jednom produktu.
              Jde o to, aby na sebe jednotlivé kroky navazovaly – od rezervy,
              přes pojištění a hypotéku až po budoucí rentu. Když se vše řeší
              odděleně, často vznikají zbytečná rizika nebo slepá místa.
            </p>
            <p>
              Společně proto nejprve pojmenujeme vaše cíle a možnosti a teprve
              potom hledáme konkrétní řešení. Dáváme dohromady čísla, která
              odpovídají vaší životní situaci, a nastavujeme plán tak, aby byl
              dlouhodobě udržitelný – i v období vyšších sazeb, inflace nebo
              výpadku příjmů.
            </p>
            <p>
              Cílem není mít „co nejvíc produktů“, ale takové nastavení, které
              vás podrží, když se něco pokazí, a zároveň vás posune blíž k
              finanční nezávislosti. Vy rozhodujete o tempu, já se starám o to,
              aby tomu odpovídala strategie a konkrétní kroky.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM REELS – DVA MALÉ NÁHLEDY VEDLE SEBE */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Krátká videa a vysvětlení v praxi (Instagram)
          </h2>

          <div className="ig-grid">
            <InstagramEmbed
              url="https://www.instagram.com/p/DPjUX2NDNKg/"
              showHeader={false}
              maxWidth={360}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/DO_gbreDMox/"
              showHeader={false}
              maxWidth={360}
            />
          </div>
        </div>
      </section>

      {/* KONTAKTNÍ FORMULÁŘ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nezávazná konzultace zdarma</h2>
          <p className="section-lead">
            Zajímá vás, jak by mohl vypadat váš vlastní finanční plán? Napište
            mi pár vět o vaší situaci – ozvu se vám co nejdříve a domluvíme se,
            jak nejlépe pokračovat.
          </p>

          <ContactForm />
        </div>
      </section>

      <PreFooter />
    </main>
  );
}
