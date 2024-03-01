import React, { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light', 
    language: 'en', 
  });

  const updateSettings = (newSettings) => setSettings((prev) => ({ ...prev, ...newSettings }));

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};