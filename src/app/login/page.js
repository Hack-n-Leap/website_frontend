'use client';

import React from 'react';
import axiosInstance from '../../components/axiosInstance';

function Login() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const pseudo = formData.get("pseudo");
        const password = formData.get("password");

        await axiosInstance.post("http://127.0.0.1:3001/api/auth/login", {pseudo, password})
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                <div className='login-group'>
                    <label>Pseudo</label>
                    <input type='text' name='pseudo' placeholder='Pseudo' required/>
                </div>
                <div className='login-group'>
                    <label>Mot de passe</label>
                    <input type='password' name='password' placeholder='Mot de passe' required/>
                </div>
                <div className='submit-container'>
                    <button type='submit' className='App-login-btn'>Se connecter</button>
                    <a href='/signup'>Créer un compte.</a>
                </div>
            </form>
        </div>
    )
}

export default Login;