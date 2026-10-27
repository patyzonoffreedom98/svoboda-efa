# Měření kontaktů a rezervací – svoboda-efa.cz

## Co se odesílá
- `generate_lead` – **pouze po úspěšné odpovědi** Formspree na kontaktní formulář, na úvodní stránce i na /kontakt. Parametry `lead_type=contact_form`, `form_location` = cesta stránky. Neodesíláme jméno, email, telefon ani zprávu.
- `booking_link_click` – kliknutí na odkaz „Vybrat termín“ kdekoliv na webu. **Není to uskutečněná rezervace** – ta probíhá na externí stránce Google Calendar.
- Stará událost `ads_conversion_Kontaktujte_n_s_1` pravděpodobně vzniká z návštěvy /kontakt. Neodstraňujeme historická data, ale v GA4 je třeba tuto událost **odebrat z klíčových událostí** a v propojeném Google Ads nenastavovat jako primární konverzi.

## Důležité: GA4 ruční nastavení
1. Administrátor → Zobrazení dat → Události / Klíčové události. Označit `generate_lead` jako **klíčovou událost** (počítání jednou za událost).
2. `booking_link_click` používat jako sekundární **mikrokonverzi**, nikoliv jako dokončené rezervace. Počet reálných rezervací ověřit v Google Calendar (případně následně zavést samostatné serverové měření po potvrzení).
3. Odebrat status klíčové události `ads_conversion_Kontaktujte_n_s_1`, případně v Google Ads změnit její optimalizaci na sekundární / odstranit ze započítávaných konverzí. Jinak bude historické / mylné přepočítávání pokračovat.
4. Při propojení s Google Ads importovat jako primární cíl jen skutečné leady `generate_lead`, nejprve po živém testu. Nevytvářet duplicitní konverzi přes Ads tag i GA4 import současně.

## Ověření
- Vyzkoušet formulář s platným kontaktem: GA4 Realtime / DebugView zobrazí přesně **jedno** `generate_lead` až po potvrzení o úspěšném odeslání; neúspěšné odeslání nesmí vykázat nic.
- Otevřít rezervační odkaz z úvodní stránky a kontaktní stránky: v GA4 se ukáže `booking_link_click`; dokončení rezervace se z toho **neodvozuje**.
- Nevyhodnocovat zpětně starých 9 `ads_conversion_Kontaktujte_n_s_1` jako klientské poptávky.

## Vlastní návštěvnost poradce – bezpečný opt-out v konkrétním prohlížeči
- Otevřít v **každém svém prohlížeči / zařízení**: `https://svoboda-efa.cz/?moje_mereni=vypnout`
- Tím se pouze v daném prohlížeči uloží příznak do localStorage a Google Analytics měření pro G-L95FKT5RB8 bude vypnuté při dalších návštěvách (případné jiné měřicí nástroje se tím nevypínají).
- Pro opětovné zapnutí v prohlížeči otevřít: `https://svoboda-efa.cz/?moje_mereni=zapnout`
- Staré návštěvy se nemažou; soukromé okno / jiné zařízení se samo nevyloučí. Nepoužívat globální GA4 datový filtr podle sdílené kancelářské IP bez ověření.

## Změna ve statistikách
Před nasazením se měřily zejména návštěvy kontaktní stránky; od nasazení sledujeme potvrzená odeslání formuláře a zvlášť kliknutí na externí rezervační službu. Historické řady nejsou metodicky plně srovnatelné.
