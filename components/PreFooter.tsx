// components/PreFooter.tsx
export default function PreFooter() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800 mt-16">
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        {/* Spojme se */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3 text-white">Spojme se</h2>
          <p className="text-sm text-neutral-300 mb-4">
            Máte dotaz k hypotéce, investicím nebo rentě? Napište nebo
            zavolejte, ozvu se vám co nejdříve.
          </p>
          <div className="space-y-1 text-sm">
            <p>📞 +420 774 697 755</p>
            <p>📧 patrik.svoboda@wmfinance.cz</p>
          </div>
        </div>

        {/* Sledujte novinky */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Sledujte novinky
          </h2>
          <p className="text-sm text-neutral-300 mb-4">
            Krátká videa, tipy a vysvětlení bez nátlaku. Vše, co s klienty řeším
            v praxi.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/patrik.svoboda_efa/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @patrik.svoboda_efa
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/patrik-svoboda-efa/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Patrik Svoboda, EFA
              </a>
            </p>
          </div>
        </div>

        {/* Kde působím */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-3 text-white">Kde působím</h2>
          <p className="text-sm text-neutral-300 mb-3">
            Vysočina a celá ČR – osobně i online. Hlavní kancelář v Jihlavě, další
            kanceláře ve Světlé n. Sázavou, Žďáru n. Sázavou a Havlíčkově Brodě.
          </p>
          <p className="text-sm text-neutral-300">
            Člen{" "}
            <a
              href="https://wmfinance.cz"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Well Managed Finances
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
