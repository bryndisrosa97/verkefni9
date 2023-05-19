# Verkefni 9 Earthquakes

## Lýsing

Verkefni 9 sækir gögn um jarðskjálfta frá USGS og birtir á korti með [Leaflet](https://leafletjs.com/).

![](./screenshot)


### Viðmót

![image](https://github.com/bryndisrosa97/verkefni9/assets/61384036/10a2230d-5ee2-45e1-a95f-63943b07ae38)


Gefið er `index.html` skjal og grunnur að skrám sem fylla skal inn í m.v. athugasemdir í þeim.

Gefið er `styles.css` skjal með grunnstílum, ekki þarf að bæta við þá.

Virkni skal vera:

* Gögn eru sótt með `fetch` innan úr `lib/earthquakes.js`
* Kort er útbúið og sett inn í `.map` með Leaflet
* Ef gögn komu er `.loading` div fjarlægt
* Fyrir hvern jarðskjálfta er:
  * Búið til `li` innan `ul.earthquakes` með gögnum, dagsetning er formuð með `lib/utils.js` `formatDate()` falli. Sjá dæmi um HTML sem CSS gerir ráð fyrir innan athugasemdar í `index.html`
  * Búinn er til marker á korti út frá GeoJSON gögnum, [sjá leiðbeiningar um að nota GeoJSON með Leaflet](https://leafletjs.com/reference-1.7.1.html#geojson)
  * Búið til popup sem fest er við marker með sömu upplýsingum um skjálfta (hint: hægt að nota `element()` hjálparfall og `outerHTML`)
  * Takkinn „sjá á korti“ birtir popup á korti þegar smellt er á hann

### Kóði

Setja skal kóða með ES6 modules, þ.e.a.s. `import export`.

Gefin er grunnur og eru athugasemdir þar.

Setja þarf upp tól:

* `eslint` með plugins eins og í verkefni 8
* `babel`
* `rollup` með plugins til að geta notað NPM module
* `browser-sync`
* `concurrently`
* `leaflet`

`rollup` skal sjá um að pakka JavaScript kóða og gera aðgengilegann í `dist/`.

Leaflet þarf CSS, en þar sem ekki þarf að setja upp pökkun á CSS í þessu verkefni er hægt að vísa í `node_modules/leaflet/dist/leaflet.css` til að fá CSS. Sjá `index.html`.

Einnig er leyfilegt að nota `date-fns` til að forma dagsetningar, sjá gefinn kóða.

Þegar verkefni er metið er `npm install` keyrt fyrst, síðan `npm run dev` á að keyra upp verkefni og opna vafra glugga, að lokum `npm test` sem á að keyra eslint og sýna engar villur.

