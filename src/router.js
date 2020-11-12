import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Repos from './features/repos';
import Repo from './features/repo';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Repos} />
        <Route path="/:owner/:repo" component={Repo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
