import React, { useEffect, useState } from 'react';
import CommonTemplate from '@Components/CommonTemplate';
import Button from '@Components/Button';

const CounterScreen: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [doubledCounter, setDoubledCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setDoubledCounter(counter * 2);
  }, [counter]);

  return (
    <CommonTemplate>
      <p>Normal counter: {counter}</p>
      <p>Doubled counter: {doubledCounter}</p>
      <Button onClick={increment} className="me-2">
        +
      </Button>
      <Button onClick={decrement}>-</Button>
    </CommonTemplate>
  );
};

export default CounterScreen;
