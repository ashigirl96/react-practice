import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./Count";
import CountButton from "./CountButton";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountButton count={count} setCount={setCount} />
        <Count count={count} />
      </header>
    </div>
  );
};

export default App;
