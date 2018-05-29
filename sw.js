if (location.pathname.startsWith('/timeship/')) {
  var cacheName = 'timeship-admin-main-v2';
  var catchToClear;

  if (cacheName === 'timeship-admin-main-v1') {
    catchToClear = 'timeship-admin-main-v2';
  } else {
    catchToClear = 'timeship-admin-main-v1';
  }

  var appShellFiles = [
    '/timeship/',
    '/timeship/index.html',
    '/timeship/site.js',
    '/timeship/public/dist/build/app.923653be4a50cc64664b.js',
    '/timeship/public/dist/build/app.91d2793284bb9f049ca6f9cb09644657.css',
    '/timeship/public/dist/favicon/favicon.ico',
    '/timeship/public/dist/favicon/favicon.png',
    '/timeship/public/dist/favicon/logo-32.png',
    '/timeship/public/dist/favicon/logo-64.png',
    '/timeship/public/dist/favicon/logo-96.png',
    '/timeship/public/dist/favicon/logo-128.png',
    '/timeship/public/dist/favicon/logo-192.png',
    '/timeship/public/dist/favicon/logo-256.png',
    '/timeship/public/dist/favicon/logo-512.png',
    '/timeship/public/dist/favicon/logo-naked-128.png',
    'https://fonts.googleapis.com/css?family=Barlow:400,500,600,800',
  ];

  var contentToCache = appShellFiles;

  self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
          if (catchToClear.indexOf(key) === -1) {
            return caches.delete(key);
          }
        }));
      })
    );
  });

  self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      }).catch(function (bla) {
        console.log(bla);
      })
    );
  });

  self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
        console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone()).catch((bla) => {
              console.log(bla);
            });
            return response;
          });
        });
      })
    );
  });
}
