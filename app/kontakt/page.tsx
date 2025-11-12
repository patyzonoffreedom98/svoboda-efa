import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Kontakt | Svoboda EFA",
  description:
    "Kontakt na kancelář v Jihlavě (Žižkova 1683/13), telefon, e-mail a formulář pro zprávu. Pobočky: Světlá n. Sázavou, Žďár n. Sázavou, Havlíčkův Brod.",
};

export default async function Page() {
  const jihlava = "Žižkova 1683/13, 586 01 Jihlava";
  const svetla = "Světlá nad Sázavou";
  const zdar = "Žďár nad Sázavou";
  const hbrod = "Havlíčkův Brod";

  return (
    <section className="container" style={{ paddingTop: 16 }}>
      <h1 className="section-title">Kontakt</h1>
      <p className="small" style={{ marginTop: 0, marginBottom: 16 }}>
        Hlavní kancelář: {jihlava}. Osobní schůzky po domluvě. Působíme také ve{" "}
        <strong>Světlé nad Sázavou</strong>, <strong>Žďáru nad Sázavou</strong> a{" "}
        <strong>Havlíčkově Brodě</strong> – případně online po celé ČR.
      </p>

      <div className="grid grid-2" style={{ gap: 16, alignItems: "start" }}>
        {/* Levý sloupec – údaje + formulář */}
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Spojte se se mnou</h2>

          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 8 }}>
            <div className="row">
              <strong>Telefon</strong>
              <div>
                <a href="tel:+420774697755">+420&nbsp;774&nbsp;697&nbsp;755</a>
              </div>
            </div>
            <div className="row">
              <strong>E-mail</strong>
              <div>
                <a href="mailto:patrik.svoboda@wmfinance.cz">
                  patrik.svoboda@wmfinance.cz
                </a>
              </div>
            </div>
            <div className="row">
              <strong>Adresa</strong>
              <div>{jihlava}</div>
            </div>
            <div className="row">
              <strong>Člen</strong>
              <div>
                <a href="https://wmfinance.cz" target="_blank" rel="noreferrer">
                  Well Managed Finances (wmfinance.cz)
                </a>
              </div>
            </div>
          </div>

          <hr
            style={{ border: 0, borderTop: "1px solid var(--border)", margin: "16px 0" }}
          />

          <h3 style={{ marginTop: 0 }}>Napište zprávu</h3>
          <p className="small" style={{ marginTop: 0 }}>
            Zanechte na sebe kontakt – ozvu se co nejdřív.
          </p>
          <ContactForm />
        </div>

        {/* Pravý sloupec – mapa a rychlé odkazy */}
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Mapa kanceláře</h2>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            {/* Embed na hlavní adresu – jednoduché a bez API klíče */}
            <iframe
              title="Mapa kanceláře Jihlava"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                jihlava
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="small" style={{ marginTop: 12 }}>
            Parkování v okolí, zastávka MHD v docházce. Pro jistotu se domluvme předem na
            termínu.
          </div>

          {/* Rychlé odkazy na další města */}
          <div style={{ marginTop: 12 }}>
            <div className="small" style={{ marginBottom: 8 }}>
              Další místa schůzek:
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Link
                className="btn btn-outline"
                href={`https://maps.google.com/?q=${encodeURIComponent(svetla)}`}
                target="_blank"
              >
                Světlá n. Sázavou
              </Link>
              <Link
                className="btn btn-outline"
                href={`https://maps.google.com/?q=${encodeURIComponent(zdar)}`}
                target="_blank"
              >
                Žďár n. Sázavou
              </Link>
              <Link
                className="btn btn-outline"
                href={`https://maps.google.com/?q=${encodeURIComponent(hbrod)}`}
                target="_blank"
              >
                Havlíčkův Brod
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
