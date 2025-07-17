const CACHE_NAME = 'survivor-emily-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/sounds/DealWDevil.mp3',
  '/sounds/funcast.mp3',
  '/sounds/SurvivorXIV_Fiji.mp3',
  '/sounds/tribehasspoken.mp3',
  '/sounds/borneo.mp3',
  '/sounds/alpenhorn.mp3',
  '/sounds/ethnic-percusson.mp3',
  '/sounds/kicks.mp3',
  '/sounds/losing-horn.mp3',
  '/sounds/happybday.mp3',
  '/sounds/mashup.mp3',
  '/sounds/thewinneris.mp3',
  '/sounds/backtocamp.mp3',
  '/sounds/tribehasspoken.mp3',
  '/sounds/oktimetovote.mp3',
  '/sounds/whoultimatesurvivor.mp3',
  '/sounds/finaltribalcouncil.mp3',
  '/sounds/bringmeyourtorch.mp3',
  '/sounds/tallythevotes.mp3'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response ||(evt.request);
    })
  );
});
