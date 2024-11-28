// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import CryptoJS from 'crypto-js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const generateSecretHash = (username, clientId, clientSecret) => {
    const message = `${username}${clientId}`;
    return CryptoJS.HmacSHA256(message, clientSecret).toString(CryptoJS.enc.Base64);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const clientId = 'YOUR_USER_POOL_WEB_CLIENT_ID';
      const clientSecret = 'YOUR_CLIENT_SECRET';
      const secretHash = generateSecretHash(email, clientId, clientSecret);

      await Auth.signIn({
        username: email,
        password,
        clientMetadata: { 'SECRET_HASH': secretHash }
      });

      history.push('/main');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;