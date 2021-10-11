import React from 'react';
import ListItems from './ListItems';
import ListItemsCode from '!raw-loader!./ListItems';
import withCodeView from '@Components/withCodeView';

const LoopsExample: React.FC = () => {
  return <ListItems />;
};

export default withCodeView(LoopsExample, [
  { title: 'ListItems.tsx', code: ListItemsCode, language: 'tsx' },
]);
