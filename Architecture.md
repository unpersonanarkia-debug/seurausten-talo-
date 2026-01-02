# 🧱cArchitecture — Seurausten talo

Tämä dokumentti kuvaa Seurausten talon rakenteen:
miten data, mallit ja näkymät liittyvät toisiinsa.

Arkkitehtuuri ei ole optimoitu suorituskyvylle,
vaan ymmärrettävyydelle, säilyvyydelle ja laajennettavuudelle.


## Arkkitehtuurin periaatteet

Seurausten talon rakenne noudattaa neljää periaatetta:

1. *Ajallinen ensisijaisuus*  
   Päätöksiä ei tarkastella pisteinä, vaan jatkumoina.

2. *Rakenteellinen yhteismitallisuus*  
   Kaikki tapaukset noudattavat samaa muotoa,
   vaikka niiden sisällöt eroavat.

3. *Esityksen irrottaminen datasta*  
   Sama data voidaan esittää usealla tavalla
   ilman että sen merkitys muuttuu.

4. *Hidas muutos*  
   Rakenteelliset muutokset tehdään harvoin
   ja vain perustelluista syistä.


## Kokonaiskuva

Seurausten talo koostuu kolmesta kerroksesta:

1. *Datakerros*
2. *Mallikerros*
3. *Näkymäkerros*

Nämä ovat loogisia, eivät teknisiä rajoja.


## 1. Datakerros

Datakerros sisältää päätöksiä kuvaavat tapaukset.

### Rooli
- säilyttää institutionaalinen muisti
- mahdollistaa vertailu
- estää ad hoc -selitykset

### Toteutus
- rakenteinen JavaScript-data (data-cases.js)
- yksi tapaus = yksi objekti
- ei laskennallista logiikkaa

### Keskeiset kentät
- id
- title
- domain
- impactLayers
- populationExposure
- conflictMode
- lifecycle (vaiheet 1–6)

Datakerros ei “tiedä”, miten sitä esitetään.


## 2. Mallikerros

Mallikerros määrittää,
miten data tulkitaan rakenteellisesti.

### Rooli
- yhdistää yksittäiset caset yhteiseen kehykseen
- tarjoaa vertailtavan aikarakenteen
- estää narratiivisen harhautumisen

### Keskeiset mallit

#### Päätöksen elinkaari
Kaikki tapaukset sijoitetaan samaan kuusivaiheiseen rakenteeseen:

1. Päätös  
2. Vaikutus  
3. Seuraukset  
4. Sopeutuminen  
5. Kertautuminen  
6. Normalisoituminen  

Tämä malli on *pakottava*, ei kuvaileva.


### Vaikutuskerrokset

Vaikutuksia tarkastellaan rinnakkaisina kerroksina,
ei yhdistettynä lopputuloksena.

Kerrokset voivat olla:
- terveydellisiä
- sosiaalisia
- informatiivisia
- hallinnollisia
- turvallisuuteen liittyviä

Kerrokset eivät ole hierarkkisia.


## 3. Näkymäkerros

Näkymäkerros esittää saman rakenteen eri muodoissa.

### Rooli
- auttaa hahmottamaan
- ei tuota uutta merkitystä
- ei muuta datan tulkintaa

### Mahdollisia näkymiä
- ympyrä (elinkaari)
- virtaus
- ruudukko
- lineaarinen aikajana
- tekstuaalinen esitys

Kaikki näkymät ovat vaihdettavia.


## Datan ja näkymän suhde

Mikään näkymä:
- ei saa ohittaa datan osia
- ei saa painottaa yhtä vaihetta perusteettomasti
- ei saa muuttaa aikajänteen logiikkaa

Jos näkymä vaatii datan muuttamista,
näkymä on väärä.


## Laajennettavuus

Arkkitehtuuri tukee:
- uusien casejen lisäämistä
- uusien näkymien rakentamista
- vaikutuskerrosten kasvua

Se ei tue:
- yksittäisten tapausten poikkeuskohtelua
- räätälöityjä tulkintoja
- narratiivista optimointia


## Tekninen tarkoituksellisuus

Teknologiset valinnat ovat tietoisesti yksinkertaisia:

- staattinen toteutus
- ei backend-riippuvuuksia
- ei piilotettua logiikkaa

Tämä varmistaa:
- pitkäikäisyyden
- siirrettävyyden
- arkistointikelpoisuuden


## Muutosten periaate

Rakenteellinen muutos on aina riski.

Siksi:
- datamalli muuttuu harvoin
- mallikerros muuttuu erittäin harvoin
- näkymäkerros voi muuttua vapaammin

Mitä alempana kerros,
sitä hitaammin sen tulee muuttua.


## Lopuksi

Seurausten talon arkkitehtuuri ei pyri olemaan älykäs.
Se pyrkii olemaan luotettava.

Kun päätöksiä tehdään nopeasti,
rakenteiden on liikuttava hitaasti.
