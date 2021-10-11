import Button from '@Components/Button';
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const doubledCount = count * 2;

  return (
    <>
      <div>Count: {count}</div>
      <div>Doubled count: {doubledCount}</div>
      <Button className="mt-2" onClick={() => setCount(count + 1)}>
        Click Me
      </Button>
    </>
  );
};

export default Counter;
