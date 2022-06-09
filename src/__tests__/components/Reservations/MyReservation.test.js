import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

import MyReservations from '../../../components/Reservations/MyReservations';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

it('MyReservations renders correctly', () => {
  const tree = render(<MyReservations />);
  expect(tree).toMatchSnapshot();
});
test('should have a doctor name', () => {
  const { getByText } = render(<MyReservations />);
  expect(getByText('Doctor Name')).toBeInTheDocument();
});
test('should have a doctor special', () => {
  const { getByText } = render(<MyReservations />);
  expect(getByText('Doctor Special')).toBeInTheDocument();
});
test('should have a appointment date', () => {
  const { getByText } = render(<MyReservations />);
  expect(getByText('Appointment Date')).toBeInTheDocument();
});
