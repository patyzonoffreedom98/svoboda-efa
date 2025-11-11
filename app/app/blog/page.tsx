// app/blog/page.tsx
'use client';
import React from 'react';

const brand = {
  panel:'#0d1c2e',
  text:'#e6edf6',
  mute:'#9fb1c8',
  line:'rgba(255,255,255,.08)',
  gold:'#e7b308',
};

const posts = [
  {
    title: 'Jak přemýšlet o sazbách v roce 2025',
    date: '11. 11. 2025',
    excerpt: 'Krátký briefing k hypotečním sazbám a fixacím – co dnes dává smysl…',
    href: '#',
  },
  {
    title: 'ETF jako základ dlouhodobé renty',
    date: '5. 11. 2025',
    excerpt: 'Proč dává smysl držet se jednoduchých a levných řešení…',
    href: '#',
  },
];

export default function BlogPage(){
  return (
    <main style={{maxWidth:1280, margin:'0 auto', padding:'20px'}}>
      <h1 style={{fontSize:36, fontWeight:800, margin:'0 0 12px'}}>Aktuality & krátké články</h1>
      <p style={{color:brand.mute, margin:'0 0 20px'}}>Krátké zprávy, poznámky z praxe a vzdělávací tipy.</p>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:16}}>
        {posts.map(p=>(
          <a key={p.title} href={p.href} style={{
            textDecoration:'none', color:brand.text,
            background:brand.panel, border:`1px solid ${brand.line}`,
            borderRadius:16, padding:16
          }}>
            <div style={{fontSize:13, color:brand.mute}}>{p.date}</div>
            <h3 style={{margin:'6px 0 8px', fontSize:20}}>{p.title}</h3>
            <p style={{margin:0, color:brand.mute}}>{p.excerpt}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
