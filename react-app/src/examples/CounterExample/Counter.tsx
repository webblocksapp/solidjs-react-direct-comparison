import React, { useState } from 'react';
import Button from '@Components/Button';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <p className="h1">{counter}</p>
      <Button onClick={increment} className="me-2">
        +
      </Button>
      <Button onClick={decrement}>-</Button>
    </>
  );
};

export default Counter;
