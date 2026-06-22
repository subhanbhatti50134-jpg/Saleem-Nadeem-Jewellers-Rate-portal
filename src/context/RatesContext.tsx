import React, { createContext, useContext, useState } from 'react';

export interface Rates {
  gold24k: number;
  labRate: number;
  silver: number;
  gold22k: number;
  lastUpdated: string;
}

interface RatesContextType {
  rates: Rates;
  updateRates: (newRates: Rates) => void;
}

const defaultRates: Rates = {
  gold24k: 275000,
  labRate: 271000,
  silver: 3200,
  gold22k: 252000,
  lastUpdated: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
};

const RatesContext = createContext<RatesContextType>({
  rates: defaultRates,
  updateRates: () => {},
});

export const RatesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rates, setRates] = useState<Rates>(() => {
    const stored = localStorage.getItem('sn_jewellers_rates');
    return stored ? JSON.parse(stored) : defaultRates;
  });

  const updateRates = (newRates: Rates) => {
    const updated = {
      ...newRates,
      lastUpdated: new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' }),
    };
    setRates(updated);
    localStorage.setItem('sn_jewellers_rates', JSON.stringify(updated));
  };

  return (
    <RatesContext.Provider value={{ rates, updateRates }}>
      {children}
    </RatesContext.Provider>
  );
};

export const useRates = () => useContext(RatesContext);
