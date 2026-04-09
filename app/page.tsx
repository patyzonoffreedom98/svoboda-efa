import Image from "next/image";
import Link from "next/link";

import efaRegistryImage from "../efa-registr.png";
import efpaVerificationImage from "../efpa-overeni.png";

const services = [
  {
    title: "Hypotéky a financování",
    text: "Nastavení financování s ohledem na rozpočet, rezervy, budoucí plány i celkovou dlouhodobou stabilitu.",
  },
  {
    title: "Investice a renta",
    text: "Tvorba investičního plánu a dlouhodobé cesty k majetku, který má jednou začít pracovat pro vás.",
  },
  {
    title: "Zajištění",
    text: "Ochrana příjmů, majetku a rodiny tak, aby jedno špatné období nerozbilo jinak dobře nastavený plán.",
  },
  {
    title: "Firemní benefity / DIP",
    text: "Smysluplné nastavení benefitů pro firmy a zaměstnance včetně daňové a mzdové efektivity.",
  },
];

const advantages = [
  {
    title: "Dlouhodobý plán",
    text: "Neřešíme jen jednu smlouvu. Stavíme systém, ve kterém na sebe hypotéka, investice i zajištění navazují.",
  },
  {
    title: "Srozumitelná čísla",
    text: "Rozhodnutí podložená čísly, scénáři a souvislostmi – ne tlakem na rychlý podpis.",
  },
  {
    title: "Vysočina i celá ČR",
    text: "Osobně i online. Důležitý je výsledek, ne to, jestli sedíme ve stejné místnosti.",
  },
  {
    title: "Osobní přístup",
    text: "Každý plán musí dávat smysl i v reálném životě, ne jen na papíře.",
  },
];

const calculators = [
  {
    title: "Hypoteční kalkulačka",
    text: "Orientační výpočet splátky a základních scénářů financování.",
    href: "/hypoteka",
    cta: "Otevřít kalkulačku",
  },
  {
    title: "Investiční kalkulačka",
    text: "Modelace pravidelného investování a růstu kapitálu v čase.",
    href: "/investice",
    cta: "Otevřít kalkulačku",
  },
  {
    title: "Kalkulačka renty",
    text: "Přepočet cílového kapitálu a budoucí možné měsíční renty.",
    href: "/renta",
    cta: "Otevřít kalkulačku",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            Bc. Patrik Svoboda, EFA
          </Link>

          <nav className="desktop-nav" aria-label="Hlavní navigace">
            <a href="#o-mne">O mně</a>
            <a href="#efa">EFA</a>
            <a href="#sluzby">Služby</a>
            <a href="#kalkulacky">Kalkulačky</a>
            <a href="#rezervace">Rezervace</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a href="#kontakt" className="header-cta">
            Domluvit konzultaci
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid hero-grid-single">
          <div className="hero-copy hero-copy-wide">
            <div className="eyebrow">Hypotéky · Investice · Zajištění · DIP</div>

            <h1>Plán, který obstojí v číslech i realitě.</h1>

            <p className="hero-text">
              Pomáhám klientům nastavovat finance s klidem, systémem a dlouhodobou
              perspektivou. Hypotéka, investice, zajištění i firemní benefity mají
              dávat smysl dohromady – ne každý zvlášť.
            </p>

            <ul className="hero-list">
              <li>Osobní přístup bez nátlaku a bez zbytečné omáčky.</li>
              <li>Jedna strategie místo nesourodých produktů.</li>
              <li>Vysočina i celá ČR – osobně i online.</li>
              <li>Důraz na srozumitelnost, čísla a reálnou použitelnost.</li>
            </ul>

            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-gold">
                Nezávazně se spojit
              </a>
              <a href="#rezervace" className="btn btn-dark">
                Rezervovat schůzku
              </a>
              <a href="#kalkulacky" className="btn btn-outline">
                Zobrazit kalkulačky
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="o-mne" className="section">
        <div className="container narrow">
          <p className="section-label">O mně</p>
          <h2>Finanční plánování, které drží i mimo ideální podmínky.</h2>

          <div className="text-stack">
            <p>
              Nejde mi o to prodat jeden produkt a jít dál. Smysl vidím v tom,
              aby měl klient finance poskládané jako funkční celek – od rezervy,
              přes ochranu příjmu a majetku, až po investice a budoucí rentu.
            </p>
            <p>
              Pracuji s lidmi, kteří chtějí mít ve svých rozhodnutích větší klid,
              pořádek a dlouhodobý směr. Vysvětluji věci srozumitelně, bez tlaku,
              ale zároveň napřímo.
            </p>
            <p>
              Působím na Vysočině i po celé České republice. Schůzky řeším osobně
              i online podle toho, co vám dává větší smysl.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid four-up">
            {advantages.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="efa" className="section">
        <div className="container">
          <div className="two-column-block">
            <div className="content-side">
              <p className="section-label">EFA</p>
              <h2>Evropský standard odbornosti a etiky.</h2>
              <div className="text-stack">
                <p>
                  Certifikace EFA představuje evropský standard odbornosti v oblasti
                  finančního poradenství. Je postavená na vzdělávání, etice a
                  schopnosti dívat se na finance v širších souvislostech.
                </p>
                <p>
                  Pro klienta to znamená jediné: vyšší nárok na kvalitu, širší
                  porozumění souvislostem a důraz na dlouhodobě obhajitelné řešení.
                </p>
                <p>
                  Nejde o titul „na efekt“. Jde o závazek držet úroveň, kterou lze
                  obhájit odborně i lidsky.
                </p>
              </div>
            </div>

            <div className="efa-images">
              <div className="image-card">
                <Image
                  src={efaRegistryImage}
                  alt="EFA registr"
                  className="efa-image"
                />
              </div>
              <div className="image-card">
                <Image
                  src={efpaVerificationImage}
                  alt="EFPA ověření"
                  className="efa-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="section">
        <div className="container">
          <p className="section-label">Služby</p>
          <h2>Oblasti, ve kterých klientům pomáhám.</h2>

          <div className="cards-grid services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalkulacky" className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-label">Kalkulačky</p>
              <h2>Praktické výpočty pro schůzky i rychlou orientaci.</h2>
            </div>
            <p className="section-side-text">
              Na hlavním webu zůstane čistý přehled. Každá kalkulačka má vlastní
              odbočku, aby byl web přehledný a dobře použitelný i při jednání s klienty.
            </p>
          </div>

          <div className="cards-grid three-up">
            {calculators.map((calculator) => (
              <article key={calculator.title} className="utility-card">
                <h3>{calculator.title}</h3>
                <p>{calculator.text}</p>
                <Link href={calculator.href} className="text-link">
                  {calculator.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rezervace" className="section">
        <div className="container">
          <div className="booking-panel">
            <div className="booking-copy">
              <p className="section-label">Rezervace</p>
              <h2>Nejrychlejší cesta je rovnou si domluvit termín.</h2>
              <p>
                Až mi pošleš svůj skutečný rezervační odkaz, napojíme ho sem jako
                hlavní CTA. Zatím je tato sekce připravená a tlačítko vede na kontakt.
              </p>
            </div>

            <div className="booking-actions">
              <a href="#kontakt" className="btn btn-gold">
                Zatím přejít na kontakt
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section section-last">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <p className="section-label">Kontakt</p>
              <h2>Spojme se.</h2>
              <div className="text-stack">
                <p>
                  Jestli řešíte hypotéku, investice, ochranu příjmu nebo chcete dát
                  financím větší systém, ozvěte se.
                </p>
                <p>
                  Nejjednodušší je využít rezervační systém. Pokud zatím nechcete
                  vybírat termín, můžete zanechat kontakt.
                </p>
              </div>

              <div className="contact-lines">
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:info@svoboda-efa.cz">info@svoboda-efa.cz</a>
                </p>
                <p>
                  <strong>Web:</strong>{" "}
                  <a href="https://svoboda-efa.cz">svoboda-efa.cz</a>
                </p>
                <p>
                  <strong>Působnost:</strong> Vysočina i celá ČR
                </p>
              </div>
            </div>

            <div className="contact-card">
              <h3>Zanechte na sebe kontakt</h3>

              <form className="contact-form">
                <label>
                  Jméno
                  <input type="text" placeholder="Vaše jméno" />
                </label>

                <label>
                  E-mail
                  <input type="email" placeholder="Váš e-mail" />
                </label>

                <label>
                  Telefon
                  <input type="tel" placeholder="Váš telefon" />
                </label>

                <label>
                  Zpráva
                  <textarea
                    rows={5}
                    placeholder="Stručně napište, co aktuálně řešíte."
                  />
                </label>

                <button type="button" className="btn btn-gold">
                  Formulář doplníme ve 2. fázi
                </button>
              </form>

              <p className="form-note">
                Teď je formulář zatím jen vizuálně připravený. Ve druhé fázi ho
                napojíme na reálné odesílání kontaktů.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
