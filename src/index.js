import { element, formatDate } from './lib/utils';
import { popup, init, createPopup } from './lib/map';
import fetchEarthquakes from './lib/earthquakes';

async function ShowResults(TheDisplayData) {
  const staerd = TheDisplayData.features.length;
  const earthquakes = document.querySelector('.earthquakes');
  const Title = new Array(staerd);
  const Timinn = new Array(staerd);
  const richter = new Array(staerd);
  const url = new Array(staerd);
  const takkinn = new Array(staerd);
  const nanarurl = new Array(staerd);
  const lis = new Array(staerd);
  const d1 = new Array(staerd);
  const div = new Array(staerd);
  const buttons = new Array(staerd);

  function makeid(i) {
    return `marker-${i}`;
  }

  function append(i) {
    earthquakes.appendChild(lis[i]);
  }

  for (let i = 0; i < staerd; i += 1) {
    Title[i] = element('h2', {}, {}, ` ${TheDisplayData.features[i].properties.title}`);
    const Tími = element('dt', {}, {}, 'Tími');
    Timinn[i] = element('dd', {}, {}, `${formatDate(TheDisplayData.features[i].properties.time)}`);
    richter[i] = element('dd', {}, {}, `${TheDisplayData.features[i].properties.mag} á richter`);
    const Styrkur = element('dt', {}, {}, 'Styrkur');
    url[i] = element('a', { href: `${TheDisplayData.features[i].properties.url}` }, {}, 'Skoða nánar');
    const idnumerid = makeid(i);
    takkinn[i] = element('button', { id: idnumerid }, { click: (e) => { popup(e.target.id); } }, 'Sjá á korti');
    const Nanar = element('dt', {}, {}, 'Nánar');
    nanarurl[i] = element('dd', {}, {}, `${TheDisplayData.features[i].properties.url}`);
    d1[i] = element('dl', {}, {}, Tími, Timinn[i], Styrkur, richter[i], Nanar, nanarurl[i]);
    buttons[i] = element('div', { class: 'buttons' }, {}, takkinn[i], url[i]);
    div[i] = element('div', {}, {}, Title[i], d1[i], buttons[i]);
    lis[i] = element('li', {}, {}, div[i]);
    append(i);
  }
}

async function popOnMap(TheDisplayData) {
  const staerd = TheDisplayData.features.length;
  const Title = new Array(staerd);
  const Timinn = new Array(staerd);
  const url = new Array(staerd);
  const li = new Array(staerd);
  const d1 = new Array(staerd);
  const buttons = new Array(staerd);

  function popumamapi() {
    createPopup(TheDisplayData, li);
  }

  for (let i = 0; i < staerd; i += 1) {
    Title[i] = element('h2', {}, {}, ` ${TheDisplayData.features[i].properties.title}`);
    Timinn[i] = element('dd', {}, {}, `${formatDate(TheDisplayData.features[i].properties.time)}`);
    url[i] = element('a', { href: `${TheDisplayData.features[i].properties.url}` }, {}, 'Skoða nánar');
    d1[i] = element('dl', {}, {}, Timinn[i]);
    buttons[i] = element('div', { class: 'buttons' }, {}, url[i]);
    li[i] = element('div', {}, {}, Title[i], d1[i], buttons[i]);
  }
  popumamapi();
}

document.addEventListener('DOMContentLoaded', async () => {
  const Mapid = document.querySelector('.map');
  init(Mapid);
  await fetchEarthquakes().then((data) => {
    ShowResults(data);
    popOnMap(data);
  });
});
