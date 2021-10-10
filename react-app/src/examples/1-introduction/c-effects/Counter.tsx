import Button from '@Components/Button';
import React, { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    setMessage(`The count is now ${count}`);
  }, [count]);

  return (
    <>
      <div>Message: {message}</div>
      <Button className="mt-2" onClick={() => setCount(count + 1)}>
        Click Me
      </Button>
    </>
  );
};

export default Counter;
