// src/pages/MainPage.js
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import ScraperForm from './ScraperForm';
import './MainPage.css';

const MainPage = () => {
  const [result, setResult] = useState(null);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      history.push('/');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div className="main-page">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <ScraperForm setResult={setResult} />
      {result && (
        <div className="result">
          <h2>Scraping Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MainPage;