import Image from "next/image";
import Link from "next/link";

import efaRegistryImage from "../efa-registr.png";
import portraitImage from "../ja-vyrez.png";

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
    title: "Osobní přístup",
    text: "Každý plán musí dávat smysl i v reálném životě, ne jen na papíře.",
  },
  {
    title: "Důvěra a kontinuita",
    text: "Nejde o jednorázové rozhodnutí, ale o dlouhodobou spolupráci postavenou na klidu, přehledu a odpovědnosti.",
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

          <a
            href="https://calendar.app.google/oJTfuFYsEd3QQoyr5"
            target="_blank"
            rel="noreferrer"
            className="header-cta"
          >
            Domluvit konzultaci
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy fade-up delay-1">
            <div className="eyebrow">
              Hypotéky · Investice · Zajištění · Firemní benefity
            </div>

            <h1>Plán, který obstojí v číslech i realitě.</h1>

            <p className="hero-text">
              Pomáhám klientům nastavovat finance s klidem, systémem a dlouhodobou
              perspektivou. Hypotéka, investice, ochrana příjmu i majetku a budování
              kapitálu mají tvořit jeden celek — srozumitelný, obhajitelný a
              použitelný v každodenním životě.
            </p>

            <div className="hero-actions hero-actions-compact">
              <a
                href="https://calendar.app.google/oJTfuFYsEd3QQoyr5"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Rezervovat schůzku
              </a>
              <a href="#kontakt" className="btn btn-dark">
                Zanechat kontakt
              </a>
              <a href="#kalkulacky" className="btn btn-outline">
                Zobrazit kalkulačky
              </a>
            </div>
          </div>

          <div className="hero-visual fade-up delay-2">
            <div className="portrait-wrap">
              <Image
                src={portraitImage}
                alt="Bc. Patrik Svoboda, EFA"
                priority
                className="portrait-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="o-mne" className="section">
        <div className="container narrow centered-block fade-up delay-2">
          <p className="section-label">O mně</p>
          <h2>Finance, které mají řád, klid a dlouhodobý směr.</h2>

          <div className="text-stack text-center">
            <p>
              Nejde mi o to prodat jednu smlouvu a jít dál. Smysl vidím v tom,
              aby měl klient finance poskládané jako funkční celek – od rezervy,
              přes ochranu příjmu a majetku, až po investice a budoucí rentu.
            </p>
            <p>
              Jsem rodilý Jihlavák a ve financích působím šestým rokem. Za tu dobu
              jsem pomohl stovkám klientů dělat rozhodnutí s větším klidem,
              přehledem a dlouhodobou logikou.
            </p>
            <p>
              Jsem také celoživotní sportovec a právě sport mě naučil disciplíně,
              vytrvalosti a dlouhodobému přemýšlení. I díky tomu stavím svoji práci
              na poctivosti, kontinuitě a důvěře, ne na rychlých zkratkách.
            </p>
            <p>
              Vysvětluji věci srozumitelně, bez tlaku, ale zároveň napřímo. Cílem
              není složitý plán na efekt, ale dobře nastavený systém, který dává
              smysl dlouhodobě i lidsky.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="cards-grid four-up">
            {advantages.map((item, index) => (
              <article
                key={item.title}
                className={`info-card fade-up delay-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="efa" className="section">
        <div className="container">
          <div className="two-column-block two-column-efa">
            <div className="content-side fade-up delay-1">
              <p className="section-label">EFA</p>
              <h2>Evropský standard odbornosti, který je v Česku stále výjimečný.</h2>
              <div className="text-stack">
                <p>
                  Certifikace EFA představuje evropský standard odbornosti v oblasti
                  finančního poradenství. Je postavená na vzdělávání, etice a
                  schopnosti dívat se na finance v širších souvislostech.
                </p>
                <p>
                  V České republice ji má jen malé procento poradců, přibližně kolem
                  jednoho procenta trhu. I proto jde o prestižní a zároveň náročnou
                  certifikaci, která není jen formálním doplňkem ke jménu.
                </p>
                <p>
                  Pro klienta to znamená vyšší nárok na kvalitu, širší porozumění
                  souvislostem a důraz na řešení, která lze obhájit odborně i lidsky.
                </p>
              </div>

              <div className="efa-links">
                <a
                  href="https://www.efpa.cz/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Více o EFPA
                </a>
              </div>
            </div>

            <div className="efa-images fade-up delay-2">
              <div className="image-card image-card-large">
                <Image
                  src={efaRegistryImage}
                  alt="EFA registr a ověření poradce"
                  className="efa-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="section">
        <div className="container fade-up delay-1">
          <p className="section-label">Služby</p>
          <h2>Oblasti, ve kterých klientům pomáhám.</h2>

          <div className="cards-grid services-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`service-card fade-up delay-${index + 1}`}
              >
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kalkulacky" className="section">
        <div className="container fade-up delay-1">
          <p className="section-label">Kalkulačky</p>
          <h2>Praktické výpočty pro schůzky i rychlou orientaci.</h2>

          <div className="cards-grid three-up cards-top-gap">
            {calculators.map((calculator, index) => (
              <article
                key={calculator.title}
                className={`utility-card fade-up delay-${index + 1}`}
              >
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
        <div className="container fade-up delay-1">
          <div className="booking-panel">
            <div className="booking-copy">
              <p className="section-label">Rezervace</p>
              <h2>Nejrychlejší cesta je rovnou si domluvit termín.</h2>
              <p>
                Pokud už víte, že chcete něco probrat, vyberte si rovnou termín v
                rezervačním systému. Je to nejjednodušší způsob, jak se spojit bez
                zbytečného čekání.
              </p>
            </div>

            <div className="booking-actions">
              <a
                href="https://calendar.app.google/oJTfuFYsEd3QQoyr5"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Otevřít rezervaci
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section section-last">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card fade-up delay-1">
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
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+420774697755">774 697 755</a>
                </p>
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:patrik.svoboda@wmfinance.cz">
                    patrik.svoboda@wmfinance.cz
                  </a>
                </p>
                <p>
                  <strong>Web:</strong>{" "}
                  <a href="https://www.svoboda-efa.cz">www.svoboda-efa.cz</a>
                </p>
                <p>
                  <strong>Rezervace:</strong>{" "}
                  <a
                    href="https://calendar.app.google/oJTfuFYsEd3QQoyr5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Otevřít kalendář
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-card fade-up delay-2">
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
                  Formulář doplníme v další fázi
                </button>
              </form>

              <p className="form-note">
                Formulář je teď vizuálně připravený. V dalším kroku ho napojíme na
                reálné odesílání kontaktů.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
