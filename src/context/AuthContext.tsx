import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// NOTE: this frontend has no backend, so real server-side authentication is
// not possible here. No admin credentials are stored in source code.
// sessionStorage only persists a UI flag for this session; it is NOT a
// security control and can be inspected by anyone with access to the browser.
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (_username: string, _password: string): boolean => {
    // Client-side login is intentionally disabled: there is no backend to
    // verify credentials against, and hardcoding a password here would expose
    // it in the repository. Wire this up to a real /api/admin/login endpoint
    // before relying on the admin panel for access control.
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('snj_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
