export const site = {
  name: "Bc. Patrik Svoboda, EFA",
  ico: "09910263",
  registeredAddress: "Březinova 3631/1, 586 01 Jihlava",
  url: "https://svoboda-efa.cz",
  phone: "774 697 755",
  phoneHref: "tel:+420774697755",
  email: "patrik.svoboda@wmfinance.cz",
  booking: "https://calendar.app.google/oJTfuFYsEd3QQoyr5",
  googleReview: "https://g.page/r/CcddbKa35zTSECE/review",
  whatsapp: "https://wa.me/420774697755",
};

export const consultationQuestions = [
  {
    question: "Jak probíhá první konzultace?",
    answer: "Vyhradíme si 30–60 minut podle toho, co potřebujete probrat. Seznámíme se, projdeme vaše cíle, rodinnou situaci, příjmy a výdaje. Na první schůzce nic nepodepisujeme ani nevypovídáme a nevybíráme konkrétní nové produkty. Nejdříve potřebuji porozumět vaší situaci.",
  },
  {
    question: "Kolik spolupráce stojí?",
    answer: "Úvodní konzultace i moje poradenská služba jsou pro vás bez přímého poplatku. Odměnu dostávám od finančních institucí. Samotné finanční produkty mohou mít své náklady a poplatky, které vám před sjednáním vysvětlím.",
  },
  {
    question: "Co si mám připravit?",
    answer: "První schůzku zvládneme i bez podkladů. Stačí představa o tom, co chcete řešit, a základní přehled o příjmech a výdajích. Pokud máte po ruce současné smlouvy nebo přehled investic, mohou nám další postup usnadnit a urychlit.",
  },
  {
    question: "Můžeme řešit jen jednu konkrétní věc?",
    answer: "Ano. Začneme tím, s čím přicházíte — třeba hypotékou, investicemi nebo kontrolou pojištění. Vysvětlím vám i důležité souvislosti. Rozsah další spolupráce domluvíme podle vašich potřeb.",
  },
  {
    question: "Kde se potkáme a kdy se ozvete?",
    answer: "Hlavní kancelář mám na Žižkově 1683/13 v Jihlavě, další možnosti setkání jsou v Havlíčkově Brodě, Žďáru nad Sázavou a Světlé nad Sázavou. Osobně ale pracuji s klienty po celé ČR — kvůli hypotéce, investicím či komplexnímu finančnímu plánu za vámi rád přijedu kamkoliv, nejen na Vysočinu. Navazující schůzky a průběžnou péči můžeme pro vaše pohodlí řešit online, pokud vám to vyhovuje; osobní setkávání samozřejmě zůstává možností. Na zprávu z webu se ozvu do dvou pracovních dnů, případně si můžete vybrat termín přes rezervaci.",
  },
];

export const offices = [
  { city: "Jihlava", address: "Žižkova 1683/13, 586 01 Jihlava" },
  { city: "Havlíčkův Brod", address: "Beckovského 2045, 580 01 Havlíčkův Brod" },
  { city: "Žďár nad Sázavou", address: "Náměstí republiky 1488/1, 591 01 Žďár nad Sázavou" },
  { city: "Světlá nad Sázavou", address: "Jelenova 102, 582 91 Světlá nad Sázavou" },
];
export const officeMapUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
