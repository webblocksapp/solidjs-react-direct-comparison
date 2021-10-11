import React from 'react';
import { Route, Switch } from 'react-router';
import ComponentExample from '@Examples/1-introduction/a-components/ComponentsExample';
import StatesExample from '@Examples/1-introduction/b-states/StatesExample';
import EffectsExample from '@Examples/1-introduction/c-effects/EffectsExample';
import DerivedStatesExample from '@Examples/1-introduction/d-derived-states/DerivedStatesExample';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComponentExample} />
      <Route exact path="/states" component={StatesExample} />
      <Route exact path="/effects" component={EffectsExample} />
      <Route exact path="/derived-states" component={DerivedStatesExample} />
    </Switch>
  );
};

export default MainRoutes;
