import React from 'react';
import { Link } from 'react-router-dom';

import "../assets/styles/App.css";
import logo from "../assets/image/logo.png"

function Header() {
  return (
    <header className="App-header">
    <div className="App-logo-container">
      <img src={logo} alt="Hack'n'Leap Logo" className="App-logo" />
    </div>
    <nav className="App-nav">
      <Link to="/">Accueil</Link>
      <Link to="/leaderboard">Classement</Link>
    </nav>
    <button className="App-login-btn">Connexion</button>
  </header>
  );
}

export default Header;
