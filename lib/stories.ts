export type Story = {
  slug: string;
  category: string;
  image: string;
  title: string;
  summary: string;
  outcome: string;
  sections: { heading?: string; paragraphs: string[] }[];
  note: string;
};

export const stories: Story[] = [
  {
    slug: "vlastni-bydleni-pro-rodinu",
    image: "/klid-domova.webp",
    category: "Hypotéky · následná péče",
    title: "Vlastní bydlení pro rodinu. A později chalupa rodičů bez zástavy.",
    summary: "Dva starší úvěry a nedostatek vlastních prostředků komplikovaly koupi bytu. Společný plán pomohl vyřešit financování i pozdější uvolnění nemovitosti rodičů.",
    outcome: "Financování bydlení a vyvázání chalupy přibližně po dvou letech.",
    sections: [
      { paragraphs: [
        "Rodina se dvěma dětmi chtěla koupit vlastní byt. Maminka byla na mateřské, tatínek podnikal. Vedle budoucí hypotéky ale potřebovali splácet také dva starší spotřebitelské úvěry a neměli dostatek vlastních prostředků.",
        "Společně jsme sestavili finanční plán a prošli rodinný rozpočet. Překážkou byly především splátky stávajících úvěrů, které omezovaly výši hypotéky, již mohla banka schválit.",
        "S bankou jsem vyjednal řešení, které spojilo koupi bytu s refinancováním původních úvěrů prostřednictvím neúčelové části hypotéky. Nižší úroková sazba a rozložení splácení do delšího období snížily měsíční zatížení. Delší splatnost zároveň znamenala delší dobu zadlužení; nižší splátka sama o sobě neznamená nižší celkové náklady.",
        "Se zajištěním pomohla chalupa rodičů, kterou banka přijala do zástavy společně s kupovaným bytem. Rodina tak získala potřebné financování a nastěhovala se do vlastního.",
      ] },
      { heading: "Moje práce nastěhováním neskončila.", paragraphs: [
        "Po vyřízení hypotéky jsme pokračovali pravidelnými ročními schůzkami. Kontrolovali jsme rodinný rozpočet a upravovali plán podle toho, jak se měnila situace rodiny. Po návratu maminky do práce jsme zohlednili nové příjmy a nastavili další tvorbu rezerv i pravidelné investování na dlouhodobé cíle.",
        "Součástí péče byla také kontrola hodnoty zastavených nemovitostí. Přibližně po dvou letech odhadní modely naznačily, že by byt mohl jako zajištění hypotéky dostačovat sám. Inicioval jsem nové ocenění a s bankou dotáhl vyvázání chalupy rodičů ze zástavy.",
        "Rodina tak získala vlastní bydlení, postupně budovala finanční zázemí a nemovitost rodičů už její hypotéku nezajišťovala. Spolupráce pokračovala podle toho, co rodina právě potřebovala.",
      ] },
    ],
    note: "Anonymizovaný příklad z praxe. Možnosti financování a uvolnění další nemovitosti ze zástavy závisejí na posouzení banky.",
  },
  {
    slug: "duvera-v-investicni-plan",
    image: "/investicni-plan.webp",
    category: "Investice · čtyři roky spolupráce",
    title: "Od špatné zkušenosti k důvěře ve vlastní investiční plán.",
    summary: "Podnikatel s několikamilionovými úsporami se po předchozí zkušenosti investování obával. Začali jsme vysvětlováním, šesti schůzkami a menší částkou.",
    outcome: "Postupně budované portfolio, půlroční reporty a dvě osobní schůzky ročně.",
    sections: [
      { paragraphs: [
        "Podnikatel s několikamilionovými úsporami měl za sebou nepříjemnou zkušenost s investováním. Jeho předchozí akciové fondy prošly poklesem, na který nebyl dostatečně připravený. Chybělo mu vysvětlení, co se děje a co to znamená pro jeho peníze. Do dalšího investování proto vstupoval s obavami.",
        "Než jsme začali, absolvovali jsme přibližně šest schůzek. Postupně jsme probrali jeho zkušenosti, očekávání i rizika jednotlivých možností. Důležité bylo, aby navrženému postupu rozuměl a cítil se při rozhodování jistěji.",
        "Začali jsme menší částkou a konzervativnějším nastavením. Klient tak mohl získávat vlastní zkušenost a sledovat, jak se investice vyvíjejí v porovnání s tím, co jsme předem probírali.",
      ] },
      { heading: "Portfolio rostlo postupně společně s důvěrou.", paragraphs: [
        "Během dalších let jsme přidávali prostředky a rozšiřovali rozložení investic. Dnes portfolio zahrnuje nemovitostní a dluhopisovou složku, komodity i menší podíl akcií s potenciálem dlouhodobého růstu.",
        "K akciové složce jsme se dostali až po postupném vysvětlení jejího přínosu i možných výkyvů. Klient tak mohl své rozhodnutí opřít o lepší porozumění tomu, co od investice očekávat.",
      ] },
      { heading: "Důvěru udržuje pravidelná péče.", paragraphs: [
        "Spolupracujeme přibližně čtyři roky. Dvakrát ročně se osobně potkáváme a společně hodnotíme vývoj portfolia, klientovy potřeby i případné změny v jeho plánech. Každého půl roku dostává individuální report ke svým investicím. Mezitím mu posílám informace o dění na trzích, aby měl průběžný přehled.",
        "Právě komunikace, která mu při předchozí zkušenosti chyběla, je dnes pevnou součástí spolupráce. Klient ví, na koho se obrátit s otázkami, a na rozhodování o svých penězích není sám.",
        "Z počátečních obav se postupně stala dlouhodobá spolupráce založená na otevřenosti a vzájemné důvěře.",
      ] },
    ],
    note: "Anonymizovaný příklad z praxe, popsaný v říjnu 2026. Hodnota investic může kolísat a jejich návratnost není zaručena.",
  },
  {
    slug: "pomoc-pri-pojistne-udalosti",
    image: "/ochrana-rodiny.webp",
    category: "Pojištění · pomoc při plnění",
    title: "Pojišťovna plnění zamítla. Pomohla příprava a odvolání.",
    summary: "Dlouhodobá pracovní neschopnost zasáhla příjem rodiny. Při sporu o zdravotní dotazník jsem doložil původní odpovědi a vedl odvolání až k vyplacení plnění.",
    outcome: "Přezkoumání zamítnuté události a vyplacení pojistného plnění.",
    sections: [
      { paragraphs: [
        "Na první schůzce byla u rodiny znát nedůvěra z předchozích zkušeností s finančními poradci. Řešili jsme především ochranu příjmu hlavního živitele, který vykonával fyzicky náročnou práci.",
        "Během několika schůzek jsme prošli rodinnou situaci a stanovili potřebné pojistné částky pro pracovní neschopnost, invaliditu a další závažná rizika. Pečlivě jsme vyplnili také zdravotní dotazník, včetně dřívějších obtíží se zády. Pojišťovna smlouvu přijala bez výluk a bez dalších dotazů ke zdravotnímu stavu.",
      ] },
      { heading: "O několik let později přišly vážné zdravotní komplikace.", paragraphs: [
        "Náhlé potíže se zády výrazně omezily klientovu pohyblivost. Následovala hospitalizace, operace a přibližně půlroční pracovní neschopnost. Pro rodinu to znamenalo nejistotu ohledně jeho zdraví i dalšího příjmu.",
        "Pojistnou událost jsme nahlásili, pojišťovna však plnění nejprve odmítla. Namítala, že dřívější obtíže se zády nebyly při sjednání popsány dostatečně podrobně.",
        "Informace o těchto obtížích přitom ve zdravotním dotazníku uvedena byla. Pojišťovna smlouvu přijala bez výluk a nevyžádala si k nim další vysvětlení ani lékařské zprávy.",
        "Osobně jsem proto připravil odvolání. Doložil jsem původní odpovědi a argumentoval tím, že pojišťovna o předchozích obtížích věděla. Pokud potřebovala podrobnější informace pro posouzení zdravotního stavu, mohla si je před přijetím do pojištění vyžádat. Klient byl připraven je dodat.",
        "Následovala další komunikace a doplnění argumentace. Po přezkoumání případu pojišťovna své stanovisko změnila a pojistné plnění vyplatila. Rodina tak získala finanční podporu v období dlouhodobého výpadku příjmu.",
      ] },
      { heading: "Pomoc ve chvíli, kdy je potřeba.", paragraphs: [
        "Klient se postupně vrátil do práce, našel si méně fyzicky náročné zaměstnání a dál pracuje na svém zotavení.",
        "Tento případ ukazuje, proč věnuji pozornost nejen nastavení pojistných částek, ale i pečlivému sjednání a pomoci ve chvíli, kdy klient pojištění skutečně potřebuje.",
      ] },
    ],
    note: "Anonymizovaný příklad z praxe. Výsledek konkrétní pojistné události závisí na smlouvě, jejích podmínkách a doložených okolnostech.",
  },
];
