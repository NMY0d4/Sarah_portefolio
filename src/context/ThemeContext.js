'use client';

import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [mode, setMode] = useState('dark');
  useEffect(() => {
    setMode(typeof window !== 'undefined' && localStorage.getItem('mode'));
    setInitialized(true);
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('mode', newMode);
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('mode');
      if (savedMode) {
        setMode(savedMode);
      }
    }
  }, []);

  if (!initialized) {
    return null; // Rendre quelque chose de vide tant que la variable mode n'est pas initialisée
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
