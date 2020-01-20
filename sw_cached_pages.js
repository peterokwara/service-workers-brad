const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    '/css/style.css',
    '/js/main.js'
];

// call install event
self.addEventListener('install', (event) => {
    console.log('Service worker installed! 😀')

    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Service Worker: Caching Files 🧐')
            cache.addAll(cacheAssets)
        }).then(() => self.skipWaiting())
    );
})

// call activate event
self.addEventListener('activate', (event) => {
    console.log('Service worker activated! 😀')
})