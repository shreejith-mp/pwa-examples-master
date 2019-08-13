self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/pwa-examples-master/a2hs/',
       '/pwa-examples-master/a2hs/index.html',
       '/pwa-examples-master/a2hs/index.js',
       '/pwa-examples-master/a2hs/style.css',
       '/pwa-examples-master/a2hs/images/fox1.jpg',
       '/pwa-examples-master/a2hs/images/fox2.jpg',
       '/pwa-examples-master/a2hs/images/fox3.jpg',
       '/pwa-examples-master/a2hs/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
