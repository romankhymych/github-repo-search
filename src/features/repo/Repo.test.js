import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Repo from './Repo';

describe('Repo', () => {
  let props;

  beforeEach(() => {
    props = {
      match: {
        params: {
          owner: '',
          repo: '',
        },
      },
    };
  });

  test('should render component', () => {
    render(<Repo {...props} />, { wrapper: MemoryRouter });
  });
});
