import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Display';
import { Buttons } from './Buttons';

function App() {
  let [count, setCount] = useState<number>(0);

  useEffect(() => {
    let valueAsString = localStorage.getItem('countValue');
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setCount(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('countValue', JSON.stringify(count));
  }, [count]);

  const incValue = () => {
    let countPlus = count + 1;
    if (countPlus >= 5) {
      countPlus = 5;
    }
    let newIncValue = setCount(countPlus);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className={'Counter'}>
      <div className={'AppContainer'}>
        <Counter count={count} />
        <Buttons count={count} incValue={incValue} resetValue={resetValue} />
      </div>
    </div>
  );
}

export default App;
