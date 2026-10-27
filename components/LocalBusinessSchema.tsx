import { site } from "@/lib/site";

// Public factual business details only; no fabricated opening hours,
// ratings, awards, or claims about walk-in availability.
const business = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": "https://svoboda-efa.cz/#financni-poradenstvi",
  name: site.name,
  url: site.url,
  telephone: "+420774697755",
  email: site.email,
  description: "Finanční poradce se zázemím v Jihlavě. Osobní schůzky po celé České republice pro hypotéky, refinancování, investice a komplexní finanční plánování. Navazující péče také online; setkání po předchozí domluvě.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Žižkova 1683/13",
    addressLocality: "Jihlava",
    postalCode: "586 01",
    addressCountry: "CZ",
  },
  areaServed: [{ "@type": "Place", name: "Kraj Vysočina" }, { "@type": "Country", name: "Česká republika" }],
  founder: { "@type": "Person", name: "Bc. Patrik Svoboda, EFA", url: site.url },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }}
    />
  );
}
