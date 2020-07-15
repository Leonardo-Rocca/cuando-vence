// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// @ts-ignore
import {showNotification} from "../src/containers/AppNotification";

importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
// @ts-ignore
//importScripts('/cuando-vence/build/my-firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// @ts-ignore
firebase.initializeApp({
    apiKey: "AIzaSyDbOax-9wp5A22eUTIrgW5hAzu6V65i3fY",
    authDomain: "cuando-vence.firebaseapp.com",
    databaseURL: "https://cuando-vence.firebaseio.com",
    projectId: "cuando-vence",
    storageBucket: "cuando-vence.appspot.com",
    messagingSenderId: "350697025690",
    appId: "1:350697025690:web:28aa0c17e120f1ed922f23",
    measurementId: "G-M0T9CQ2GB3"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// @ts-ignore
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
    console.log(event);
    let notification = event.data.firebaseMessaging.payload.notification;
    console.log(notification);
    showNotification(notification.title)
});