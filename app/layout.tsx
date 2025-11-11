// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Bc. Patrik Svoboda, EFA',
  description:
    'Finanční plán, který obstojí v číslech i realitě. Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        {/* Mini CSS pro sticky header a dropdown */}
        <style>{`
          .site-header {
            position: sticky; top: 0; z-index: 50;
            background: #0b1728cc; backdrop-filter: saturate(120%) blur(6px);
            border-bottom: 1px solid rgba(255,255,255,.06);
          }
          .container { max-width: 1180px; margin: 0 auto; padding: 0 16px; }
          nav a { color: #cdd7e3; text-decoration: none; padding: 10px 14px; border-radius: 10px; display: inline-block; }
          nav a:hover { color: #fff; background: rgba(255,255,255,.06); }
          .brand { color: #f0c941; font-weight: 700; }
          .has-sub { position: relative; }
          .submenu {
            display: none; position: absolute; left: 0; top: 100%;
            background: #0f1d31; border: 1px solid rgba(255,255,255,.06);
            border-radius: 12px; padding: 8px; min-width: 280px;
            box-shadow: 0 12px 28px rgba(0,0,0,.25);
          }
          .has-sub:hover .submenu { display: block; }
          .submenu a { display: block; padding: 10px 12px; }
          .submenu a:hover { background: rgba(255,255,255,.08); }
          main { background: radial-gradient(1200px 800px at 78% 18%, #15253f, #0b1728 60%); min-height: 100dvh; }
          footer { color:#99a7bb; font-size: 13px; border-top: 1px solid rgba(255,255,255,.06); }
        `}</style>
      </head>
      <body>
        {/* Sticky top bar */}
       // uvnitř <body> někde v headeru/načítaném navigačním místě:
<header className="w-full border-b border-white/10 bg-[#0b1728]">
  <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-white">
    <a href="/" className="font-semibold">Bc. Patrik Svoboda, EFA</a>

    <ul className="flex items-center gap-6">
      <li><a href="/o-mne" className="hover:underline">O mně</a></li>
      <li><a href="/efa-certifikace" className="hover:underline">EFA certifikace</a></li>

      {/* Dropdown Služby */}
      <li className="relative group">
        <span className="cursor-pointer select-none">Služby</span>
        <div className="absolute left-0 mt-2 hidden min-w-[260px] rounded-lg border border-white/10 bg-[#0b1728] p-2 shadow-lg group-hover:block">
          <a href="/sluzby/hypoteky-a-financovani" className="block px-3 py-2 rounded hover:bg-white/10">
            Hypotéky a financování
          </a>
          <a href="/sluzby/investice-a-renta" className="block px-3 py-2 rounded hover:bg-white/10">
            Investice a renta
          </a>
          <a href="/sluzby/zajisteni-prijmu-a-majetku" className="block px-3 py-2 rounded hover:bg-white/10">
            Zajištění příjmu a majetku
          </a>
        </div>
      </li>

      <li><a href="/kontakt" className="hover:underline">Kontakt</a></li>
    </ul>
  </nav>
</header>

        <main>{children}</main>

        <footer>
          <div className="container" style={{ padding: '20px 0' }}>
            © {new Date().getFullYear()} Patrik Svoboda • EFA • Vysočina & celá ČR
          </div>
        </footer>
      </body>
    </html>
  );
}
