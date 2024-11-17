import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AnalysisResultsPage from './pages/AnalysisResultsPage';
import RegisterPage from './pages/RegisterPage';
import ConfirmPage from './pages/ConfirmPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Market Scraper</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/results" component={AnalysisResultsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/confirm" component={ConfirmPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
