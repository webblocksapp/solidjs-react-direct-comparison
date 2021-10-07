import React, { useEffect, useState } from 'react';

const Interval: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const interval = setInterval(increment, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return <p className="h1">{counter}</p>;
};

export default Interval;
