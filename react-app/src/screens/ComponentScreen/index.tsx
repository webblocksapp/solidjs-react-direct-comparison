import React from 'react';
import CommonTemplate from '@Components/CommonTemplate';
import Nested from '@Components/Nested';

const ComponentScreen: React.FC = () => {
  return (
    <CommonTemplate>
      <Nested />
    </CommonTemplate>
  );
};

export default ComponentScreen;
