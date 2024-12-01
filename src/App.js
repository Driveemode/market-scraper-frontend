import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AnalysisResultsPage from './pages/AnalysisResultsPage';
import RegisterPage from './pages/RegisterPage';
import ConfirmPage from './pages/ConfirmPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import { AuthProvider, AuthContext } from './AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <header>
            <div className="branding">
              <Link to="/">
                <img src="/images/marketscraper-logo.png" alt="Market Scraper" className="logo" />
              </Link>
              {/* <h1 className="header-title">Market Scraper</h1> */}
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <AuthContext.Consumer>
                {({ isAuthenticated, handleLogout }) => (
                  <>
                    {!isAuthenticated && <Link to="/login">Login</Link>}
                    {!isAuthenticated && <Link to="/register">Register</Link>}
                    {isAuthenticated && <Link to="/main">Scrape</Link>}
                    {isAuthenticated && <Link to="/products">Products</Link>}
                    {isAuthenticated && <Link to="/results">Analysis</Link>}
                    {isAuthenticated && (
                      <Link
                        to="/login"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLogout();
                        }}
                      >
                        Logout
                      </Link>
                    )}
                  </>
                )}
              </AuthContext.Consumer>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/main" component={MainPage} />
            <Route path="/results" component={AnalysisResultsPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/confirm" component={ConfirmPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
