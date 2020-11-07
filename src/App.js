import React from 'react';

import Header from './common/Header';
import RepoSearch from './features/RepoSearch';
import RepoDetail from './features/RepoDetail';

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
