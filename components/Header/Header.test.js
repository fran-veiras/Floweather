import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Header } from './Header';

describe('Header events', () => {
  test('component test', () => {
    const props = {
      currentLocation: 'Buenos Aires',
      data: [
        { id: 1, city: 'Buenos Aires', country: 'Argentina' },
        { id: 2, city: 'Rio De Janeiro', country: 'Brasil' },
      ],
    };
    const component = render(
      <Header currentLocation={props.currentLocation} data={props.data} />
    );

    component.getByText('Buenos Aires, Argentina');
  });

  test('select country event', () => {
    const props = {
      data: [
        { id: 1, city: 'Buenos Aires', country: 'Argentina' },
        { id: 2, city: 'Rio De Janeiro', country: 'Brasil' },
      ],
    };

    const mockSelect = jest.fn();

    const component = render(
      <Header currentLocation={mockSelect} data={props.data} />
    );

    const selector = component.getByTestId('selector');
    fireEvent.click(selector);

    expect(mockSelect.mock.calls).toHaveLength(2);
  });
});
