import React, { createContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };