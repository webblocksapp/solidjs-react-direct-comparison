import React, { useState } from 'react';
import CommonTemplate from '@Components/CommonTemplate';
import Button from '@Components/Button';

const CounterScreen: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <CommonTemplate>
      <p className="h1">{counter}</p>
      <Button onClick={increment} className="me-2">
        +
      </Button>
      <Button onClick={decrement}>-</Button>
    </CommonTemplate>
  );
};

export default CounterScreen;
