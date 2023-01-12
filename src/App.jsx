import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const counterDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const counterReset = () => {
    setCounter(0);
  };
  return (
    <div className="counter-text">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className="btn">
        <button
          className="btn-mns"
          onClick={counterDecrement}
          disabled={counter === 0}
        >
          Decrement
        </button>
        <button
          className="btn-zr"
          onClick={counterReset}
          disabled={counter === 0}
        >
          Reset
        </button>
        <button className="btn-pls" onClick={counterIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;
