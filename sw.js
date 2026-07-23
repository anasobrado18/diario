/* Service worker del Diario.
   No envía nada a ningún servidor: solo guarda los archivos de la propia app
   para que funcione sin conexión.

   Estrategia:
   - HTML (la app en sí): primero la red, y si no hay conexión, la copia guardada.
     Así al subir una versión nueva se ve enseguida.
   - Iconos y manifest: primero la copia guardada, que no cambian casi nunca.
*/

const CACHE = 'diario-v6';
const ARCHIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ARCHIVOS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'actualizar-ya') self.skipWaiting();
});

function esHTML(req) {
  return req.mode === 'navigate' ||
         (req.headers.get('accept') || '').includes('text/html');
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // HTML: primero la red
  if (esHTML(e.request)) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copia));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Resto: primero la copia guardada
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return res;
      }).catch(() => hit);
    })
  );
});
