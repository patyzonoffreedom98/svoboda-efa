// app/page.tsx
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO – claim + fotka + kalkulačky */}
      <section className="container mx-auto px-4 pt-28 pb-20 lg:pt-32 lg:pb-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text vlevo */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-[var(--gold)]">
            Plán, který obstojí v číslech i realitě
          </h1>
          <p className="text-lg sm:text-xl text-neutral-100">
            Hypotéka, investice i zajištění – bez nátlaku, srozumitelně a s
            důrazem na dlouhodobý plán. Postarám se o to, aby vaše rozhodnutí
            dávala smysl v číslech i ve vašem životě.
          </p>

          <ul className="mt-6 space-y-2 text-lg text-neutral-100">
            <li>Dlouhodobý plán a osobní péče, ne „rychlý prodej“.</li>
            <li>Hypotéka, investice a zajištění jsou navzájem provázané.</li>
            <li>Vysočina a celá ČR, osobně i online.</li>
            <li>Transparentně a s respektem k vašemu rozpočtu.</li>
          </ul>

          {/* Tlačítka na kalkulačky – menší, oddělená */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sluzby/hypoteky-a-financovani"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-400 transition"
            >
              Spočítat hypotéku
            </Link>
            <Link
              href="/sluzby/investice-a-renta"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-400 transition"
            >
              Investiční kalkulačka
            </Link>
            <Link
              href="/sluzby/renta"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-400 transition"
            >
              Spočítat rentu
            </Link>
          </div>
        </div>

        {/* Fotka vpravo – menší, bez bílého rámečku */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="max-w-md w-full">
            <img
              src="/ja-bile-pozadi.jpg"
              alt="Bc. Patrik Svoboda, EFA"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl animate-[fadeInUp_0.8s_ease-out]"
            />
          </div>
        </div>
      </section>

      {/* Proč řešit finance s odborníkem */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
          Proč řešit finance s odborníkem
        </h2>

        {/* 4 benefitní dlaždice se zlatým ohraničením */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-10">
          <div className="rounded-3xl bg-neutral-900/80 border border-[var(--gold)] p-6">
            <h3 className="text-xl font-semibold mb-3">Dlouhodobý plán</h3>
            <p className="text-sm text-neutral-200">
              Hypotéka, investice i zajištění v jedné strategii místo
              nesourodých produktů od různých institucí.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-900/80 border border-[var(--gold)] p-6">
            <h3 className="text-xl font-semibold mb-3">Srozumitelná čísla</h3>
            <p className="text-sm text-neutral-200">
              Rozhodnutí podložená čísly, scénáři a riziky – ne jen slíbeným
              „výnosem“ nebo tlakem na rychlé uzavření smlouvy.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-900/80 border border-[var(--gold)] p-6">
            <h3 className="text-xl font-semibold mb-3">Vysočina a celá ČR</h3>
            <p className="text-sm text-neutral-200">
              Schůzky osobně na Vysočině nebo online. Přizpůsobíme se vašemu
              času i preferovanému způsobu komunikace.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-900/80 border border-[var(--gold)] p-6">
            <h3 className="text-xl font-semibold mb-3">EFA certifikace</h3>
            <p className="text-sm text-neutral-200">
              Evropský standard odbornosti a etiky (EFPA). Pravidelné
              vzdělávání a dohled nad kvalitou poradenství.
            </p>
          </div>
        </div>

        {/* Text pod benefitními dlaždicemi */}
        <div className="space-y-4 text-neutral-100 max-w-4xl">
          <p>
            Kvalitní finanční plán není o jedné schůzce ani o jednom produktu.
            Jde o to, aby na sebe jednotlivé kroky navazovaly – od rezervy, přes
            pojištění a hypotéku až po budoucí rentu. Když se vše řeší odděleně,
            často vznikají zbytečná rizika nebo slepá místa.
          </p>
          <p>
            Společně proto nejprve pojmenujeme vaše cíle a možnosti a teprve
            potom hledáme konkrétní řešení. Dáváme dohromady čísla, která
            odpovídají vaší životní situaci, a nastavujeme plán tak, aby byl
            dlouhodobě udržitelný – i v období vyšších sazeb, inflace nebo
            výpadku příjmů.
          </p>
          <p>
            Cílem není mít „co nejvíc produktů“, ale takové nastavení, které vás
            podrží, když se něco pokazí, a zároveň vás posune blíž k finanční
            nezávislosti.
          </p>
        </div>
      </section>

      {/* Instagram – 2 náhledy vedle sebe */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Krátká videa a vysvětlení v praxi (Instagram)
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <InstagramEmbed
            url="https://www.instagram.com/p/DPjUX2NDNKg/"
            showHeader={false}
            maxWidth={500}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/DO_gbreDMox/"
            showHeader={false}
            maxWidth={500}
          />
        </div>
      </section>

      {/* Nezávazná konzultace zdarma */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Nezávazná konzultace zdarma
        </h2>
        <p className="text-neutral-100 mb-6 max-w-2xl">
          Zajímá vás, jak vypadá konkrétně váš finanční plán? Napište, jaká je
          vaše situace – a ozvu se vám domluvit, zda se potkáme osobně nebo
          online.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
