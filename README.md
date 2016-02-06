# eHealth Hackathon

*február 12 @ 17:00 – február 13 @ 20:00*

## Sociálne siete a komunikácia
[Program a organizácia akcie](http://connect-network.com/sk/event/ehealth/)

[Facebook event](https://www.facebook.com/events/1696227853925788/)

[Gitter chat room](https://gitter.im/lukaszdechovan/ehealth-hackathon-2016?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## Repozitár pre účel eHealth Hackathonu 12.-13.2.2016

V repozirári sa nachádzajú **Demo** zdravotné údaje, ktoré môžu byť využité pre vývoj aplikácií na akcii eHealth hackathon.

Zdrojové údaje sú v XML súboroch rozdelené podľa jednotlivých typoch záznamov.
Pomocou [Node.js®](https://nodejs.org/en/) pluginu [Gulp](http://gulpjs.com/) sú skonvertované aj do JSON formátu.

## Popis Demo údajov

### Číselníky

Číselníky sú uložené v samostatných súboroch *(platí, že 1 súbor = 1 číselník)*, ktoré sa nachádzajú priamo v priečinku [Xml](./Xml), resp. [Json](./Json).

#### XML formát

Schémy ku XML údajom neexistujú, v zásade sú však názvy elementov a atribútov samopopisujúce.
Každý číselník je reprezentovaný koreňovým elementom XML súboru. 
Elementy o úroveň nižšie reprezentujú položky číselníka.
Každá položka má vyplnený atribút `id` a element `Nazov`. 
Položka môže obsahovať ďalšie elementy špecifické pre daný číselník (napr. `Kod` a `UpresnenieDiagnozy` nižšie).

```xml
<Diagnozy>
    ...
    <Diagnoza id="5">
        <Nazov>Iné zdĺhavé choroby mandlí a adenoidného tkaniva</Nazov>
        <Kod>J35.8</Kod>
        <UpresnenieDiagnozy>zväčšené mandle</UpresnenieDiagnozy>
    </Diagnoza>
    ...
</Diagnozy>
```

#### JSON formát

Číselník je reprezentovaný JSON objektom obsahujúcim položku (názov číselníka, napr. `Diagnozy`), ktorý obsahuje opäť objekt s jedinou položkou (názov položky číselníka, napr. `Diagnoza`), ktorá obsahuje pole objektov predstavujúcich jednotlivé položky.
Každá položka má vyplnené `id` a `Nazov`.
Položka môže obsahovať ďalšie vlastnosti špecifické pre daný číselník (napr. `Kod` a `UpresnenieDiagnozy` nižšie).

```javascript
{
    "Diagnozy": {
        "Diagnoza": [
    <!--    ...   -->
            {
                "id": "5",
                "Nazov": "Iné zdĺhavé choroby mandlí a adenoidného tkaniva",
                "Kod": "J35.8",
                "UpresnenieDiagnozy": "zväčšené mandle"
            },
    <!--    ...   -->
        ]
    }
}
```            

### Zdravotné záznamy

Zdravotné záznamy sú na základe typu rozdelené do viacerích priečinkov *(platí, že 1 priečinok = 1 typ zdravotného záznamu)* (napr. `SumarLiekovaAnamneza`). V každom priečinku sa nachádzajú súbory obsahujúce záznamy jednotlivých pacientov (napr. súbor `00000000018.xml` obsahuje zdravotné záznamy pacienta s identifikátorom `00000000018`). Zdravotné záznamy spravidla obsahujú odkazy na číselníkové údaje na základe názvu číselníka a identifikátora číselníkovej položky.

#### XML formát

> TODO Doplniť popis a ukážku

#### JSON formát

> TODO Doplniť popis a ukážku

---
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
