import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let props;

  beforeEach(() => {
    props = {
      onSubmitHandler: jest.fn(),
      searchTerm: '',
      onInputChange: jest.fn(),
      loading: null,
    };
  });

  test('should render component', () => {
    render(<SearchBar {...props} />);

    // screen.debug();
  });
});
