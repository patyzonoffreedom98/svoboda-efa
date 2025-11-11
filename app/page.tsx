// app/page.tsx
'use client';
import React from 'react';
import ContactForm from './components/ContactForm';

const brand = {
  bg: '#0b1728',
  gold: '#f0c941',
  chip: 'rgba(255,255,255,.08)',
};

export default function HomePage() {
  return (
    <div style={{ color: '#e6edf6' }}>
      {/* HERO – menší horní mezera, aby to bylo hned pod lištou */}
      <section
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr .9fr',
          gap: 32,
          alignItems: 'center',
          padding: '42px 0 30px',
        }}
      >
        <div>
          <h1 style={{ fontSize: 64, lineHeight: 1.05, margin: '0 0 16px' }}>
            Finanční plán, který obstojí
          </h1>
          <p style={{ fontSize: 20, color: '#cdd7e3', margin: '0 0 22px' }}>
            V číslech i realitě. Kancelář v Jihlavě, spolupráce po celé ČR.
            Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
            {['Profesionalita', 'Odbornost', 'Ochota', 'Dlouhodobost'].map((x) => (
              <span key={x} style={{ background: brand.chip, padding: '10px 14px', borderRadius: 999 }}>
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Vpravo fotka – používáme /public/ja-bile-pozadi.jpg */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src="/ja-bile-pozadi.jpg"
            alt="Patrik Svoboda – finanční poradce"
            style={{
              width: '100%',
              maxWidth: 540,
              borderRadius: 24,
              border: '1px solid rgba(255,255,255,.08)',
              background: '#111826',
            }}
          />
        </div>
      </section>

      {/* Proč řešit finance s odborníkem */}
      <section className="container" style={{ padding: '0 0 22px' }}>
        <div
          style={{
            background: '#0f1d31',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 16,
            padding: 24,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Proč řešit finance s&nbsp;odborníkem</h2>
          <p style={{ color: '#cdd7e3' }}>
            Finance se vyvíjejí rychle – sazby, daně i produkty. AI urychluje hledání informací,
            ale bez kontextu se snadno udělá krok vedle. Mým úkolem je převést šum do srozumitelného
            plánu, který sedí na tvou situaci, cíle a rizikový profil. Vysvětlím, nastavím a dlouhodobě
            udržuji v kondici.
          </p>
        </div>
      </section>

      {/* Domluvit konzultaci – formulář s předvyplněnou zprávou */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, paddingBottom: 48 }}>
        <div>
          <h3 style={{ marginTop: 0, marginBottom: 12, color: brand.gold }}>Nezávazná konzultace zdarma</h3>
          <p style={{ color: '#cdd7e3' }}>
            Krátce si vyjasníme situaci a cíle. Doporučím nejlepší další krok – bez tlaku, srozumitelně.
          </p>
        </div>
        <ContactForm
          title="Chci si domluvit konzultaci"
          defaultMessage={'Dobrý den, rád(a) bych si domluvil(a) úvodní konzultaci. Děkuji.'}
        />
      </section>
    </div>
  );
}
