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
        <form onSubmit={handleSubmit}>
            <input type='text' name='pseudo' placeholder='Pseudo'/>
            <input type='password' name='password' placeholder='Password'/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;