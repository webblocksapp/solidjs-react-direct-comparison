import React from 'react';
import Counter from './Counter';
import CounterCode from '!raw-loader!./Counter';
import withCodeView from '@Components/withCodeView';

const EffectsExample: React.FC = () => {
  return <Counter />;
};

export default withCodeView(EffectsExample, [
  { title: 'Counter.tsx', code: CounterCode, language: 'tsx' },
]);
