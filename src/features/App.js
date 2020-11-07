import React from 'react';

import Header from '../common/Header';
import RepoSearch from './RepoSearch';
import RepoDetail from './RepoDetail';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <RepoSearch />
      <RepoDetail />
    </React.Fragment>
  );
};

export default App;
