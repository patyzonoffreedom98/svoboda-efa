// app/page.tsx
import Image from "next/image";
import Link from "next/link";

// CLIENT komponenty (už je máš ve /components)
import ContactForm from "@/components/ContactForm";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 24 }}>
        <div
          className="card"
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "1.2fr 1fr",
            alignItems: "center",
          }}
        >
          {/* Text vlevo */}
          <div>
            <h1 className="section-title" style={{ marginBottom: 8 }}>
              <span style={{ color: "var(--gold)", fontWeight: 800 }}>
                Plán, který obstojí v číslech i realitě
              </span>
            </h1>
            <p className="small" style={{ marginTop: 0 }}>
              Hypotéka, investice i zajištění — bez nátlaku, srozumitelně.
              Dlouhodobě a poctivě.
            </p>

            {/* Benefity */}
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 18,
                lineHeight: 1.7,
              }}
            >
              <li>Dlouhodobý plán a péče (ne „rychlý prodej“)</li>
              <li>Hypotéka, investice, zajištění – vše provázané</li>
              <li>Vysočina a celá ČR, osobně i online</li>
              <li>Transparentně a s respektem k rozpočtu</li>
            </ul>

            {/* CTA dlaždice */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
                marginTop: 12,
              }}
            >
              <Link href="/sluzby/hypoteky-a-financovani" className="btn">
                Spočítat hypotéku
              </Link>
              <Link href="/sluzby/investice-a-renta" className="btn">
                Investiční kalkulačka
              </Link>
              <Link href="/sluzby/renta" className="btn">
                Spočítat rentu
              </Link>
            </div>
          </div>

          {/* Foto vpravo (celá postava, fixní poměr, zarovnané doprava) */}
          <div style={{ position: "relative", width: "100%", height: 420 }}>
            <Image
              src="/ja-bile-pozadi.jpg"
              alt="Bc. Patrik Svoboda, EFA"
              fill
              sizes="(max-width: 960px) 100vw, 480px"
              style={{
                objectFit: "contain",
                objectPosition: "right bottom",
              }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Proč řešit s odborníkem */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Proč řešit finance s odborníkem
          </h2>
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}
          >
            <div className="tile">
              <h3 style={{ margin: "0 0 6px" }}>Dlouhodobý plán</h3>
              <p className="small" style={{ margin: 0 }}>
                Hypotéka, investice i zajištění v jedné strategii.
              </p>
            </div>
            <div className="tile">
              <h3 style={{ margin: "0 0 6px" }}>Srozumitelně</h3>
              <p className="small" style={{ margin: 0 }}>
                Rozhodnutí podložená čísly, ne „nátlakem“.
              </p>
            </div>
            <div className="tile">
              <h3 style={{ margin: "0 0 6px" }}>Vysočina a celá ČR</h3>
              <p className="small" style={{ margin: 0 }}>
                Osobně i online, tak jak vám to vyhovuje.
              </p>
            </div>
            <div className="tile">
              <h3 style={{ margin: "0 0 6px" }}>EFA certifikace</h3>
              <p className="small" style={{ margin: 0 }}>
                Evropský standard odbornosti a etiky (EFPA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram – DVA náhledy vedle sebe, bez horní hlavičky (showHeader={false}) */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Krátká videa z praxe
          </h2>

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              alignItems: "start",
            }}
          >
            {/* 1) Hypotéky */}
            <div className="tile">
              <InstagramEmbed
                url="https://www.instagram.com/p/DPjUX2NDNKg/"
                caption="Jak se určuje úroková sazba u hypoték?"
                profileUrl="https://www.instagram.com/patrik.svoboda_efa/"
                maxWidth={420}
                showHeader={false}
              />
            </div>

            {/* 2) Investice */}
            <div className="tile">
              <InstagramEmbed
                url="https://www.instagram.com/p/DO_gbreDMox/"
                caption="Investice denominované v cizí měně"
                profileUrl="https://www.instagram.com/patrik.svoboda_efa/"
                maxWidth={420}
                showHeader={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulář – nezávazná konzultace */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Nezávazná konzultace zdarma
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Spodní panely */}
      <section className="container" style={{ marginTop: 16, marginBottom: 24 }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          }}
        >
          <div className="tile">
            <h3 style={{ margin: "0 0 8px" }}>Spojme se</h3>
            <p className="small" style={{ margin: 0 }}>
              Tel.:{" "}
              <a href="tel:+420774697755" className="link">
                774 697 755
              </a>
              <br />
              E-mail:{" "}
              <a href="mailto:patrik.svoboda@wmfinance.cz" className="link">
                patrik.svoboda@wmfinance.cz
              </a>
            </p>
          </div>

          <div className="tile">
            <h3 style={{ margin: "0 0 8px" }}>Sítě</h3>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <Link
                href="https://www.instagram.com/patrik.svoboda_efa/"
                target="_blank"
                className="btn"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/in/patrik-svoboda-efa/"
                target="_blank"
                className="btn"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="tile">
            <h3 style={{ margin: "0 0 8px" }}>Kde působím</h3>
            <p className="small" style={{ margin: 0 }}>
              Vysočina a celá ČR – osobně i online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
