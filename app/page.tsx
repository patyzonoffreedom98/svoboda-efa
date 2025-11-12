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
              style={{ gridTemplateColumns:
