import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";


function App({firebase}:any) {

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
