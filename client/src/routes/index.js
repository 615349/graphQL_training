import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import FAQs from '../components/FAQs';
import NotFound from '../components/NotFound';
import Navigation from '../components/Navigation';

function transformPathToClass(pathname) {
  return pathname.replace('/', '')
}

export default function createRoutes() {
  const { pathname } = window.location;
  return (
    <BrowserRouter>
      <main className={`page-${transformPathToClass(pathname)}`}>
        <Navigation />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={FAQs} path="/faqs" />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
