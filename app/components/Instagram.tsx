'use client';

export default function Instagram() {
  return (
    <section
      aria-label="Instagram feed"
      style={{
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 24,
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
      }}
    >
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
        Instagram – @patrik.svoboda_efa
      </h3>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Sem později vložíme oficiální embed Reels/Feed. Zatím odkaz na profil:
      </p>
      <a
        href="https://www.instagram.com/patrik.svoboda_efa"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          marginTop: 8,
          padding: '10px 14px',
          borderRadius: 10,
          textDecoration: 'none',
          color: '#0b1728',
          background: '#ffc531',
          fontWeight: 700,
        }}
      >
        Otevřít Instagram
      </a>
    </section>
  );
}
