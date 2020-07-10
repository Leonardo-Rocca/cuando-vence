import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {showNotification} from './containers/AppNotification'
import {Button} from "@material-ui/core";

async function askUserPermission() {
  return await Notification.requestPermission();
}

function App() {
  useEffect(()=>{askUserPermission();setTimeout(()=>{
    showNotification();console.log("sended")
  },3000)},[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={showNotification} > Show Notif</Button>
        <Button onClick={()=>setTimeout(()=>{
          showNotification();console.log("sended")
        },3000)} > Show Notif after 3 seconds</Button>
      </header>
    </div>
  );
}

export default App;
