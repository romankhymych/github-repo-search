import React, { useState } from 'react';

import github from '../../api/github';
import SearchBar from '../../common/SearchBar';
import ReposList from './ReposList';

const Repos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRepos = async term => {
    setLoading(true);
    setError('');

    try {
      const response = await github.get('search/repositories', {
        params: { per_page: 10, q: term },
      });
      setRepos(response.data.items);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const onInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    fetchRepos(searchTerm);
  };

  return (
    <section>
      <SearchBar
        searchTerm={searchTerm}
        onInputChange={onInputChange}
        onSubmitHandler={onSubmitHandler}
        loading={loading}
      />
      <ReposList repos={repos} error={error} />
    </section>
  );
};

export default Repos;
