import React from 'react';
import { Route, Switch } from 'react-router';
import CounterScreen from 'src/screens/CounterScreen';
import EffectsScreen from 'src/screens/EffectsScreen';
import IntervalScreen from 'src/screens/IntervalScreen';
import ComponentScreen from '../../screens/ComponentScreen';

const MainRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ComponentScreen} />
      <Route path="/counter" component={CounterScreen} />
      <Route path="/interval" component={IntervalScreen} />
      <Route path="/effects" component={EffectsScreen} />
    </Switch>
  );
};

export default MainRoutes;
