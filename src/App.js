import React from 'react';
import './App.css';
import PreviewScreen from 'Components/PreviewScreen';
import Keypad from 'Components/Keypad';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <PreviewScreen />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
