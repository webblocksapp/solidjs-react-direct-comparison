import React, { useEffect, useState } from 'react';
import Button from '@Components/Button';

const Effects: React.FC = () => {
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
    <>
      <p>Normal counter: {counter}</p>
      <p>Doubled counter: {doubledCounter}</p>
      <Button onClick={increment} className="me-2">
        +
      </Button>
      <Button onClick={decrement}>-</Button>
    </>
  );
};

export default Effects;
