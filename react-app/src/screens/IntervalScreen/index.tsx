import React, { useEffect, useState } from 'react';
import CommonTemplate from '@Components/CommonTemplate';

const IntervalScreen: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    const interval = setInterval(increment, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <CommonTemplate>
      <p className="h1">{counter}</p>
    </CommonTemplate>
  );
};

export default IntervalScreen;
