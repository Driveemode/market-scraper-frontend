// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Market Scraper</h1>
        <p>Your ultimate tool for extracting and analyzing marketing data from various websites.</p>
        {/* <Link to="/login" className="login-button">Login</Link>
        <Link to="/register" className="register-button">Register</Link> */}
      </header>
      <section>
        <h2>About Market Scraper</h2>
        <p>
          Market Scraper is an automated tool designed to extract publicly available marketing data from various websites. 
          It structures the extracted data, making it ready for analysis to help you prepare better marketing strategies.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Automated data extraction from multiple websites</li>
          <li>Data structuring for easy analysis</li>
          <li>Integration with data science tools for advanced analysis</li>
          <li>User-friendly interface for managing scraping tasks</li>
          <li>Secure user authentication and authorization using AWS Cognito</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          Simply provide the URL of the website you want to scrape, specify the data fields you need, and let Market Scraper do the rest. 
          The extracted data will be structured and ready for analysis, helping you gain valuable insights for your marketing strategies.
        </p>
        <h2>Get Started</h2>
        <p>
          Register now to start using Market Scraper and take your marketing strategies to the next level. 
          Already have an account? Log in to access your dashboard and start scraping.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;