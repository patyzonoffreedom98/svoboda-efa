// components/PreFooter.tsx
import Link from "next/link";

export default function PreFooter() {
  return (
    <section className="border-t border-slate-800 bg-neutral-950 py-10 mt-10">
      <div className="container mx-auto grid gap-6 md:grid-cols-3">
        {/* SPOJME SE */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="mb-2 text-lg font-semibold text-white">Spojme se</h3>
          <p className="mb-3 text-sm text-slate-200">
            Máte dotaz k hypotéce, investicím nebo rentě? Napište nebo
            zavolejte, ozvu se vám co nejdříve.
          </p>
          <p className="text-sm text-slate-200">📞 +420 774 697 755</p>
          <p className="text-sm text-slate-200">
            ✉️{" "}
            <a
              href="mailto:patrik.svoboda@wmfinance.cz"
              className="underline-offset-2 hover:underline"
            >
              patrik.svoboda@wmfinance.cz
            </a>
          </p>
        </div>

        {/* SLEDOVÁNÍ / SOCIÁLNÍ SÍTĚ */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Sledujte novinky
          </h3>
          <p className="mb-3 text-sm text-slate-200">
            Krátká videa, tipy a vysvětlení bez nátlaku z praxe.
          </p>
          <ul className="space-y-1 text-sm text-slate-200">
            <li>
              📸{" "}
              <Link
                href="https://www.instagram.com/patrik.svoboda_efa/"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                Instagram
              </Link>
            </li>
            <li>
              💼{" "}
              <Link
                href="https://www.linkedin.com/in/patrik-svoboda-efa/"
                target="_blank"
                className="underline-offset-2 hover:underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* KDE PŮSOBÍM */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="mb-2 text-lg font-semibold text-white">Kde působím</h3>
          <p className="mb-2 text-sm text-slate-200">
            Vysočina a celá ČR – osobně i online. Hlavní kancelář v Jihlavě,
            další kanceláře ve Světlé n. Sázavou, Žďáru n. Sázavou a Havlíčkově
            Brodě.
          </p>
          <p className="text-sm text-slate-200">
            Člen{" "}
            <Link
              href="https://wmfinance.cz"
              target="_blank"
              className="underline-offset-2 hover:underline"
            >
              Well Managed Finances
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
