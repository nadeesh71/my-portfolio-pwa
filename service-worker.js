// service-worker.js

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  './', // Cache the root URL
  './index.html', // If you have an index.html
  './style.css', // Replace with your CSS file
  './script.js', // Replace with your JavaScript file
  './image1.jpg', // Replace with your image files
  './image2.png',
  // Add other assets (images, fonts, etc.)
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});