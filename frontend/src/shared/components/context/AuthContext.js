import React, { createContext, useState } from "react";

// export const AuthContext = createContext({
//   isLoggedIn: false,
//   login: () => {},
//   logout: () => {},
// });

export const AuthContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
