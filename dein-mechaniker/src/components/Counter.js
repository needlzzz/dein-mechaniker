import { useState, useEffect } from 'react';
import React from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  let number = 0;
  const printStuff = useEffect(() => {
    number = number + 1;
    console.log(number);
    return number;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>
        you have clicked this button{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>{count}</span> times{' '}
      </p>
      <p> This is the useEffect Hook that runs: {number}</p>
    </div>
  );
};

export default Counter;
