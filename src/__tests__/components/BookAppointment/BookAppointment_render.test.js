import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/store';

import BookAppointment from '../../../components/Doctors/BookAppointment';

const BookAppointmentProvider = () => (
  <Provider store={store}>
    <Router>
      <BookAppointment />
    </Router>
  </Provider>
);

describe('BookAppointment', () => {
  test('renders BookAppointment component', () => {
    render(<BookAppointmentProvider />);

    screen.getByText('Book an Appointment');
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument();
  });

  test('Check the form', () => {
    const result = render(<BookAppointmentProvider />);

    expect(screen.getByRole('combobox', { name: 'doctor_name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'city' })).toBeInTheDocument();
    expect(result.container.querySelector('#date_appointment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
  });

  test('Fill the select ', () => {
    jest.doMock('../../../components/Doctors/BookAppointment');

    return import('../../../__mocks__/BookAppointment').then((module) => {
      const result = render(module.default());

      expect(result.getByRole('combobox', { name: 'doctor_name' })).toBeInTheDocument();
      fireEvent.change(result.getByRole('combobox', { name: 'doctor_name' }), {
        target: { value: '4' },
      });
      expect(result.getByRole('combobox', { name: 'doctor_name' }).value).toEqual('4');

      expect(result.getByRole('textbox', { name: 'city' })).toBeInTheDocument();
      expect(result.container.querySelector('#date_appointment')).toBeInTheDocument();
      expect(result.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
    });
  });

  test('Fill the date', () => {
    const result = render(<BookAppointmentProvider />);

    expect(screen.getByRole('combobox', { name: 'doctor_name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'city' })).toBeInTheDocument();
    expect(result.container.querySelector('#date_appointment')).toBeInTheDocument();
    fireEvent.change(result.container.querySelector('#date_appointment'), {
      target: { value: '2020-05-24' },
    });
    expect(result.container.querySelector('#date_appointment').value).toEqual('2020-05-24');
    expect(screen.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
  });
});
