import { useState } from 'react';
import cls from './Counter.module.scss'
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={cls.counter}>
      <button className={cls.flrx} onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};
 