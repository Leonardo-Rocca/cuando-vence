import logo from './logo192.png';
const text = "Take a look at this before it is to late!";
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

const workercode = () => {
    console.log("w created")
     const showNotification = () => navigator.serviceWorker.ready.then(function (serviceWorker) {
        setTimeout(() => {
            serviceWorker.showNotification(title, options).then(() => console.log("sended"))
        }, 3000)
    });

    /* eslint-disable-next-line no-restricted-globals */
    self.onmessage = (e:MessageEvent) => {
        if (e.data=="notify"){
            // @ts-ignore
            console.log(e.target?.value)
            showNotification()
            /* eslint-disable-next-line no-restricted-globals */
           // postMessage('result','result');
        }

    }
        //  self.addEventListener(
        //    "notify",
        //    function(e) {
        //        console.log("from main")
        //        showNotification()//self.postMessage(e.data);
        //        /* eslint-disable-next-line no-restricted-globals */
        //        self.postMessage('result','r');
        //    },
        //    false
        //);
}

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script
