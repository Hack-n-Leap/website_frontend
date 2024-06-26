import React from 'react';
import Link from 'next/link';

import axiosInstance from './axiosInstance';

async function LoginButton() {
  const isConnnected = (await axiosInstance.get("http://localhost:3001/api/auth/isConnnected")).data.connected;

  if (isConnnected) {
    const response = await axiosInstance.get("http://localhost:3001/api/users/getActive");

    return (
      <span>Bienvenue, {response.data.name}</span>
    )
  }
  return (
    <a className="App-login-btn" href="/login">Connexion</a>
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
