import React from 'react';
import Counter from './Counter';
import CounterCode from '!raw-loader!./Counter';
import withCodeView from '@Components/withCodeView';

const DerivedStatesExample: React.FC = () => {
  return <Counter />;
};

export default withCodeView(DerivedStatesExample, [
  { title: 'Counter.tsx', code: CounterCode, language: 'tsx' },
]);
