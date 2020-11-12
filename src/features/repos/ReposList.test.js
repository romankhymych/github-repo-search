import React from 'react';
import { render, screen } from '@testing-library/react';

import ReposList from './ReposList';

describe('ReposList', () => {
  let props;

  beforeEach(() => {
    props = {
      repos: [],
      error: '',
    };
  });

  test('should render component', () => {
    render(<ReposList {...props} />);
  });
});
