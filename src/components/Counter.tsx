import { useState } from 'react';
import './Counter.scss'
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className='counter'>
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};
 