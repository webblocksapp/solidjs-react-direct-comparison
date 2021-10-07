import React from 'react';
import { Route, Switch } from 'react-router';
import CounterExample from 'src/examples/CounterExample';
import EffectsExample from 'src/examples/EffectsExample';
import IntervalExample from 'src/examples/IntervalExample';
import ComponentExample from '../../examples/ComponentExample';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComponentExample} />
      <Route path="/counter" component={CounterExample} />
      <Route path="/interval" component={IntervalExample} />
      <Route path="/effects" component={EffectsExample} />
    </Switch>
  );
};

export default MainRoutes;
