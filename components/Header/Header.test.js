import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Header } from './Header';

test('component test', () => {
  const props = {
    currentLocation: 'Buenos Aires',
    data: [
      { id: 1, city: 'Buenos Aires', country: 'Argentina' },
      { id: 2, city: 'Rio De Janeiro', country: 'Brasil' },
      { id: 3, city: 'Nueva York', country: 'Estados Unidos' },
      { id: 4, city: 'Madrid', country: 'España' },
      { id: 5, city: 'Cancun', country: 'México' },
    ],
  };
  const component = render(
    <Header currentLocation={props.currentLocation} data={props.data} />
  );

  component.getByText('Buenos Aires, Argentina');
});
