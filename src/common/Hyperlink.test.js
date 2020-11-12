import React from 'react';
import { render, screen } from '@testing-library/react';

import Hyperlink from './Hyperlink';

describe('Hyperlink', () => {
  test('should display hyperlink text', () => {
    const children = 'Go here, using this link';

    render(<Hyperlink>{children}</Hyperlink>);
    const element = screen.getByText(children);

    expect(element).toBeInTheDocument();
  });
});
