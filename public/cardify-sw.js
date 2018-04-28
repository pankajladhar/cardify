importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
console.log('this is my custom service worker');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('/static/'),
    workbox.strategies.cacheFirst()
)

workbox.precaching.precacheAndRoute([]);