import React, { Component } from 'react';
import logo from './planete.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Travel
          destination = "Ile de Koh Dach"
          country = "Cambodge -"
          distance = "12 697 km"
          photo="https://res.cloudinary.com/dzgbfpr45/image/upload/c_scale,w_583/v1537791558/travel%20react/koh_dach.jpg"
        />
        <Travel
          destination = "Lhassa"
          country = "Tibet -"
          distance = "7 863 km"
          photo="https://res.cloudinary.com/dzgbfpr45/image/upload/v1537791558/travel%20react/free_tibet.jpg"
        />
      </div>
    );
  }
}

export default App;