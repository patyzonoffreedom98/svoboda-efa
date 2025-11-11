// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Bc. Patrik Svoboda, EFA',
  description:
    'Finanční plán, který obstojí v číslech i realitě. Hypotéky, investice, zajištění, renta. Jihlava • Vysočina • celá ČR.',
};

const brand = {
  bg: '#0B2134',        // tmavé pozadí
  card: '#0F2A44',      // tmavá karta
  text: '#DCE7F3',      // světlý text
  soft: '#93A7BD',      // sekundární text
  link: '#BFD6FF',      // odkazy
  border: '#1E3A58',    // okraje
  gold: '#E0B300',      // ZLATÁ – použita na benefity atd.
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, background: brand.bg, color: brand.text }}>
        {/* Sticky top bar */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backdropFilter: 'saturate(120%) blur(6px)',
            background: 'rgba(11, 33, 52, 0.85)',
            borderBottom: `1px solid ${brand.border}`,
          }}
        >
          <nav
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '12px 20px',
              display: 'flex',
              gap: 16,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Vlevo malé jméno */}
            <a
              href="/"
              style={{
                color: brand.text,
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: 0.2,
              }}
            >
              Bc. Patrik Svoboda, <span style={{ color: brand.gold }}>EFA</span>
            </a>

            {/* Menu */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <a href="/" style={linkStyle}>
                Domů
              </a>
              <a href="/o-mne" style={linkStyle}>
                O&nbsp;mně
              </a>
              <a href="/efa" style={linkStyle}>
                EFA certifikace
              </a>

              {/* Rozbalovací „Služby“ – anchors přidáme až budou sekce na /sluzby */}
              <details style={{ position: 'relative' }}>
                <summary style={{ ...linkStyle, listStyle: 'none', cursor: 'pointer' }}>
                  Služby ▾
                </summary>
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 8,
                    background: brand.card,
                    border: `1px solid ${brand.border}`,
                    borderRadius: 10,
                    minWidth: 260,
                    padding: 10,
                    display: 'grid',
                    gap: 6,
                  }}
                >
                  <a href="/sluzby#hypoteky" style={menuItem}>
                    Hypotéky a financování
                  </a>
                  <a href="/sluzby#investice" style={menuItem}>
                    Investice a cesta k rentě
                  </a>
                  <a href="/sluzby#zajisteni" style={menuItem}>
                    Zajištění příjmu a majetku
                  </a>
                  <a href="/sluzby#podnikani" style={menuItem}>
                    Podnikatelská rizika
                  </a>
                </div>
              </details>

              <a href="/kontakt" style={linkStyle}>
                Kontakt
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer
          style={{
            maxWidth: 1200,
            margin: '40px auto',
            padding: '16px 20px',
            color: brand.soft,
            borderTop: `1px solid ${brand.border}`,
            fontSize: 13,
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} Bc. Patrik Svoboda, EFA • Jihlava • Vysočina • celá ČR
        </footer>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#DCE7F3',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: 999,
  border: '1px solid transparent',
};

const menuItem: React.CSSProperties = {
  color: '#DCE7F3',
  textDecoration: 'none',
  padding: '8px 10px',
  borderRadius: 8,
  border: '1px solid transparent',
};
