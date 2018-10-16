import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CoreLayout from '../layouts/CoreLayout';

import Home from '../components/Home';
import FAQs from '../components/FAQs';
import NotFound from '../components/NotFound';

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
