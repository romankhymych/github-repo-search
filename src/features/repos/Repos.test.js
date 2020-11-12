import React from 'react';
import { render, screen } from '@testing-library/react';

import Repos from './Repos';

describe('Repos', () => {
  test('should render component', () => {
    render(<Repos />);
  });
});
