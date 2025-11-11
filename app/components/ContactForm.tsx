'use client';

export default function ContactForm() {
  // Přímý endpoint – ať obejdeme případný problém s env proměnnou
  const action = 'https://formspree.io/f/xeovqpzd';

  return (
    <form action={action} method="POST" className="grid gap-3 max-w-xl">
      <input type="hidden" name="_subject" value="📬 Web – nová konzultace" />
      <label className="grid gap-1">
        <span>Jméno a příjmení</span>
        <input name="name" required className="rounded-lg px-3 py-2 bg-white/5 border border-white/10" />
      </label>
      <label className="grid gap-1">
        <span>E-mail</span>
        <input type="email" name="email" required className="rounded-lg px-3 py-2 bg-white/5 border border-white/10" />
      </label>
      <label className="grid gap-1">
        <span>Zpráva</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Dobrý den, rád bych si domluvil úvodní konzultaci."
          className="rounded-lg px-3 py-2 bg-white/5 border border-white/10"
        />
      </label>

      {/* honeypot proti botům (nevyplňovat) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* po úspěchu přesměruj na /kontakt?sent=1 (máme jednoduchý toast) */}
      <input type="hidden" name="_next" value="/kontakt?sent=1" />

      <button
        type="submit"
        className="rounded-xl px-4 py-2 font-medium bg-yellow-500/90 hover:bg-yellow-500 text-slate-900"
      >
        Odeslat
      </button>
    </form>
  );
}
