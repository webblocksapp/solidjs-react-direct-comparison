import React, { useEffect, useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
};

export default Counter;
