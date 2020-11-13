import L from 'leaflet';

const merki = [];
let map;

export function popup(id) {
  for (let i = 0; i < merki.length; i += 1) {
    const markerid = merki[i].options.title;
    if (markerid === id) {
      merki[i].openPopup();
    }
  }
}

export function createPopup(geojson, content) {
  for (let i = 0; i < content.length; i += 1) {
    const marker = L.geoJSON(geojson.features[i], { title: `marker-${i}` })
      .bindPopup(content[i])
      .addTo(map);
    merki.push(marker);
  }
}
// Býr til Leaflet kort og setur miðju á (0, 0) í zoom level 2
export function init(el) {
  map = L.map(el).setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
}
