import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserMode, setIsUserMode] = useState(false);

  const toggleUserMode = () => {
    setIsUserMode((prevMode) => !prevMode);
  };

  return (
    <UserContext.Provider value={{ isUserMode, toggleUserMode }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserMode = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserMode must be used within a UserProvider');
  }
  return context;
};
