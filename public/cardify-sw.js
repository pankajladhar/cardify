importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
console.log('this is my custom service worker');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('/static/'),
    workbox.strategies.cacheFirst()
)

workbox.routing.registerRoute(
    new RegExp('.*(?:googleapis|gstatic)\.com.*$'),
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
          })
        ]
    })
);

workbox.routing.registerRoute(
  new RegExp('.*\/api\/.*'),
  workbox.strategies.networkFirst({
    cacheName: 'api',
  })
)

workbox.precaching.precacheAndRoute([]);