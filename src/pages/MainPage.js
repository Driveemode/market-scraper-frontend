// src/pages/MainPage.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useHistory } from 'react-router-dom';
import ScraperForm from '../pages/ScraperForm';
import './MainPage.css';

const MainPage = () => {
  const { handleLogout } = useContext(AuthContext);
  const [result, setResult] = useState(null);
  const history = useHistory();

  return (
    <div className="main-page">
      {/* <button onClick={handleLogout} className="logout-button">Logout</button> */}
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