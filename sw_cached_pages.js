// call install event
self.addEventListener('install', (event) => {
    console.log('Service worker installed! 😀')
})

// call activate event
self.addEventListener('activate', (event) => {
    console.log('Service worker activated! 😀')
})