import React from 'react';
import Counter from './Counter';
import CounterCode from '!raw-loader!./Counter';
import withCodeView from '@Components/withCodeView';

const CounterExample: React.FC = () => {
  return <Counter />;
};

export default withCodeView(CounterExample, [
  { title: 'Counter.tsx', code: CounterCode, language: 'tsx' },
]);
