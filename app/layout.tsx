// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bc. Patrik Svoboda, EFA – finanční plán, který obstojí',
  description:
    'Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě. Finanční plán v číslech i realitě.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="/" className="font-semibold tracking-tight text-yellow-300">
              Bc. Patrik Svoboda, EFA
            </a>

            <ul className="flex items-center gap-5 text-sm">
              <li>
                <a
                  href="/o-mne"
                  className="transition hover:text-yellow-300"
                >
                  O mně
                </a>
              </li>

              {/* Rozbalovací Služby bez JS – <details> */}
              <li className="relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none transition hover:text-yellow-300">
                    Služby
                  </summary>

                  <div className="absolute right-0 mt-2 min-w-[260px] rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-xl">
                    <a
                      href="/sluzby/hypoteky-a-financovani"
                      className="block rounded-lg px-3 py-2 text-sm transition hover:bg-slate-800"
                    >
                      Hypotéky a financování
                    </a>
                    <a
                      href="/sluzby/investice-a-cesta-k-rente"
                      className="block rounded-lg px-3 py-2 text-sm transition hover:bg-slate-800"
                    >
                      Investice a cesta k rentě
                    </a>
                    <a
                      href="/sluzby/zajisteni-prijmu-a-majetku"
                      className="block rounded-lg px-3 py-2 text-sm transition hover:bg-slate-800"
                    >
                      Zajištění příjmu a majetku
                    </a>
                    <a
                      href="/sluzby"
                      className="mt-1 block rounded-lg px-3 py-2 text-xs text-slate-400 transition hover:bg-slate-800"
                    >
                      Přehled všech služeb
                    </a>
                  </div>
                </details>
              </li>

              <li>
                <a
                  href="/efa-certifikace"
                  className="transition hover:text-yellow-300"
                >
                  EFA certifikace
                </a>
              </li>
              <li>
                <a
                  href="/kontakt"
                  className="rounded-lg bg-yellow-300 px-3 py-1.5 text-slate-900 transition hover:brightness-95"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="mt-12 border-t border-slate-800 py-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Patrik Svoboda – finanční plán, který obstojí
        </footer>
      </body>
    </html>
  );
}
