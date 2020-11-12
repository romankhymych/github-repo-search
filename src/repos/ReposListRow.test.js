import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import ReposListRow from './ReposListRow';

describe('ReposListRow', () => {
  let props;

  beforeEach(() => {
    props = {
      repo: {
        full_name: '',
        stargazers_count: null,
        language: '',
      },
    };
  });

  test('should render component', () => {
    render(<ReposListRow {...props} />, { wrapper: MemoryRouter });
  });
});
