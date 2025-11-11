// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Bc. Patrik Svoboda, EFA",
  description: "Finanční plán, hypotéky, investice a zajištění příjmu – po celé ČR, kancelář Jihlava.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <header style={{maxWidth:980,margin:"0 auto",padding:"12px 20px",display:"flex",gap:16}}>
          <a href="/" style={{fontWeight:800}}>PS • EFA</a>
          <nav style={{display:"flex",gap:12}}>
            <a href="/sluzby">Služby</a>
            <a href="/kalkulacky">Kalkulačky</a>
            <a href="/o-mne">O&nbsp;mně</a>
            <a href="/kontakt">Kontakt</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
