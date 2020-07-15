import logo from '../logo192.png';
const text = "Take a look at this brand new t-shirt!";
const title = "New Product near to expire";
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


export const showNotification =(aTitle?: string | undefined,)=>navigator.serviceWorker.ready.then(function(serviceWorker) {
    setTimeout(() => {
        console.log("sent")

        serviceWorker.showNotification(aTitle || title, options);
    }, 3000)
});
export const log=()=>        alert("sent")
