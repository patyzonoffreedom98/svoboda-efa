'use client';
import ContactForm from '../components/ContactForm';

export default function PtejteSe(){
  return (
    <main style={{maxWidth:980, margin:'0 auto', padding:'20px'}}>
      <h1 style={{fontSize:36, fontWeight:800, margin:'0 0 8px'}}>Ptejte se</h1>
      <p style={{opacity:.75, margin:'0 0 16px'}}>Napište mi svůj dotaz – odpovím co nejdříve.</p>
      <ContactForm />
      <p style={{fontSize:12, opacity:.65, marginTop:8}}>Odesláním souhlasíte se zpracováním údajů pro účely kontaktování.</p>
    </main>
  );
}
