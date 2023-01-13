import React from 'react';
import { render, screen } from '@testing-library/react';
import Value from './Value';

test('Value test', () => {
  render(<Value valeur={3} />);
  screen.getByText(/le chiffre est 3/i);
});
