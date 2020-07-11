// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// @ts-ignore
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
// @ts-ignore
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');
//importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// @ts-ignore
firebase.initializeApp({
    messagingSenderId: "350697025690",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// @ts-ignore
const messaging = firebase.messaging();
