import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test('Fill the form', () => {
    const result = render(<BookAppointmentProvider />);

    expect(screen.getByRole('combobox', { name: 'doctor_name' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'city' })).toBeInTheDocument();
    expect(result.container.querySelector('#date_appointment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reserve' })).toBeInTheDocument();
  });
});
