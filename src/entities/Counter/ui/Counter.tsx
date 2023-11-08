import { memo } from 'react';
import cls from './Counter.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounter/getCounter';

interface CounterProps {
  className?: string;
}

export const Counter = memo((props: CounterProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className={classNames(cls.Counter, {}, [className])}>
      <Button onClick={decrement}>-</Button>
      <span>{counterValue}</span>
      <Button onClick={increment}>+</Button>
    </div>
  );
});
