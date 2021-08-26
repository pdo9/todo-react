import React from 'react';

const Counter = () => {
  const [counter, setCounter] = React.useState(10);
  //const [inputValue, setInputValue] = React.useState('text');

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      {/* <h1>{inputValue}</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></input> */}
    </div>
  );
};

export default Counter;
