'use client';

import React from 'react';
import axiosInstance from '../../components/axiosInstance';

function Login() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const pseudo = formData.get("pseudo");
        const password = formData.get("password");

        await axiosInstance.post("http://127.0.0.1:3001/api/auth/signup", {pseudo, password}, {withCredentials: true});
        console.log(await axiosInstance.get("http://localhost:3001/api/auth/isConnnected", {withCredentials: true}));

    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <h2>Création de compte</h2>
                <div className='login-group'>
                    <label>Pseudo</label>
                    <input type='text' name='pseudo' placeholder='Pseudo' required/>
                </div>
                <div className='login-group'>
                    <label>Mot de passe</label>
                    <input type='password' name='password' placeholder='Mot de passe' required/>
                </div>
                <div className='submit-container'>
                    <button type='submit' className='App-login-btn'>Créer un compte</button>
                    <a href='/login'>Se connnecter.</a>
                </div>
            </form>
        </div>
    )
}

export default Login;