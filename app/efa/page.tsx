import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EFA – Evropský finanční poradce | Svoboda EFA",
  description:
    "Co znamená certifikace EFA, jaký je systém EFPA (PFP → EFA → EFP) a kde si ověřit platnost certifikace poradce.",
};

export default async function Page() {
  return (
    <section className="container" style={{ paddingTop: 16 }}>
      <h1 className="section-title">EFA – Evropský finanční poradce</h1>
      <p className="small" style={{ marginTop: 0 }}>
        Certifikace <strong>EFA</strong> (European Financial Advisor) je mezinárodně uznávaný
        standard odbornosti a etiky pro finanční poradce zastřešený organizací{" "}
        <a href="https://efpa.cz" target="_blank" rel="noreferrer">
          EFPA Česká republika
        </a>
        . Navazuje na stupeň <strong>PFP</strong> a předchází nejvyšší úrovni{" "}
        <strong>EFP</strong>.
      </p>

      {/* Pyramida vzdělávání */}
      <div className="card" style={{ marginTop: 12 }}>
        <h2 className="section-title" style={{ marginTop: 0 }}>
          Pyramida vzdělávání EFPA
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
            aspectRatio: "16 / 10",
            borderRadius: 12,
            overflow: "hidden",
            background: "#0f0f13",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/efa-pyramida.png"
            alt="Pyramida vzdělávání EFPA (PFP → EFA → EFP)"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 900px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="small" style={{ marginTop: 10 }}>
          Ilustrace: postup od základního stupně <strong>PFP</strong> přes{" "}
          <strong>EFA</strong> až po <strong>EFP</strong>. Certifikace vyžadují složení
          náročné zkoušky a průběžné vzdělávání.
        </p>
      </div>

      {/* Ověření poradce */}
      <div className="grid grid-2" style={{ marginTop: 16, gap: 16, alignItems: "start" }}>
        <div className="card">
          <h2 className="section-title" style={{ marginTop: 0 }}>
            Jak si ověřit poradce v registru EFPA
          </h2>
          <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>
              Otevřete web{" "}
              <a href="https://efpa.cz/" target="_blank" rel="noreferrer">
                efpa.cz
              </a>
              .
            </li>
            <li>
              V části <em>„Najděte svého špičkového poradce“</em> zvolte certifikaci{" "}
              <strong>EFA</strong> (příp. jiný stupeň) a zadejte jméno poradce.
            </li>
            <li>Registry zobrazí, zda je certifikace aktivní a kde poradce působí.</li>
          </ol>

          <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link
              className="btn"
              href="https://efpa.cz/"
              target="_blank"
            >
              Otevřít efpa.cz
            </Link>
            <Link
              className="btn btn-outline"
              href="https://efpa.cz/poradci"
              target="_blank"
            >
              Přejít rovnou na vyhledávání poradců
            </Link>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            Tip: V registru si můžete ověřit i mě – <strong>Patrik Svoboda, EFA</strong>.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Ukázka vyhledávání na efpa.cz</h3>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 12,
              overflow: "hidden",
              background: "#0f0f13",
              border: "1px solid var(--border)",
            }}
          >
            <Image
              src="/efpa-overeni.png"
              alt="Ověření poradce – ukázka vyhledávání na efpa.cz"
              fill
              sizes="(max-width: 1000px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="small" style={{ marginTop: 10 }}>
            Screenshot: vyhledání poradce dle jména nebo regionu, volba úrovně certifikace
            (PFP / EFA / EFP).
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="card" style={{ marginTop: 16 }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="section-title" style={{ margin: 0 }}>
              Zajímá vás, co pro vás přináší EFA v praxi?
            </div>
            <div className="small">
              Projdeme váš záměr (hypotéka, investice, renta) a připravím plán v číslech.
            </div>
          </div>
          <Link href="/kontakt" className="btn">
            Nezávazná konzultace
          </Link>
        </div>
      </div>
    </section>
  );
}
