import React from 'react';
import Components from './Components';
import ComponentsCode from '!raw-loader!./Components';
import NestedCode from '!raw-loader!@Components/Nested';
import withCodeView from '@Components/withCodeView';

const ComponentExample: React.FC = () => {
  return <Components />;
};

export default withCodeView(ComponentExample, [
  { title: 'Components.tsx', code: ComponentsCode, language: 'tsx' },
  { title: 'Nested.tsx', code: NestedCode, language: 'tsx' },
]);
