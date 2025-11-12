import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Svoboda EFA – Hypotéky, Investice, Renta" };

export default async function Page() {
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
                  Finanční plán, hypotéka a investice
                </strong>{" "}
                bez nátlaku a srozumitelně.
              </h1>
              <p className="small">
                Jsem certifikovaný poradce <strong>EFA</strong>. Pomáhám rodinám i
                firmám dělat chytré kroky v bydlení, investicích a cestě k rentě.
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
                <p className="small">Hypo, investice, rizika.</p>
              </div>
              <div className="card">
                <strong>Transparentně</strong>
                <p className="small">Bez kliček a tlaku.</p>
              </div>
              <div className="card">
                <strong>Na Vysočině</strong>
                <p className="small">Osobně i online.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/sluzby/hypoteky" className="btn">
                Začít u hypotéky
              </Link>
              <Link
                href="/kalkulacky"
                className="btn"
                style={{ background: "#111", color: "var(--gold)", borderColor: "#333" }}
              >
                Otevřít kalkulačky
              </Link>
            </div>
          </div>

          {/* Fotka vpravo */}
          <div className="card" style={{ textAlign: "center" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: 12,
                overflow: "hidden",
                background: "#1b1b20",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Patrik Svoboda, EFA"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: 12, color: "var(--muted)" }}>
              Bc. Patrik Svoboda, EFA
            </div>
          </div>
        </div>
      </section>

      {/* Proč s odborníkem */}
      <section className="container" style={{ marginTop: 24 }}>
        <div className="card">
          <h2 className="section-title">Proč řešit finance s odborníkem</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>Vyhneš se drahým chybám u hypotéky i investic</li>
            <li>Plán na míru – cíl (bydlení/renta) a vhodné riziko</li>
            <li>Průběžná péče: úpravy podle života i trhu</li>
            <li>Jasná čísla, poplatky i očekávání</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
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
            Otevřít kalkulačky
          </Link>
        </div>
      </section>
    </>
  );
}
