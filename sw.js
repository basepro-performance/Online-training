const CACHE_NAME = 'basepro-v7'; // Mudei para v7 para forçar o navegador a ler de novo
const assets = ['index.html', 'manifest.json'];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // Força a ativação imediata
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
