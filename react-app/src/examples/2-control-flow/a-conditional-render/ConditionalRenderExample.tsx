import React from 'react';
import AuthActions from './AuthActions';
import AuthActionsCode from '!raw-loader!./AuthActions';
import withCodeView from '@Components/withCodeView';

const ConditionalRenderExample: React.FC = () => {
  return <AuthActions />;
};

export default withCodeView(ConditionalRenderExample, [
  { title: 'AuthActions.tsx', code: AuthActionsCode, language: 'tsx' },
]);
