// src/pages/ConfirmPage.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory, useLocation } from 'react-router-dom';
import './ConfirmPage.css';

const ConfirmPage = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const history = useHistory();
  const location = useLocation();
  const email = location.state.email;

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      history.push('/login');
    } catch (error) {
      console.error('Error confirming sign up', error);
    }
  };

  return (
    <div className="confirm-page">
      <h1>Confirm Your Account</h1>
      <form onSubmit={handleConfirm}>
        <label>Confirmation Code:</label>
        <input type="text" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} required />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default ConfirmPage;