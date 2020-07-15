import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from './firebase';


if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register('/cuando-vence/build/firebase-messaging-sw.js',{scope:"/cuando-vence/build/firebase-cloud-messaging-push-scope"})
        .then((registration) => {
            console.log("Registration successful, scope is:", registration.scope);
            alert("Registration successful, scope is:"+ registration.scope);
    //        firebase.messaging().useServiceWorker(registration);
        })
        .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
            alert("Service worker registration failed, error:"+ err);
        });
}

ReactDOM.render(
  <React.StrictMode>
    <App firebase={firebase} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
//serviceWorker.register();

