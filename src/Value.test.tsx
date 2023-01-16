import React from 'react';
import { render, screen } from '@testing-library/react';
import Value from './Value';

describe('Value component testing', () => {

  it('Value test', () => {
    /* arrange */
    render(<Value valeur={3} />);
    /* assert */
    expect(screen.getByText(/le chiffre est 3/i)).toBeInTheDocument();
  });
});
