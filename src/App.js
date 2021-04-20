import logo from './style/img/d20.png';
import './App.scss';
import './style/defaults.scss';
import './components/Button/button.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import React from "react";
import { Router } from "@reach/router";

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Login path='/admin'/>
        <Home path='/'/>
      </Router>
      </header>
    </div>
  );
}

export default App;
