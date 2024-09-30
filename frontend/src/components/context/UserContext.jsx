import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // Define the global state
  const [showMenu,setShowMenu]=useState(false)
  

  return (
    <UserContext.Provider value={{ showMenu,setShowMenu }}>
      {children}
    </UserContext.Provider>
  );
};
