const cacheName = 'v2';

// call install event
self.addEventListener('install', (event) => {
    console.log('Service worker installed! 😀')
})

// call activate event
self.addEventListener('activate', (event) => {
    console.log('Service worker activated! 😀')

    // remove unwanted caches
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache 🧹')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

// call fetch event
self.addEventListener('fetch', event => {
    console.log('Service Worker: Fetching 🧐');

    event.respondWith(
        fetch(event.request).then(res => {

            // make a copy/clone of the response
            const resClone = res.clone();

            // open cache
            caches.open(cacheName).then(cache => {

                // add the response to the cache
                cache.put(event.request, resClone)
            })
            return res;
        }).catch(err => caches.match(event.request).then(res => res))
    )
})