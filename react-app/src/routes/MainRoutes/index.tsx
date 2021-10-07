import React from 'react';
import { Route, Switch } from 'react-router';
import ComponentExample from '@Examples/1-introduction/a-components/ComponentsExample';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComponentExample} />
    </Switch>
  );
};

export default MainRoutes;
