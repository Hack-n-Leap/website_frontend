import React from 'react';
import Link from 'next/link';

import axiosInstance from './axiosInstance';

async function LoginButton() {
  const isConnnected = (await axiosInstance.get("http://localhost:3001/api/auth/isConnnected")).data.connected;

  if (isConnnected) {
    const pseudo = (await axiosInstance.get("http://localhost:3001/api/users/getActive")).data.pseudo
    return (
      <span>{pseudo}</span>
    )
  }
  return (
    <button className="App-login-btn">Connexion</button>
  )
}

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
    <LoginButton />
  </header>
  );
}

export default Header;
