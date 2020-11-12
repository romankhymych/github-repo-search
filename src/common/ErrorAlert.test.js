import React from 'react';
import { render, screen } from '@testing-library/react';

import ErrorAlert from './ErrorAlert';

describe('ErrorAlert', () => {
  test('should display error message', () => {
    const children = 'Some error message';

    render(<ErrorAlert>{children}</ErrorAlert>);
    const element = screen.getByText(children);

    expect(element).toBeInTheDocument();
  });
});
