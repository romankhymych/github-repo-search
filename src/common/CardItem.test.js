import React from 'react';
import { render, screen } from '@testing-library/react';

import CardItem from './CardItem';

describe('CardItem', () => {
  test('should display card main content', () => {
    const children = 'Some error message';

    render(<CardItem>{children}</CardItem>);
    const element = screen.getByText(children);

    expect(element).toBeInTheDocument();
  });
});
