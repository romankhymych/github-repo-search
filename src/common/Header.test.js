import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  test('should display header app name', () => {
    render(<Header />);
    const element = screen.getByText(process.env.REACT_APP_NAME);

    expect(element).toBeTruthy();
  });
});
