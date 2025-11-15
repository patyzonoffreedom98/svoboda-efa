// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Bc. Patrik Svoboda, EFA – finanční plán, který obstojí v číslech i realitě",
  description:
    "Finanční plánování bez nátlaku – hypotéky, investice, zajištění a renta. Dlouhodobá spolupráce, srozumitelná čísla a osobní péče na Vysočině i po celé ČR.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-neutral-950">
        <div className="container grid gap-10 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight text-gold md:text-4xl lg:text-5xl">
              Plán, který obstojí v číslech i realitě
            </h1>
            <p className="max-w-xl text-base text-gray-200 md:text-lg">
              Hypotéka, investice i zajištění – bez nátlaku, srozumitelně a s
              důrazem na dlouhodobý plán. Postarám se, aby vaše rozhodnutí
              dávala smysl v číslech i ve vašem životě.
            </p>

            <ul className="space-y-2 text-sm text-gray-200 md:text-base">
              <li>• Dlouhodobý plán a osobní péče, ne „rychlý prodej“.</li>
              <li>• Hypotéka, investice a zajištění jsou navzájem provázané.</li>
              <li>• Vysočina a celá ČR, osobně i online.</li>
              <li>• Transparentně, s respektem k vašemu rozpočtu.</li>
            </ul>

            {/* CTA tlačítka – napojené na kalkulačky */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link href="/sluzby/hypoteky-a-financovani" className="btn w-full text-center">
                Spočítat hypotéku
              </Link>
              <Link href="/sluzby/investice-a-renta" className="btn w-full text-center">
                Investiční kalkulačka
              </Link>
              <Link href="/sluzby/renta" className="btn w-full text-center">
                Spočítat rentu
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[360px] w-[260px] sm:h-[420px] sm:w-[300px] lg:h-[460px] lg:w-[330px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
              <Image
                src="/ja-bile-pozadi.jpg"
                alt="Bc. Patrik Svoboda, EFA"
                fill
                sizes="(min-width:1024px) 330px, 260px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROČ ŘEŠIT FINANCE S ODBORNÍKEM */}
      <section className="bg-neutral-950 py-16">
        <div className="container space-y-8">
          <h2 className="section-title">Proč řešit finance s odborníkem</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="card">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Dlouhodobý plán
              </h3>
              <p className="text-sm text-gray-300">
                Hypotéka, investice i zajištění v jedné strategii místo
                nesourodých produktů od různých institucí.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Srozumitelná čísla
              </h3>
              <p className="text-sm text-gray-300">
                Rozhodnutí podložená čísly, scénáři a riziky – ne jen slíbeným
                „výnosem“ nebo tlakem na rychlé uzavření smlouvy.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Vysočina a celá ČR
              </h3>
              <p className="text-sm text-gray-300">
                Schůzky osobně na Vysočině nebo online. Přizpůsobíme se vašemu
                času i preferovanému způsobu komunikace.
              </p>
            </div>

            <div className="card">
              <h3 className="mb-2 text-lg font-semibold text-white">
                EFA certifikace
              </h3>
              <p className="text-sm text-gray-300">
                Evropský standard odbornosti a etiky (EFPA). Pravidelné
                vzdělávání a dohled nad kvalitou poradenství.
              </p>
            </div>
          </div>

          {/* nový text navazující na benefity */}
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

      {/* INSTAGRAM – 2 REELS */}
      <section className="bg-neutral-950 pb-16">
        <div className="container space-y-6">
          <h2 className="section-title">Krátká videa a vysvětlení v číslech</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <InstagramEmbed
              url="https://www.instagram.com/p/DPjUX2NDNKg/"
              showHeader={false}
              maxWidth={600}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/DO_gbreDMox/"
              showHeader={false}
              maxWidth={600}
            />
          </div>
        </div>
      </section>

      {/* NEZÁVAZNÁ KONZULTACE – FORMÁLNÍ VYKÁNÍ */}
      <section className="bg-neutral-950 pb-20">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="section-title">Nezávazná konzultace zdarma</h2>
            <p className="text-sm text-gray-300 md:text-base">
              Zajímá vás, jak by mohl vypadat váš konkrétní plán? Napište, jaká
              je vaše situace – ozvu se vám a domluvíme se, zda dává větší
              smysl online konzultace, nebo osobní schůzka.
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

      {/* SPODNÍ TŘI RÁMEČKY – JEN JEDNA VARIANTA (DUPLIKÁT JE PRYČ) */}
      <section className="bg-neutral-950 pb-16">
        <div className="container grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="mb-2 text-lg font-semibold text-white">Spojme se</h3>
            <p className="mb-3 text-sm text-gray-300">
              Máte dotaz k hypotéce, investicím nebo rentě? Napište nebo
              zavolejte, ozvu se vám co nejdříve.
            </p>
            <p className="text-sm text-gray-200">
              📞 +420 774 697 755
              <br />
              ✉️ patrik.svoboda@wmfinance.cz
            </p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Sledujte novinky
            </h3>
            <p className="mb-3 text-sm text-gray-300">
              Krátká videa, tipy a vysvětlení bez nátlaku. Vše, co s klienty
              řeším v praxi.
            </p>
            <p className="text-sm text-gray-200 space-y-1">
              <span>📷 Instagram: </span>
              <Link
                href="https://www.instagram.com/patrik.svoboda_efa/"
                className="text-gold underline-offset-2 hover:underline"
                target="_blank"
              >
                @patrik.svoboda_efa
              </Link>
              <br />
              <span>🔗 LinkedIn: </span>
              <Link
                href="https://www.linkedin.com/in/patrik-svoboda-efa/"
                className="text-gold underline-offset-2 hover:underline"
                target="_blank"
              >
                Patrik Svoboda, EFA
              </Link>
            </p>
          </div>

          <div className="card">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Kde působím
            </h3>
            <p className="text-sm text-gray-300">
              Vysočina a celá ČR – osobně i online. Hlavní kancelář v Jihlavě,
              další kanceláře ve Světlé n. Sázavou, Žďáru n. Sázavou a
              Havlíčkově Brodě.
            </p>
            <p className="mt-3 text-sm text-gray-300">
              Člen{" "}
              <Link
                href="https://wmfinance.cz/"
                target="_blank"
                className="text-gold underline-offset-2 hover:underline"
              >
                Well Managed Finances
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
