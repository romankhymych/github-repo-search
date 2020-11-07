import React from 'react';

import SearchBar from '../../common/SearchBar';
import RepoList from './RepoList';

const RepoSearch = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <RepoList />
    </React.Fragment>
  );
};

export default RepoSearch;
