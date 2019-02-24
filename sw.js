let cacheName = 'v1';

// Armazena os dados em cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(
        [
          './css/grid.css',
          './css/styles.css',
          './data/restaurants.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          './index.html',
          './restaurant.html'
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