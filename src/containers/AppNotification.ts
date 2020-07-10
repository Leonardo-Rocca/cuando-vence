import logo from '../logo.svg';
const text = "Take a look at this brand new t-shirt!";
const title = "New Product Available";
const options = {
    body: text,
    icon: logo,
    vibrate: [200, 100, 200],
    tag: "new-product",
    image: logo,
  //  badge: "https://spyna.it/icons/android-icon-192x192.png",
    actions: [{ action: "Detail", title: "View"
       // , icon: "https://via.placeholder.com/128/ff0000"
    }]
};


export const showNotification =()=>navigator.serviceWorker.ready.then(function(serviceWorker) {
    serviceWorker.showNotification(title, options);
});