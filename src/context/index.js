import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const ContextProvider = ({ children }) => {
  const [value, setValue] = useState('');
  return (
    <CalculatorContext.Provider value={{ value, setValue }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default ContextProvider;
