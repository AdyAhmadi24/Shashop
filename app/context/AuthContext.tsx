'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  orders: any[];
  wishlist: any[];
  addresses: any[];
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on app load
    const checkAuth = async () => {
      console.log('AuthContext: Checking authentication...');
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      console.log('AuthContext: Token exists:', !!token);
      console.log('AuthContext: Stored user exists:', !!storedUser);

      if (token && storedUser) {
        try {
          console.log('AuthContext: Verifying token with API...');
          // Verify token with API
          const response = await fetch('/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          console.log('AuthContext: API response status:', response.status);

          if (response.ok) {
            const data = await response.json();
            console.log('AuthContext: Token valid, setting user:', data.user.email);
            setUser(data.user);
            setIsLoggedIn(true);
          } else {
            console.log('AuthContext: Token invalid, response:', await response.text());
            // Token invalid, clear storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('AuthContext: Auth check failed:', error);
          // Clear storage on error
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } else {
        console.log('AuthContext: No token or user in storage');
      }

      console.log('AuthContext: Setting loading to false');
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData: User, token: string) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn,
      login,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}