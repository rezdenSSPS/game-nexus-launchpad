import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of a currency
export interface Currency {
  symbol: string;
  rate: number; // Rate based on EUR as 1
  code: string;
}

// Define the available currencies
export const availableCurrencies: Record<string, Currency> = {
  USD: { symbol: "$", rate: 1.1, code: "USD" },
  EUR: { symbol: "€", rate: 1, code: "EUR" },
  GBP: { symbol: "£", rate: 0.85, code: "GBP" },
  CAD: { symbol: "C$", rate: 1.35, code: "CAD" },
  AUD: { symbol: "A$", rate: 1.45, code: "AUD" },
  JPY: { symbol: "¥", rate: 110, code: "JPY" },
  CHF: { symbol: "CHF", rate: 0.92, code: "CHF" },
  SEK: { symbol: "kr", rate: 10.5, code: "SEK" }
};

// Define the shape of the context
interface CurrencyContextType {
  selectedCurrency: Currency;
  setSelectedCurrency: (currencyCode: string) => void;
  availableCurrencies: Record<string, Currency>;
}

// Create the context
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Create the provider component that will wrap our app
export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrency, setCurrency] = useState<Currency>(availableCurrencies.EUR);

  const handleSetSelectedCurrency = (currencyCode: string) => {
    if (availableCurrencies[currencyCode]) {
      setCurrency(availableCurrencies[currencyCode]);
    }
  };

  const value = {
    selectedCurrency,
    setSelectedCurrency: handleSetSelectedCurrency,
    availableCurrencies,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Create a custom hook to easily use the currency context in any component
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};