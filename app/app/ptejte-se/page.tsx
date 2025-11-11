// app/ptejte-se/page.tsx
export default function PtejteSe(){
  return (
    <div style={{border:'1px solid rgba(255,255,255,.15)', borderRadius:16, padding:20, maxWidth:820}}>
      <h1 style={{marginTop:0}}>Ptejte se</h1>
      <p>Napište mi svůj dotaz. Odpovím co nejdříve.</p>

      <form action="https://formspree.io/f/mzzybvpl" method="POST" style={{display:'grid', gap:12, marginTop:10}}>
        <label style={{display:'grid', gap:6}}>
          <span>Jméno</span>
          <input name="jmeno" required style={{padding:'8px 10px', border:'1px solid rgba(255,255,255,.15)', borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <label style={{display:'grid', gap:6}}>
          <span>E-mail</span>
          <input type="email" name="email" required style={{padding:'8px 10px', border:'1px solid rgba(255,255,255,.15)', borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <label style={{display:'grid', gap:6}}>
          <span>Telefon</span>
          <input name="telefon" style={{padding:'8px 10px', border:'1px solid rgba(255,255,255,.15)', borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <label style={{display:'grid', gap:6}}>
          <span>Váš dotaz</span>
          <textarea name="zprava" rows={5} required style={{padding:'8px 10px', border:'1px solid rgba(255,255,255,.15)', borderRadius:10, background:'rgba(255,255,255,.06)', color:'#fff'}}/>
        </label>
        <button type="submit" style={{padding:'10px 16px', borderRadius:9999, background:'#d4a100', color:'#0b162b', border:'1px solid rgba(0,0,0,.1)', fontWeight:700}}>
          Odeslat
        </button>
        <input type="hidden" name="_subject" value="Poptávka z webu svoboda-efa.cz"/>
      </form>
    </div>
  );
}
