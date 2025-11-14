import type { Metadata } from "next";
import Link from "next/link";
import EfaPyramid from "@/components/EfaPyramid";

export const metadata: Metadata = {
  title: "EFA – Evropský finanční poradce | Svoboda EFA",
  description:
    "Co znamená certifikace EFA, jak navazuje na PFP a EFP a kde si ověřit poradce v registru EFPA ČR.",
};

export default function EfaPage() {
  return (
    <>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 24 }}>
        <div className="card">
          <h1 className="section-title" style={{ marginBottom: 8 }}>
            EFA – Evropský finanční poradce
          </h1>
          <p className="small" style={{ marginTop: 0 }}>
            Certifikace <strong>EFA (European Financial Advisor)</strong> je
            mezinárodně uznávaný standard odbornosti a etiky ve finančním
            poradenství. Navazuje na vstupní úroveň <strong>PFP</strong> a je
            předstupněm <strong>EFP</strong>. Uděluje ji asociace{" "}
            <a href="https://efpa.cz/" target="_blank" rel="noreferrer">
              EFPA Česká republika
            </a>
            .
          </p>
        </div>
      </section>

      {/* PYRAMIDA */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card" style={{ textAlign: "center" }}>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Zkoušky a příprava (EFPA pyramida)
          </h2>
          <p className="small" style={{ marginTop: 0 }}>
            Prestižní evropské certifikáty pro odborníky na finančním trhu.
          </p>
          <div style={{ maxWidth: 720, margin: "16px auto 0" }}>
            <EfaPyramid />
          </div>
        </div>
      </section>

      {/* Ověření poradce */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Ověřte si poradce v registru EFPA
          </h2>
          <p className="small" style={{ marginTop: 0 }}>
            V oficiálním registru najdete platnost certifikace, úroveň (PFP, EFA,
            EFP) i region působení. Níže jsou rychlé odkazy:
          </p>

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 8 }}
          >
            <Link
              href="https://efpa.cz/"
              target="_blank"
              className="btn"
              style={{ textAlign: "center" }}
            >
              Otevřít web EFPA ČR
            </Link>

            <Link
              href="https://efpa.cz/kdo-je-efpa/registr-poradcu"
              target="_blank"
              className="btn"
              style={{ textAlign: "center" }}
            >
              Registr poradců EFPA
            </Link>

            <Link
              href="https://efpa.cz/kdo-je-efpa/registr-poradcu?name=Patrik%20Svoboda&region=Vysocina"
              target="_blank"
              className="btn"
              style={{ textAlign: "center" }}
            >
              Najít: Patrik Svoboda, EFA
            </Link>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            Tip: ve filtru registru můžete zadat <em>jméno</em>, případně zvolit
            <em> region</em> a <em>úroveň</em> – např. „EFA“.
          </p>
        </div>
      </section>

      {/* Pro klienty – co od EFA čekat */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Co od certifikovaného poradce EFA očekávat
          </h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>
              <strong>Odbornost a metodika:</strong> analýza cílů, rizika a cash-flow,
              návaznost hypotéky, investic a zajištění.
            </li>
            <li>
              <strong>Etický kodex a nezávislost:</strong> doporučení obhajitelná čísly a
              transparentní spolupráce.
            </li>
            <li>
              <strong>Dlouhodobá péče:</strong> průběžné úpravy plánu podle trhu i života
              klienta.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
