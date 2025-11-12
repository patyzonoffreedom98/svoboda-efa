import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import InstagramEmbed from "@/components/InstagramEmbed";

export const metadata: Metadata = {
  title: "Svoboda EFA – Hypotéky, Investice, Renta",
  description:
    "Plán, který obstojí v číslech i realitě. Hypotéka, investice i zajištění bez nátlaku, srozumitelně. Vysočina a celá ČR.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 28 }}>
        <div
          style={{
            display: "grid",
            gap: 16,
            alignItems: "center",
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Textový sloupec */}
          <div style={{ display: "grid", gap: 16 }}>
            <div style={{ display: "grid", gap: 8 }}>
              <h1 style={{ margin: 0, fontSize: 38, lineHeight: 1.15 }}>
                <strong style={{ color: "var(--gold)" }}>
                  Plán, který obstojí v číslech i realitě
                </strong>
              </h1>
              <p className="small">
                Hypotéka, investice i zajištění bez nátlaku, srozumitelně.
              </p>
            </div>

            {/* Benefity */}
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
            >
              <div className="card">
                <strong>Odbornost EFA</strong>
                <p className="small">Metodika, etika, praxe.</p>
              </div>
              <div className="card">
                <strong>Dlouhodobý plán</strong>
                <p className="small">Hypotéka, investice, rizika.</p>
              </div>
              <div className="card">
                <strong>Transparentně</strong>
                <p className="small">Bez kliček a tlaku.</p>
              </div>
              <div className="card">
                <strong>Vysočina a celá ČR</strong>
                <p className="small">Osobně i online.</p>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/sluzby/hypoteky" className="btn">
                Spočítat hypotéku
              </Link>
              <Link
                href="/sluzby/investice"
                className="btn"
                style={{ background: "#111", color: "var(--gold)", borderColor: "#333" }}
              >
                Investiční kalkulačka
              </Link>
              <Link
                href="/sluzby/renta"
                className="btn"
                style={{ background: "#111", color: "var(--gold)", borderColor: "#333" }}
              >
                Spočítat rentu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DVOJICE: vlevo důvody, vpravo menší fotka */}
      <section className="container" style={{ marginTop: 12 }}>
        <div className="grid grid-2" style={{ alignItems: "start", gap: 16 }}>
          {/* LEVÁ STRANA – Proč s odborníkem */}
          <div className="card">
            <h2 className="section-title">Proč řešit finance s odborníkem</h2>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>Vyhneš se drahým chybám u hypotéky i investic</li>
              <li>Plán na míru – cíl (bydlení/renta) a vhodné riziko</li>
              <li>Průběžná péče: úpravy podle života i trhu</li>
              <li>Jasná čísla, poplatky i očekávání</li>
            </ul>
          </div>

          {/* PRAVÁ STRANA – Portrét */}
          <div className="card" style={{ textAlign: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 480,
                margin: "0 auto",
                aspectRatio: "3 / 4",
                borderRadius: 12,
                overflow: "hidden",
                background: "#1b1b20",
              }}
            >
              <Image
                src="/ja-bile-pozadi.jpg"
                alt="Patrik Svoboda, EFA"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              Bc. Patrik Svoboda, EFA
            </div>
          </div>
        </div>
      </section>

      {/* CTA rozcestník kalkulaček */}
      <section className="container" style={{ marginTop: 24 }}>
        <div
          className="card"
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="section-title" style={{ marginBottom: 4 }}>
              Chcete rychle orientačně spočítat?
            </div>
            <div className="small">K dispozici: hypotéka, investice, renta.</div>
          </div>
          <Link href="/kalkulacky" className="btn">
            Otevřít rozcestník kalkulaček
          </Link>
        </div>
      </section>

      {/* Konzultace + Instagram (2 embedy vpravo) */}
      <section className="container" style={{ marginTop: 24 }}>
        <div className="grid grid-2">
          <div className="card">
            <h2 className="section-title">Nezávazná konzultace zdarma</h2>
            <p className="small" style={{ marginTop: 0 }}>
              Zanechte na sebe kontakt – ozvu se a domluvíme termín.
            </p>
            <ContactForm />
          </div>

          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/DPjUX2NDNKg/"
              caption="Tipy z praxe – hypotéky, investice, renta."
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/DO_gbreDMox/"
              caption="Další krátký vhled k financím."
            />
          </div>
        </div>
      </section>
    </>
  );
}
