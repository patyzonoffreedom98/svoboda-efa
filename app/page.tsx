// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO – claim + fotka + kalkulačky */}
      <section className="container mx-auto flex flex-col-reverse gap-10 px-4 pt-28 pb-16 lg:flex-row lg:items-center">
        {/* Text vlevo */}
        <div className="lg:w-1/2">
          <h1
            className="mb-6 text-3xl font-semibold sm:text-4xl lg:text-5xl"
            style={{ color: "var(--gold)" }}
          >
            Plán, který obstojí v číslech i realitě
          </h1>

          <p className="mb-4 max-w-xl text-lg text-slate-100">
            Hypotéka, investice i zajištění – bez nátlaku, srozumitelně a s
            důrazem na dlouhodobý plán. Postarám se o to, aby vaše rozhodnutí
            dávala smysl v číslech i ve vašem životě.
          </p>

          <ul className="mb-8 space-y-2 text-base text-slate-100">
            <li>• Dlouhodobý plán a osobní péče, ne „rychlý prodej“.</li>
            <li>
              • Hypotéka, investice a zajištění jsou navzájem provázané – řeším
              je společně.
            </li>
            <li>• Vysočina a celá ČR, osobně i online.</li>
            <li>• Transparentně a s respektem k vašemu rozpočtu.</li>
          </ul>

          {/* 3 CTA tlačítka – menší, oddělená */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/sluzby/hypoteky-a-financovani"
              className="flex-1 rounded-full px-6 py-3 text-center text-base font-semibold text-neutral-950 transition hover:opacity-90"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Spočítat hypotéku
            </Link>
            <Link
              href="/sluzby/investice-a-renta"
              className="flex-1 rounded-full px-6 py-3 text-center text-base font-semibold text-neutral-950 transition hover:opacity-90"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Investiční kalkulačka
            </Link>
            <Link
              href="/sluzby/renta"
              className="flex-1 rounded-full px-6 py-3 text-center text-base font-semibold text-neutral-950 transition hover:opacity-90"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Spočítat rentu
            </Link>
          </div>
        </div>

        {/* Fotka vpravo */}
        <div className="flex justify-center lg:w-1/2">
          <div className="relative w-full max-w-md">
            <Image
              src="/ja-bile-pozadi.jpg"
              alt="Bc. Patrik Svoboda, EFA"
              width={800}
              height={1000}
              className="w-full rounded-3xl object-contain shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROČ ŘEŠIT FINANCE S ODBORNÍKEM */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
          Proč řešit finance s odborníkem
        </h2>

        {/* 4 benefitní dlaždice */}
        <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[color:var(--gold)] bg-slate-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Dlouhodobý plán
            </h3>
            <p className="text-sm text-slate-200">
              Hypotéka, investice i zajištění v jedné strategii místo
              nesourodých produktů od různých institucí.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--gold)] bg-slate-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Srozumitelná čísla
            </h3>
            <p className="text-sm text-slate-200">
              Rozhodnutí podložená čísly, scénáři a riziky – ne jen slíbeným
              „výnosem“ nebo tlakem na rychlé uzavření smlouvy.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--gold)] bg-slate-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Vysočina a celá ČR
            </h3>
            <p className="text-sm text-slate-200">
              Schůzky osobně na Vysočině nebo online. Přizpůsobíme se vašemu
              času i preferovanému způsobu komunikace.
            </p>
          </div>
          <div className="rounded-2xl border border-[color:var(--gold)] bg-slate-950 p-5">
            <h3 className="mb-2 text-lg font-semibold text-white">
              EFA certifikace
            </h3>
            <p className="text-sm text-slate-200">
              Evropský standard odbornosti a etiky (EFPA). Pravidelné
              vzdělávání a dohled nad kvalitou poradenství.
            </p>
          </div>
        </div>

        {/* navazující text */}
        <div className="space-y-3 text-sm text-slate-100 max-w-4xl">
          <p>
            Kvalitní finanční plán není o jedné schůzce ani o jednom produktu.
            Jde o to, aby na sebe jednotlivé kroky navazovaly – od rezervy, přes
            pojištění a hypotéku až po budoucí rentu. Když se vše řeší
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
            Cílem není mít „co nejvíc produktů“, ale takové nastavení, které vás
            podrží, když se něco pokazí, a zároveň vás posune blíž k finanční
            nezávislosti. Vy rozhodujete o tempu, já se starám o to, aby tomu
            odpovídala strategie a konkrétní kroky.
          </p>
        </div>
      </section>

      {/* INSTAGRAM – REELS */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
          Krátká videa a vysvětlení v praxi (Instagram)
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <InstagramEmbed
            url="https://www.instagram.com/p/DPjUX2NDNKg/"
            showHeader={false}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/DO_gbreDMox/"
            showHeader={false}
          />
        </div>
      </section>

      {/* KONTAKTNÍ FORMULÁŘ */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Nezávazná konzultace zdarma
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-slate-100">
          Zajímá vás, jak by mohl vypadat váš konkrétní finanční plán? Napište
          mi, jaká je vaše situace – zda řešíte hypotéku, investice nebo rentu –
          a domluvíme se na krátké konzultaci online nebo osobně.
        </p>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
