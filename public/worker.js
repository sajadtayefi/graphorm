
var STATIC_CACHE = 'static-catch-v';
var DYNAMIC_CACHE = 'dynamic-catch-v';
var STATIC_FILE = [
  '/',
  'index.html',
  '/src/App.jsx'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(STATIC_FILE);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(function (res) {
          return caches.open(DYNAMIC_CACHE)
            .then(function (catche) {
              catche.put(event.request.url, res.clone())
              return res
            })
        })
      }
      )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = [STATIC_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

