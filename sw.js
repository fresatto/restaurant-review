let cacheName = 'v1';

// Armazena os dados em cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(
        [
          'css/',
          'data/',
          'img',
          'js/',
          'index.html',
          'restaurant.html'
        ]
      );
    }).catch(err => console.log('Caches fails'))
  );
});

// Verifica se o request existe em cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});