## Inštrukcie pre použitie DEMO údajov pre účel hackathonu

### Objednávanie cez WEB rozhranie

Údaje pre tému **Objednávanie cez web rozhranie** sú prístupné v Git vetve [Objednavanie](../../tree/objednavanie).

Najpodstatnejšie dátové súbory sú nasledovné:
* PoskytovatelZS - zoznam poskytovateľov zdravotnej starostlivosti (právnické osoby)
* Ambulancia - zoznam ambulancií, ktoré majú väzbu na Poskytovateľa ZS, pod ktorého patria
* Lekar - zoznam lekárov s väzbou na ambulanciu, v ktorej pracujú
* Specializacia - číselník špecializácií lekárov a ambulancií

> Údaje môžete akokoľvek upravovať, rozširovať alebo sa nimi kľudne len inšpirovať.
> Ordinačné hodiny ambulancií, na ktoré je možné sa objednať neboli pripravené ako súčasť dát, nakoľko by to mohlo výrazne ovplyvniť spôsob modelovania procesu objednávania, ktoré je cieľom témy pre hackathon.

Súvisiace dôležité číselníky:
* Krajina - číselník štátov
* UzemnoSpravnaJednotka - číselník krajov
* Okres - číselník okresov
* Obec - číselník obcí
* Psc - číselník PSČ
* ZdravotnaPoistovna - číselník zdravotných poisťovní

> **Upozornenie:** Číselníky neobsahujú kompletné údaje (obcí, okresov, atď.). Tieto údaje navyše nemusia byť presné.
> Údaje o poskytovateľoch, ambulanciách a lekároch sú vymyslené. 

### Zobrazenie pacientskeho sumáru

Údaje pre tému **Zobrazenie pacientskeho sumáru** sú prístupné v Git vetve [PacientskySumar](../../tree/pacientskysumar)

Najpodstatnejšie priečinky s dátovými súbormi sú nasledovné:
* SumarKontaktneOsoby - kontaktné údaje osoby
* SumarLiekovaAnamneza - lieková anamnéza osoby
* SumarOsobnaAnamnezaPrekonaneZavZdravProb - osobná anamnéza (prekonané závažné zdravotné problémy)
* SumarSocialnaAnamnezaAbuzy - sociálna anamnéza (abúzy životosprávy)
* SumarVarovaniaNeziaduceReakcie - varovania (nežiadúce reakcie)
* SumarVysetreniaObjektivneNalezy - vyšetrenia (objektívne nálezy)
* SumarVysetreniaVitalneHodnoty - vyšetrenia (vitálne hodnoty)
* SumarZdravProbAktualne - aktuálne zdravotné problémy
* SumarZdravProbChirurgickeVykony - zdravotné problémy (chirurgické výkony)
* SumarZdravProbPouzivaneZP - zdravotné problémy (používané zdravotnícke pomôcky)
* SumarZdravProbTerapeutickeOdporucania - zdravotné problémy (terapeutické odporúčania)
* SumarZdravProbTerapeutickePlany - zdravotné problémy (terapeutické plány)
* SumarZdravProbZdravotneObmedzenia - zdravotné problémy (zdravotné obmedzenia)

Najpodstatnejšie dátové súbory sú nasledovné:
* Pacient - zoznam fiktívnych pacientov, na ktorých sú vedené zdravotné záznamy
* IdentifikacneUdaje - identifikačné údaje fiktívnych pacientov

> Údaje môžete akokoľvek upravovať, rozširovať alebo sa nimi kľudne len inšpirovať.

Súvisiace dôležité číselníky:
* Liek - číselník liekov
* Diagnoza - číselník diagnóz
* TypNeziaducejReakcie - číselník nežiadúcich reakcií
* PrejavNeziaducejReakcie - číselník prejavov nežiadúcich reakcií
* ChirurgickyVykon - číselník chirurgických výkonov
* ZdravotnickaPomocka - číselník zdravotníckych pomôcok
* DruhZdravotnickejPomocky - číselník druhov zdravotníckych pomôcok
* Krajina - číselník štátov
* UzemnoSpravnaJednotka - číselník krajov
* Okres - číselník okresov
* Obec - číselník obcí
* Psc - číselník PSČ
* ZdravotnaPoistovna - číselník zdravotných poisťovní

> **Upozornenie:** Číselníky neobsahujú kompletné údaje (liekov, diagnóz, obcí, okresov, atď.). Tieto údaje navyše nemusia byť presné.
> Údaje o pacientoch, poskytovateľoch, ambulanciách a lekároch sú vymyslené. 
