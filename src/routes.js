import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Mainpage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  );
}
