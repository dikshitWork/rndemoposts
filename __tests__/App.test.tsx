import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';
import '@testing-library/react-native/extend-expect';

import App from '../App';

it('Counter Increment Correctly on pressing increment', () => {
  const {getByTestId} = render(<App />);
  const buttonElement = getByTestId('counter-increment-button');
  fireEvent.press(buttonElement);

  const textElement = getByTestId('counter-value');

  expect(textElement).toHaveTextContent('1');
});

it('Counter Decrement Correctly on pressing decrement', () => {
  const {getByTestId} = render(<App />);
  const buttonElement = getByTestId('counter-decrement-button');
  fireEvent.press(buttonElement);

  const textElement = getByTestId('counter-value');

  expect(textElement).toHaveTextContent('0');
});
