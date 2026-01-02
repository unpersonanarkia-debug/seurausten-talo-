# 🏛️ Seurausten talo

*Seurausten talo* on institutionaalinen malli, joka tekee näkyväksi päätösten
pitkän aikavälin seuraukset järjestelmätasolla.

Se ei ole mielipideprojekti, poliittinen ohjelma tai ennustekone.  
Se on rakenne, jonka avulla päätöksiä voidaan tarkastella niiden
ajallisessa elinkaaressa – myös silloin, kun vastuu, vaikutukset ja
normaalistuminen ovat hajautuneet.


## Miksi Seurausten talo on olemassa

Modernit yhteiskunnat ovat hyviä tekemään päätöksiä,
mutta heikkoja seuraamaan niiden kertautuvia vaikutuksia.

Useimmat järjestelmät pysähtyvät tähän:

- päätös
- välitön vaikutus
- raportointi

Seurausten talo alkaa siitä, mihin päätöksenteko yleensä päättyy.


## Päätöksen elinkaari

Kaikki tässä repozitoriossa kuvatut tapaukset noudattavat samaa
ajallista perusrakennetta:

1. *Päätös*  
2. *Vaikutus*  
3. *Seuraukset*  
4. *Sopeutuminen*  
5. *Kertautuminen*  
6. *Muutos normiksi*

Tämä ei ole prosessikaavio vaan *takaisinkytkentäsilmukka*:
seuraava päätös tehdään aina jo muuttuneessa todellisuudessa.


## Mitä tämä ei ole

Seurausten talo:

- ei tuomitse yksittäisiä toimijoita
- ei tarjoa valmiita ratkaisuja
- ei ennusta tulevaisuutta
- ei ota poliittista kantaa

Sen tehtävä on tehdä näkyväksi rakenteita, jotka muuten jäävät
historiallisten katkosten, uutissyklien ja vastuun hajautumisen taakse.


## Rakenteen yleiskuva

Tämä repositorio sisältää:

- *Visuaalisia näkymiä*
  - ympyräkaavio (päätöksen elinkaari)
  - ASCII-visualisoinnit
  - virtaus- ja grid-näkymät

- *Data-kerroksen*
  - data-cases.js: rakenteinen tapa kuvata päätöksiä ja niiden seurauksia
  - kaikki tapaukset ovat yhteismitallisia ja vertailtavia

- *Käyttöliittymäprototyypin*
  - staattinen HTML / JavaScript
  - ei riippuvuutta backendistä tai kirjastoista


## Case-tiedon periaatteet

Jokainen tapaus (case):

- kuvaa *päätöksen*, ei tapahtumaa
- sisältää *ajallisen viiveen*
- tunnistaa *vaikutuskerrokset*
  - fyysinen ja henkinen terveys
  - lapsuus ja kehitys
  - informaatioympäristö
  - sosiaalinen luottamus
  - hallinto ja turvallisuus
- voi sijoittua myös
  - kumoukselliseen
  - kyber-
  - hybridi-
  - tai rakenteelliseen konfliktimoodiin

Tapaukset eivät vaadi pahaa tahtoa.  
Useimmat seuraukset syntyvät normaalista, rationaalisesta päätöksenteosta,
joka toistuu tarpeeksi pitkään.


## Kenelle tämä on

Seurausten talo on tarkoitettu:

- ajattelun ja analyysin tueksi
- koulutukseen ja tutkimukseen
- keskustelun ja institutionaalisen muistin välineeksi

Ei nopeisiin vastauksiin, vaan hitaaseen ymmärrykseen.


## Kehitysvaihe

Tämä repositorio on *prototyyppi*, ei valmis instituutio.

Tulevat kehityssuunnat:
- laajempi case-kirjasto
- suodatus vaikutuskerroksittain
- päätösten välisten yhteyksien näkyväksi tekeminen
- käyttäjän omien päätösketjujen mallinnus


## Lisenssi ja käyttö

Sisältö on tarkoitettu avoimeen tarkasteluun ja jatkokehitykseen.
Tarkemmat käyttöehdot täsmennetään projektin kypsyessä.

"Avoin prototyyppi instituutiosta, joka tekee päätösten pitkäaikaiset seuraukset näkyviksi."
[Käy Seurausten talossa](https://unpersonanarkia-debug.github.io/seurausten-talo/)


Seurausten talo ei kysy, oliko päätös oikea.
 
Se kysyy, mitä tapahtui sen jälkeen – ja miksi se tuntuu nyt normaalilta.ng the 30×30 slot naming scheme.  
  - Localise text by introducing a simple i18n keyset and switching labels in HTML/JS.
