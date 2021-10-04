import React from 'react';
import { Route, Switch } from 'react-router';
import UseEffectScreen from '../../screens/UseEffectScreen';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={UseEffectScreen} />
    </Switch>
  );
};

export default MainRoutes;
