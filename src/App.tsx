import React, {useEffect, useState} from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import firebase from "./firebase";


function App({firebase}:any) {
    const [isWorkerLoaded,setIsWorkerLoaded] = useState(false)
    useEffect(()=>{

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register( ' /cuando-vence/build/firebase-messaging-sw.js'/*,{scope:"firebase-cloud-messaging-push-scope"}*/)
            .then((registration) => {
                console.log("Registration successful, scope is:", registration.scope);
                //     alert("Registration successful, scope is:"+ registration.scope);
                firebase.messaging().useServiceWorker(registration);
                setIsWorkerLoaded(true)
            })
            .catch(function (err) {
                console.log("Service worker registration failed, error:", err);
                //    alert("Service worker registration failed, error:"+ err);
                setIsWorkerLoaded(true)

            });
    }
    },[])

    if (!isWorkerLoaded)
        return <div>Loading...</div>

    return (
    <div className="App">
        <Router>
            <Route exact path="/" >
                <MainPage firebase={firebase} />
            </Route>
            <Route exact path="/cuando-vence/build">
                <MainPage firebase={firebase} />
            </Route>
            <Route exact path="/firebase-messaging-sw.js">
               <div></div>
            </Route>

            <Route exact path="/firebase-cloud-messaging-push-scope">
                <Redirect to="/asas" />
            </Route>
            <Route exact path="/a">
                <div>asasa</div>
            </Route>
        </Router>
    </div>
  );
}

export default App;
