import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('component test', () => {
  const props = {
    data: [
      { id: 1, city: 'Buenos Aires', country: 'Argentina' },
      { id: 2, city: 'Rio De Janeiro', country: 'Brasil' },
    ],
    currentLocation: 'Buenos Aires',
  };
  const component = render(<Header props={props} />);

  component.getByText('Floweather');
});
