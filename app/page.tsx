// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title:
    "Bc. Patrik Svoboda, EFA – finanční plán, který obstojí v číslech i realitě",
  description:
    "Finanční plánování bez nátlaku – hypotéky, investice, zajištění a renta. Dlouhodobá spolupráce, srozumitelná čísla a osobní péče na Vysočině i po celé ČR.",
};

export default function HomePage() {
  return (
    <main className="bg-neutral-950">
      {/* HERO – vlevo claim, vpravo fotka */}
      <section>
        <div className="container grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          {/* Text vlevo */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight text-gold md:text-4xl lg:text-5xl">
              Plán, který obstojí v číslech i realitě
            </h1>

            <p className="max-w-xl text-base text-gray-200 md:text-lg">
              Hypotéka, investice i zajištění – bez nátlaku, srozumitelně a s
              důrazem na dlouhodobý plán. Postarám se o to, aby vaše rozhodnutí
              dávala smysl v číslech i ve vašem životě.
            </p>

            <ul className="space-y-2 text-sm text-gray-200 md:text-base">
              <li>• Dlouhodobý plán a osobní péče, ne „rychlý prodej“.</li>
              <li>• Hypotéka, investice a zajištění jsou navzájem provázané.</li>
              <li>• Vysočina a celá ČR, osobně i online.</li>
              <li>• Transparentně a s respektem k vašemu rozpočtu.</li>
            </ul>

            {/* CTA tlačítka */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link
                href="/sluzby/hypoteky-a-financovani"
                className="btn w-full text-center"
              >
                Spočítat hypotéku
              </Link>
              <Link
                href="/sluzby/investice-a-renta"
                className="btn w-full text-center"
              >
                Investiční kalkulačka
              </Link>
              <Link href="/sluzby/renta" className="btn w-full text-center">
                Spočítat rentu
              </Link>
            </div>
          </div>

          {/* Fotka vpravo – menší, celá postava */}
          <div className="flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-4">
                <Image
                  src="/ja-bile-pozadi.jpg"
                  alt="Bc. Patrik Svoboda, EFA"
                  width={480}
                  height={640}
                  className="mx-auto h-auto w-full max-w-xs object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROČ ŘEŠIT FINANCE S ODBORNÍKEM */}
      <section className="py-16">
        <div className="container space-y-8">
          <h2 className="section-title">Proč řešit finance s odborníkem</h2>

          {/* čtyři menší dlaždice vedle sebe */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-5">
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                Dlouhodobý plán
              </h3>
              <p className="text-sm text-gray-300">
                Hypotéka, investice i zajištění v jedné strategii místo
                nesourodých produktů od různých institucí.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                Srozumitelná čísla
              </h3>
              <p className="text-sm text-gray-300">
                Rozhodnutí podložená čísly, scénáři a riziky – ne jen slíbeným
                „výnosem“ nebo tlakem na rychlé uzavření smlouvy.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                Vysočina a celá ČR
              </h3>
              <p className="text-sm text-gray-300">
                Schůzky osobně na Vysočině nebo online. Přizpůsobíme se vašemu
                času i preferovanému způsobu komunikace.
              </p>
            </div>

            <div className="card p-5">
              <h3 className="mb-2 text-base font-semibold text-white md:text-lg">
                EFA certifikace
              </h3>
              <p className="text-sm text-gray-300">
                Evropský standard odbornosti a etiky (EFPA). Pravidelné
                vzdělávání a dohled nad kvalitou poradenství.
              </p>
            </div>
          </div>

          {/* text pod benefity */}
          <div className="max-w-3xl space-y-3 text-sm text-gray-300 md:text-base">
            <p>
              Kvalitní finanční plán není o jedné schůzce ani o jednom produktu.
              Jde o to, aby na sebe jednotlivé kroky navazovaly – od rezervy,
              přes pojištění a hypotéku až po budoucí rentu. Když se vše řeší
              odděleně, často vznikají zbytečná rizika nebo slepá místa.
            </p>
            <p>
              Společně proto nejprve pojmenujeme vaše cíle a možnosti a teprve
              potom hledáme konkrétní řešení. Dáváme dohromady čísla, která
              odpovídají vaší životní situaci, a nastavujeme plán tak, aby byl
              dlouhodobě udržitelný – i v období vyšších sazeb, inflace nebo
              výpadku příjmů.
            </p>
            <p>
              Cílem není mít „co nejvíc produktů“, ale takové nastavení, které
              vás podrží, když se něco pokazí, a zároveň vás posune blíž k
              finanční nezávislosti. Vy rozhodujete o tempu, já se starám o to,
              aby tomu odpovídala strategie a konkrétní kroky.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM – menší a skutečně vedle sebe */}
      <section className="pb-16">
        <div className="container space-y-6">
          <h2 className="section-title">
            Krátká videa a vysvětlení v praxi (Instagram)
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full max-w-xs">
              <InstagramEmbed
                url="https://www.instagram.com/p/DPjUX2NDNKg/"
                showHeader={false}
                maxWidth={280}
              />
            </div>
            <div className="w-full max-w-xs">
              <InstagramEmbed
                url="https://www.instagram.com/p/DO_gbreDMox/"
                showHeader={false}
                maxWidth={280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEZÁVAZNÁ KONZULTACE */}
      <section className="pb-20">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="section-title">Nezávazná konzultace zdarma</h2>
            <p className="text-sm text-gray-300 md:text-base">
              Zajímá vás, jak by mohl vypadat váš konkrétní finanční plán?
              Napište, jaká je vaše situace – ozvu se vám a domluvíme se, zda
              dává větší smysl online konzultace, nebo osobní schůzka.
            </p>
            <p className="text-sm text-gray-400">
              Konzultace je nezávazná. Společně zjistíme, zda a jak vám mohu být
              užitečný, a teprve poté se rozhodnete, zda chcete ve spolupráci
              pokračovat.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
