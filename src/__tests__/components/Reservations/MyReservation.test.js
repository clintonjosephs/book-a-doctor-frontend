import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { BrowserRouter as Router } from 'react-router-dom';
import MyReservations from '../../../components/Reservations/MyReservations';
import MockData from '../../../__mocks__/Reservations';

fetchMock.enableMocks();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => (
    MockData
  ),
  useDispatch: () => mockDispatch,
}));

let Wrapper;
beforeEach(() => {
  Wrapper = render(
    <Router>
      <MyReservations />
    </Router>,
  );
});

afterEach(() => {
  cleanup();
});

test('should have a doctor name John Doe', () => {
  const { getByText } = Wrapper;
  expect(getByText('John Doe')).toBeInTheDocument();
});
test('should have a doctor special name Rilind Zhaku', () => {
  const { getByText } = Wrapper;
  expect(getByText('Rilind Zhaku')).toBeInTheDocument();
});

test('should have a appointment date', () => {
  const { getByText } = Wrapper;
  expect(getByText('Jun 16, 2022')).toBeInTheDocument();
});

test('it should have two cancel buttons', async () => {
    const response = await Wrapper.getAllByRole('button');
    expect(response.length).toEqual(2);
});