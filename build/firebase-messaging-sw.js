var PRECACHE = 'precache-v1';
var RUNTIME = 'runtime';

// list the files you want cached by the service worker
PRECACHE_URLS = [
    'index.html',
    './',
    'index.html?utm_source=homescreen',
];

// the rest below handles the installing and caching
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS)).then(self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        var responseToCache = response.clone();

                        caches.open(RUNTIME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});

/////////////////////////////// end of cache sw ////////////////////////////////////////////////





////////////////////////////// start push sw ///////////////////////////////////////////////////







const title = "New Product near to expire";
const options = {
    body: "123",
    icon: '/cuando-vence/build/logo192.png',
    vibrate: [200, 100, 200],
    tag: "new-product",
 //   image: logo,
    //  badge: "https://spyna.it/icons/android-icon-192x192.png",
    data:{url:'/cuando-vence/build'},
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000"
    }]
};
//navigator.serviceWorker.register("/cuando-vence/build/firebase-messaging-sw.js" )
const showNotification =(aTitle,opt)=> {
    console.log("sent")
    self.registration.showNotification(aTitle || title, {...options,...opt});
}

self.addEventListener("message",function(e){console.log("msg",e)})

var t=this;
self.addEventListener("push",function(e){
        console.log("a push",e)
    console.log("a push data",e.data)
    let {title,...options} = e.data.json().notification;
        showNotification(title,options)
        //;e.waitUntil(t.onPush(e))
    })

self.addEventListener("pushsubscriptionchange",function(e){console.log("a pushsubscriptionchange");e.waitUntil(t.onSubChange(e))})

self.addEventListener("notificationclick", function(event) {
    console.log("click");
    let notification = event?.data?.firebaseMessaging?.payload;
    console.log(notification);

    if (Notification.prototype.hasOwnProperty('data')) {
        console.log('Using Data');
        var url = event.notification.data.url;

        const rootUrl = new URL('/cuando-vence/build', location).href;
        event.waitUntil(
            clients.matchAll().then(matchedClients => {
                for (let client of matchedClients) {
                    if (client.url === rootUrl) {
                        return client.focus();
                    }
                }
                clients.openWindow(url);
            })
        );
    } else {
        event.waitUntil(getIdb().get(KEY_VALUE_STORE_NAME,
            event.notification.tag).then(function(url) {
            // At the moment you cannot open third party URL's, a simple trick
            // is to redirect to the desired URL from a URL on your domain
            var redirectUrl = '/redirect.html?redirect=' +
                url;
            return clients.openWindow(url);
        }));
    }
});











