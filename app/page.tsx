'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const InstagramBlock = dynamic(() => import('./components/Instagram'), { ssr: false });
import ContactForm from './components/ContactForm';
import CookieConsent from './components/CookieConsent';

const brand = { bg: '#0b1728', accent: '#f4c400', text: '#e9f0ff' };

export default function Home() {
  return (
    <main style={{ background: brand.bg, color: brand.text, minHeight: '100vh' }}>
      <header style={{
        position: 'sticky', top: 0, background: 'rgba(11,23,40,.8)', backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(255,255,255,.08)', zIndex: 10
      }}>
        <nav style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 16, padding: '12px 16px', alignItems: 'center' }}>
          <strong style={{ color: brand.accent }}>Bc. Patrik Svoboda, EFA</strong>
          <a href="/o-mne">O mně</a>
          <a href="/efa-certifikace">EFA certifikace</a>
          <a href="/sluzby">Služby</a>
          <a href="/kontakt">Kontakt</a>
        </nav>
      </header>

      <section style={{
        maxWidth: 1200, margin: '40px auto', display: 'grid',
        gridTemplateColumns: '1.2fr .8fr', gap: 24, alignItems: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: '0 0 12px' }}>Finanční plán, který obstojí</h1>
          <p style={{ opacity: .9 }}>Hypotéky, investice a zajištění příjmu – srozumitelně a dlouhodobě.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
            {['Profesionalita', 'Odbornost', 'Ochota', 'Dlouhodobost'].map(t => (
              <span key={t} style={{ border: '1px solid rgba(255,255,255,.15)', padding: '8px 12px', borderRadius: 999 }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', background: '#0e1d33' }}>
          <Image src="/ja-bile-pozadi.jpg" alt="Patrik Svoboda – finanční poradce" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: 'rgba(255,255,255,.04)', padding: 20, borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>Napište mi</h2>
          <ContactForm />
        </div>
        <div style={{ background: 'rgba(255,255,255,.04)', padding: 20, borderRadius: 12 }}>
          <h2 style={{ marginTop: 0 }}>Instagram</h2>
          <InstagramBlock />
        </div>
      </section>

      <CookieConsent />
    </main>
  );
}
