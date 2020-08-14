import React, { useContext } from 'react';
import { CalculatorContext } from 'context';

const PreviewScreen = () => {
  const { value } = useContext(CalculatorContext);

  return <div className="screen">{value}</div>;
};

export default PreviewScreen;
