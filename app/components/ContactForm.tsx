// app/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xeovqpzd"
      method="POST"
      className="space-y-4 max-w-xl"
    >
      {/* Předmět – uvidíš v e-mailu */}
      <input type="hidden" name="_subject" value="Nezávazná konzultace z webu" />

      <div>
        <label className="block mb-1">Jméno a příjmení</label>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2"
          placeholder="Jan Novák"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">E-mail</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2"
            placeholder="jan.novak@email.cz"
          />
        </div>
        <div>
          <label className="block mb-1">Telefon</label>
          <input
            name="phone"
            type="tel"
            className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2"
            placeholder="+420 777 000 000"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1">Zpráva</label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-md border border-slate-600 bg-transparent px-3 py-2"
          placeholder="Dobrý den, rád bych si domluvil úvodní konzultaci…"
        />
      </div>

      {/* Honeypot proti botům (nevyplňovat) */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Volitelně – po odeslání přesměrovat na /kontakt?ok=1
          <input type="hidden" name="_redirect" value="https://svoboda-efa.vercel.app/kontakt?ok=1" />
      */}

      <button
        type="submit"
        className="rounded-md bg-yellow-500 px-5 py-2 font-semibold text-slate-900 hover:bg-yellow-400"
      >
        Odeslat
      </button>

      <p className="text-sm text-slate-400">
        Odesláním souhlasíte se zpracováním údajů pro účely zodpovězení dotazu.
      </p>
    </form>
  );
}
