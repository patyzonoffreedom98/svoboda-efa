import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import EfaPyramid from "@/components/EfaPyramid";
import InstagramEmbed from "@/components/InstagramEmbed";

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

          {/* TVŮJ UPRAVENÝ TEXT */}
          <div className="small" style={{ display: "grid", gap: 8, marginTop: 0 }}>
            <p>
              Certifikace <strong>EFA (European Financial Advisor)</strong> je
              mezinárodně uznávaným finančně-poradenským titulem v rámci odbornosti
              a etiky pro finanční poradce. Navazuje na stupeň <strong>PFP</strong>.
              Další možností je finančně-poradenský titul <strong>EFP</strong>, který
              se však zaměřuje již především na korporátní problematiku.{" "}
              <strong>EFPA Česká republika</strong>, organizace, která tyto
              certifikace zastřešuje, je nejprestižnější certifikační organizací
              v tomto oboru.
            </p>

            <p>
              Složení zkoušky se skládá z písemné části, kde musí každý účastník
              prokázat hloubkové znalosti z oblastí investic, financování, zajištění,
              ale i práva ve financích či daňové problematiky. Certifikace klade
              velký důraz na <strong>etiku</strong> s myšlenkou, že prioritou musí
              být vždy dobré řešení pro klienta. Samotné zkoušce předcházel téměř
              roční přípravný kurz, kde v jednotlivých blocích předávali teoretické
              znalosti i praktické zkušenosti odborníci z jednotlivých odvětví.
            </p>

            <p>
              Poradci v České republice musí pro výkon této profese splnit „základní“
              certifikace od České národní banky na jednotlivé sekce trhu (investice,
              úvěry, pojištění, penze). Titul <strong>EFA</strong> je dobrovolným
              vyšším stupněm vzdělávání, který je relativně nákladný jak finančně,
              tak časově.
            </p>

            <p>
              EFA titulem proto disponuje pouhé zhruba <strong>1&nbsp;%</strong> všech
              poradců u nás. Na Vysočině je to v tuto chvíli celkem pouze{" "}
              <strong>8 poradců</strong>.
            </p>
          </div>
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

      {/* IG náhled – tvůj certifikát */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Můj certifikát EFA
          </h2>
          <p className="small" style={{ marginTop: 0 }}>
            Krátký příspěvek k&nbsp;získání certifikace:
          </p>

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/DKht9GQsRfL/"
              caption="Ocenění certifikátem EFA"
              aspect="1 / 1"
              maxWidth={520}
              profileUrl="https://www.instagram.com/patrik.svoboda_efa/"
              hideHeader
            />
          </div>
        </div>
      </section>

      {/* Ověření poradce */}
      <section className="container" style={{ marginTop: 16 }}>
        <div className="card">
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Ověřte si poradce v registru EFPA
          </h2>

          {/* Screenshot registru – ULOŽ do /public/efa-registr.png */}
          <div className="card" style={{ padding: 8, marginTop: 8 }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 960,
                margin: "0 auto",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/efa-registr.png"
                alt="Vyhledávání poradců v registru EFPA – příklad"
                width={1920}
                height={1080}
                sizes="100vw"
                style={{ width: "100%", height: "auto", display: "block" }}
                priority={false}
              />
            </div>
            <p className="small" style={{ textAlign: "center", marginTop: 8 }}>
              Ilustrační náhled registru EFPA (doporučuji vyhledat jméno a region).
            </p>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            V oficiálním registru najdete platnost certifikace, úroveň (PFP, EFA,
            EFP) i region působení. Rychlé odkazy:
          </p>

          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              marginTop: 8,
            }}
          >
            <Link href="https://efpa.cz/" target="_blank" className="btn" style={{ textAlign: "center" }}>
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
            Tip: ve filtru registru můžete zadat <em>jméno</em>, případně zvolit{" "}
            <em>region</em> a <em>úroveň</em> – např. „EFA“.
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
