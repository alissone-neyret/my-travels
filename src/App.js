import React, { Component } from 'react';
import logo from './planete.svg';
import './App.css';

import Voyages from "./components/Voyages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Voyages />
      </div>
    );
  }
}

export default App;