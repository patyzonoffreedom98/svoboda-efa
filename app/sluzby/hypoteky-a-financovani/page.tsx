'use client';

import React from 'react';

// ⬇️ správná RELATIVNÍ cesta z app/sluzby/hypoteky-a-financovani/ do app/components/
import HypoCalc from '../../components/HypoCalc';

export const metadata = {
  title: 'Hypotéky a financování | Bc. Patrik Svoboda, EFA',
  description:
    'Nezávislé srovnání hypoték, nastavení fixace a LTV, pomoc s financováním a administrativou. Vyzkoušejte hypoteční kalkulačku a ozvěte se.',
};

export default function HypotekyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Hypotéky a financování
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Pomohu vám projít celým procesem – od výběru banky, přes ocenění,
          pojištění a administrativu až po čerpání. Níže si orientačně spočítejte
          výši splátky a rámcovou dostupnost financování.
        </p>
      </header>

      {/* Hypoteční kalkulačka */}
      <section className="mb-12">
        <HypoCalc />
        <p className="mt-3 text-sm text-gray-400">
          Upozornění: Jde o orientační výpočet. Konkrétní nabídka závisí na
          posouzení banky, příjmech, LTV, fixaci, pojištění a dalších parametrech.
        </p>
      </section>

      {/* CTA blok */}
      <section className="rounded-xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-2xl font-semibold">Chcete nejlepší podmínky pro svůj záměr?</h2>
        <p className="mt-3 text-gray-200">
          Zjistíme, která banka vám dá nejvýhodnější sazbu, zvládne váš případ
          bez komplikací a jak nastavit fixaci i LTV, aby dávaly smysl.
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-300">
          <li>Porovnání bank a sazeb, reálné náklady v čase</li>
          <li>Nastavení vhodné fixace, LTV a pojištění</li>
          <li>Pomoc s administrativou a čerpáním</li>
        </ul>

        <a
          href="/kontakt"
          className="inline-block mt-6 rounded-lg px-5 py-3 bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Ozvěte se mi
        </a>
      </section>
    </main>
  );
}
