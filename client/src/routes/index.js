import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CoreLayout from '../layouts/CoreLayout';

// App Routes
import Home from './Home';
import FAQs from './FAQs';
import NotFound from './NotFound';

/**
 * Creates the application route components
 *
 * @return {ReactElement}
 */
export default function createRoutes() {
  return (
    <CoreLayout>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={FAQs} path="/faqs" />
        <Route component={NotFound} />
      </Switch>
    </CoreLayout>
  );
}
