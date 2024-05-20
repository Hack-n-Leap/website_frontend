import React from 'react';
import Link from 'next/link';

import "../assets/styles/App.css";

function Header() {
  return (
    <header className="App-header">
    <div className="App-logo-container">
      <img src="/logo.png" alt="Hack'n'Leap Logo" className="App-logo" />
    </div>
    <nav className="App-nav">
      <Link href="/">Accueil</Link>
      <Link href="/leaderboard">Classement</Link>
    </nav>
    <button className="App-login-btn">Connexion</button>
  </header>
  );
}

export default Header;
