import { employeeBenefitModel as model, employeeBenefitTotals as totals } from "@/lib/employee-benefit";

const money = (value: number) => `${new Intl.NumberFormat("cs-CZ").format(value)} Kč`;

export default function EmployeeBenefitComparison() {
  return <section className="benefit-comparison" aria-labelledby="benefit-heading">
    <p className="section-label">Modelový příklad · pravidla roku 2026</p>
    <h2 id="benefit-heading">Stejných 2 000 Kč.<br />Jiný dopad na náklady firmy.</h2>
    <p className="benefit-intro">Porovnejme zvýšení hrubé mzdy o 2 000 Kč s příspěvkem zaměstnavatele ve výši 2 000 Kč na daňově podporovaný DIP nebo DPS. Výpočet níže ukazuje princip, nejde o doloženou úsporu popsané firmy.</p>

    <div className="benefit-options">
      <div className="benefit-option">
        <h3>Navýšení hrubé mzdy</h3><p className="benefit-option-note">O 2 000 Kč měsíčně</p>
        <dl>
          <dt>Firmu stojí měsíčně</dt><dd>{money(totals.employerWageCost)}</dd>
          <dt>Zaměstnanec dostane čistého</dt><dd>{money(totals.employeeNetWage)}</dd>
        </dl>
        <p className="benefit-availability">Peníze jsou ihned k dispozici.</p>
      </div>
      <div className="benefit-option benefit-option-accent">
        <h3>Příspěvek na DIP / DPS</h3><p className="benefit-option-note">2 000 Kč měsíčně do produktu</p>
        <dl>
          <dt>Firmu stojí měsíčně</dt><dd>{money(model.monthlyContribution)}</dd>
          <dt>Do produktu zaměstnance jde</dt><dd>{money(model.monthlyContribution)}</dd>
        </dl>
        <p className="benefit-availability">Peníze slouží k dlouhodobému zajištění na stáří. Platí podmínky čerpání.</p>
      </div>
    </div>

    <p className="benefit-monthly-result">Firma v modelu ušetří <strong>{money(totals.employerMonthlySaving)} měsíčně na člověka</strong>. Zaměstnanci jde do produktu o {money(totals.employeeMonthlyDifference)} více, než by získal čistého z navýšení mzdy; nejde však o volně dostupnou hotovost.</p>

    <div className="benefit-savings">
      <div><span>Úspora firmy za rok · 1 zaměstnanec</span><strong>{money(totals.annualEmployerSaving)}</strong></div>
      <div><span>Úspora firmy za rok · 30 zaměstnanců</span><strong>{money(totals.companyAnnualSaving)}</strong></div>
    </div>
    <p className="benefit-assumption">Rozdíl nákladů na sociální a zdravotní odvody před zohledněním daně z příjmů firmy.</p>

    <div className="benefit-table-wrap" role="region" aria-label="Roční srovnání benefitů" tabIndex={0}>
      <table className="benefit-table">
        <caption>Co to znamená za celý rok</caption>
        <thead><tr><th scope="col">Za 12 měsíců</th><th scope="col">Navýšení mzdy</th><th scope="col">DIP / DPS</th></tr></thead>
        <tbody>
          <tr><th scope="row">Náklad firmy na 1 člověka</th><td>{money(totals.annualWageCost)}</td><td>{money(totals.annualContribution)}</td></tr>
          <tr><th scope="row">Náklad firmy na 30 lidí</th><td>{money(totals.companyAnnualWageCost)}</td><td>{money(totals.companyAnnualContribution)}</td></tr>
          <tr><th scope="row">1 zaměstnanec získá</th><td>{money(totals.annualNetWage)}<small>čistá mzda</small></td><td>{money(totals.annualContribution)}<small>příspěvek do produktu</small></td></tr>
          <tr><th scope="row">30 zaměstnanců získá celkem</th><td>{money(totals.companyAnnualNetWage)}<small>čistá mzda</small></td><td>{money(totals.companyAnnualContribution)}<small>příspěvky do produktů</small></td></tr>
        </tbody>
      </table>
    </div>

    <p className="benefit-assumption">Model předpokládá běžný pracovní poměr, 15% zdanění celého přírůstku mzdy, již využité slevy na dani a standardní odvody bez úlev a dosažení maxima sociálního pojištění. Nezahrnuje zákonné pojištění odpovědnosti zaměstnavatele, výnosy ani poplatky produktů.</p>

    <details className="benefit-details">
      <summary>Jak počítáme a jaké podmínky platí?</summary>
      <h3>Výpočet na jednoho zaměstnance</h3>
      <p>Náklad firmy: 2 000 Kč + {money(totals.employerSocial)} sociálního (24,8 %) + {money(totals.employerHealth)} zdravotního pojištění (9 %) = {money(totals.employerWageCost)}. Čistý přírůstek mzdy: 2 000 Kč − {money(totals.employeeSocial)} sociálního (7,1 %) − {money(totals.employeeHealth)} zdravotního pojištění (4,5 %) − {money(totals.employeeTax)} daně (15 %) = {money(totals.employeeNetWage)}.</p>
      <h3>Roční limit příspěvků zaměstnavatele</h3>
      <p>Osvobození do {money(model.annualExemptionLimit)} ročně se u zaměstnavatele sleduje souhrnně na jednoho zaměstnance za daňově podporované produkty spoření na stáří a pojištění dlouhodobé péče. Příspěvek 2 000 Kč měsíčně znamená {money(totals.annualContribution)} za rok. Další příspěvky od stejného zaměstnavatele mohou zbývající limit čerpat. Nadlimitní část podléhá dani i odvodům. Vlastní vklady zaměstnance mají samostatná pravidla.</p>
      <h3>Dlouhodobý benefit a jeho výplata</h3>
      <p>U DIP a nových smluv DPS je pro standardní zachování daňové podpory potřeba splnit alespoň 120 měsíců trvání a věk 60 let; existují zákonné výjimky. Předčasný výběr může vést k dodanění dřívější podpory. Příspěvek do produktu nenahrazuje nárokovou mzdu ani peníze potřebné na běžné výdaje.</p>
      <p>U DPS se zdanění při výplatě liší podle data uzavření smlouvy a formy čerpání. U smluv od 1. 1. 2024 se při řádném jednorázovém vyrovnání příspěvky zaměstnavatele nedaní, výnosy zpravidla ano; u starších smluv se mohou danit i příspěvky. Penze vyplácená alespoň 10 let může být osvobozena. U DIP zůstávají relevantní daňová pravidla pro výnosy a prodeje investic. Samotný název produktu tedy neznamená, že všechny výnosy a výplaty budou bez daně.</p>
      <h3>Konkrétní nastavení ve firmě</h3>
      <p>Pravidla benefitu a daňovou uznatelnost firma nastaví s mzdovou účetní nebo daňovým poradcem. U vybraných rizikových prací od roku 2026 navíc platí povinný příspěvek 4 % při splnění zákonných podmínek. Ten patří na penzijní připojištění nebo DPS, nikoli na DIP, a čerpá stejný limit osvobození. Tento obecný model jej samostatně nepočítá.</p>
      <p className="benefit-source-label">Zdroje pravidel · ověřeno 6. 10. 2026</p>
      <ul className="benefit-sources">
        <li><a href="https://www.cssz.gov.cz/web/cz/vyse-a-sazba" target="_blank" rel="noreferrer">ČSSZ — sazby sociálního pojištění</a></li>
        <li><a href="https://www.vzp.cz/platci/informace/povinnosti-platcu-metodika/2-4-platce-pojistneho-zamestnavatel" target="_blank" rel="noreferrer">VZP — odvody zdravotního pojištění</a></li>
        <li><a href="https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/obecne-informace" target="_blank" rel="noreferrer">Finanční správa — zdanění mzdy a příspěvků</a></li>
        <li><a href="https://www.mfcr.cz/assets/attachments/2024-01-31_DIP.pdf" target="_blank" rel="noreferrer">Ministerstvo financí — DIP a podmínky daňové podpory</a></li>
        <li><a href="https://www.nn.cz/poradna/penze/vyplata-penze.html" target="_blank" rel="noreferrer">NN Penzijní společnost — zdanění výplat DPS</a></li>
        <li><a href="https://financnisprava.gov.cz/cs/dane/dane/dan-z-prijmu/zamestnanci-zamestnavatele/informace-stanoviska-sdeleni/2026/informace-k-povinnemu-prispevku-na-produkty-na-stari" target="_blank" rel="noreferrer">Finanční správa — povinné příspěvky u rizikových prací</a></li>
      </ul>
    </details>
  </section>;
}
