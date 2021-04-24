import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { Buttons } from './Buttons';

function App() {
  let [count, setCount] = useState<number>(0);

  const incValue = () => {
    let countPlus = count + 1;
    if (countPlus >= 5) {
      countPlus = 5;
    }
    setCount(countPlus);
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className={'Counter'}>
      <div className={'AppContainer'}>
        <Counter count={count} />
        <Buttons incValue={incValue} resetValue={resetValue} />
      </div>
    </div>
  );
}

export default App;
