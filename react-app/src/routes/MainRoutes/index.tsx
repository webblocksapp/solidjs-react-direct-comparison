import React from 'react';
import { Route, Switch } from 'react-router';
import ComponentExample from '@Examples/1-introduction/a-components/ComponentsExample';
import StatesExample from '@Examples/1-introduction/b-states/StatesExample';
import EffectsExample from '@Examples/1-introduction/c-effects/EffectsExample';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComponentExample} />
      <Route exact path="/states" component={StatesExample} />
      <Route exact path="/effects" component={EffectsExample} />
    </Switch>
  );
};

export default MainRoutes;
