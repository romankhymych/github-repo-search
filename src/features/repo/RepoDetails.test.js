import React from 'react';
import { render, screen } from '@testing-library/react';

import RepoDetails from './RepoDetails';

describe('RepoDetails', () => {
  let props;

  beforeEach(() => {
    props = {
      repo: {
        created_at: '',
        description: '',
        forks_count: null,
        homepage: '',
        html_url: '',
        license: {
          name: '',
        },
        name: '',
        open_issues_count: null,
        owner: {
          html_url: '',
          login: '',
        },
        size: null,
        stargazers_count: null,
        subscribers_count: null,
        updated_at: '',
      },
    };
  });

  test('should render component', () => {
    render(<RepoDetails {...props} />);
  });
});
