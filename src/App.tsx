import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";

async function askUserPermission() {
  return await Notification.requestPermission();
}

function App() {

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
