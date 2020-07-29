import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Certificates } from "./certificates-section/certificates-section.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Awesome profile under development :) </h1>
        <Certificates></Certificates>
      </header>
    </div>
  );
}

export default App;
